import { Box, Icon, type BoxProps, type IconProps } from '@chakra-ui/react'
import { forwardRef, type ComponentProps, type ReactNode } from 'react'

import { Link } from '@/components/Link'
import { pxToRem } from '@/utils'

const genericHeaderFontFamily = '"Helvetica Neue", Helvetica, Arial, sans-serif'

export type GenericHeaderProps = BoxProps

export interface GenericHeaderContainerProps extends BoxProps {
  fullWidth?: boolean
}

export type GenericHeaderLogoWrapperProps = BoxProps

export interface GenericHeaderLogoProps extends ComponentProps<typeof Link> {
  label?: string
  logoText?: ReactNode
}

export type GenericHeaderLogomarkProps = Omit<IconProps, 'children'>

const GenericHeaderRoot = forwardRef<HTMLElement, GenericHeaderProps>(function GenericHeaderRoot(
  { className, ...props },
  ref
) {
  return (
    <Box
      ref={ref}
      as="header"
      className={['govuk-generic-header', className].filter(Boolean).join(' ')}
      w="full"
      borderBottom="1px solid transparent"
      bg="gray.950"
      color="common.white"
      fontFamily={genericHeaderFontFamily}
      fontWeight={400}
      fontSize={pxToRem(16)}
      lineHeight={1}
      {...props}
    />
  )
})

const GenericHeaderContainer = forwardRef<HTMLDivElement, GenericHeaderContainerProps>(
  function GenericHeaderContainer({ className, fullWidth = false, ...props }, ref) {
    return (
      <Box
        ref={ref}
        className={['govuk-generic-header__container', className].filter(Boolean).join(' ')}
        maxW={fullWidth ? 'none' : '1200px'}
        mx="auto"
        px={{ base: pxToRem(15), md: pxToRem(30) }}
        {...props}
      />
    )
  }
)

const GenericHeaderLogoWrapper = forwardRef<HTMLDivElement, GenericHeaderLogoWrapperProps>(
  function GenericHeaderLogoWrapper({ className, ...props }, ref) {
    return (
      <Box
        ref={ref}
        className={['govuk-generic-header__logo', className].filter(Boolean).join(' ')}
        py={pxToRem(15)}
        {...props}
      />
    )
  }
)

const GenericHeaderLogo = forwardRef<HTMLAnchorElement, GenericHeaderLogoProps>(
  function GenericHeaderLogo({ children, className, href = '/', label, logoText, ...props }, ref) {
    return (
      <Link
        ref={ref}
        aria-label={label}
        href={href}
        noStyle
        className={['govuk-generic-header__homepage-link', className].filter(Boolean).join(' ')}
        display="inline-flex"
        alignItems="center"
        gap={pxToRem(8)}
        mr={pxToRem(10)}
        color="common.white"
        fontFamily={genericHeaderFontFamily}
        fontSize={pxToRem(30)}
        fontWeight={400}
        lineHeight={1}
        textDecoration="none"
        _visited={{ color: 'common.white' }}
        _hover={{
          color: 'common.white',
          mb: pxToRem(-3),
          borderBottom: '3px solid currentColor',
          textDecoration: 'none',
        }}
        _active={{
          color: 'common.white',
          mb: pxToRem(-3),
          borderBottom: '3px solid currentColor',
          textDecoration: 'none',
        }}
        _focus={{
          mb: 0,
          borderBottom: 0,
          outline: '3px solid transparent',
          outlineOffset: 0,
          bgColor: 'yellow.500',
          color: 'common.black',
          boxShadow: '0 -2px #ffdd00, 0 4px #0b0c0c',
          textDecoration: 'none',
          _hover: {
            color: 'common.black',
            textDecoration: 'none',
          },
          _visited: {
            color: 'common.black',
          },
        }}
        css={{
          '& > *': {
            verticalAlign: 'top',
          },
        }}
        {...props}
      >
        {children ?? logoText}
      </Link>
    )
  }
)

const GenericHeaderLogomark = forwardRef<SVGSVGElement, GenericHeaderLogomarkProps>(
  function GenericHeaderLogomark({ color = 'currentColor', ...props }, ref) {
    return (
      <Icon
        ref={ref}
        as="svg"
        width={pxToRem(28)}
        height={pxToRem(30)}
        viewBox="0 0 28 30"
        fill={color}
        aria-hidden="true"
        focusable="false"
        flexShrink={0}
        {...props}
      >
        <circle cx="13.5549" cy="4.21349" r="4.21349" />
        <circle cx="13.5549" cy="25.7865" r="4.21349" />
        <circle cx="22.8963" cy="9.6068" r="4.21349" />
        <circle cx="4.2135" cy="20.3932" r="4.21349" />
        <circle cx="22.8963" cy="20.3932" r="4.21349" />
        <circle cx="4.21351" cy="9.60674" r="4.21349" />
      </Icon>
    )
  }
)

export const GenericHeader = Object.assign(GenericHeaderRoot, {
  Root: GenericHeaderRoot,
  Container: GenericHeaderContainer,
  LogoWrapper: GenericHeaderLogoWrapper,
  Logo: GenericHeaderLogo,
  Logomark: GenericHeaderLogomark,
})

export {
  GenericHeaderRoot,
  GenericHeaderContainer,
  GenericHeaderLogoWrapper,
  GenericHeaderLogo,
  GenericHeaderLogomark,
}
