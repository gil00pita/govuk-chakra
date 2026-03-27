import { TagsInput as ChakraTagsInput } from '@chakra-ui/react'
import type { ComponentPropsWithoutRef } from 'react'

export type TagsInputProps = ComponentPropsWithoutRef<typeof ChakraTagsInput.Root>
type TagsInputComponent = typeof ChakraTagsInput.Root & typeof ChakraTagsInput

export const TagsInputRoot = ChakraTagsInput.Root

export const TagsInput: TagsInputComponent = Object.assign(ChakraTagsInput.Root, {
  ...ChakraTagsInput,
})
