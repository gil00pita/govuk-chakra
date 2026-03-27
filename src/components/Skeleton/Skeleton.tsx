import {
  Skeleton as ChakraSkeleton,
  SkeletonCircle as ChakraSkeletonCircle,
  SkeletonText as ChakraSkeletonText,
} from '@chakra-ui/react'
import type { ComponentPropsWithoutRef } from 'react'

export type SkeletonProps = ComponentPropsWithoutRef<typeof ChakraSkeleton>
export type SkeletonCircleProps = ComponentPropsWithoutRef<typeof ChakraSkeletonCircle>
export type SkeletonTextProps = ComponentPropsWithoutRef<typeof ChakraSkeletonText>

export const SkeletonRoot = ChakraSkeleton
export const SkeletonCircle = ChakraSkeletonCircle
export const SkeletonText = ChakraSkeletonText

export const Skeleton = Object.assign(ChakraSkeleton, {
  Root: ChakraSkeleton,
  Circle: ChakraSkeletonCircle,
  Text: ChakraSkeletonText,
})
