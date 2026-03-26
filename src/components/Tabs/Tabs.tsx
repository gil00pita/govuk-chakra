import { Tabs as ChakraTabs } from '@chakra-ui/react'
import { forwardRef, type ReactNode } from 'react'

import { pxToRem } from '@/utils'
import { Text } from '@/components'

export interface TabsItem {
  value: string
  label: ReactNode
  content: ReactNode
}

export interface TabsProps extends ChakraTabs.RootProps {
  items?: TabsItem[]
}

export type TabsListProps = ChakraTabs.ListProps

export type TabsTriggerProps = ChakraTabs.TriggerProps

export type TabsContentProps = ChakraTabs.ContentProps

const TabsRoot = forwardRef<HTMLDivElement, TabsProps>(function TabsRoot(
  { items, children, defaultValue, ...props },
  ref
) {
  const firstValue = items?.[0]?.value

  return (
    <ChakraTabs.Root ref={ref} defaultValue={defaultValue ?? firstValue} {...props}>
      {items ? (
        <>
          <TabsList>
            {items.map((item) => (
              <TabsTrigger key={item.value} value={item.value}>
                {item.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {items.map((item) => (
            <TabsContent key={item.value} value={item.value}>
              {item.content}
            </TabsContent>
          ))}
        </>
      ) : (
        children
      )}
    </ChakraTabs.Root>
  )
})

const TabsList = forwardRef<HTMLDivElement, TabsListProps>(function TabsList(props, ref) {
  return (
    <ChakraTabs.List
      ref={ref}
      gap={0}
      bg="transparent"
      borderBottom="opx solid"
      borderColor="transparent"
      overflowX="auto"
      flexWrap="nowrap"
      minW="0"
      marginBottom={'-2px'}
      {...props}
    />
  )
})

const TabsTrigger = forwardRef<HTMLButtonElement, TabsTriggerProps>(function TabsTrigger(
  { children, ...props },
  ref
) {
  return (
    <ChakraTabs.Trigger
      ref={ref}
      borderRadius="0"
      bgColor="bg.subtle"
      color="fg"
      h={'unset'}
      mt={pxToRem(8)}
      mr={pxToRem(4)}
      mb={pxToRem(5)}
      px={pxToRem(20)}
      py={pxToRem(10)}
      whiteSpace="nowrap"
      textDecoration="underline"
      textUnderlineOffset="0.1578em"
      textDecorationThickness="max(1px, 0.0625rem)"
      _before={{
        bgColor: 'transparent',
      }}
      _hover={{
        textDecorationThickness: 'max(3px, 0.1875rem)',
      }}
      _selected={{
        pt: pxToRem(14),
        pb: pxToRem(16),
        mb: 0,
        bg: 'bg',
        color: 'fg',
        textDecoration: 'none',
        fontWeight: '700',
        mt: 0,
        bgColor: 'bg',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: 'border.subtle',
        borderBottom: '1px solid',
        borderBottomColor: 'bg',
      }}
      _focusVisible={{
        outline: 'none',
        // outlineColor: 'yellow.500',
        outlineOffset: 0,
        bg: 'yellow.500',
        color: 'common.black',
        textDecorationThickness: 'max(3px, 0.1875rem)',
        '& .label': {
          bgColor: 'focus',
        },
      }}
      {...props}
    >
      <Text fontSize={19} fontWeight="400" className="label">
        {children}
      </Text>
    </ChakraTabs.Trigger>
  )
})

const TabsContent = forwardRef<HTMLDivElement, TabsContentProps>(function TabsContent(props, ref) {
  return (
    <ChakraTabs.Content
      ref={ref}
      border="1px solid"
      borderColor="border.subtle"
      p={{ base: pxToRem(16), md: pxToRem(24) }}
      mt={pxToRem(-1)}
      bg="bg"
      _focusVisible={{ outline: 'none' }}
      {...props}
    />
  )
})

export const Tabs = Object.assign(TabsRoot, {
  Root: TabsRoot,
  List: TabsList,
  Trigger: TabsTrigger,
  Content: TabsContent,
})

export { TabsRoot, TabsList, TabsTrigger, TabsContent }
