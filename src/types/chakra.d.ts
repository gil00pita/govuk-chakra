import { RecipeVariantProps } from '@chakra-ui/react';
import { textTheme } from '../theme/components/text';
import { linkTheme } from '../theme/components/link';

declare module '@chakra-ui/react' {
  interface TextProps extends RecipeVariantProps<typeof textTheme> { }
  interface LinkProps extends RecipeVariantProps<typeof linkTheme> { }
}
