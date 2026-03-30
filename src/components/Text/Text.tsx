import { Text as ChakraText, type TextProps as ChakraTextProps } from '@chakra-ui/react'
import { forwardRef } from 'react'
import { getGovukTypeScale, govukTypeScale, type GovukTypeScalePoint } from '@/utils'

export interface TextProps extends Omit<ChakraTextProps, 'fontSize' | 'fontWeight'> {
  fontSize?: GovukTypeScalePoint | ChakraTextProps['fontSize']
  fontWeight?: ChakraTextProps['fontWeight']
}

export const Text = forwardRef<HTMLParagraphElement, TextProps>(function Text(
  { fontSize, fontWeight = 400, ...props },
  ref
) {
  if (typeof fontSize === 'number' && !(fontSize in govukTypeScale)) {
    console.warn(
      `[GOV.UK Text] fontSize={${fontSize}} is not a valid GOV.UK type scale point. Use one of: 16, 19, 24, 27, 36, 48, 80.`
    )
  }

  const scale = getGovukTypeScale(fontSize)

  if (scale) {
    return (
      <ChakraText
        ref={ref}
        fontSize={{ base: scale.small.fontSize, md: scale.large.fontSize }}
        lineHeight={{ base: scale.small.lineHeight, md: scale.large.lineHeight }}
        fontWeight={fontWeight}
        fontFamily="body"
        {...props}
      />
    )
  }

  return <ChakraText ref={ref} fontSize={fontSize as ChakraTextProps['fontSize']} {...props} />
})
