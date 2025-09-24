import { RecipeVariantProps } from '@chakra-ui/react'
import { textTheme } from '../theme/recipes/text'
import { linkTheme } from '../theme/recipes/link'

declare module '@chakra-ui/react' {
  interface TextProps extends RecipeVariantProps<typeof textTheme> {}
  interface LinkProps extends RecipeVariantProps<typeof linkTheme> {}
}
