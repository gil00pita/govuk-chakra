import { Steps as ChakraSteps } from '@chakra-ui/react'
import type { ComponentPropsWithoutRef, ForwardRefExoticComponent, RefAttributes } from 'react'

type StepsColorPalette =
  | 'gray'
  | 'red'
  | 'orange'
  | 'yellow'
  | 'green'
  | 'teal'
  | 'blue'
  | 'cyan'
  | 'purple'
  | 'pink'

type StepsSize = 'xs' | 'sm' | 'md' | 'lg'
type StepsVariant = 'subtle' | 'solid' | 'outline'
type StepsOrientation = 'horizontal' | 'vertical'

type ChakraStepsRootProps = Omit<
  ComponentPropsWithoutRef<typeof ChakraSteps.Root>,
  'colorPalette' | 'orientation' | 'size' | 'variant'
>

export interface StepsProps extends ChakraStepsRootProps {
  colorPalette?: StepsColorPalette
  orientation?: StepsOrientation
  size?: StepsSize
  variant?: StepsVariant
}

type StepsRootComponent = ForwardRefExoticComponent<StepsProps & RefAttributes<HTMLDivElement>>
type StepsComponent = typeof ChakraSteps & { Root: StepsRootComponent }

export const StepsRoot = ChakraSteps.Root as unknown as StepsRootComponent

export const Steps = Object.assign(StepsRoot, {
  ...ChakraSteps,
  Root: StepsRoot,
}) as StepsComponent
