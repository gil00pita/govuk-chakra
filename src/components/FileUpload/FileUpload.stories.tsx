import type { Meta, StoryObj } from '@storybook/react'

import { FileUpload } from './FileUpload'

const meta: Meta = {
  title: 'GOV.UK/Components/File upload',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <FileUpload width="720px" label="Upload a file" hint="The file must be smaller than 2MB." />
  ),
}

export const WithError: Story = {
  render: () => (
    <FileUpload
      width="720px"
      label="Upload a file"
      error="Select a file in CSV format"
      accept=".csv"
    />
  ),
}

export const Disabled: Story = {
  render: () => (
    <FileUpload
      width="720px"
      label="Upload a file"
      hint="This upload is currently unavailable."
      disabled
    />
  ),
}
