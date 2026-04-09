import { Box, HStack, VStack, type BoxProps, type StackProps } from '@chakra-ui/react'
import { forwardRef, type ComponentProps } from 'react'

import { Link } from '@/components/Link'
import { pxToRem } from '@/utils'
import { GOVUKLogo } from '../GOVUKLogo'

export type GOVUKHeaderProps = StackProps

export type GOVUKHeaderContainerProps = StackProps

export interface GOVUKHeaderLogoProps extends ComponentProps<typeof Link> {
  label?: string
}

export type GOVUKHeaderLogotypeProps = BoxProps

const GOVUKHeaderRoot = forwardRef<HTMLDivElement, GOVUKHeaderProps>(
  function GOVUKHeader(props, ref) {
    return <VStack ref={ref} as="header" alignItems={'flex-start'} gap={0} w={'full'} {...props} />
  }
)

const GOVUKHeaderContainer = forwardRef<HTMLDivElement, GOVUKHeaderContainerProps>(
  function GOVUKHeaderContainer(props, ref) {
    return (
      <HStack
        ref={ref}
        bg="primary.500"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        gap={pxToRem(16)}
        mx="auto"
        px={{ base: pxToRem(15), md: pxToRem(30) }}
        py={pxToRem(10)}
        w={'full'}
        h={pxToRem(60)}
        _dark={{
          bg: 'primary.600',
        }}
        {...props}
      >
        <HStack maxW="1200px" w={'full'} wrap={'wrap'}>
          {props.children}
        </HStack>
      </HStack>
    )
  }
)

const GOVUKHeaderLogotype = forwardRef<HTMLSpanElement, GOVUKHeaderLogotypeProps>(
  function GOVUKHeaderLogotype(props, ref) {
    return (
      <Box ref={ref} as="span" whiteSpace="nowrap" color="currentColor" {...props}>
        <GOVUKLogo />
      </Box>
    )
  }
)

const GOVUKHeaderLogo = forwardRef<HTMLAnchorElement, GOVUKHeaderLogoProps>(
  function GOVUKHeaderLogo({ children, label = 'GOV.UK homepage', ...props }, ref) {
    return (
      <Link
        ref={ref}
        aria-label={label}
        display="inline-flex"
        alignItems="center"
        gap={pxToRem(8)}
        color="common.white"
        textDecoration="none"
        fontWeight="700"
        flexShrink={0}
        _hover={{ color: 'common.white', textDecoration: 'none', opacity: 0.92 }}
        _focus={{
          outline: '3px solid',
          outlineColor: 'yellow.500',
          outlineOffset: 0,
          bgColor: 'yellow.500',
          color: 'common.black',
          textDecoration: 'none',
          _hover: {
            bgColor: 'yellow.500',
            color: 'common.black',
            textDecoration: 'none',
          },
        }}
        {...props}
      >
        {children ?? (
          <>
            <GOVUKHeaderLogotype />
          </>
        )}
      </Link>
    )
  }
)

export const GOVUKHeader = Object.assign(GOVUKHeaderRoot, {
  Root: GOVUKHeaderRoot,
  Container: GOVUKHeaderContainer,
  Logo: GOVUKHeaderLogo,
  Logotype: GOVUKHeaderLogotype,
})

export { GOVUKHeaderRoot, GOVUKHeaderLogo, GOVUKHeaderContainer, GOVUKHeaderLogotype }
