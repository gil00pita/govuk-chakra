import { pxToRem, govukSpacing, govukFontSizes } from '../utils'

/**
 * Example usage of the GOV.UK px to rem utility
 */

// Basic usage
export const marginTop = pxToRem(20) // "1.25rem"
export const fontSize = pxToRem(19) // "1.1875rem"

// Using predefined spacing values
const styles = {
  padding: govukSpacing.md, // "1rem" (16px)
  margin: govukSpacing.lg, // "1.5rem" (24px)
  fontSize: govukFontSizes[19], // "1.1875rem" (19px)
}

// In CSS-in-JS objects
const componentStyles = {
  button: {
    padding: `${pxToRem(10)} ${pxToRem(15)}`,
    fontSize: govukFontSizes[16],
    marginBottom: govukSpacing.md,
  },
  accordion: {
    border: `${pxToRem(1)} solid #b1b4b6`,
    padding: govukSpacing.md,
  },
  icon: {
    width: pxToRem(20),
    height: pxToRem(20),
    marginRight: pxToRem(8),
  },
}

export { styles, componentStyles }
