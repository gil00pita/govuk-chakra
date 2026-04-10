import { colors } from '@/theme/colors'

const paletteAliases = {
  blue: 'primary',
  cyan: 'teal',
  grey: 'gray',
  pink: 'magenta',
} as const

const candidateSteps = ['50', '100', '200', '700', '800', '900', '950'] as const
const neutralCandidates = [
  { palette: 'common', step: 'black' },
  { palette: 'common', step: 'white' },
] as const

type PaletteKey = keyof typeof colors
type PaletteStep = (typeof candidateSteps)[number]
type ColorToken = { value: string }

function isColorToken(value: unknown): value is ColorToken {
  return typeof value === 'object' && value != null && 'value' in value
}

function normalizePalette(palette: string): PaletteKey | null {
  const aliased = paletteAliases[palette as keyof typeof paletteAliases] ?? palette
  return aliased in colors ? (aliased as PaletteKey) : null
}

export function resolvePaletteToken(palette: string) {
  return normalizePalette(palette) ?? palette
}

function getHexColor(palette: string, step: string) {
  const normalized = normalizePalette(palette)

  if (!normalized) {
    return null
  }

  const colorGroup = colors[normalized]
  if (typeof colorGroup !== 'object' || colorGroup == null || !(step in colorGroup)) {
    return null
  }

  const tokenMap = colorGroup as Record<string, unknown>
  const token = tokenMap[step]
  return isColorToken(token) ? token.value : null
}

function hexToRgb(hex: string) {
  const normalized = hex.replace('#', '')
  const expanded =
    normalized.length === 3
      ? normalized
          .split('')
          .map((value) => value + value)
          .join('')
      : normalized

  const int = Number.parseInt(expanded, 16)

  return {
    r: (int >> 16) & 255,
    g: (int >> 8) & 255,
    b: int & 255,
  }
}

function toLinear(channel: number) {
  const normalized = channel / 255
  return normalized <= 0.03928 ? normalized / 12.92 : ((normalized + 0.055) / 1.055) ** 2.4
}

function getRelativeLuminance(hex: string) {
  const { r, g, b } = hexToRgb(hex)
  return 0.2126 * toLinear(r) + 0.7152 * toLinear(g) + 0.0722 * toLinear(b)
}

function getContrastRatio(backgroundHex: string, foregroundHex: string) {
  const background = getRelativeLuminance(backgroundHex)
  const foreground = getRelativeLuminance(foregroundHex)
  const lighter = Math.max(background, foreground)
  const darker = Math.min(background, foreground)

  return (lighter + 0.05) / (darker + 0.05)
}

export function getAccessiblePaletteForeground(
  palette: string,
  backgroundStep: string,
  minRatio = 4.5
) {
  const backgroundHex = getHexColor(palette, backgroundStep)

  if (!backgroundHex) {
    return backgroundStep >= '500' ? `${palette}.100` : `${palette}.900`
  }

  let bestStep: PaletteStep = '950'
  let bestRatio = 0

  for (const step of candidateSteps) {
    const foregroundHex = getHexColor(palette, step)
    if (!foregroundHex) {
      continue
    }

    const ratio = getContrastRatio(backgroundHex, foregroundHex)

    if (ratio > bestRatio) {
      bestStep = step
      bestRatio = ratio
    }

    if (ratio >= minRatio) {
      return `${palette}.${step}`
    }
  }

  for (const candidate of neutralCandidates) {
    const foregroundHex = getHexColor(candidate.palette, candidate.step)
    if (!foregroundHex) {
      continue
    }

    const ratio = getContrastRatio(backgroundHex, foregroundHex)

    if (ratio > bestRatio) {
      bestRatio = ratio
    }

    if (ratio >= minRatio) {
      return `${candidate.palette}.${candidate.step}`
    }
  }

  return `${palette}.${bestStep}`
}
