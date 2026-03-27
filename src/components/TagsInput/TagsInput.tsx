import { TagsInput as ChakraTagsInput } from '@chakra-ui/react'
import type { ComponentPropsWithoutRef } from 'react'

export type TagsInputProps = ComponentPropsWithoutRef<typeof ChakraTagsInput.Root>

export const TagsInputRoot = ChakraTagsInput.Root

export const TagsInput = Object.assign(ChakraTagsInput.Root, {
  ...ChakraTagsInput,
})
