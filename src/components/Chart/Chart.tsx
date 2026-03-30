import { Box, Flex, HStack, Separator, Span, Stack, Text } from '@chakra-ui/react'
import { fonts } from '@/theme/fonts'
import {
  Chart as ChakraChart,
  type ChartTooltipProps as ChakraChartTooltipProps,
  type UseChartReturn,
} from '@chakra-ui/charts'
import { isValidElement, type ComponentPropsWithoutRef, type ReactNode } from 'react'
import type { Payload } from 'recharts/types/component/DefaultTooltipContent'
import type { TooltipPayloadEntry } from 'recharts/types/state/tooltipSlice'
import { govukTypeScale } from '@/utils'

type GovukFontSize = keyof typeof govukTypeScale

export interface ChartRootProps<T> extends Omit<
  ComponentPropsWithoutRef<typeof ChakraChart.Root>,
  'chart'
> {
  chart: UseChartReturn<T>
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
          if (render) {
            return <Box key={index}>{render(item as Payload<string, string>)}</Box>
          }

          const formatted = formatter
            ? formatter(item.value, item.name)
            : item.value?.toLocaleString()
          const [formattedValue, formattedName] = Array.isArray(formatted)
            ? formatted
            : [formatted, item.name]

          return (
            <Flex key={index} gap="1.5" wrap="wrap" align="center">
              {!hideIndicator ? (
                <Box
                  boxSize="2"
                  rounded="full"
                  bg={item.color || 'border.emphasized'}
                  borderWidth="1px"
                  borderColor="blackAlpha.200"
                  flexShrink={0}
                />
              ) : null}
              <HStack justify="space-between" flex="1">
                {!hideSeriesLabel ? (
                  <Span color="fg.muted">{toRenderableValue(formattedName)}</Span>
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

function ChartRoot<T>({ fontFamily = 'body', fontSize = 16, ...props }: ChartRootProps<T>) {
  const scale =
    typeof fontSize === 'number' && fontSize in govukTypeScale
      ? govukTypeScale[fontSize as GovukFontSize]
      : null
  if (!scale) {
    console.warn(
      `[GOV.UK Chart] fontSize={${fontSize}} is not a valid GOV.UK type scale point. Use one of: 16, 19, 24, 27, 36, 48, 80.`
    )
  } else {
    return (
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
    )
  }
}

export { ChartRoot }

export const Chart = Object.assign(ChartRoot, {
  ...ChakraChart,
  Root: ChartRoot,
  Tooltip: ChartTooltip,
})
