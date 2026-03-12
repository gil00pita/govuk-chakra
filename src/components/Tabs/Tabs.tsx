import { Tabs as ChakraTabs } from '@chakra-ui/react'
import { forwardRef, type ReactNode } from 'react'

import { pxToRem } from '@/utils'

export interface TabsItem {
  value: string
  label: ReactNode
  content: ReactNode
}

export interface TabsProps extends ChakraTabs.RootProps {
  items?: TabsItem[]
}

export interface TabsListProps extends ChakraTabs.ListProps {}

export interface TabsTriggerProps extends ChakraTabs.TriggerProps {}

export interface TabsContentProps extends ChakraTabs.ContentProps {}

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
      borderBottom="1px solid"
      borderColor="grey.100"
      overflowX="auto"
      flexWrap="nowrap"
      minW="0"
      {...props}
    />
  )
})

const TabsTrigger = forwardRef<HTMLButtonElement, TabsTriggerProps>(
  function TabsTrigger(props, ref) {
    return (
      <ChakraTabs.Trigger
        ref={ref}
        borderRadius="0"
        bg="grey.50"
        color="brand.500"
        borderWidth="1px"
        borderStyle="solid"
        borderColor="grey.100"
        borderBottom="none"
        mt={pxToRem(8)}
        mr={pxToRem(4)}
        px={pxToRem(20)}
        py={pxToRem(10)}
        fontSize={pxToRem(19)}
        lineHeight={pxToRem(25)}
        fontWeight="400"
        whiteSpace="nowrap"
        textDecoration="underline"
        textUnderlineOffset="0.1578em"
        textDecorationThickness="max(1px, 0.0625rem)"
        _hover={{
          color: 'brand.700',
          textDecorationThickness: 'max(3px, 0.1875rem)',
        }}
        _selected={{
          bg: 'common.white',
          color: 'grey.950',
          textDecoration: 'none',
          fontWeight: '700',
          mt: 0,
          pt: pxToRem(18),
          borderColor: 'grey.100',
          borderBottom: '1px solid',
          borderBottomColor: 'common.white',
        }}
        _focusVisible={{
          outline: '3px solid',
          outlineColor: 'yellow.500',
          outlineOffset: 0,
          bg: 'yellow.500',
          color: 'common.black',
          textDecorationThickness: 'max(3px, 0.1875rem)',
        }}
        {...props}
      />
    )
  }
)

const TabsContent = forwardRef<HTMLDivElement, TabsContentProps>(function TabsContent(props, ref) {
  return (
    <ChakraTabs.Content
      ref={ref}
      border="1px solid"
      borderColor="grey.100"
      p={{ base: pxToRem(16), md: pxToRem(24) }}
      mt={pxToRem(-1)}
      bg="common.white"
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
