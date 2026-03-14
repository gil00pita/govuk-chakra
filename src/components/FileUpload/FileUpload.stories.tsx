import type { Meta, StoryObj } from '@storybook/react-vite'

import { FileUpload } from './FileUpload'
import type { FileUploadRootProps } from './FileUpload'

interface FileUploadStoryArgs extends FileUploadRootProps {
  invalid: boolean
}

const meta: Meta<FileUploadStoryArgs> = {
  title: 'GOV.UK/Components/File upload',
  component: FileUpload.Root,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Use the file upload component when users need to send files as part of a form.\n\n' +
          'This implementation follows the GOV.UK enhanced file upload visual treatment, with a drag-and-drop zone, explicit chooser control, and selected-file status text.\n\n' +
          'For GOV.UK guidance, see the GOV.UK Design System enhanced file upload documentation: https://design-system.service.gov.uk/components/file-upload/enhanced/.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    invalid: { control: 'boolean', description: 'Toggle FileUpload.Error' },
  },
  args: {
    invalid: false,
  },
}

export default meta
type Story = StoryObj<FileUploadStoryArgs>

export const Default: Story = {
  render: (args) => (
    <FileUpload.Root width="720px" invalid={args.invalid}>
      <FileUpload.Label>Upload a file</FileUpload.Label>
      <FileUpload.Hint>The file must be smaller than 2MB.</FileUpload.Hint>
      <FileUpload.Error>Select a file</FileUpload.Error>
      <FileUpload.Dropzone>
        <FileUpload.FileText />
        <FileUpload.Trigger />
        <FileUpload.Input />
      </FileUpload.Dropzone>
    </FileUpload.Root>
  ),
}

export const WithError: Story = {
  render: () => (
    <FileUpload.Root width="720px" invalid>
      <FileUpload.Label>Upload a CSV file</FileUpload.Label>
      <FileUpload.Error>Select a file in CSV format</FileUpload.Error>
      <FileUpload.Dropzone>
        <FileUpload.FileText />
        <FileUpload.Trigger />
        <FileUpload.Input accept=".csv" />
      </FileUpload.Dropzone>
    </FileUpload.Root>
  ),
}

export const MultipleFiles: Story = {
  render: () => (
    <FileUpload.Root width="720px">
      <FileUpload.Label>Upload supporting documents</FileUpload.Label>
      <FileUpload.Hint>
        You can drag and drop files into the box or choose them manually.
      </FileUpload.Hint>
      <FileUpload.Dropzone>
        <FileUpload.Trigger />
        <FileUpload.FileText />
        <FileUpload.Input multiple />
      </FileUpload.Dropzone>
    </FileUpload.Root>
  ),
}

export const Disabled: Story = {
  render: () => (
    <FileUpload.Root width="720px" disabled>
      <FileUpload.Label>Upload a file</FileUpload.Label>
      <FileUpload.Hint>This upload is currently unavailable.</FileUpload.Hint>
      <FileUpload.Dropzone>
        <FileUpload.Trigger />
        <FileUpload.FileText />
        <FileUpload.Input />
      </FileUpload.Dropzone>
    </FileUpload.Root>
  ),
}
