import {
  Box,
  HStack,
  LinkBox,
  LinkOverlay,
  Stack,
  type BoxProps,
  type StackProps,
} from '@chakra-ui/react'
import { forwardRef, type ReactNode } from 'react'

import { Text } from '@/components/Text/Text'
import { pxToRem } from '@/utils'

export type TaskStatus = 'completed' | 'incomplete' | 'cannotStartYet' | 'notStarted'

const STATUS_LABEL: Record<TaskStatus, string> = {
  completed: 'Completed',
  incomplete: 'Incomplete',
  cannotStartYet: 'Cannot start yet',
  notStarted: 'Not started',
}

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

const TaskListRoot = forwardRef<HTMLDivElement, TaskListProps>(function TaskListRoot(
  { items, heading, children, ...props },
  ref
) {
  return (
    <Stack ref={ref} gap={0} as="section" width="100%" {...props}>
      {heading ? (
        <Text as="h2" fontSize={24} fontWeight="700" color="grey.950" mb={pxToRem(15)}>
          {heading}
        </Text>
      ) : null}

      <Box as="ul" listStyleType="none" m={0} p={0} borderTop="1px solid" borderColor="grey.100">
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
          : children}
      </Box>
    </Stack>
  )
})

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
      borderColor="grey.100"
      px={{ base: pxToRem(10), md: pxToRem(15) }}
      py={{ base: pxToRem(12), md: pxToRem(15) }}
      _hover={{ bg: 'grey.50' }}
      {...props}
    >
      <LinkBox>
        <HStack align="center" justify="space-between" gap={pxToRem(15)}>
          <Box flex="1" minW={0}>
            <LinkOverlay
              href={href}
              color="brand.500"
              fontSize={19}
              lineHeight={pxToRem(25)}
              textDecoration="underline"
              textUnderlineOffset="0.1578em"
              textDecorationThickness="max(1px, 0.0625rem)"
              aria-describedby={hint ? `${statusId}-hint ${statusId}` : statusId}
              _hover={{ color: 'brand.700', textDecorationThickness: 'max(3px, 0.1875rem)' }}
              _focus={{
                bg: 'yellow.500',
                color: 'common.black',
                outline: '3px solid',
                outlineColor: 'yellow.500',
                outlineOffset: 0,
                textDecorationThickness: 'max(3px, 0.1875rem)',
              }}
            >
              {title}
            </LinkOverlay>

            {hint ? (
              <Text id={`${statusId}-hint`} fontSize={16} color="grey.400" mt={pxToRem(4)} mb={0}>
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

const TaskListStatus = forwardRef<HTMLSpanElement, TaskListStatusProps>(function TaskListStatus(
  { status, children, ...props },
  ref
) {
  const isCompleted = status === 'completed'

  return (
    <Box
      ref={ref}
      as="span"
      flexShrink={0}
      px={isCompleted ? 0 : pxToRem(8)}
      py={isCompleted ? 0 : pxToRem(4)}
      bg={
        status === 'incomplete' || status === 'notStarted'
          ? 'blue.100'
          : status === 'cannotStartYet'
            ? 'grey.50'
            : 'transparent'
      }
      color={status === 'cannotStartYet' ? 'grey.950' : 'grey.950'}
      borderRadius={isCompleted ? '0' : pxToRem(2)}
      fontSize={16}
      lineHeight={pxToRem(20)}
      fontWeight={isCompleted ? '400' : '700'}
      {...props}
    >
      {children ?? STATUS_LABEL[status]}
    </Box>
  )
})

export const TaskList = Object.assign(TaskListRoot, {
  Root: TaskListRoot,
  Item: TaskListItem,
  Status: TaskListStatus,
})

export { TaskListRoot, TaskListItem, TaskListStatus }
