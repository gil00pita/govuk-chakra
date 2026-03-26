import { screen, within } from '@testing-library/react'

import { renderWithProvider } from '@/test/renderWithProvider'
import { Table } from './Table'

describe('Table', () => {
  it('renders a caption, column headers, row headers, and cells', () => {
    renderWithProvider(
      <Table.Root>
        <Table.Caption>Monthly expenses</Table.Caption>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader>Category</Table.ColumnHeader>
            <Table.ColumnHeader numeric>Amount</Table.ColumnHeader>
            <Table.ColumnHeader>Due date</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.RowHeader>Rent</Table.RowHeader>
            <Table.Cell numeric>£800</Table.Cell>
            <Table.Cell>1st of month</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table.Root>
    )

    const table = screen.getByRole('table')

    expect(within(table).getByText(/monthly expenses/i)).toBeVisible()
    expect(within(table).getByRole('columnheader', { name: /category/i })).toBeVisible()
    expect(within(table).getByRole('columnheader', { name: /amount/i })).toBeVisible()
    expect(within(table).getByRole('rowheader', { name: /rent/i })).toBeVisible()
    expect(within(table).getByRole('cell', { name: /£800/i })).toBeVisible()
    expect(within(table).getByRole('cell', { name: /1st of month/i })).toBeVisible()
  })

  it('supports multiple body rows with numeric cells', () => {
    renderWithProvider(
      <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader>Country</Table.ColumnHeader>
            <Table.ColumnHeader numeric>Population</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.RowHeader>England</Table.RowHeader>
            <Table.Cell numeric>56,550,138</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.RowHeader>Wales</Table.RowHeader>
            <Table.Cell numeric>3,107,494</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table.Root>
    )

    expect(screen.getByRole('rowheader', { name: /england/i })).toBeVisible()
    expect(screen.getByRole('cell', { name: /56,550,138/i })).toBeVisible()
    expect(screen.getByRole('rowheader', { name: /wales/i })).toBeVisible()
    expect(screen.getByRole('cell', { name: /3,107,494/i })).toBeVisible()
  })
})
