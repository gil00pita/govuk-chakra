import { Stat as ChakraStat, VisuallyHidden, chakra } from '@chakra-ui/react'
import { forwardRef, useEffect, useState, type ComponentPropsWithoutRef } from 'react'

export type StatProps = ComponentPropsWithoutRef<typeof ChakraStat.Root>
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
const DEFAULT_ANIMATION_DURATION = 1400

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
    return scheduleFrame(() => {
      setIsSpinning(true)
    })
  }, [])

  const characterEntries = buildCharacterEntries(formattedValue, animationDuration)

  return (
    <>
      <VisuallyHidden>{formattedValue}</VisuallyHidden>
      <chakra.span aria-hidden="true" display="inline-flex" alignItems="flex-end" lineHeight="1">
        {characterEntries.map((entry) => {
          if (!entry.isDigit) {
            return (
              <chakra.span key={entry.id} display="inline-flex" alignItems="center">
                {entry.character}
              </chakra.span>
            )
          }

          return (
            <chakra.span
              key={entry.id}
              data-slot-reel=""
              display="inline-flex"
              overflow="hidden"
              h="1em"
              minW="0.72em"
              alignItems="flex-start"
              justifyContent="center"
            >
              <chakra.span
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="flex-start"
                lineHeight="1"
                transform={isSpinning ? `translateY(-${entry.travel}em)` : 'translateY(0em)'}
                transitionProperty="transform"
                transitionDuration={`${entry.duration}ms`}
                transitionTimingFunction="cubic-bezier(0.18, 0.88, 0.24, 1)"
                transitionDelay={`${entry.delay}ms`}
                willChange="transform"
              >
                {entry.reelDigits.map((digitEntry) => (
                  <chakra.span
                    key={digitEntry.id}
                    display="inline-flex"
                    alignItems="center"
                    justifyContent="center"
                    h="1em"
                    minW="0.72em"
                  >
                    {digitEntry.digit}
                  </chakra.span>
                ))}
              </chakra.span>
            </chakra.span>
          )
        })}
      </chakra.span>
    </>
  )
}

function scheduleFrame(callback: () => void) {
  if (typeof window !== 'undefined' && typeof window.requestAnimationFrame === 'function') {
    const frame = window.requestAnimationFrame(callback)

    return () => window.cancelAnimationFrame(frame)
  }

  const timeout = setTimeout(callback, 16)

  return () => clearTimeout(timeout)
}

export const StatRoot = ChakraStat.Root
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
      <ChakraStat.ValueText ref={ref} {...props}>
        {children ?? formattedValue ?? value}
      </ChakraStat.ValueText>
    )
  }

  return (
    <ChakraStat.ValueText ref={ref} {...props}>
      <AnimatedValueReels
        key={`${formattedValue}-${animationDuration}`}
        formattedValue={formattedValue}
        animationDuration={animationDuration}
      />
    </ChakraStat.ValueText>
  )
})

export const Stat: StatComponent = Object.assign(ChakraStat.Root, {
  ...ChakraStat,
  ValueText: StatValueText,
})
