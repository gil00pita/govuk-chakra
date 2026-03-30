import { getGovukTypeScale } from '@/utils'
import { BarSegment as ChakraBarSegment } from '@chakra-ui/charts'
import type { ComponentPropsWithoutRef } from 'react'

export type BarSegmentProps = ComponentPropsWithoutRef<typeof ChakraBarSegment.Root>
export type BarSegmentContentProps = ComponentPropsWithoutRef<typeof ChakraBarSegment.Content>
export type BarSegmentLabelProps = ComponentPropsWithoutRef<typeof ChakraBarSegment.Label>
export type BarSegmentBarProps = ComponentPropsWithoutRef<typeof ChakraBarSegment.Bar>
export type BarSegmentReferenceProps = ComponentPropsWithoutRef<typeof ChakraBarSegment.Reference>
export type BarSegmentValueProps = ComponentPropsWithoutRef<typeof ChakraBarSegment.Value>
export type BarSegmentLegendProps = ComponentPropsWithoutRef<typeof ChakraBarSegment.Legend>
export type BarSegmentTooltipProps = ComponentPropsWithoutRef<typeof ChakraBarSegment.Tooltip>

type BarSegmentComponent = typeof BarSegmentRoot & {
  Root: typeof BarSegmentRoot
  Content: typeof BarSegmentContent
  Label: typeof BarSegmentLabel
  Bar: typeof BarSegmentBar
  Reference: typeof BarSegmentReference
  Value: typeof BarSegmentValue
  Legend: typeof BarSegmentLegend
  Tooltip: typeof BarSegmentTooltip
}

const BarSegmentRoot = ({ fontFamily = 'body', ...props }: BarSegmentProps) => {
  return <ChakraBarSegment.Root fontFamily={fontFamily} {...props} />
}

const BarSegmentContent = (props: BarSegmentContentProps) => {
  return <ChakraBarSegment.Content {...props} />
}

const BarSegmentLabel = ({ fontSize = 16, children, ...props }: BarSegmentLabelProps) => {
  const scale = getGovukTypeScale(fontSize)

  if (scale) {
    return (
      <ChakraBarSegment.Label
        {...props}
        className="labels"
        css={{
          '& > div': {
            color: 'fg.muted',
            fontSize: { base: scale.small.fontSize, md: scale.large.fontSize },
            lineHeight: { base: scale.small.lineHeight, md: scale.large.lineHeight },
            fontWeight: '700',
          },
        }}
      >
        {children}
      </ChakraBarSegment.Label>
    )
  }
}

const BarSegmentBar = (props: BarSegmentBarProps) => {
  return <ChakraBarSegment.Bar {...props} />
}

const BarSegmentReference = (props: BarSegmentReferenceProps) => {
  return <ChakraBarSegment.Reference {...props} />
}

const BarSegmentValue = ({ fontSize = 16, children, ...props }: BarSegmentValueProps) => {
  const scale = getGovukTypeScale(fontSize)
  if (scale) {
    return (
      <ChakraBarSegment.Value
        {...props}
        className="values"
        css={{
          '& > div': {
            color: 'fg.muted',
            fontSize: { base: scale.small.fontSize, md: scale.large.fontSize },
            lineHeight: { base: scale.small.lineHeight, md: scale.large.lineHeight },
          },
        }}
      >
        {children}
      </ChakraBarSegment.Value>
    )
  }
}

const BarSegmentLegend = (props: BarSegmentLegendProps) => {
  return <ChakraBarSegment.Legend {...props} className="legend" />
}

const BarSegmentTooltip = (props: BarSegmentTooltipProps) => {
  return <ChakraBarSegment.Tooltip {...props} />
}

export {
  BarSegmentRoot,
  BarSegmentContent,
  BarSegmentLabel,
  BarSegmentBar,
  BarSegmentReference,
  BarSegmentValue,
  BarSegmentLegend,
  BarSegmentTooltip,
}

export const BarSegment: BarSegmentComponent = Object.assign(BarSegmentRoot, {
  Root: BarSegmentRoot,
  Content: BarSegmentContent,
  Label: BarSegmentLabel,
  Bar: BarSegmentBar,
  Reference: BarSegmentReference,
  Value: BarSegmentValue,
  Legend: BarSegmentLegend,
  Tooltip: BarSegmentTooltip,
})
