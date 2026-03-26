import {
  CodeBlock as ChakraCodeBlock,
  ClientOnly,
  Skeleton,
  type SystemStyleObject,
} from '@chakra-ui/react'
import { forwardRef, type ComponentPropsWithoutRef, type ElementRef, type ReactNode } from 'react'
import { LuCheck, LuClipboard } from 'react-icons/lu'

import { pxToRem, shikiAdapter } from '@/utils'
import { Button, type ButtonProps } from '@/components/Button'
import { useColorMode } from '@/components/ui/color-mode'

export type CodeBlockProps = ComponentPropsWithoutRef<typeof ChakraCodeBlock.Root>
export type CodeBlockHeaderProps = ComponentPropsWithoutRef<typeof ChakraCodeBlock.Header>
export type CodeBlockTitleProps = ComponentPropsWithoutRef<typeof ChakraCodeBlock.Title>
export type CodeBlockContentProps = ComponentPropsWithoutRef<typeof ChakraCodeBlock.Content>
export type CodeBlockCodeProps = ComponentPropsWithoutRef<typeof ChakraCodeBlock.Code>
export type CodeBlockCodeTextProps = ComponentPropsWithoutRef<typeof ChakraCodeBlock.CodeText>
export type CodeBlockControlProps = ComponentPropsWithoutRef<typeof ChakraCodeBlock.Control>
export type CodeBlockCopyTriggerProps = ComponentPropsWithoutRef<typeof ChakraCodeBlock.CopyTrigger>
export type CodeBlockCopyIndicatorProps = ComponentPropsWithoutRef<
  typeof ChakraCodeBlock.CopyIndicator
>
export type CodeBlockOverlayProps = ComponentPropsWithoutRef<typeof ChakraCodeBlock.Overlay>
export type CodeBlockCollapseTriggerProps = ComponentPropsWithoutRef<
  typeof ChakraCodeBlock.CollapseTrigger
>
export type CodeBlockCollapseIndicatorProps = ComponentPropsWithoutRef<
  typeof ChakraCodeBlock.CollapseIndicator
>
export type CodeBlockCollapseTextProps = ComponentPropsWithoutRef<
  typeof ChakraCodeBlock.CollapseText
>

export interface CodeBlockCopyButtonProps extends Omit<ButtonProps, 'children'> {
  copyLabel?: ReactNode
  copiedLabel?: ReactNode
}

const headerStyles: SystemStyleObject = {
  minH: pxToRem(48),
  px: pxToRem(16),
  py: pxToRem(10),
  borderBottomWidth: '1px',
  borderColor: 'border',
  bg: 'bg.subtle',
  gap: pxToRem(12),
}

const contentStyles: SystemStyleObject = {
  position: 'relative',
  overflowX: 'auto',
  bg: 'bg',
}

const codeStyles: SystemStyleObject = {
  display: 'block',
  w: '100%',
  px: pxToRem(16),
  py: pxToRem(16),
  fontSize: pxToRem(16),
  lineHeight: '1.6',
}

const CodeBlockRoot = forwardRef<ElementRef<typeof ChakraCodeBlock.Root>, CodeBlockProps>(
  function CodeBlockRoot(props, ref) {
    const { colorMode } = useColorMode()
    return (
      <ChakraCodeBlock.AdapterProvider value={shikiAdapter}>
        <ClientOnly fallback={<Skeleton height="200px" />}>
          {() => (
            <ChakraCodeBlock.Root
              ref={ref}
              meta={{ colorScheme: colorMode }}
              bg="bg"
              color="fg"
              borderWidth="1px"
              borderColor="border"
              borderRadius="0"
              overflow="hidden"
              className="code-block"
              {...props}
            />
          )}
        </ClientOnly>
      </ChakraCodeBlock.AdapterProvider>
    )
  }
)

const CodeBlockHeader = forwardRef<ElementRef<typeof ChakraCodeBlock.Header>, CodeBlockHeaderProps>(
  function CodeBlockHeader(props, ref) {
    return <ChakraCodeBlock.Header ref={ref} mb={0} {...headerStyles} {...props} />
  }
)

const CodeBlockTitle = forwardRef<ElementRef<typeof ChakraCodeBlock.Title>, CodeBlockTitleProps>(
  function CodeBlockTitle(props, ref) {
    return (
      <ChakraCodeBlock.Title
        ref={ref}
        fontSize={pxToRem(16)}
        fontWeight="700"
        color="fg"
        {...props}
      />
    )
  }
)

const CodeBlockControl = forwardRef<
  ElementRef<typeof ChakraCodeBlock.Control>,
  CodeBlockControlProps
>(function CodeBlockControl(props, ref) {
  return <ChakraCodeBlock.Control ref={ref} gap={pxToRem(8)} {...props} />
})

const CodeBlockContent = forwardRef<
  ElementRef<typeof ChakraCodeBlock.Content>,
  CodeBlockContentProps
>(function CodeBlockContent(props, ref) {
  return <ChakraCodeBlock.Content ref={ref} {...contentStyles} {...props} />
})

const CodeBlockCode = forwardRef<ElementRef<typeof ChakraCodeBlock.Code>, CodeBlockCodeProps>(
  function CodeBlockCode(props, ref) {
    return <ChakraCodeBlock.Code ref={ref} fontFamily="mono" {...codeStyles} {...props} />
  }
)

const CodeBlockCodeText = forwardRef<
  ElementRef<typeof ChakraCodeBlock.CodeText>,
  CodeBlockCodeTextProps
>(function CodeBlockCodeText(props, ref) {
  return <ChakraCodeBlock.CodeText ref={ref} {...props} />
})

const CodeBlockCopyTrigger = forwardRef<
  ElementRef<typeof ChakraCodeBlock.CopyTrigger>,
  CodeBlockCopyTriggerProps
>(function CodeBlockCopyTrigger(props, ref) {
  return <ChakraCodeBlock.CopyTrigger ref={ref} {...props} />
})

const CodeBlockCopyIndicator = forwardRef<
  ElementRef<typeof ChakraCodeBlock.CopyIndicator>,
  CodeBlockCopyIndicatorProps
>(function CodeBlockCopyIndicator(props, ref) {
  return (
    <ChakraCodeBlock.CopyIndicator ref={ref} copied={<LuCheck />} {...props}>
      <LuClipboard />
    </ChakraCodeBlock.CopyIndicator>
  )
})

const CodeBlockCopyButton = forwardRef<HTMLButtonElement, CodeBlockCopyButtonProps>(
  function CodeBlockCopyButton(
    {
      copiedLabel = 'Copied',
      copyLabel = 'Copy code',
      size = 'xs',
      variant = 'secondary',
      ...props
    },
    ref
  ) {
    return (
      <CodeBlockCopyTrigger asChild>
        <Button
          ref={ref}
          size={size}
          variant={variant}
          color="fg"
          h="auto"
          minW="unset"
          px={pxToRem(10)}
          py={pxToRem(6)}
          gap={pxToRem(6)}
          {...props}
        >
          <CodeBlockCopyIndicator />
          <ChakraCodeBlock.CopyIndicator copied={copiedLabel}>
            {copyLabel}
          </ChakraCodeBlock.CopyIndicator>
        </Button>
      </CodeBlockCopyTrigger>
    )
  }
)

const CodeBlockOverlay = forwardRef<
  ElementRef<typeof ChakraCodeBlock.Overlay>,
  CodeBlockOverlayProps
>(function CodeBlockOverlay(props, ref) {
  return <ChakraCodeBlock.Overlay ref={ref} {...props} />
})

const CodeBlockCollapseTrigger = forwardRef<
  ElementRef<typeof ChakraCodeBlock.CollapseTrigger>,
  CodeBlockCollapseTriggerProps
>(function CodeBlockCollapseTrigger(props, ref) {
  return <ChakraCodeBlock.CollapseTrigger ref={ref} {...props} />
})

const CodeBlockCollapseIndicator = forwardRef<
  ElementRef<typeof ChakraCodeBlock.CollapseIndicator>,
  CodeBlockCollapseIndicatorProps
>(function CodeBlockCollapseIndicator(props, ref) {
  return <ChakraCodeBlock.CollapseIndicator ref={ref} {...props} />
})

const CodeBlockCollapseText = forwardRef<
  ElementRef<typeof ChakraCodeBlock.CollapseText>,
  CodeBlockCollapseTextProps
>(function CodeBlockCollapseText(props, ref) {
  return <ChakraCodeBlock.CollapseText ref={ref} {...props} />
})

export const CodeBlock = Object.assign(CodeBlockRoot, {
  Root: CodeBlockRoot,
  Header: CodeBlockHeader,
  Title: CodeBlockTitle,
  Control: CodeBlockControl,
  Content: CodeBlockContent,
  Code: CodeBlockCode,
  CodeText: CodeBlockCodeText,
  CopyTrigger: CodeBlockCopyTrigger,
  CopyIndicator: CodeBlockCopyIndicator,
  CopyButton: CodeBlockCopyButton,
  Overlay: CodeBlockOverlay,
  CollapseTrigger: CodeBlockCollapseTrigger,
  CollapseIndicator: CodeBlockCollapseIndicator,
  CollapseText: CodeBlockCollapseText,
})

export {
  CodeBlockRoot,
  CodeBlockHeader,
  CodeBlockTitle,
  CodeBlockControl,
  CodeBlockContent,
  CodeBlockCode,
  CodeBlockCodeText,
  CodeBlockCopyTrigger,
  CodeBlockCopyIndicator,
  CodeBlockCopyButton,
  CodeBlockOverlay,
  CodeBlockCollapseTrigger,
  CodeBlockCollapseIndicator,
  CodeBlockCollapseText,
}
