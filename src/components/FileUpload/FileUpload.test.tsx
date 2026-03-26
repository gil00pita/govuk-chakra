import { FileUpload } from './FileUpload'
import { renderWithProvider } from '@/test/renderWithProvider'
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

function renderFileUpload(props: Partial<React.ComponentProps<typeof FileUpload.Root>> = {}) {
  return renderWithProvider(
    <FileUpload.Root invalid width="720px" {...props}>
      <FileUpload.Label>Upload a file</FileUpload.Label>
      <FileUpload.Hint>The file must be smaller than 2MB.</FileUpload.Hint>
      <FileUpload.Error>Select a file</FileUpload.Error>
      <FileUpload.Dropzone>
        <FileUpload.FileText />
        <FileUpload.Trigger />
        <FileUpload.Input />
      </FileUpload.Dropzone>
    </FileUpload.Root>
  )
}

describe('FileUpload', () => {
  it('associates the label, hint, and error text with the hidden file input', () => {
    renderFileUpload()

    const input = screen.getByLabelText(/upload a file/i)

    expect(input).toHaveAccessibleDescription('The file must be smaller than 2MB. Select a file')
    expect(input).toHaveAttribute('type', 'file')
  })

  it('updates the selected file text when a file is chosen', async () => {
    const user = userEvent.setup()
    const file = new File(['report'], 'report.csv', { type: 'text/csv' })

    renderFileUpload({ invalid: false })

    const input = screen.getByLabelText(/upload a file/i)
    await user.upload(input, file)

    expect(screen.getByText('report.csv')).toBeVisible()
  })

  it('renders multiple file mode with matching button text and selected file count', async () => {
    const user = userEvent.setup()
    const files = [
      new File(['first'], 'first.pdf', { type: 'application/pdf' }),
      new File(['second'], 'second.pdf', { type: 'application/pdf' }),
    ]

    renderWithProvider(
      <FileUpload.Root width="720px">
        <FileUpload.Label>Upload supporting documents</FileUpload.Label>
        <FileUpload.Dropzone>
          <FileUpload.Trigger />
          <FileUpload.FileText />
          <FileUpload.Input multiple />
        </FileUpload.Dropzone>
      </FileUpload.Root>
    )

    expect(screen.getByRole('button', { name: /choose files/i })).toBeVisible()

    const input = screen.getByLabelText(/upload supporting documents/i)
    await user.upload(input, files)

    expect(screen.getByText(/2 files chosen/i)).toBeVisible()
  })

  it('supports disabled uploads', () => {
    renderFileUpload({ disabled: true, invalid: false })

    expect(screen.getByRole('button', { name: /choose file/i })).toBeDisabled()
    expect(screen.getByLabelText(/upload a file/i)).toBeDisabled()
  })
})
