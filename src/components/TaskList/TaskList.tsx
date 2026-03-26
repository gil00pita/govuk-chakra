import {
  Box,
  HStack,
  LinkBox,
  LinkOverlay,
  Stack,
  type BoxProps,
  type StackProps,
} from '@chakra-ui/react'
import {
  Children,
  createContext,
  forwardRef,
  isValidElement,
  useContext,
  type ReactNode,
} from 'react'

import { Tag, type TagVariant } from '@/components/Tag/Tag'
import { Text } from '@/components/Text/Text'
import { pxToRem } from '@/utils'

export type TaskStatus = string

export interface TaskListStatusDefinition {
  label: ReactNode
  color: TagVariant
}

export type TaskListStatuses = Record<string, TaskListStatusDefinition>

const DEFAULT_STATUSES: TaskListStatuses = {
  completed: { label: 'Completed', color: 'green' },
  incomplete: { label: 'Incomplete', color: 'blue' },
  cannotStartYet: { label: 'Cannot start yet', color: 'grey' },
  notStarted: { label: 'Not started', color: 'blue' },
}

const TaskListStatusesContext = createContext<TaskListStatuses>(DEFAULT_STATUSES)

export interface TaskListItemData {
  id?: string
  title: ReactNode
  href: string
  status: TaskStatus
  hint?: ReactNode
}

export interface TaskListProps extends StackProps {
  items?: TaskListItemData[]
  heading?: ReactNode
  statuses?: TaskListStatuses
  children?: ReactNode
}

export interface TaskListHeadingProps extends BoxProps {
  children: ReactNode
}

export interface TaskListItemProps extends Omit<BoxProps, 'title'> {
  title: ReactNode
  href: string
  status?: TaskStatus
  hint?: ReactNode
}

export interface TaskListStatusProps extends BoxProps {
  status: TaskStatus
  children?: ReactNode
}

const TaskListHeading = forwardRef<HTMLHeadingElement, TaskListHeadingProps>(
  function TaskListHeading({ children, ...props }, ref) {
    return (
      <Text ref={ref} as="h2" fontSize={24} fontWeight="700" color="fg" mb={pxToRem(15)} {...props}>
        {children}
      </Text>
    )
  }
)

TaskListHeading.displayName = 'TaskListHeading'

const TaskListRoot = forwardRef<HTMLDivElement, TaskListProps>(function TaskListRoot(
  { items, heading, statuses, children, ...props },
  ref
) {
  const childArray = Children.toArray(children)
  const headingChild = childArray.find(
    (child) => isValidElement(child) && child.type === TaskListHeading
  )
  const listChildren = childArray.filter((child) => child !== headingChild)
  const resolvedStatuses = {
    ...DEFAULT_STATUSES,
    ...statuses,
  }

  return (
    <TaskListStatusesContext.Provider value={resolvedStatuses}>
      <Stack ref={ref} gap={0} as="section" width="100%" {...props}>
        {headingChild ?? (heading ? <TaskListHeading>{heading}</TaskListHeading> : null)}

        <Box as="ul" listStyleType="none" m={0} p={0}>
          {items
            ? items.map((item) => (
                <TaskListItem
                  key={item.id ?? item.href}
                  title={item.title}
                  href={item.href}
                  hint={item.hint}
                  status={item.status}
                />
              ))
            : listChildren}
        </Box>
      </Stack>
    </TaskListStatusesContext.Provider>
  )
})

TaskListRoot.displayName = 'TaskList'

const TaskListItem = forwardRef<HTMLLIElement, TaskListItemProps>(function TaskListItem(
  { title, href, status = 'incomplete', hint, ...props },
  ref
) {
  const statusId = `task-status-${String(title)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')}`

  return (
    <Box
      ref={ref}
      as="li"
      borderBottom="1px solid"
      borderColor="border.muted"
      px={{ base: pxToRem(10), md: pxToRem(15) }}
      py={{ base: pxToRem(12), md: pxToRem(15) }}
      _hover={{ bg: 'bg.emphasized' }}
      {...props}
    >
      <LinkBox>
        <HStack align="center" justify="space-between" gap={pxToRem(15)}>
          <Box flex="1" minW={0}>
            <LinkOverlay
              href={href}
              color="fg.link"
              fontSize={19}
              lineHeight={pxToRem(25)}
              textDecoration="underline"
              textUnderlineOffset="0.1578em"
              textDecorationThickness="max(1px, 0.0625rem)"
              aria-describedby={hint ? `${statusId}-hint ${statusId}` : statusId}
              _hover={{ color: 'primary.700', textDecorationThickness: 'max(3px, 0.1875rem)' }}
              _focus={{
                bg: 'yellow.500',
                color: 'common.black',
                outline: '3px solid',
                outlineColor: 'yellow.500',
                outlineOffset: 0,
                textDecorationThickness: 'max(3px, 0.1875rem)',
              }}
              _dark={{
                _hover: {
                  color: 'primary.300',
                },
              }}
            >
              {title}
            </LinkOverlay>

            {hint ? (
              <Text id={`${statusId}-hint`} fontSize={16} color="fg.muted" mt={pxToRem(4)} mb={0}>
                {hint}
              </Text>
            ) : null}
          </Box>

          <TaskListStatus id={statusId} status={status} />
        </HStack>
      </LinkBox>
    </Box>
  )
})

TaskListItem.displayName = 'TaskListItem'

const TaskListStatus = forwardRef<HTMLParagraphElement, TaskListStatusProps>(
  function TaskListStatus({ status, children, ...props }, ref) {
    const statuses = useContext(TaskListStatusesContext)
    const statusConfig = statuses[status]

    return (
      <Tag
        ref={ref}
        as="span"
        flexShrink={0}
        variant={statusConfig?.color ?? 'grey'}
        fontSize={16}
        lineHeight={pxToRem(20)}
        {...props}
      >
        {children ?? statusConfig?.label ?? status}
      </Tag>
    )
  }
)

TaskListStatus.displayName = 'TaskListStatus'

type TaskListCompound = typeof TaskListRoot & {
  Root: typeof TaskListRoot
  Heading: typeof TaskListHeading
  Item: typeof TaskListItem
  Status: typeof TaskListStatus
}

export const TaskList = Object.assign(TaskListRoot, {
  Root: TaskListRoot,
  Heading: TaskListHeading,
  Item: TaskListItem,
  Status: TaskListStatus,
}) as TaskListCompound

export { TaskListRoot, TaskListHeading, TaskListItem, TaskListStatus }
