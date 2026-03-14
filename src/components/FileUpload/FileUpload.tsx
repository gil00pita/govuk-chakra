import { Box, chakra, type BoxProps, type InputProps } from '@chakra-ui/react'
import {
  createContext,
  forwardRef,
  useEffect,
  useContext,
  useId,
  useMemo,
  useRef,
  useState,
  type ChangeEvent,
  type ComponentProps,
  type Dispatch,
  type DragEvent,
  type ReactNode,
  type Ref,
  type RefObject,
  type SetStateAction,
} from 'react'

import { Button, ButtonProps } from '@/components/Button'
import { Text } from '@/components/Text'
import { pxToRem } from '@/utils'

interface FileUploadContextValue {
  disabled: boolean
  invalid: boolean
  inputId: string
  hintId: string
  errorId: string
  describedBy?: string
  inputRef: RefObject<HTMLInputElement | null>
  isDragging: boolean
  fileText: string
  multiple: boolean
  openFileDialog: () => void
  setDragging: (isDragging: boolean) => void
  setFileText: Dispatch<SetStateAction<string>>
  setMultiple: Dispatch<SetStateAction<boolean>>
}

const FileUploadContext = createContext<FileUploadContextValue | null>(null)

const useFileUploadContext = () => {
  const context = useContext(FileUploadContext)

  if (!context) {
    throw new Error('FileUpload components must be used within FileUpload.Root')
  }

  return context
}

const getEmptyFileText = (multiple: boolean) => (multiple ? 'No files chosen' : 'No file chosen')

const formatSelectedFiles = (files: FileList | null, multiple: boolean) => {
  if (!files || files.length === 0) {
    return getEmptyFileText(multiple)
  }

  if (files.length === 1) {
    return files[0]?.name ?? getEmptyFileText(multiple)
  }

  return `${files.length} files chosen`
}

const assignRef = <T,>(ref: Ref<T> | undefined, value: T) => {
  if (typeof ref === 'function') {
    ref(value)
    return
  }

  if (ref) {
    ;(ref as { current: T }).current = value
  }
}

export interface FileUploadRootProps extends BoxProps {
  children: ReactNode
  id?: string
  disabled?: boolean
  invalid?: boolean
}

export interface FileUploadLabelProps {
  children: ReactNode
}

export interface FileUploadHintProps {
  children: ReactNode
}

export interface FileUploadErrorProps {
  children: ReactNode
}

export interface FileUploadDropzoneProps extends BoxProps {
  children: ReactNode
  prompt?: ReactNode
}

export interface FileUploadTriggerProps extends Omit<ButtonProps, 'children'> {
  children?: ReactNode
}

export interface FileUploadFileTextProps extends ComponentProps<typeof Text> {
  emptyText?: string
}

export type FileUploadInputProps = Omit<InputProps, 'size' | 'type'>

export const FileUpload = {
  Root: forwardRef<HTMLDivElement, FileUploadRootProps>(function FileUploadRoot(
    { children, disabled = false, invalid = false, id, ...props },
    ref
  ) {
    const generatedId = useId()
    const inputId = id ?? `govuk-file-upload-${generatedId}`
    const hintId = `${inputId}-hint`
    const errorId = `${inputId}-error`
    const inputRef = useRef<HTMLInputElement>(null)
    const [isDragging, setDragging] = useState(false)
    const [multiple, setMultiple] = useState(false)
    const [fileText, setFileText] = useState(() => getEmptyFileText(false))

    const describedBy = useMemo(
      () => [hintId, invalid ? errorId : undefined].filter(Boolean).join(' ') || undefined,
      [errorId, hintId, invalid]
    )

    const openFileDialog = () => {
      if (disabled) {
        return
      }

      inputRef.current?.click()
    }

    return (
      <FileUploadContext.Provider
        value={{
          disabled,
          invalid,
          inputId,
          hintId,
          errorId,
          describedBy,
          inputRef,
          isDragging,
          fileText,
          multiple,
          openFileDialog,
          setDragging,
          setFileText,
          setMultiple,
        }}
      >
        <Box
          ref={ref}
          className="file-upload"
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
          gap={pxToRem(10)}
          paddingLeft={invalid ? pxToRem(15) : 0}
          borderLeft={invalid ? `${pxToRem(5)} solid` : '0'}
          borderColor={invalid ? 'border.error' : 'transparent'}
          _hover={{
            '& button': {
              bgColor: 'grey.100',
            },
            '& .dropzone': {
              bg: 'bg.subtle',
              borderColor: invalid ? 'border.error' : 'border',
            },
          }}
          {...props}
        >
          {children}
        </Box>
      </FileUploadContext.Provider>
    )
  }),

  Label: forwardRef<HTMLLabelElement, FileUploadLabelProps>(function FileUploadLabel(
    { children, ...props },
    ref
  ) {
    const { inputId } = useFileUploadContext()

    return (
      <chakra.label
        ref={ref}
        htmlFor={inputId}
        fontSize={pxToRem(19)}
        lineHeight={pxToRem(25)}
        color="fg"
        marginBottom={0}
        {...props}
      >
        {children}
      </chakra.label>
    )
  }),

  Hint: forwardRef<HTMLParagraphElement, FileUploadHintProps>(function FileUploadHint(
    { children, ...props },
    ref
  ) {
    const { hintId } = useFileUploadContext()

    return (
      <Text ref={ref} id={hintId} fontSize={19} color="fg.muted" marginBottom={0} {...props}>
        {children}
      </Text>
    )
  }),

  Error: forwardRef<HTMLParagraphElement, FileUploadErrorProps>(function FileUploadError(
    { children, ...props },
    ref
  ) {
    const { errorId, invalid } = useFileUploadContext()

    if (!invalid) {
      return null
    }

    return (
      <Text
        ref={ref}
        id={errorId}
        fontSize={19}
        color="border.error"
        fontWeight="700"
        marginBottom={0}
        {...props}
      >
        {children}
      </Text>
    )
  }),

  Dropzone: forwardRef<HTMLDivElement, FileUploadDropzoneProps>(function FileUploadDropzone(
    {
      children,
      prompt = 'Drag and drop files here or',
      onDragEnter,
      onDragLeave,
      onDragOver,
      onDrop,
      ...props
    },
    ref
  ) {
    const { disabled, invalid, inputRef, isDragging, setDragging, setFileText, multiple } =
      useFileUploadContext()

    const syncDroppedFiles = (files: FileList) => {
      if (!inputRef.current) {
        return
      }

      const dataTransfer = new DataTransfer()

      Array.from(files).forEach((file) => {
        dataTransfer.items.add(file)
      })

      inputRef.current.files = dataTransfer.files
      inputRef.current.dispatchEvent(new Event('change', { bubbles: true }))
      setFileText(formatSelectedFiles(dataTransfer.files, multiple))
    }

    const handleDragEnter = (event: DragEvent<HTMLDivElement>) => {
      if (disabled) {
        return
      }

      setDragging(true)
      onDragEnter?.(event)
    }

    const handleDragLeave = (event: DragEvent<HTMLDivElement>) => {
      setDragging(false)
      onDragLeave?.(event)
    }

    const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
      if (disabled) {
        return
      }

      event.preventDefault()
      setDragging(true)
      onDragOver?.(event)
    }

    const handleDrop = (event: DragEvent<HTMLDivElement>) => {
      if (disabled) {
        return
      }

      event.preventDefault()
      setDragging(false)

      if (event.dataTransfer.files.length > 0) {
        syncDroppedFiles(event.dataTransfer.files)
      }

      onDrop?.(event)
    }

    return (
      <Box
        ref={ref}
        className="dropzone"
        position="relative"
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        gap={pxToRem(15)}
        width="100%"
        padding={pxToRem(15)}
        borderWidth={pxToRem(2)}
        borderStyle="dashed"
        borderColor={invalid ? 'border.error' : 'border.subtle'}
        bgColor={isDragging ? 'yellow.500' : 'transparent'}
        transition="background-color 0.15s ease, border-color 0.15s ease"
        opacity={disabled ? 0.7 : 1}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        aria-label={prompt}
        {...props}
      >
        {/* {prompt ? (
          <Text fontSize={19} color="fg" marginBottom={0}>
            {prompt}
          </Text>
        ) : null} */}
        <Box
          display="flex"
          className="dropzone-container"
          w="full"
          flexWrap="wrap"
          flexDirection="column"
          alignItems="flex-start"
          gap={pxToRem(15)}
        >
          {children}
        </Box>
      </Box>
    )
  }),

  Trigger: forwardRef<HTMLButtonElement, FileUploadTriggerProps>(function FileUploadTrigger(
    { children, ...props },
    ref
  ) {
    const { disabled, multiple, openFileDialog } = useFileUploadContext()

    return (
      <Button
        ref={ref}
        type="button"
        onClick={openFileDialog}
        disabled={disabled}
        borderRadius="0"
        fontSize={pxToRem(19)}
        lineHeight={pxToRem(25)}
        fontWeight="400"
        color="fg"
        bgColor="bg.muted"
        boxShadow="0 2px 0 var(--govuk-colors-grey-200)"
        padding={`${pxToRem(8)} ${pxToRem(12)} ${pxToRem(7)}`}
        _hover={{
          bgColor: 'bg.muted',
          color: 'fg',
        }}
        _focusVisible={{
          outline: `${pxToRem(3)} solid`,
          outlineColor: 'yellow.500',
          outlineOffset: '0',
          color: 'fg',
          bgColor: 'yellow.500',
          boxShadow: '0 2px 0 var(--govuk-colors-grey-200)',
        }}
        _disabled={{
          opacity: 1,
          cursor: 'not-allowed',
          color: 'fg.muted',
          bgColor: 'bg.muted',
        }}
        {...props}
      >
        {children ?? (multiple ? 'Choose files' : 'Choose file')}
      </Button>
    )
  }),

  FileText: forwardRef<HTMLParagraphElement, FileUploadFileTextProps>(function FileUploadFileText(
    { emptyText, ...props },
    ref
  ) {
    const { fileText, multiple } = useFileUploadContext()

    const nextEmptyText = emptyText ?? getEmptyFileText(multiple)

    return (
      <Box
        bgColor={'primary.100'}
        mb={pxToRem(10)}
        py={pxToRem(15)}
        px={pxToRem(10)}
        textAlign="left"
        wordWrap="break-word"
        overflowWrap="break-word"
        className="file-text"
        w="full"
      >
        <Text ref={ref} fontSize={19} color="fg" marginBottom={0} {...props}>
          {fileText === getEmptyFileText(multiple) ? nextEmptyText : fileText}
        </Text>
      </Box>
    )
  }),

  Input: forwardRef<HTMLInputElement, FileUploadInputProps>(function FileUploadInput(
    { multiple = false, onChange, onBlur, onFocus, ...props },
    ref
  ) {
    const { describedBy, disabled, inputId, inputRef, setDragging, setFileText, setMultiple } =
      useFileUploadContext()
    const describedByIds =
      [describedBy, props['aria-describedby']].filter(Boolean).join(' ') || undefined

    useEffect(() => {
      setMultiple(Boolean(multiple))
      setFileText((currentValue) =>
        currentValue === getEmptyFileText(!multiple) || currentValue === getEmptyFileText(multiple)
          ? getEmptyFileText(Boolean(multiple))
          : currentValue
      )
    }, [multiple, setFileText, setMultiple])

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      setFileText(formatSelectedFiles(event.target.files, multiple))
      onChange?.(event)
    }

    return (
      <chakra.input
        ref={(node: HTMLInputElement | null) => {
          assignRef(ref, node)
          assignRef(inputRef, node)
        }}
        id={inputId}
        type="file"
        multiple={multiple}
        disabled={disabled}
        aria-describedby={describedByIds}
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={handleChange}
        onClick={() => {
          setDragging(false)
        }}
        position="absolute"
        width="1px"
        height="1px"
        padding="0"
        margin="-1px"
        overflow="hidden"
        clip="rect(0, 0, 0, 0)"
        whiteSpace="nowrap"
        border="0"
        {...props}
      />
    )
  }),
}

export const FileUploadRoot = FileUpload.Root
export const FileUploadLabel = FileUpload.Label
export const FileUploadHint = FileUpload.Hint
export const FileUploadError = FileUpload.Error
export const FileUploadDropzone = FileUpload.Dropzone
export const FileUploadTrigger = FileUpload.Trigger
export const FileUploadFileText = FileUpload.FileText
export const FileUploadInput = FileUpload.Input
