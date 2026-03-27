import { BarList as ChakraBarList } from '@chakra-ui/charts'
import { AbsoluteCenter, Box, Flex, HStack, Show, Stack, Text } from '@chakra-ui/react'
import {
  createContext,
  useCallback,
  useContext,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from 'react'

type BarListChart = ComponentPropsWithoutRef<typeof ChakraBarList.Root>['chart']

const BarListChartContext = createContext<BarListChart | null>(null)

function useBarListChart() {
  const chart = useContext(BarListChartContext)

  if (!chart) {
    throw new Error('BarList components must be rendered inside BarList.Root')
  }

  return chart
}

export type BarListProps = ComponentPropsWithoutRef<typeof ChakraBarList.Root>

export const BarListRoot = ({
  chart,
  barSize = '10',
  children,
  ...rest
}: BarListProps) => {
  return (
    <Box {...rest} css={{ '--bar-size': chart.size(barSize) }}>
      <BarListChartContext.Provider value={chart}>{children}</BarListChartContext.Provider>
    </Box>
  )
}

const BarListTitle = (props: ComponentPropsWithoutRef<typeof ChakraBarList.Title>) => {
  return <HStack textStyle="md" mb="4" fontWeight="medium" {...props} />
}

const BarListContent = (props: ComponentPropsWithoutRef<typeof ChakraBarList.Content>) => {
  return <Flex flexWrap="nowrap" align="flex-end" gap="4" {...props} />
}

const BarListTooltip = ({
  payload,
  labelFormatter,
  ...rest
}: ComponentPropsWithoutRef<typeof ChakraBarList.Tooltip>) => {
  const chart = useBarListChart()
  const formatter = labelFormatter || chart.formatNumber({ style: 'decimal' })

  if (!payload || chart.highlightedSeries !== payload.name) return null

  return (
    <AbsoluteCenter
      display={{ base: 'none', _groupHover: 'block' }}
      axis="vertical"
      right="2"
      zIndex="1"
      textStyle="xs"
      fontWeight="medium"
      bg="bg.panel"
      px="1.5"
      py="1"
      rounded="l2"
      shadow="xs"
      pointerEvents="none"
      {...rest}
    >
      {formatter(payload.value)}
    </AbsoluteCenter>
  )
}

const BarListBar = ({
  label,
  tooltip,
  ...rest
}: ComponentPropsWithoutRef<typeof ChakraBarList.Bar>) => {
  const chart = useBarListChart()
  const primarySeries = chart.series[0]

  const getPercent = useCallback(
    (value: number) => chart.getValuePercent('value', value, (domain) => [0, domain.max]),
    [chart],
  )

  const getBarColor = useCallback(
    (item: { name: string; color?: string }) => {
      const configuredColor =
        chart.getSeries(item)?.color ??
        chart.getSeries({ name: item.name })?.color ??
        primarySeries?.color ??
        item.color

      return configuredColor ? chart.color(configuredColor) : chart.color('blue.500')
    },
    [chart, primarySeries?.color],
  )

  return (
    <Stack flex="1" {...rest}>
      {chart.data.map((item, index) => (
        <HStack
          key={item.name}
          flex={1}
          minH="var(--bar-size)"
          w="full"
          gap="8"
          _hover={{ bg: 'bg.subtle' }}
          onMouseMove={() => {
            if (!tooltip) return
            if (chart.highlightedSeries === item.name) return
            chart.setHighlightedSeries(item.name)
          }}
          onMouseLeave={() => {
            if (!tooltip) return
            chart.setHighlightedSeries(null)
          }}
        >
          <Box pos="relative" flex="1" className="group">
            {typeof tooltip === 'function' ? tooltip({ payload: item }) : null}
            {typeof tooltip === 'boolean' && tooltip ? <BarListTooltip payload={item} /> : null}
            <Box
              pos="absolute"
              insetStart="0"
              top="0"
              bottom="0"
              bg={getBarColor(item)}
              rounded="l2"
              width="var(--bar-width)"
              style={{ ['--bar-width' as string]: `${getPercent(item.value)}%` }}
            />
            <HStack
              flex="1"
              justify="flex-start"
              textStyle="sm"
              pos="relative"
              wordBreak="break-all"
              w="full"
              minH="var(--bar-size)"
              px="2.5"
            >
              <Show when={label} fallback={item.name}>
                {label?.({ payload: item, index }) as ReactNode}
              </Show>
            </HStack>
          </Box>
        </HStack>
      ))}
    </Stack>
  )
}

const BarListValue = ({
  valueFormatter,
  ...rest
}: ComponentPropsWithoutRef<typeof ChakraBarList.Value>) => {
  const chart = useBarListChart()
  const formatter =
    valueFormatter ||
    chart.formatNumber({
      notation: 'compact',
      maximumFractionDigits: 2,
    })

  return (
    <Stack {...rest}>
      {chart.data.map((item) => (
        <HStack
          key={item.name}
          minH="var(--bar-size)"
          justify="flex-end"
          textStyle="sm"
          fontWeight="medium"
        >
          {formatter(item.value)}
        </HStack>
      ))}
    </Stack>
  )
}

const BarListLabel = ({
  title,
  titleAlignment,
  children,
  ...rest
}: ComponentPropsWithoutRef<typeof ChakraBarList.Label>) => {
  return (
    <Stack {...rest}>
      <Text textStyle="xs" fontWeight="medium" color="fg.muted" textAlign={titleAlignment}>
        {title}
      </Text>
      {children}
    </Stack>
  )
}

export const BarList = Object.assign(BarListRoot, {
  Root: BarListRoot,
  Title: BarListTitle,
  Content: BarListContent,
  Tooltip: BarListTooltip,
  Bar: BarListBar,
  Value: BarListValue,
  Label: BarListLabel,
})
