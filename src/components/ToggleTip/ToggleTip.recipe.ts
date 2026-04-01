import { defineSlotRecipe } from '@chakra-ui/react'

import { govukTypeScale, pxToRem } from '@/utils'
import { getFieldFocusStyles } from '@/utils/fieldFocusStyles'

function getTextStyles(size: keyof typeof govukTypeScale) {
  const scale = govukTypeScale[size]
  return {
    fontFamily: 'body',
    fontSize: { base: scale.small.fontSize, md: scale.large.fontSize },
    lineHeight: { base: scale.small.lineHeight, md: scale.large.lineHeight },
  }
}

const toggleTipRecipe = defineSlotRecipe({
  className: 'govuk-toggle-tip',
  slots: ['trigger', 'content', 'arrow', 'body'],
  base: {
    trigger: {
      borderRadius: '0',
      color: 'fg.muted',
      _focusVisible: getFieldFocusStyles(),
    },
    content: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      ...getTextStyles(16),
      bg: 'bg.panel',
      color: 'fg',
      borderRadius: '0',
      borderWidth: pxToRem(2),
      borderStyle: 'solid',
      borderColor: 'border.input',
      boxShadow: 'lg',
    },
    arrow: {
      '--arrow-size': 'sizes.3',
      '--arrow-background': 'colors.bg.panel',
    },
    body: {
      padding: pxToRem(16),
      color: 'fg',
    },
  },
})

export default toggleTipRecipe
