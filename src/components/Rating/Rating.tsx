import { RatingGroup } from '@chakra-ui/react'
import type { ComponentPropsWithoutRef, ReactElement, ReactNode } from 'react'
import { forwardRef } from 'react'

export interface RatingProps extends Omit<
  ComponentPropsWithoutRef<typeof RatingGroup.Root>,
  'count'
> {
  icon?: ReactElement
  count?: number
  label?: ReactNode
}

export const RatingRoot = forwardRef<HTMLDivElement, RatingProps>(function RatingRoot(
  { icon, count = 5, label, ...props },
  ref
) {
  return (
    <RatingGroup.Root ref={ref} count={count} {...props}>
      {label ? <RatingGroup.Label>{label}</RatingGroup.Label> : null}
      <RatingGroup.HiddenInput />
      <RatingGroup.Control>
        {Array.from({ length: count }).map((_, index) => (
          <RatingGroup.Item key={index} index={index + 1}>
            <RatingGroup.ItemIndicator icon={icon} />
          </RatingGroup.Item>
        ))}
      </RatingGroup.Control>
    </RatingGroup.Root>
  )
})

export const Rating = Object.assign(RatingRoot, {
  Root: RatingRoot,
  Label: RatingGroup.Label,
  HiddenInput: RatingGroup.HiddenInput,
  Control: RatingGroup.Control,
  Item: RatingGroup.Item,
  ItemIndicator: RatingGroup.ItemIndicator,
})
