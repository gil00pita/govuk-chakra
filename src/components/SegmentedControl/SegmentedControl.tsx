import { For, SegmentGroup } from '@chakra-ui/react'
import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import { forwardRef, useMemo } from 'react'

export interface SegmentedControlItem {
  value: string
  label: ReactNode
  disabled?: boolean
}

export interface SegmentedControlProps extends ComponentPropsWithoutRef<typeof SegmentGroup.Root> {
  items: Array<string | SegmentedControlItem>
}

function normalize(items: Array<string | SegmentedControlItem>): SegmentedControlItem[] {
  return items.map((item) => {
    if (typeof item === 'string') return { value: item, label: item }
    return item
  })
}

export const SegmentedControlRoot = forwardRef<HTMLDivElement, SegmentedControlProps>(
  function SegmentedControlRoot({ items, ...props }, ref) {
    const data = useMemo(() => normalize(items), [items])

    return (
      <SegmentGroup.Root ref={ref} {...props}>
        <SegmentGroup.Indicator />
        <For each={data}>
          {(item) => (
            <SegmentGroup.Item key={item.value} value={item.value} disabled={item.disabled}>
              <SegmentGroup.ItemText>{item.label}</SegmentGroup.ItemText>
              <SegmentGroup.ItemHiddenInput />
            </SegmentGroup.Item>
          )}
        </For>
      </SegmentGroup.Root>
    )
  }
)

export const SegmentedControl = Object.assign(SegmentedControlRoot, {
  Root: SegmentedControlRoot,
  Indicator: SegmentGroup.Indicator,
  Item: SegmentGroup.Item,
  ItemText: SegmentGroup.ItemText,
  ItemHiddenInput: SegmentGroup.ItemHiddenInput,
})
