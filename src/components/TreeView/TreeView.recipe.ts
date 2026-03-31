import { defineSlotRecipe } from '@chakra-ui/react'
import { treeViewAnatomy } from '@ark-ui/react/tree-view'
import { govukFontSizes } from '@/utils/px-to-rem'

const treeViewRecipe = defineSlotRecipe({
  className: 'govuk-tree-view',
  slots: treeViewAnatomy.keys(),
  base: {
    root: {
      width: 'full',
      display: 'flex',
      flexDirection: 'column',
      gap: '2',
    },
    tree: {
      display: 'flex',
      flexDirection: 'column',
      borderRadius: '0',
      borderWidth: '2px',
      borderColor: 'border.input',
      bg: 'bg',
      color: 'fg',
      boxShadow: 'none',
      p: '0',
      '--tree-item-gap': '8px',
      '--tree-indentation': '16px',
      '--tree-padding-inline': '8px',
      '--tree-padding-block': '8px',
      '--tree-icon-size': '16px',
      _icon: {
        boxSize: 'var(--tree-icon-size)',
      },
    },
    label: {
      color: 'fg',
      fontWeight: 'bold',
      fontSize: govukFontSizes[19],
      lineHeight: '1.3157894737',
      fontFamily: 'body',
      userSelect: 'none',
      _disabled: {
        color: 'fg.disabled',
      },
    },
    branch: {
      position: 'relative',
    },
    branchContent: {
      position: 'relative',
    },
    branchIndentGuide: {
      height: '100%',
      width: '1px',
      bg: 'border',
      position: 'absolute',
      '--tree-depth': 'calc(var(--depth) - 1)',
      '--tree-indentation-offset': 'calc(var(--tree-indentation) * var(--tree-depth))',
      '--tree-offset':
        'calc(var(--tree-padding-inline) + var(--tree-indentation-offset) + (var(--tree-icon-size) * 0.5))',
      insetInlineStart: 'var(--tree-offset)',
      zIndex: '1',
    },
    branchIndicator: {
      color: 'fg.muted',
      transformOrigin: 'center',
      transitionDuration: 'normal',
      transitionProperty: 'transform',
      transitionTimingFunction: 'default',
      _open: {
        transform: 'rotate(90deg)',
      },
    },
    branchTrigger: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    branchControl: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--tree-item-gap)',
      borderRadius: '0',
      userSelect: 'none',
      position: 'relative',
      '--tree-depth': 'calc(var(--depth) - 1)',
      '--tree-indentation-offset': 'calc(var(--tree-indentation) * var(--tree-depth))',
      '--tree-icon-offset': 'calc(var(--tree-icon-size) * var(--tree-depth) * 0.5)',
      '--tree-offset':
        'calc(var(--tree-padding-inline) + var(--tree-indentation-offset) + var(--tree-icon-offset))',
      ps: 'var(--tree-offset)',
      pe: 'var(--tree-padding-inline)',
      py: 'var(--tree-padding-block)',
      color: 'fg',
      fontFamily: 'body',
      focusVisibleRing: 'none',
      _hover: {
        bg: 'bg.muted',
      },
      _focusVisible: {
        outline: '3px solid',
        outlineColor: 'focus',
        outlineOffset: '0',
        bg: 'bg.muted',
      },
      _disabled: {
        color: 'fg.disabled',
      },
    },
    item: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--tree-item-gap)',
      borderRadius: '0',
      userSelect: 'none',
      position: 'relative',
      '--tree-depth': 'calc(var(--depth) - 1)',
      '--tree-indentation-offset': 'calc(var(--tree-indentation) * var(--tree-depth))',
      '--tree-icon-offset': 'calc(var(--tree-icon-size) * var(--tree-depth) * 0.5)',
      '--tree-offset':
        'calc(var(--tree-padding-inline) + var(--tree-indentation-offset) + var(--tree-icon-offset))',
      ps: 'var(--tree-offset)',
      pe: 'var(--tree-padding-inline)',
      py: 'var(--tree-padding-block)',
      color: 'fg',
      fontFamily: 'body',
      focusVisibleRing: 'none',

      _focusVisible: {
        outline: '3px solid',
        outlineColor: 'focus',
        outlineOffset: '0',
        bg: 'bg.muted',
      },
      _disabled: {
        color: 'fg.disabled',
      },
    },
    itemText: {
      flex: '1',
    },
    branchText: {
      flex: '1',
    },
    itemIndicator: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'fg',
      _icon: {
        boxSize: '4',
      },
    },
    nodeCheckbox: {
      display: 'inline-flex',
    },
  },
  variants: {
    size: {
      sm: {
        tree: {
          textStyle: 'unset',
          fontSize: govukFontSizes[16],
          lineHeight: '1.25',
          '--tree-indentation': '16px',
          '--tree-padding-inline': '8px',
          '--tree-padding-block': '6px',
          '--tree-icon-size': '14px',
        },
      },
      md: {
        tree: {
          textStyle: 'unset',
          fontSize: govukFontSizes[19],
          lineHeight: '1.3157894737',
          '--tree-indentation': '16px',
          '--tree-padding-inline': '8px',
          '--tree-padding-block': '8px',
          '--tree-icon-size': '16px',
        },
      },
      lg: {
        tree: {
          textStyle: 'unset',
          fontSize: govukFontSizes[24],
          lineHeight: '1.25',
          '--tree-indentation': '20px',
          '--tree-padding-inline': '12px',
          '--tree-padding-block': '10px',
          '--tree-icon-size': '20px',
        },
      },
    },
    variant: {
      subtle: {
        branchControl: {
          _selected: {
            bg: 'bg.muted',
          },
        },
        item: {
          _selected: {
            bg: 'bg.muted',
          },
        },
      },
      solid: {
        branchControl: {
          _selected: {
            bgColor: 'primary.500',
            color: 'fg.inverted',
            _hover: {
              bgColor: 'primary.700',
            },
          },
        },
        item: {
          _selected: {
            bg: 'primary',
            color: 'fg.inverted',
          },
        },
      },
    },
    animateContent: {
      true: {
        branchContent: {
          _open: {
            animationName: 'expand-height, fade-in',
            animationDuration: 'moderate',
          },
          _closed: {
            animationName: 'collapse-height, fade-out',
            animationDuration: 'moderate',
          },
        },
      },
    },
  },
  defaultVariants: {
    size: 'md',
    animateContent: true,
    variant: 'subtle',
  },
})

export default treeViewRecipe
