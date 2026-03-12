import type { Meta, StoryObj } from '@storybook/react'

import { Table } from './Table'
import { VStack } from '@chakra-ui/react'

const meta: Meta = {
  title: 'GOV.UK/Components/Table',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Table.Root>
      <Table.Caption>Monthly expenses</Table.Caption>
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeader>Category</Table.ColumnHeader>
          <Table.ColumnHeader>Amount</Table.ColumnHeader>
          <Table.ColumnHeader>Due date</Table.ColumnHeader>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.RowHeader>Rent</Table.RowHeader>
          <Table.Cell numeric>£800</Table.Cell>
          <Table.Cell>1st of month</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.RowHeader>Utilities</Table.RowHeader>
          <Table.Cell numeric>£150</Table.Cell>
          <Table.Cell>15th of month</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.RowHeader>Groceries</Table.RowHeader>
          <Table.Cell numeric>£300</Table.Cell>
          <Table.Cell>Weekly</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table.Root>
  ),
}

export const Striped: Story = {
  render: () => (
    <Table.Root>
      <Table.Caption>Application status</Table.Caption>
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeader>Application ID</Table.ColumnHeader>
          <Table.ColumnHeader>Applicant name</Table.ColumnHeader>
          <Table.ColumnHeader>Status</Table.ColumnHeader>
          <Table.ColumnHeader>Date submitted</Table.ColumnHeader>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell>APP001</Table.Cell>
          <Table.Cell>John Smith</Table.Cell>
          <Table.Cell>Approved</Table.Cell>
          <Table.Cell>15 March 2024</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>APP002</Table.Cell>
          <Table.Cell>Sarah Johnson</Table.Cell>
          <Table.Cell>Pending</Table.Cell>
          <Table.Cell>16 March 2024</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>APP003</Table.Cell>
          <Table.Cell>Michael Brown</Table.Cell>
          <Table.Cell>Rejected</Table.Cell>
          <Table.Cell>17 March 2024</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>APP004</Table.Cell>
          <Table.Cell>Emma Wilson</Table.Cell>
          <Table.Cell>Approved</Table.Cell>
          <Table.Cell>18 March 2024</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table.Root>
  ),
}

export const DataTable: Story = {
  render: () => (
    <VStack gap={4} width="700px">
      <Table.Root>
        <Table.Caption>UK population by country (2021 census)</Table.Caption>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader>Country</Table.ColumnHeader>
            <Table.ColumnHeader>Population</Table.ColumnHeader>
            <Table.ColumnHeader>Percentage of UK</Table.ColumnHeader>
            <Table.ColumnHeader>Capital city</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.RowHeader>England</Table.RowHeader>
            <Table.Cell numeric>56,550,138</Table.Cell>
            <Table.Cell numeric>84.3%</Table.Cell>
            <Table.Cell>London</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.RowHeader>Scotland</Table.RowHeader>
            <Table.Cell numeric>5,479,900</Table.Cell>
            <Table.Cell numeric>8.2%</Table.Cell>
            <Table.Cell>Edinburgh</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.RowHeader>Wales</Table.RowHeader>
            <Table.Cell numeric>3,107,494</Table.Cell>
            <Table.Cell numeric>4.6%</Table.Cell>
            <Table.Cell>Cardiff</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.RowHeader>Northern Ireland</Table.RowHeader>
            <Table.Cell numeric>1,895,510</Table.Cell>
            <Table.Cell numeric>2.8%</Table.Cell>
            <Table.Cell>Belfast</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table.Root>
    </VStack>
  ),
}
