import { Heading as ChakraHeading, type HeadingProps as ChakraHeadingProps } from '@chakra-ui/react'
import { forwardRef } from 'react'
import { govukTypeScale } from '../utils'

type GovukFontSize = keyof typeof govukTypeScale

export interface HeadingProps extends Omit<ChakraHeadingProps, 'size'> {
  size?: GovukFontSize | ChakraHeadingProps['size']
}

export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(function Heading(
  { size, ...props },
  ref
) {
  if (typeof size === 'number' && !(size in govukTypeScale)) {
    console.warn(
      `[GOV.UK Heading] size={${size}} is not a valid GOV.UK type scale point. Use one of: 16, 19, 24, 27, 36, 48, 80.`
    )
  }

  const scale =
    typeof size === 'number' && size in govukTypeScale
      ? govukTypeScale[size as GovukFontSize]
      : null

  if (scale) {
    return (
      <ChakraHeading
        ref={ref}
        fontSize={{ base: scale.small.fontSize, sm: scale.large.fontSize }}
        lineHeight={{ base: scale.small.lineHeight, sm: scale.large.lineHeight }}
        {...props}
      />
    )
  }

  return <ChakraHeading ref={ref} size={size as ChakraHeadingProps['size']} {...props} />
})
