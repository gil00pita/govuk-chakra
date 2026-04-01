import { IconButton, Popover, Portal, useSlotRecipe } from '@chakra-ui/react'
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
  const recipe = useSlotRecipe({ key: 'toggleTip' })
  const styles = recipe()
  const trigger = isValidElement(children) ? (
    cloneElement(children as ReactElement<{ css?: unknown }>, {
      css: [styles.trigger, (children.props as { css?: unknown }).css],
    })
  ) : (
    <IconButton aria-label="More information" size="xs" variant="ghost" css={styles.trigger}>
      <LuInfo />
    </IconButton>
  )

  return (
    <Popover.Root positioning={positioning} {...props}>
      <Popover.Trigger asChild>{cloneElement(trigger)}</Popover.Trigger>
      <Portal>
        <Popover.Positioner>
          <Popover.Content ref={ref} maxW="xs" css={styles.content}>
            <Popover.Arrow css={styles.arrow} />
            <Popover.Body css={styles.body}>{content}</Popover.Body>
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
