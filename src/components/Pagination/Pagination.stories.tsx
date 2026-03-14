import type { Meta, StoryObj } from '@storybook/react-vite'

import { Pagination } from './Pagination'

const meta: Meta = {
  title: 'GOV.UK/Components/Pagination',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Use the pagination component to navigate through multiple pages of content.\n\n' +
          'The pagination component is useful for breaking up large sets of data or content into manageable chunks.\n\n' +
          'Choose the variant based on the importance and context of the content so the interface stays clear and consistent. For GOV.UK guidance, see the GOV.UK Design System pagination documentation: https://design-system.service.gov.uk/components/pagination/.',
      },
    },
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Pagination width="720px">
      <Pagination.Previous href="#">Previous</Pagination.Previous>

      <Pagination.List>
        <Pagination.Item>
          <Pagination.Link href="#" visuallyHiddenText="Page 1">
            1
          </Pagination.Link>
        </Pagination.Item>
        <Pagination.Item current>
          <Pagination.Link href="#" current visuallyHiddenText="Page 2">
            2
          </Pagination.Link>
        </Pagination.Item>
        <Pagination.Item>
          <Pagination.Link href="#" visuallyHiddenText="Page 3">
            3
          </Pagination.Link>
        </Pagination.Item>
      </Pagination.List>

      <Pagination.Next href="#">Next</Pagination.Next>
    </Pagination>
  ),
}

export const WithEllipsis: Story = {
  render: () => (
    <Pagination width="720px">
      <Pagination.Previous href="#">Previous</Pagination.Previous>

      <Pagination.List>
        <Pagination.Item>
          <Pagination.Link href="#" visuallyHiddenText="Page 1">
            1
          </Pagination.Link>
        </Pagination.Item>
        <Pagination.Item ellipsis />
        <Pagination.Item>
          <Pagination.Link href="#" visuallyHiddenText="Page 8">
            8
          </Pagination.Link>
        </Pagination.Item>
        <Pagination.Item current>
          <Pagination.Link href="#" current visuallyHiddenText="Page 9">
            9
          </Pagination.Link>
        </Pagination.Item>
        <Pagination.Item>
          <Pagination.Link href="#" visuallyHiddenText="Page 10">
            10
          </Pagination.Link>
        </Pagination.Item>
      </Pagination.List>

      <Pagination.Next href="#">Next</Pagination.Next>
    </Pagination>
  ),
}

export const Block: Story = {
  render: () => (
    <Pagination width="720px" block>
      <Pagination.Previous href="#" label="Applying for a provisional lorry or bus licence">
        Previous
      </Pagination.Previous>

      <Pagination.Next href="#" label="Driver CPC part 1 test: theory">
        Next
      </Pagination.Next>
    </Pagination>
  ),
}
