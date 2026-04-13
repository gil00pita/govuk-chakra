import { screen, within } from '@testing-library/react'

import { Radio } from './Radio'
import { renderWithProvider } from '@/test/renderWithProvider'
import userEvent from '@testing-library/user-event'

function renderRadioGroup(props: Partial<React.ComponentProps<typeof Radio.Root>> = {}) {
  return renderWithProvider(
    <Radio.Group legend="Where do you live?" hint="Select one option" error="Select where you live">
      <Radio.Root name="where-do-you-live" {...props}>
        <Radio.Item value="england">
          <Radio.ItemHiddenInput />
          <Radio.ItemControl>
            <Radio.ItemIndicator />
          </Radio.ItemControl>
          <Radio.ItemText>England</Radio.ItemText>
        </Radio.Item>

        <Radio.Item
          value="scotland"
          hint="Choose this option if your permanent address is in Scotland."
        >
          <Radio.ItemHiddenInput />
          <Radio.ItemControl>
            <Radio.ItemIndicator />
          </Radio.ItemControl>
          <Radio.ItemText>Scotland</Radio.ItemText>
        </Radio.Item>
      </Radio.Root>
    </Radio.Group>
  )
}

describe('Radio', () => {
  it('selects a radio option when the user chooses it', async () => {
    const user = userEvent.setup()

    renderRadioGroup()

    const england = screen.getByRole('radio', { name: /england/i })
    const scotland = screen.getByRole('radio', { name: /scotland/i })

    expect(england).not.toBeChecked()
    expect(scotland).not.toBeChecked()

    await user.click(scotland)

    expect(scotland).toBeChecked()
    expect(england).not.toBeChecked()
  })

  it('supports disabled radio groups', async () => {
    const user = userEvent.setup()

    renderRadioGroup({ disabled: true, defaultValue: 'england' })

    const england = screen.getByRole('radio', { name: /england/i })
    const scotland = screen.getByRole('radio', { name: /scotland/i })

    expect(england).toBeDisabled()
    expect(scotland).toBeDisabled()
    expect(england).toBeChecked()

    await user.click(scotland)

    expect(england).toBeChecked()
    expect(scotland).not.toBeChecked()
  })

  it('renders group legend, hint, error, and item hint content', () => {
    renderRadioGroup()

    const group = screen.getByRole('group', { name: /where do you live\?/i })

    expect(within(group).getByText(/select one option/i)).toBeVisible()
    expect(within(group).getByText(/select where you live/i)).toBeVisible()
    expect(
      screen.getByText(/choose this option if your permanent address is in scotland\./i)
    ).toBeVisible()
  })

  it('supports the smaller radio size on the root', () => {
    renderRadioGroup({ smaller: true })

    const englandLabel = screen.getByText('England')
    const englandControl = englandLabel.parentElement?.querySelector('[data-govuk-radio-control]')

    expect(englandLabel).toHaveStyle({
      fontSize: '16px',
    })
    expect(englandControl).toHaveStyle({
      width: 'max(20px, 1.25rem)',
      height: 'max(20px, 1.25rem)',
      minWidth: 'max(20px, 1.25rem)',
    })
  })
})
