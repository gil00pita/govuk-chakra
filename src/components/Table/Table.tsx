import { Table as ChakraTable, type HTMLChakraProps } from '@chakra-ui/react'
import { forwardRef, type ComponentProps } from 'react'

import { pxToRem } from '@/utils'

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

const cellPadding = `${pxToRem(10)} ${pxToRem(20)} ${pxToRem(10)} 0`

const TableRoot = forwardRef<HTMLTableElement, TableRootProps>(function TableRoot(props, ref) {
  return (
    <ChakraTable.Root
      ref={ref}
      width="100%"
      borderCollapse="collapse"
      color="grey.950"
      fontSize={19}
      lineHeight={1.3157894737}
      {...props}
    />
  )
})

const TableCaption = forwardRef<HTMLTableCaptionElement, TableCaptionProps>(
  function TableCaption(props, ref) {
    return (
      <ChakraTable.Caption
        ref={ref}
        captionSide="top"
        textAlign="left"
        color="grey.950"
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
    return <ChakraTable.Header ref={ref} {...props} />
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
  return <ChakraTable.Row ref={ref} borderBottom="1px solid" borderColor="grey.100" {...props} />
})

const TableColumnHeader = forwardRef<HTMLTableCellElement, TableColumnHeaderProps>(
  function TableColumnHeader({ numeric = false, ...props }, ref) {
    return (
      <ChakraTable.ColumnHeader
        ref={ref}
        py={pxToRem(10)}
        pe={0}
        ps={0}
        padding={cellPadding}
        color="grey.950"
        fontWeight="700"
        textAlign={numeric ? 'right' : 'left'}
        verticalAlign="top"
        {...props}
      />
    )
  }
)

const TableCell = forwardRef<HTMLTableCellElement, TableCellProps>(function TableCell(
  { numeric = false, ...props },
  ref
) {
  return (
    <ChakraTable.Cell
      ref={ref}
      py={pxToRem(10)}
      pe={0}
      ps={0}
      padding={cellPadding}
      color="grey.950"
      textAlign={numeric ? 'right' : 'left'}
      verticalAlign="top"
      {...props}
    />
  )
})

const TableRowHeader = forwardRef<HTMLTableCellElement, TableRowHeaderProps>(
  function TableRowHeader({ numeric = false, ...props }, ref) {
    return (
      <ChakraTable.Cell
        ref={ref}
        as="th"
        scope="row"
        py={pxToRem(10)}
        pe={0}
        ps={0}
        padding={cellPadding}
        color="grey.950"
        fontWeight="700"
        textAlign={numeric ? 'right' : 'left'}
        verticalAlign="top"
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
