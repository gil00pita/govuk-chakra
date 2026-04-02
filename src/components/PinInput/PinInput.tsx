import { PinInput as ChakraPinInput } from '@chakra-ui/react'
import {
  createContext,
  forwardRef,
  useContext,
  useRef,
  useState,
  type ComponentPropsWithoutRef,
} from 'react'
import { Text } from '../Text'

export type PinInputProps = ComponentPropsWithoutRef<typeof ChakraPinInput.Root>
export type PinInputInputProps = ComponentPropsWithoutRef<typeof ChakraPinInput.Input>
type PinInputComponent = typeof PinInputRoot & Omit<typeof ChakraPinInput, 'Root' | 'Input'>
type PinInputComposite = PinInputComponent & {
  Root: typeof PinInputRoot
  Input: typeof PinInputInput
}

const CUSTOM_MASK_SYMBOL = '🞶'
const DEFAULT_PLACEHOLDER = '◇'

const PinInputMaskContext = createContext(false)

export const PinInputRoot = forwardRef<HTMLDivElement, PinInputProps>(function PinInputRoot(
  { mask, placeholder = DEFAULT_PLACEHOLDER, ...props },
  ref
) {
  const useCustomMask = Boolean(mask)

  return (
    <PinInputMaskContext.Provider value={useCustomMask}>
      <ChakraPinInput.Root ref={ref} mask={false} placeholder={placeholder} {...props} />
    </PinInputMaskContext.Provider>
  )
})

export const PinInputInput = forwardRef<HTMLInputElement, PinInputInputProps>(
  function PinInputInput({ onChange, onInput, style, ...props }, ref) {
    const useCustomMask = useContext(PinInputMaskContext)
    const inputRef = useRef<HTMLInputElement | null>(null)
    const [hasValue, setHasValue] = useState(false)

    return (
      <Text
        as="span"
        css={{
          position: 'relative',
          display: 'inline-flex',
        }}
      >
        <ChakraPinInput.Input
          {...props}
          ref={(node) => {
            inputRef.current = node

            if (typeof ref === 'function') {
              ref(node)
              return
            }

            if (ref) {
              ref.current = node
            }
          }}
          type="text"
          style={
            useCustomMask
              ? {
                  ...style,
                  color: 'transparent',
                  caretColor: 'currentColor',
                }
              : style
          }
          onInput={(event) => {
            setHasValue(Boolean(event.currentTarget.value))
            onInput?.(event)
          }}
          onChange={(event) => {
            setHasValue(Boolean(event.currentTarget.value))
            onChange?.(event)
          }}
        />
        {useCustomMask && hasValue ? (
          <Text
            as="span"
            aria-hidden="true"
            css={{
              position: 'absolute',
              inset: 0,
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              pointerEvents: 'none',
            }}
          >
            {CUSTOM_MASK_SYMBOL}
          </Text>
        ) : null}
      </Text>
    )
  }
)

export const PinInput: PinInputComposite = Object.assign(PinInputRoot, {
  ...ChakraPinInput,
  Root: PinInputRoot,
  Input: PinInputInput,
})
