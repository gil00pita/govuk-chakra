import { Text as ChakraText, type TextProps as ChakraTextProps } from '@chakra-ui/react'
import { forwardRef } from 'react'
import { govukTypeScale } from '../../utils'

type GovukFontSize = keyof typeof govukTypeScale

export interface TextProps extends Omit<ChakraTextProps, 'fontSize'> {
  fontSize?: GovukFontSize | ChakraTextProps['fontSize']
}

export const Text = forwardRef<HTMLParagraphElement, TextProps>(function Text(
  { fontSize, ...props },
  ref
) {
  if (typeof fontSize === 'number' && !(fontSize in govukTypeScale)) {
    console.warn(
      `[GOV.UK Text] fontSize={${fontSize}} is not a valid GOV.UK type scale point. Use one of: 16, 19, 24, 27, 36, 48, 80.`
    )
  }

  const scale =
    typeof fontSize === 'number' && fontSize in govukTypeScale
      ? govukTypeScale[fontSize as GovukFontSize]
      : null

  if (scale) {
    return (
      <ChakraText
        ref={ref}
        fontSize={{ base: scale.small.fontSize, sm: scale.large.fontSize }}
        lineHeight={{ base: scale.small.lineHeight, sm: scale.large.lineHeight }}
        {...props}
      />
    )
  }

  return <ChakraText ref={ref} fontSize={fontSize as ChakraTextProps['fontSize']} {...props} />
})
