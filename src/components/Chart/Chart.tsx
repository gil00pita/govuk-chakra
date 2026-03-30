import { Box, Flex, HStack, Separator, Span, Stack } from '@chakra-ui/react'
import { fonts } from '@/theme/fonts'
import {
  Chart as ChakraChart,
  type ChartLegendProps as ChakraChartLegendProps,
  type ChartTooltipProps as ChakraChartTooltipProps,
  type UseChartReturn,
} from '@chakra-ui/charts'
import {
  createContext,
  isValidElement,
  useContext,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from 'react'
import { Legend as RechartsLegend, Tooltip as RechartsTooltip } from 'recharts'
import type { Payload } from 'recharts/types/component/DefaultTooltipContent'
import type { TooltipPayloadEntry } from 'recharts/types/state/tooltipSlice'
import { getGovukTypeScale } from '@/utils'
import { Text } from '../Text'

export interface ChartRootProps<T> extends Omit<
  ComponentPropsWithoutRef<typeof ChakraChart.Root>,
  'chart'
> {
  chart: UseChartReturn<T>
}

export type ChartRechartsTooltipProps = Omit<
  ComponentPropsWithoutRef<typeof RechartsTooltip>,
  'content'
> &
  ChakraChartTooltipProps

export interface ChartLegendContentProps extends ChakraChartLegendProps {
  rootProps?: ComponentPropsWithoutRef<typeof Stack>
  itemProps?: ComponentPropsWithoutRef<typeof HStack>
  labelProps?: ComponentPropsWithoutRef<typeof Span>
  indicatorProps?: ComponentPropsWithoutRef<typeof Box>
}

export type ChartRechartsLegendProps = Omit<
  ComponentPropsWithoutRef<typeof RechartsLegend>,
  'content'
> &
  ChartLegendContentProps

const ChartContext = createContext<UseChartReturn<unknown> | null>(null)

function useGovukChartContext() {
  const chart = useContext(ChartContext)

  if (!chart) {
    throw new Error('Chart components must be rendered inside Chart.Root')
  }

  return chart
}

function getPayloadProp(item: TooltipPayloadEntry | undefined, key?: string) {
  if (!item || !key || typeof item.payload !== 'object' || item.payload === null) {
    return undefined
  }

  const payload = item.payload as Record<string, unknown>
  return payload[key]
}

function toRenderableValue(value: unknown): ReactNode {
  if (value == null) {
    return ''
  }

  if (isValidElement(value)) {
    return value
  }

  if (typeof value === 'string' || typeof value === 'number') {
    return value
  }

  if (typeof value === 'boolean' || typeof value === 'bigint') {
    return String(value)
  }

  if (Array.isArray(value)) {
    return value.join(', ')
  }

  return String(value)
}

function capitalizeLabel(value: unknown) {
  if (typeof value !== 'string' || value.length === 0) {
    return value
  }

  return value.charAt(0).toUpperCase() + value.slice(1)
}

function ChartTooltip({
  payload: payloadProp,
  label,
  labelFormatter,
  hideLabel,
  hideIndicator,
  hideSeriesLabel,
  showTotal,
  fitContent,
  nameKey,
  formatter,
  render,
}: ChakraChartTooltipProps) {
  const chart = useGovukChartContext()
  const payload = payloadProp?.filter((item) => item.color !== 'none' || item.type !== 'none')

  if (!payload?.length) {
    return null
  }

  const callbackPayload = payload as Array<Payload<string | number, string>>
  const firstItem = payload[0]
  const rawLabel = getPayloadProp(firstItem, nameKey) ?? label ?? firstItem?.dataKey ?? 'value'
  const tooltipLabel = toRenderableValue(
    labelFormatter?.(String(rawLabel), callbackPayload) ?? rawLabel
  )
  const total = payload.reduce((sum, item) => {
    return typeof item.value === 'number' ? sum + item.value : sum
  }, 0)

  return (
    <Stack
      minW={fitContent ? undefined : '8rem'}
      gap="1"
      rounded="l2"
      bg="bg.panel"
      px="2.5"
      py="1"
      textStyle="xs"
      shadow="md"
    >
      {!hideLabel ? <Text fontWeight="medium">{tooltipLabel}</Text> : null}
      <Box>
        {payload.map((item, index) => {
          const config = chart.getSeries(item)

          if (render) {
            return <Box key={index}>{render(item as Payload<string, string>)}</Box>
          }

          const formatted = formatter
            ? formatter(item.value, item.name)
            : item.value?.toLocaleString()
          const [formattedValue, formattedName] = Array.isArray(formatted)
            ? formatted
            : [formatted, capitalizeLabel(item.name)]

          return (
            <Flex key={index} gap="1.5" wrap="wrap" align="center">
              {!hideIndicator ? (
                config?.color ? (
                  <Box
                    boxSize="2"
                    rounded="full"
                    bg={chart.color(config.color)}
                    borderWidth="1px"
                    borderColor="blackAlpha.200"
                    flexShrink={0}
                  />
                ) : (
                  <Box
                    boxSize="2"
                    rounded="full"
                    bg="border.emphasized"
                    borderWidth="1px"
                    borderColor="blackAlpha.200"
                    flexShrink={0}
                  />
                )
              ) : null}
              <HStack justify="space-between" flex="1">
                {!hideSeriesLabel ? (
                  <Text color="fg.muted">{toRenderableValue(formattedName)}</Text>
                ) : null}
                {item.value != null ? (
                  <Text fontFamily="mono" fontWeight="medium" fontVariantNumeric="tabular-nums">
                    {toRenderableValue(formattedValue)}
                  </Text>
                ) : null}
              </HStack>
            </Flex>
          )
        })}
      </Box>
      {showTotal ? (
        <>
          <Separator mt="1" />
          <HStack gap="1" justify="space-between" pb="1">
            <Span color="fg.muted">Total</Span>
            <Text fontFamily="mono" fontWeight="medium" fontVariantNumeric="tabular-nums">
              {formatter
                ? (() => {
                    const formatted = formatter(total, '')
                    return Array.isArray(formatted) ? formatted[0] : formatted
                  })()
                : total.toLocaleString()}
            </Text>
          </HStack>
        </>
      ) : null}
    </Stack>
  )
}

function ChartLegendContent({
  payload,
  verticalAlign = 'bottom',
  align = 'center',
  title,
  orientation,
  nameKey,
  spacing = '3',
  interaction = 'hover',
  rootProps,
  itemProps,
  labelProps,
  indicatorProps,
}: ChartLegendContentProps) {
  const chart = useGovukChartContext()
  const filteredPayload = payload?.filter((item) => item.color !== 'none' || item.type !== 'none')

  if (!filteredPayload?.length) {
    return null
  }

  const spacingValue = typeof spacing === 'number' ? `${spacing}px` : chart.spacing(spacing)
  const alignMap = {
    left: 'flex-start',
    center: 'center',
    right: 'flex-end',
  } as const

  return (
    <Stack
      gap="1.5"
      align={alignMap[align]}
      pt={verticalAlign === 'bottom' ? '3' : undefined}
      pb={verticalAlign === 'top' ? '3' : undefined}
      {...rootProps}
    >
      {title ? <Text fontWeight="medium">{title}</Text> : null}
      <Flex
        data-orientation={orientation}
        gap={spacingValue}
        direction={{ _horizontal: 'row', _vertical: 'column' }}
        align={{ _horizontal: 'center', _vertical: 'flex-start' }}
        flexWrap="wrap"
      >
        {filteredPayload.map((item, index) => {
          const config = chart.getSeries(item)
          const seriesName =
            config?.name == null
              ? undefined
              : typeof config.name === 'string'
                ? config.name
                : String(config.name)
          const name = getPayloadProp(item as TooltipPayloadEntry, nameKey)
          const label = capitalizeLabel(name ?? config?.label)

          return (
            <HStack
              key={index}
              gap="1.5"
              style={{ opacity: chart.getSeriesOpacity(seriesName, 0.6) }}
              onClick={() => {
                if (interaction === 'click' && seriesName) {
                  chart.setHighlightedSeries((prev) => (prev === seriesName ? null : seriesName))
                }
              }}
              onMouseEnter={() => {
                if (interaction === 'hover' && seriesName) {
                  chart.setHighlightedSeries(seriesName)
                }
              }}
              onMouseLeave={() => {
                if (interaction === 'hover' && seriesName) {
                  chart.setHighlightedSeries(null)
                }
              }}
              {...itemProps}
            >
              {config?.icon ? (
                config.icon
              ) : (
                <Box
                  boxSize="2"
                  rounded="full"
                  bg={config?.color ? chart.color(config.color) : 'border.emphasized'}
                  borderWidth="1px"
                  borderColor="blackAlpha.200"
                  flexShrink={0}
                  {...indicatorProps}
                />
              )}
              <Span color="fg.muted" {...labelProps}>
                {toRenderableValue(label)}
              </Span>
            </HStack>
          )
        })}
      </Flex>
    </Stack>
  )
}

function ChartLegend(props: ChartRechartsLegendProps) {
  const {
    rootProps,
    itemProps,
    labelProps,
    indicatorProps,
    title,
    nameKey,
    interaction,
    spacing,
    payload,
    align,
    verticalAlign,
    layout,
    ...legendProps
  } = props

  return (
    <RechartsLegend
      {...legendProps}
      align={align}
      verticalAlign={verticalAlign}
      layout={layout}
      content={
        <ChartLegendContent
          rootProps={rootProps}
          itemProps={itemProps}
          labelProps={labelProps}
          indicatorProps={indicatorProps}
          title={title}
          nameKey={nameKey}
          interaction={interaction}
          spacing={spacing}
          payload={payload}
          align={align}
          verticalAlign={verticalAlign}
          layout={layout}
        />
      }
    />
  )
}

function ChartRechartsTooltip(props: ChartRechartsTooltipProps) {
  return <RechartsTooltip {...props} content={<ChartTooltip {...props} />} />
}

function ChartRoot<T>({ fontFamily = 'body', fontSize = 16, ...props }: ChartRootProps<T>) {
  const scale = getGovukTypeScale(fontSize)
  if (!scale) {
    console.warn(
      `[GOV.UK Chart] fontSize={${fontSize}} is not a valid GOV.UK type scale point. Use one of: 16, 19, 24, 27, 36, 48, 80.`
    )
  } else {
    return (
      <ChartContext.Provider value={props.chart as UseChartReturn<unknown>}>
        <ChakraChart.Root
          fontFamily={fontFamily}
          css={{
            '& svg.recharts-surface tspan': {
              fontSize: { base: scale.small.fontSize, md: scale.large.fontSize },
              lineHeight: { base: scale.small.lineHeight, md: scale.large.lineHeight },
              color: 'fg',
              fontFamily: fonts.body.value,
            },
            '& .recharts-tooltip-wrapper': {
              background: 'var(--govuk-colors-bg)',
              borderRadius: 'var(--govuk-radii-l2)',
            },
          }}
          {...props}
        />
      </ChartContext.Provider>
    )
  }
}

export { ChartRoot }

export const Chart = Object.assign(ChartRoot, {
  ...ChakraChart,
  Root: ChartRoot,
  Legend: ChartLegend,
  LegendContent: ChartLegendContent,
  Tooltip: ChartRechartsTooltip,
  TooltipContent: ChartTooltip,
})
