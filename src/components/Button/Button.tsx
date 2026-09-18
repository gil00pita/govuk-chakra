import { Button as ChakraButton, type ButtonProps as ChakraButtonProps } from '@chakra-ui/react'

import { forwardRef, type AnchorHTMLAttributes, type ForwardedRef, type ReactNode } from 'react'
import { pxToRem } from '@/utils'
import { buttonVariantStyles, type ButtonVariant } from './buttonVariants'

export interface ButtonProps extends Omit<ChakraButtonProps, 'variant'> {
  variant?: ButtonVariant
  startButton?: boolean
  /** Render the button styles on a real link when a destination is supplied. */
  href?: string
  target?: AnchorHTMLAttributes<HTMLAnchorElement>['target']
  rel?: AnchorHTMLAttributes<HTMLAnchorElement>['rel']
  download?: AnchorHTMLAttributes<HTMLAnchorElement>['download']
  hrefLang?: AnchorHTMLAttributes<HTMLAnchorElement>['hrefLang']
  referrerPolicy?: AnchorHTMLAttributes<HTMLAnchorElement>['referrerPolicy']
}

function ButtonContent({ children, startButton }: { children: ReactNode; startButton?: boolean }) {
  return (
    <>
      {children}
      {startButton && (
        <svg
          className="govuk-button__start-icon"
          xmlns="http://www.w3.org/2000/svg"
          width="17.5"
          height="19"
          viewBox="0 0 33 40"
          aria-hidden="true"
          focusable="false"
        >
          <path fill="currentColor" d="M0 0h13l20 20-20 20H0l20-20z"></path>
        </svg>
      )}
    </>
  )
}

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (
    {
      variant = 'primary',
      children,
      startButton,
      href,
      target,
      rel,
      download,
      hrefLang,
      referrerPolicy,
      disabled,
      type,
      name,
      value,
      form,
      formAction,
      formEncType,
      formMethod,
      formNoValidate,
      formTarget,
      ...props
    },
    ref
  ) => {
    const sharedProps = {
      borderRadius: '0',
      fontSize: '1.1875rem',
      bg: 'green.500',
      color: 'white',
      boxShadow: '0 2px 0 {colors.green.900}',
      fontFamily: 'body',
      fontWeight: startButton ? 'bold' : 'normal',
      padding: `${pxToRem(8)} ${pxToRem(10)} ${pxToRem(7)}`,
      ...buttonVariantStyles[variant],
      ...props,
    } satisfies ChakraButtonProps

    if (href !== undefined) {
      return (
        <ChakraButton {...sharedProps} asChild>
          <a
            ref={ref as ForwardedRef<HTMLAnchorElement>}
            href={href}
            target={target}
            rel={rel}
            download={download}
            hrefLang={hrefLang}
            referrerPolicy={referrerPolicy}
          >
            <ButtonContent startButton={startButton}>{children}</ButtonContent>
          </a>
        </ChakraButton>
      )
    }

    return (
      <ChakraButton
        ref={ref as ForwardedRef<HTMLButtonElement>}
        disabled={disabled}
        type={type}
        name={name}
        value={value}
        form={form}
        formAction={formAction}
        formEncType={formEncType}
        formMethod={formMethod}
        formNoValidate={formNoValidate}
        formTarget={formTarget}
        {...sharedProps}
      >
        <ButtonContent startButton={startButton}>{children}</ButtonContent>
      </ChakraButton>
    )
  }
)

Button.displayName = 'Button'
