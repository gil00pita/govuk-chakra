import { IconButton, Popover, Portal } from '@chakra-ui/react'
import type { ComponentPropsWithoutRef, ReactElement, ReactNode } from 'react'
import { cloneElement, forwardRef, isValidElement } from 'react'
import { LuInfo } from 'react-icons/lu'

export interface ToggleTipProps extends Omit<
  ComponentPropsWithoutRef<typeof Popover.Root>,
  'children'
> {
  content: ReactNode
  children?: ReactElement
}

export const ToggleTipRoot = forwardRef<HTMLDivElement, ToggleTipProps>(function ToggleTipRoot(
  { children, content, positioning = { placement: 'top' }, ...props },
  ref
) {
  const trigger = isValidElement(children) ? (
    children
  ) : (
    <IconButton aria-label="More information" size="xs" variant="ghost">
      <LuInfo />
    </IconButton>
  )

  return (
    <Popover.Root positioning={positioning} {...props}>
      <Popover.Trigger asChild>{cloneElement(trigger)}</Popover.Trigger>
      <Portal>
        <Popover.Positioner>
          <Popover.Content ref={ref} maxW="xs">
            <Popover.Arrow />
            <Popover.Body>{content}</Popover.Body>
          </Popover.Content>
        </Popover.Positioner>
      </Portal>
    </Popover.Root>
  )
})

export const InfoTip = forwardRef<HTMLDivElement, Omit<ToggleTipProps, 'children'>>(
  function InfoTip(props, ref) {
    return <ToggleTipRoot ref={ref} {...props} />
  }
)

export const ToggleTip = Object.assign(ToggleTipRoot, {
  Root: ToggleTipRoot,
  InfoTip,
})
