import { getFieldFocusStyles } from '@/utils/fieldFocusStyles'
import { defineSlotRecipe } from '@chakra-ui/react'
import { toastAnatomy } from '@chakra-ui/react/anatomy'

const toastRecipe = defineSlotRecipe({
  slots: toastAnatomy.keys(),
  className: 'govuk-toast',
  base: {
    root: {
      width: '24rem',
      maxWidth: 'calc(100vw - 2rem)',
      minWidth: '20rem',
      display: 'grid',
      gridTemplateColumns: 'auto minmax(0, 1fr)',
      columnGap: '0',
      rowGap: '0',
      alignItems: 'start',
      position: 'relative',
      py: '0',
      ps: '0',
      pe: '0',
      borderRadius: 'l2',
      translate: 'var(--x) var(--y)',
      scale: 'var(--scale)',
      zIndex: 'var(--z-index)',
      height: 'var(--height)',
      opacity: 'var(--opacity)',
      willChange: 'translate, opacity, scale',
      transition: 'translate 400ms, scale 400ms, opacity 400ms, height 400ms, box-shadow 200ms',
      transitionTimingFunction: 'cubic-bezier(0.21, 1.02, 0.73, 1)',
      _closed: {
        transition: 'translate 400ms, scale 400ms, opacity 200ms',
        transitionTimingFunction: 'cubic-bezier(0.06, 0.71, 0.55, 1)',
      },
      bg: 'bg.panel',
      color: 'fg',
      boxShadow: 'xl',
      _focus: {},
      '--toast-trigger-bg': 'colors.bg.muted',
    },
    title: {
      gridColumn: '2',
      fontWeight: '700',
      textStyle: 'md',
      minWidth: '0',
      fontSize: '19px',
      marginEnd: 0,
      pr: 8,
      pl: 2,
      py: 2,
    },
    description: {
      gridColumn: '2',
      display: 'block',
      minWidth: '0',
      fontSize: '16px',
      px: 2,
      py: 3,
    },
    indicator: {
      gridColumn: '1',
      gridRow: '1 / span 2',
      alignSelf: 'center',
      flexShrink: '0',
      boxSize: '5',
    },
    actionTrigger: {
      gridColumn: '2',
      justifySelf: 'start',
      mt: '2',
      textStyle: 'sm',
      fontWeight: 'medium',
      height: '8',
      px: '3',
      borderRadius: 'l2',
      borderWidth: '2px',
      borderColor: 'var(--toast-border-color, inherit)',
      transition: 'background 200ms',
      _hover: {
        bg: 'var(--toast-trigger-bg)',
      },
    },
    closeTrigger: {
      position: 'absolute',
      top: '0',
      right: '0',
      insetEnd: '1',
      padding: '1',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      borderRadius: 'l2',
      textStyle: 'md',
      transition: 'background 200ms',
      _focusVisible: getFieldFocusStyles(),
      _focus: getFieldFocusStyles(),
      _icon: {
        boxSize: 8,
      },
    },
  },
  variants: {
    variant: {
      outline: {
        root: {
          bgColor: 'bg.panel',
          color: 'fg',
          borderWidth: '2px',
          borderColor: 'border.input',
          '&[data-type=warning]': {
            borderColor: 'orange.fg',
            bgColor: 'bg.panel',
            color: 'orange.fg',
          },
          '&[data-type=success]': {
            borderColor: 'green.fg',
            bgColor: 'bg.panel',
            color: 'green.fg',
          },
          '&[data-type=error]': {
            borderColor: 'red.fg',
            bgColor: 'bg.panel',
            color: 'red.fg',
          },
        },
        title: {
          bgColor: { base: 'gray.300', _dark: 'gray.700' },
          color: 'fg',
          '[data-type=warning] &': {
            bgColor: 'orange.fg',
            color: 'white',
          },
          '[data-type=success] &': {
            bgColor: 'green.fg',
            color: 'white',
          },
          '[data-type=error] &': {
            bgColor: 'red.fg',
            color: 'white',
          },
        },
        closeTrigger: {
          color: 'fg',
          _hover: {
            bg: 'white/20',
            color: 'fg',
          },
          '[data-type=warning] &': {
            color: 'white',
            _hover: {
              bg: 'white/20',
              color: 'white',
            },
          },
          '[data-type=success] &': {
            color: 'white',
            _hover: {
              bg: 'white/20',
              color: 'white',
            },
          },
          '[data-type=error] &': {
            color: 'white',
            _hover: {
              bg: 'white/20',
              color: 'white',
            },
          },
        },
      },
    },
  },
  defaultVariants: {
    variant: 'outline',
  },
})

export default toastRecipe
