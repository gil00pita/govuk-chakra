/**
 * Convert pixels to rem units
 * GOV.UK Design System uses 16px as the base font size (1rem = 16px)
 * @param pixels - The pixel value to convert
 * @param baseFontSize - The base font size in pixels (default: 16)
 * @returns The rem value as a string with 'rem' suffix
 */
export function pxToRem(pixels: number, baseFontSize: number = 16): string {
  return `${pixels / baseFontSize}rem`
}

/**
 * Convert pixels to rem units and return as number
 * @param pixels - The pixel value to convert
 * @param baseFontSize - The base font size in pixels (default: 16)
 * @returns The rem value as a number
 */
export function pxToRemNumber(pixels: number, baseFontSize: number = 16): number {
  return pixels / baseFontSize
}

/**
 * Batch convert multiple pixel values to rem
 * @param pixelValues - Array of pixel values to convert
 * @param baseFontSize - The base font size in pixels (default: 16)
 * @returns Array of rem values as strings
 */
export function pxToRemBatch(pixelValues: number[], baseFontSize: number = 16): string[] {
  return pixelValues.map((px) => pxToRem(px, baseFontSize))
}

// Common GOV.UK spacing values converted to rem
export const govukSpacing = {
  xs: pxToRem(4), // 0.25rem
  sm: pxToRem(8), // 0.5rem
  md: pxToRem(16), // 1rem
  lg: pxToRem(24), // 1.5rem
  xl: pxToRem(32), // 2rem
  '2xl': pxToRem(48), // 3rem
  '3xl': pxToRem(64), // 4rem
} as const

// Common GOV.UK font sizes converted to rem
export const govukFontSizes = {
  14: pxToRem(14), // 0.875rem
  16: pxToRem(16), // 1rem      – govuk-body-s
  19: pxToRem(19), // 1.1875rem – govuk-body, govuk-heading-s
  24: pxToRem(24), // 1.5rem    – govuk-heading-m, govuk-body-l
  27: pxToRem(27), // 1.6875rem – exceptional use
  36: pxToRem(36), // 2.25rem   – govuk-heading-l
  48: pxToRem(48), // 3rem      – govuk-heading-xl
  80: pxToRem(80), // 5rem      – exceptional use
} as const

/**
 * GOV.UK type scale with responsive font sizes and line heights.
 * Large = screens wider than 640px, small = screens 640px and below.
 * See: https://design-system.service.gov.uk/styles/type-scale/
 */
export const govukTypeScale = {
  80: {
    large: { fontSize: pxToRem(80), lineHeight: pxToRem(80) },
    small: { fontSize: pxToRem(53), lineHeight: pxToRem(55) },
  },
  48: {
    large: { fontSize: pxToRem(48), lineHeight: pxToRem(50) },
    small: { fontSize: pxToRem(32), lineHeight: pxToRem(35) },
  },
  36: {
    large: { fontSize: pxToRem(36), lineHeight: pxToRem(40) },
    small: { fontSize: pxToRem(27), lineHeight: pxToRem(30) },
  },
  27: {
    large: { fontSize: pxToRem(27), lineHeight: pxToRem(30) },
    small: { fontSize: pxToRem(21), lineHeight: pxToRem(25) },
  },
  24: {
    large: { fontSize: pxToRem(24), lineHeight: pxToRem(30) },
    small: { fontSize: pxToRem(21), lineHeight: pxToRem(25) },
  },
  19: {
    large: { fontSize: pxToRem(19), lineHeight: pxToRem(25) },
    small: { fontSize: pxToRem(19), lineHeight: pxToRem(25) },
  },
  16: {
    large: { fontSize: pxToRem(16), lineHeight: pxToRem(20) },
    small: { fontSize: pxToRem(16), lineHeight: pxToRem(20) },
  },
} as const

type GovukTypeScalePoint = keyof typeof govukTypeScale

/**
 * Returns Chakra-ready responsive fontSize and lineHeight props
 * for a given GOV.UK type scale point.
 *
 * Usage:
 *   <Heading {...govukFont(48)}>Page title</Heading>
 *   <Text {...govukFont(19)}>Body text</Text>
 */
export function govukFont(size: GovukTypeScalePoint) {
  const { small, large } = govukTypeScale[size]
  return {
    fontSize: { base: small.fontSize, sm: large.fontSize },
    lineHeight: { base: small.lineHeight, sm: large.lineHeight },
  }
}
