import type { SystemStyleObject } from '@chakra-ui/react'

import { pxToRem } from './px-to-rem'

type GetFieldFocusStylesOptions = {
  borderColor?: string
}

export function getFieldFocusStyles(options: GetFieldFocusStylesOptions = {}): SystemStyleObject {
  return {
    outline: `${pxToRem(3)} solid`,
    outlineColor: 'focus',
    outlineOffset: '3px',
    borderColor: options.borderColor ?? 'border.input',
    boxShadow: '0 0 0 3px {colors.border.input}',
  }
}

export function getInsetFocusStyles(options: GetFieldFocusStylesOptions = {}): SystemStyleObject {
  return {
    outline: `${pxToRem(3)} solid`,
    outlineColor: 'focus',
    outlineOffset: '0',
    borderColor: options.borderColor ?? 'border.input',
    boxShadow: 'inset 0 0 0 2px {colors.border.input}',
  }
}
