export const chakraColorPaletteOptions = [
  'gray',
  'red',
  'orange',
  'yellow',
  'green',
  'teal',
  'blue',
  'cyan',
  'purple',
  'pink',
] as const

export const chakraSizeOptions = ['2xs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl'] as const

export const extendedChakraSizeOptions = [...chakraSizeOptions, 'full', 'cover', 'inherit'] as const

export const chakraVariantOptions = [
  'solid',
  'subtle',
  'surface',
  'outline',
  'ghost',
  'plain',
] as const

export const govukButtonVariantOptions = [
  'primary',
  'secondary',
  'error',
  'inverse',
  'link',
] as const

export const govukButtonIconVariantOptions = [
  'primary',
  'secondary',
  'plain',
  'error',
  'inverse',
  'link',
] as const

export const htmlElementOptions = [
  'div',
  'span',
  'button',
  'a',
  'label',
  'p',
  'section',
  'article',
] as const

export function selectArgType<T extends readonly string[]>(options: T, description?: string) {
  return {
    control: { type: 'select' as const },
    options: [...options],
    ...(description ? { description } : {}),
  }
}

export function rangeArgType(config: {
  min: number
  max: number
  step?: number
  description?: string
}) {
  const { description, ...control } = config

  return {
    control: { type: 'range' as const, ...control },
    ...(description ? { description } : {}),
  }
}
