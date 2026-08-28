import { ScrollArea as ChakraScrollArea } from '@chakra-ui/react'
import type { ComponentPropsWithoutRef } from 'react'

export type ScrollAreaProps = ComponentPropsWithoutRef<typeof ChakraScrollArea.Root>
export type ScrollAreaRootProps = ComponentPropsWithoutRef<typeof ChakraScrollArea.Root>
export type ScrollAreaRootProviderProps = ComponentPropsWithoutRef<
  typeof ChakraScrollArea.RootProvider
>
export type ScrollAreaViewportProps = ComponentPropsWithoutRef<typeof ChakraScrollArea.Viewport>
export type ScrollAreaContentProps = ComponentPropsWithoutRef<typeof ChakraScrollArea.Content>
export type ScrollAreaScrollbarProps = ComponentPropsWithoutRef<typeof ChakraScrollArea.Scrollbar>
export type ScrollAreaThumbProps = ComponentPropsWithoutRef<typeof ChakraScrollArea.Thumb>
export type ScrollAreaCornerProps = ComponentPropsWithoutRef<typeof ChakraScrollArea.Corner>

type ScrollAreaComponent = typeof ChakraScrollArea.Root & typeof ChakraScrollArea

export const ScrollAreaRoot = ChakraScrollArea.Root
export const ScrollAreaRootProvider = ChakraScrollArea.RootProvider
export const ScrollAreaPropsProvider: typeof ChakraScrollArea.PropsProvider =
  ChakraScrollArea.PropsProvider
export const ScrollAreaViewport = ChakraScrollArea.Viewport
export const ScrollAreaContent = ChakraScrollArea.Content
export const ScrollAreaScrollbar = ChakraScrollArea.Scrollbar
export const ScrollAreaThumb = ChakraScrollArea.Thumb
export const ScrollAreaCorner = ChakraScrollArea.Corner
export const ScrollAreaContext = ChakraScrollArea.Context

export const ScrollArea: ScrollAreaComponent = Object.assign(ChakraScrollArea.Root, {
  ...ChakraScrollArea,
})
