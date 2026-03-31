import { defineSlotRecipe } from '@chakra-ui/react'
import { statAnatomy } from '@chakra-ui/react/anatomy'
import { govukTypeScale } from '@/utils'

function getTextStyles(size: keyof typeof govukTypeScale, fontWeight = 400) {
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
    ...(fontWeight === 400 ? {} : { fontWeight }),
  }
}

const statRecipe = defineSlotRecipe({
  className: 'govuk-stat',
  slots: statAnatomy.keys(),
  base: {
    root: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1',
      position: 'relative',
      flex: '1',
    },
    label: {
      display: 'inline-flex',
      gap: '1.5',
      alignItems: 'center',
      color: 'fg.muted',
      ...getTextStyles(19),
    },
    helpText: {
      color: 'fg.muted',
      ...getTextStyles(16),
    },
    valueUnit: {
      color: 'fg.muted',
      ...getTextStyles(16),
    },
    valueText: {
      verticalAlign: 'baseline',
      display: 'inline-flex',
      alignItems: 'flex-end',
      gap: '1',
      color: 'fg',
      fontFeatureSettings: '"tnum" 1, "pnum" 1',
      fontVariantNumeric: 'tabular-nums proportional-nums',
      letterSpacing: 'tight',
    },
    indicator: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginEnd: '1',
      '& :where(svg)': {
        w: '1em',
        h: '1em',
      },
      '&[data-type=up]': {
        color: 'fg.success',
      },
      '&[data-type=down]': {
        color: 'fg.error',
      },
    },
  },
  variants: {
    size: {
      sm: {
        valueText: getTextStyles(24, 700),
      },
      md: {
        valueText: getTextStyles(36, 700),
      },
      lg: {
        valueText: getTextStyles(48, 700),
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

export default statRecipe
