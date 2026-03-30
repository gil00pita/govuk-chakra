import { Table as ChakraTable, type HTMLChakraProps } from '@chakra-ui/react'
import { createContext, forwardRef, useContext, type ComponentProps } from 'react'

import { govukTypeScale, pxToRem } from '@/utils'

type ChakraTableRootProps = ComponentProps<typeof ChakraTable.Root>
type ChakraTableSectionProps = ComponentProps<typeof ChakraTable.Header>
type ChakraTableCaptionProps = ComponentProps<typeof ChakraTable.Caption>
type ChakraTableRowProps = ComponentProps<typeof ChakraTable.Row>
type ChakraTableColumnHeaderProps = ComponentProps<typeof ChakraTable.ColumnHeader>
type ChakraTableCellProps = ComponentProps<typeof ChakraTable.Cell>

interface NumericAlignmentProps {
  numeric?: boolean
}

export type TableRootProps = ChakraTableRootProps
export type TableHeaderProps = ChakraTableSectionProps
export type TableBodyProps = ChakraTableSectionProps
export type TableFooterProps = ChakraTableSectionProps
export type TableCaptionProps = ChakraTableCaptionProps
export type TableRowProps = ChakraTableRowProps
export type TableColumnHeaderProps = ChakraTableColumnHeaderProps & NumericAlignmentProps
export type TableCellProps = ChakraTableCellProps & NumericAlignmentProps
export type TableRowHeaderProps = HTMLChakraProps<'th'> & NumericAlignmentProps

type TableSize = 'sm' | 'md' | 'lg'

const cellPadding = (size: TableSize = 'md') => {
  const paddingBySize = {
    sm: pxToRem(10),
    md: pxToRem(15),
    lg: pxToRem(20),
  } satisfies Record<TableSize, string>

  const padding = paddingBySize[size]
  return `${padding} ${pxToRem(20)} ${padding} ${pxToRem(20)}`
}

const cellPaddingPlain = `${pxToRem(10)} ${pxToRem(20)} ${pxToRem(10)} 0`

interface TableContextValue {
  striped?: boolean
  size?: TableSize
}

type GovukFontSize = keyof typeof govukTypeScale

const TableContext = createContext<TableContextValue>({ striped: false, size: 'lg' })

const useTableContext = () => useContext(TableContext)

const TableRoot = forwardRef<HTMLTableElement, TableRootProps>(function TableRoot(
  { fontSize = 16, ...props },
  ref
) {
  const { striped, ...restProps } = props
  const isStriped = striped === true
  const tableSize = props.size === 'sm' || props.size === 'lg' ? props.size : 'md'

  const scale =
    typeof fontSize === 'number' && fontSize in govukTypeScale
      ? govukTypeScale[fontSize as GovukFontSize]
      : null

  return (
    <TableContext.Provider value={{ striped: isStriped, size: tableSize }}>
      <ChakraTable.Root
        ref={ref}
        width="100%"
        borderCollapse="collapse"
        color="fg"
        fontSize={scale ? { base: scale.small.fontSize, md: scale.large.fontSize } : undefined}
        lineHeight={
          scale ? { base: scale.small.lineHeight, md: scale.large.lineHeight } : undefined
        }
        fontFamily="body"
        striped={striped}
        {...restProps}
      />
    </TableContext.Provider>
  )
})

const TableCaption = forwardRef<HTMLTableCaptionElement, TableCaptionProps>(
  function TableCaption(props, ref) {
    return (
      <ChakraTable.Caption
        ref={ref}
        captionSide="top"
        textAlign="left"
        color="fg"
        fontSize={24}
        fontWeight="700"
        lineHeight={1.25}
        mb={pxToRem(15)}
        {...props}
      />
    )
  }
)

const TableHeader = forwardRef<HTMLTableSectionElement, TableHeaderProps>(
  function TableHeader(props, ref) {
    return <ChakraTable.Header ref={ref} borderBottomWidth="1px" {...props} />
  }
)

const TableBody = forwardRef<HTMLTableSectionElement, TableBodyProps>(
  function TableBody(props, ref) {
    return <ChakraTable.Body ref={ref} {...props} />
  }
)

const TableFooter = forwardRef<HTMLTableSectionElement, TableFooterProps>(
  function TableFooter(props, ref) {
    return <ChakraTable.Footer ref={ref} {...props} />
  }
)

const TableRow = forwardRef<HTMLTableRowElement, TableRowProps>(function TableRow(props, ref) {
  return <ChakraTable.Row ref={ref} {...props} />
})

const TableColumnHeader = forwardRef<HTMLTableCellElement, TableColumnHeaderProps>(
  function TableColumnHeader({ numeric = false, ...props }, ref) {
    const { striped, size } = useTableContext()

    return (
      <ChakraTable.ColumnHeader
        ref={ref}
        padding={striped ? cellPadding(size) : cellPaddingPlain}
        color="fg"
        fontWeight="700"
        textAlign={numeric ? 'right' : 'left'}
        verticalAlign="top"
        borderColor="border"
        {...props}
      />
    )
  }
)

const TableCell = forwardRef<HTMLTableCellElement, TableCellProps>(function TableCell(
  { numeric = false, ...props },
  ref
) {
  const { striped, size } = useTableContext()

  return (
    <ChakraTable.Cell
      ref={ref}
      py={pxToRem(10)}
      padding={striped ? cellPadding(size) : cellPaddingPlain}
      color="fg"
      textAlign={numeric ? 'right' : 'left'}
      verticalAlign="top"
      borderColor="border"
      borderBottomWidth="1px"
      {...props}
    />
  )
})

const TableRowHeader = forwardRef<HTMLTableCellElement, TableRowHeaderProps>(
  function TableRowHeader({ numeric = false, ...props }, ref) {
    const { striped, size } = useTableContext()

    return (
      <ChakraTable.Cell
        ref={ref}
        as="th"
        scope="row"
        py={pxToRem(10)}
        pe={0}
        ps={0}
        padding={striped ? cellPadding(size) : cellPaddingPlain}
        color="fg"
        fontWeight="700"
        textAlign={numeric ? 'right' : 'left'}
        verticalAlign="top"
        borderColor="border"
        borderBottomWidth="1px"
        {...props}
      />
    )
  }
)

export const Table = Object.assign(TableRoot, {
  Root: TableRoot,
  Caption: TableCaption,
  Header: TableHeader,
  Body: TableBody,
  Footer: TableFooter,
  Row: TableRow,
  ColumnHeader: TableColumnHeader,
  Cell: TableCell,
  RowHeader: TableRowHeader,
})

export {
  TableRoot,
  TableCaption,
  TableHeader,
  TableBody,
  TableFooter,
  TableRow,
  TableColumnHeader,
  TableCell,
  TableRowHeader,
}
