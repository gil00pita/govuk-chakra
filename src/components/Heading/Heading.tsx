import { Heading as ChakraHeading, type HeadingProps as ChakraHeadingProps } from '@chakra-ui/react'
import { forwardRef } from 'react'
import { getGovukTypeScale, govukTypeScale, type GovukTypeScalePoint } from '@/utils'

export interface HeadingProps extends Omit<ChakraHeadingProps, 'size'> {
  size?: GovukTypeScalePoint | ChakraHeadingProps['size']
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

  const scale = getGovukTypeScale(size)

  if (scale) {
    return (
      <ChakraHeading
        ref={ref}
        fontFamily="heading"
        fontWeight={'700'}
        fontSize={{ base: scale.small.fontSize, md: scale.large.fontSize }}
        lineHeight={{ base: scale.small.lineHeight, md: scale.large.lineHeight }}
        {...props}
      />
    )
  }

  return <ChakraHeading ref={ref} size={size as ChakraHeadingProps['size']} {...props} />
})
