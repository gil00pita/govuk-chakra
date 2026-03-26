import {
  Separator as ChakraSeparator,
  type SeparatorProps as ChakraSeparatorProps,
} from '@chakra-ui/react'
import { forwardRef } from 'react'

import { pxToRem } from '../../utils/px-to-rem'

type SeparatorSpacing = 'm' | 'l' | 'xl'

const separatorSpacing: Record<SeparatorSpacing, string> = {
  m: pxToRem(30),
  l: pxToRem(50),
  xl: pxToRem(80),
}

export interface SeparatorProps extends Omit<ChakraSeparatorProps, 'size'> {
  spacing?: SeparatorSpacing
  visible?: boolean
}

const SeparatorRoot = forwardRef<HTMLHRElement, SeparatorProps>(function Separator(
  { spacing = 'm', visible = true, orientation = 'horizontal', ...props },
  ref
) {
  const isVertical = orientation === 'vertical'

  return (
    <ChakraSeparator
      ref={ref}
      orientation={orientation}
      borderColor={visible ? 'primary.100' : 'transparent'}
      borderWidth="0"
      borderBottomWidth={isVertical ? '0' : '1px'}
      borderInlineStartWidth={isVertical ? '1px' : '0'}
      my={isVertical ? undefined : separatorSpacing[spacing]}
      mx={isVertical ? separatorSpacing[spacing] : undefined}
      minHeight={isVertical ? pxToRem(24) : undefined}
      width={isVertical ? 'auto' : '100%'}
      _dark={{
        borderColor: visible ? 'primary.900' : 'transparent',
      }}
      {...props}
    />
  )
})

export const Separator = SeparatorRoot

export { SeparatorRoot }
