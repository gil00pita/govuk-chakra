import { defineSlotRecipe } from '@chakra-ui/react'

import { govukTypeScale, pxToRem } from '@/utils'
import { getFieldFocusStyles } from '@/utils/fieldFocusStyles'

function getTextStyles(size: keyof typeof govukTypeScale) {
  const scale = govukTypeScale[size]

  return {
    fontFamily: 'body',
    fontSize: {
      base: scale.small.fontSize,
      md: scale.large.fontSize,
    },
    lineHeight: {
      base: scale.small.lineHeight,
      md: scale.large.lineHeight,
    },
  }
}

const richTextEditorRecipe = defineSlotRecipe({
  className: 'govuk-rich-text-editor',
  slots: ['root', 'toolbar', 'content', 'footer', 'controlGroup'],
  base: {
    root: {
      borderWidth: pxToRem(2),
      borderStyle: 'solid',
      borderColor: 'border.input',
      border: '2px solid {colors.border.input}',
      borderRadius: '0',
      overflow: 'hidden',
      bg: 'bg',
      color: 'fg',
      _focusWithin: getFieldFocusStyles(),
      '&[data-disabled]': {
        bg: 'bg.disabled',
      },
    },
    toolbar: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      gap: pxToRem(8),
      p: pxToRem(8),
      borderBottomWidth: '1px',
      borderBottomColor: 'border.muted',
      bg: 'bg.subtle',
    },
    content: {
      ...getTextStyles(19),
      minHeight: pxToRem(220),
      p: pxToRem(16),
      color: 'fg',
      bg: 'transparent',
      outline: 'none',
      '& p': {
        mb: pxToRem(16),
      },
      '& p:last-child': {
        mb: '0',
      },
      '& h1': {
        ...getTextStyles(27),
        fontWeight: '700',
        mb: pxToRem(12),
      },
      '& h2': {
        ...getTextStyles(24),
        fontWeight: '700',
        mb: pxToRem(12),
      },
      '& ul': {
        pl: pxToRem(24),
        mb: pxToRem(16),
        listStyleType: 'disc',
      },
      '& li': {
        mb: pxToRem(4),
      },
      '&[contenteditable="false"]': {
        opacity: 0.6,
        pointerEvents: 'none',
      },
    },
    footer: {
      display: 'flex',
      alignItems: 'center',
      gap: pxToRem(8),
      p: pxToRem(8),
      borderTopWidth: '1px',
      borderTopColor: 'border.muted',
      bg: 'bg.subtle',
    },
    controlGroup: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: pxToRem(4),
    },
  },
})

export default richTextEditorRecipe
