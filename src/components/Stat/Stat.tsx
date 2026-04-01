import { Box, Stat as ChakraStat, VisuallyHidden, type HTMLChakraProps } from '@chakra-ui/react'
import {
  forwardRef,
  useEffect,
  useState,
  type ComponentPropsWithoutRef,
  type ForwardedRef,
  type JSX,
} from 'react'
import { Text } from '../Text'

export type StatProps = Omit<ComponentPropsWithoutRef<typeof ChakraStat.Root>, 'ref'> &
  HTMLChakraProps<'div'>
type StatLabelProps = ComponentPropsWithoutRef<typeof ChakraStat.Label>
type StatHelpTextProps = ComponentPropsWithoutRef<typeof ChakraStat.HelpText>
export interface StatValueTextProps extends Omit<
  ComponentPropsWithoutRef<typeof ChakraStat.ValueText>,
  'animationDuration'
> {
  value?: number
  animate?: boolean
  animationDuration?: number
  locales?: Intl.LocalesArgument
  formatOptions?: Intl.NumberFormatOptions
}

type StatComponent = typeof ChakraStat.Root &
  Omit<typeof ChakraStat, 'ValueText'> & {
    ValueText: typeof StatValueText
  }

const SLOT_MACHINE_LOOPS = 2
const DEFAULT_ANIMATION_DURATION = 500

function buildReelDigits(targetDigit: number) {
  const digits: Array<{ id: string; digit: string }> = []

  for (let loop = 0; loop < SLOT_MACHINE_LOOPS; loop += 1) {
    for (let digit = 0; digit < 10; digit += 1) {
      digits.push({ id: `loop-${loop}-${digit}`, digit: String(digit) })
    }
  }

  for (let digit = 0; digit <= targetDigit; digit += 1) {
    digits.push({ id: `final-${digit}`, digit: String(digit) })
  }

  return digits
}

function buildCharacterEntries(formattedValue: string, animationDuration: number) {
  const occurrences = new Map<string, number>()
  const digitCount = formattedValue.replace(/\D/g, '').length
  let digitPosition = 0

  return formattedValue.split('').map((character) => {
    const count = (occurrences.get(character) ?? 0) + 1
    occurrences.set(character, count)

    if (!/\d/.test(character)) {
      return {
        id: `char-${character}-${count}`,
        character,
        isDigit: false as const,
      }
    }

    const targetDigit = Number(character)
    const entry = {
      id: `digit-${character}-${count}`,
      character,
      isDigit: true as const,
      reelDigits: buildReelDigits(targetDigit),
      travel: SLOT_MACHINE_LOOPS * 10 + targetDigit,
      delay: Math.max(0, (digitCount - digitPosition - 1) * 70),
      duration: animationDuration,
    }

    digitPosition += 1

    return entry
  })
}

function AnimatedValueReels({
  formattedValue,
  animationDuration,
}: {
  formattedValue: string
  animationDuration: number
}) {
  const [isSpinning, setIsSpinning] = useState(false)

  useEffect(() => {
    return scheduleAnimationStart(() => {
      setIsSpinning(true)
    })
  }, [])

  const characterEntries = buildCharacterEntries(formattedValue, animationDuration)

  return (
    <>
      <VisuallyHidden>{formattedValue}</VisuallyHidden>
      <Box aria-hidden="true" display="inline-flex" alignItems="flex-end" lineHeight="1">
        {characterEntries.map((entry) => {
          if (!entry.isDigit) {
            return (
              <Text as="span" key={entry.id} display="inline-flex" alignItems="center">
                {entry.character}
              </Text>
            )
          }

          return (
            <Box
              key={entry.id}
              data-slot-reel=""
              display="inline-flex"
              overflow="hidden"
              h="1em"
              minW="0.72em"
              alignItems="flex-start"
              justifyContent="center"
            >
              <Text
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="flex-start"
                lineHeight="1"
                transform={isSpinning ? `translateY(-${entry.travel}em)` : 'translateY(0em)'}
                transitionProperty="transform"
                transitionDuration={`${entry.duration}ms`}
                transitionTimingFunction="linear"
                transitionDelay={`${entry.delay}ms`}
                willChange="transform"
              >
                {entry.reelDigits.map((digitEntry) => (
                  <Text
                    as="span"
                    key={digitEntry.id}
                    display="inline-flex"
                    alignItems="center"
                    justifyContent="center"
                    h="1em"
                    minW="0.72em"
                  >
                    {digitEntry.digit}
                  </Text>
                ))}
              </Text>
            </Box>
          )
        })}
      </Box>
    </>
  )
}

function scheduleAnimationStart(callback: () => void) {
  if (typeof window !== 'undefined' && typeof window.requestAnimationFrame === 'function') {
    let frame = 0
    let nextFrame = 0

    frame = window.requestAnimationFrame(() => {
      nextFrame = window.requestAnimationFrame(callback)
    })

    return () => {
      window.cancelAnimationFrame(frame)
      window.cancelAnimationFrame(nextFrame)
    }
  }

  const timeout = setTimeout(callback, 32)

  return () => clearTimeout(timeout)
}

export const StatRoot = forwardRef<HTMLDivElement, StatProps>(function StatRoot(props, ref) {
  const Root = ChakraStat.Root as unknown as (
    props: StatProps & { ref?: ForwardedRef<HTMLDivElement> }
  ) => JSX.Element

  return <Root ref={ref} as="div" {...props} />
})

export const StatLabel = forwardRef<HTMLElement, StatLabelProps>(function StatLabel(props, ref) {
  return <ChakraStat.Label ref={ref} as="span" {...props} />
})

export const StatHelpText = forwardRef<HTMLElement, StatHelpTextProps>(
  function StatHelpText(props, ref) {
    return <ChakraStat.HelpText ref={ref} as="span" {...props} />
  }
)

export const StatValueText = forwardRef<HTMLElement, StatValueTextProps>(function StatValueText(
  {
    value,
    animate = true,
    animationDuration = DEFAULT_ANIMATION_DURATION,
    locales,
    formatOptions,
    children,
    ...props
  },
  ref
) {
  const formattedValue =
    typeof value === 'number' ? new Intl.NumberFormat(locales, formatOptions).format(value) : null
  const shouldAnimate = animate && formattedValue !== null && children == null

  if (!shouldAnimate || formattedValue == null) {
    return (
      <ChakraStat.ValueText ref={ref} as="span" {...props}>
        {children ?? formattedValue ?? value}
      </ChakraStat.ValueText>
    )
  }

  return (
    <ChakraStat.ValueText ref={ref} as="span" {...props}>
      <AnimatedValueReels
        key={`${formattedValue}-${animationDuration}`}
        formattedValue={formattedValue}
        animationDuration={animationDuration}
      />
    </ChakraStat.ValueText>
  )
})

export const Stat: StatComponent = Object.assign(StatRoot as unknown as StatComponent, {
  ...ChakraStat,
  HelpText: StatHelpText,
  Label: StatLabel,
  Root: StatRoot,
  ValueText: StatValueText,
})
