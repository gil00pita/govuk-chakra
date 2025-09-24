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
  16: pxToRem(16), // 1rem
  19: pxToRem(19), // 1.1875rem
  24: pxToRem(24), // 1.5rem
  27: pxToRem(27), // 1.6875rem
  36: pxToRem(36), // 2.25rem
  48: pxToRem(48), // 3rem
} as const
