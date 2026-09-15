import { Box, VisuallyHidden, type BoxProps } from '@chakra-ui/react'
import { createContext, forwardRef, useContext, type ComponentProps, type ReactNode } from 'react'

import { Link } from '@/components/Link'
import { pxToRem } from '@/utils'

export interface LanguageNavigationRootProps extends BoxProps {
  inverse?: boolean
  landmarkLabel?: string
}

export type LanguageNavigationListProps = BoxProps
export type LanguageNavigationItemProps = BoxProps

export interface LanguageNavigationLinkProps extends ComponentProps<typeof Link> {
  lang: string
  languageDescriptionText?: ReactNode
}

export interface LanguageNavigationCurrentProps extends BoxProps {
  lang: string
}

type LanguageNavigationContextValue = {
  inverse: boolean
}

const LanguageNavigationContext = createContext<LanguageNavigationContextValue>({ inverse: false })

function useLanguageNavigationContext() {
  return useContext(LanguageNavigationContext)
}

const LanguageNavigationRoot = forwardRef<HTMLElement, LanguageNavigationRootProps>(
  function LanguageNavigationRoot(
    { children, className, inverse = false, landmarkLabel = 'Language', ...props },
    ref
  ) {
    return (
      <LanguageNavigationContext.Provider value={{ inverse }}>
        <Box
          ref={ref}
          as="nav"
          aria-label={landmarkLabel}
          className={[
            'govuk-language-navigation',
            inverse && 'govuk-language-navigation--inverse',
            className,
          ]
            .filter(Boolean)
            .join(' ')}
          color={inverse ? 'common.white' : 'fg'}
          fontFamily="body"
          fontSize={pxToRem(19)}
          lineHeight={pxToRem(25)}
          mb={{ base: pxToRem(20), md: pxToRem(30) }}
          css={{
            '.govuk-service-navigation &': {
              marginTop: pxToRem(5),
              marginBottom: pxToRem(15),
              '@media screen and (min-width: 40rem)': {
                marginTop: pxToRem(15),
              },
            },
          }}
          {...props}
        >
          {children}
        </Box>
      </LanguageNavigationContext.Provider>
    )
  }
)

const LanguageNavigationList = forwardRef<HTMLUListElement, LanguageNavigationListProps>(
  function LanguageNavigationList({ className, ...props }, ref) {
    return (
      <Box
        ref={ref}
        as="ul"
        className={['govuk-language-navigation__list', className].filter(Boolean).join(' ')}
        display="inline-flex"
        flexWrap="wrap"
        rowGap={pxToRem(10)}
        m={0}
        p={0}
        listStyleType="none"
        {...props}
      />
    )
  }
)

const LanguageNavigationItem = forwardRef<HTMLLIElement, LanguageNavigationItemProps>(
  function LanguageNavigationItem({ className, ...props }, ref) {
    const { inverse } = useLanguageNavigationContext()

    return (
      <Box
        ref={ref}
        as="li"
        className={['govuk-language-navigation__list-item', className].filter(Boolean).join(' ')}
        display="flex"
        alignItems="center"
        css={{
          '&:not(:last-child)::after': {
            content: '""',
            display: 'block',
            height: '1em',
            marginInline: pxToRem(10),
            borderInlineEnd: '1px solid',
            borderColor: inverse ? 'currentColor' : 'border',
          },
        }}
        {...props}
      />
    )
  }
)

const LanguageNavigationLink = forwardRef<HTMLAnchorElement, LanguageNavigationLinkProps>(
  function LanguageNavigationLink(
    { children, className, hrefLang, lang, languageDescriptionText, ...props },
    ref
  ) {
    const { inverse } = useLanguageNavigationContext()

    return (
      <Link
        ref={ref}
        className={['govuk-language-navigation__link', className].filter(Boolean).join(' ')}
        rel="alternate"
        lang={lang}
        hrefLang={hrefLang ?? lang}
        {...(inverse
          ? {
              color: 'common.white',
              textDecorationColor: 'currentColor',
              _visited: { color: 'common.white' },
              _hover: { color: 'common.white', textDecorationThickness: pxToRem(3) },
              _active: { color: 'common.white' },
              _dark: {
                color: 'common.white',
                _visited: { color: 'common.white' },
                _hover: { color: 'common.white' },
                _active: { color: 'common.white' },
                _focus: {
                  color: 'common.black',
                  textDecorationColor: 'common.black',
                  _visited: { color: 'common.black' },
                  _hover: { color: 'common.black' },
                },
              },
            }
          : {})}
        {...props}
      >
        {children}
        {languageDescriptionText ? (
          <>
            {' '}
            <VisuallyHidden>{languageDescriptionText}</VisuallyHidden>
          </>
        ) : null}
      </Link>
    )
  }
)

const LanguageNavigationCurrent = forwardRef<HTMLSpanElement, LanguageNavigationCurrentProps>(
  function LanguageNavigationCurrent({ className, ...props }, ref) {
    return (
      <Box
        ref={ref}
        as="span"
        aria-current="true"
        className={['govuk-language-navigation__text', className].filter(Boolean).join(' ')}
        {...props}
      />
    )
  }
)

type LanguageNavigationCompound = typeof LanguageNavigationRoot & {
  Root: typeof LanguageNavigationRoot
  List: typeof LanguageNavigationList
  Item: typeof LanguageNavigationItem
  Link: typeof LanguageNavigationLink
  Current: typeof LanguageNavigationCurrent
}

export const LanguageNavigation = Object.assign(LanguageNavigationRoot, {
  Root: LanguageNavigationRoot,
  List: LanguageNavigationList,
  Item: LanguageNavigationItem,
  Link: LanguageNavigationLink,
  Current: LanguageNavigationCurrent,
}) as LanguageNavigationCompound

export {
  LanguageNavigationRoot,
  LanguageNavigationList,
  LanguageNavigationItem,
  LanguageNavigationLink,
  LanguageNavigationCurrent,
}
