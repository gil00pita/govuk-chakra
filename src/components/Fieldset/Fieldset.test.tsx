import { screen, within } from '@testing-library/react'

import { renderWithProvider } from '@/test/renderWithProvider'
import { Fieldset } from './Fieldset'
import { Radio } from '@/components/Radio'

describe('Fieldset', () => {
  it('renders a grouped fieldset with legend, hint, and content', () => {
    renderWithProvider(
      <Fieldset.Root>
        <Fieldset.Legend mb={1}>What is your address?</Fieldset.Legend>
        <Fieldset.Hint>Select all that apply.</Fieldset.Hint>
        <Fieldset.Content>
          <div>England</div>
          <div>Scotland</div>
        </Fieldset.Content>
      </Fieldset.Root>
    )

    const fieldset = screen.getByRole('group', { name: /what is your address\?/i })

    expect(within(fieldset).getByText(/select all that apply\./i)).toBeVisible()
    expect(within(fieldset).getByText(/england/i)).toBeVisible()
    expect(within(fieldset).getByText(/scotland/i)).toBeVisible()
  })

  it('renders the legend as a page heading when requested', () => {
    renderWithProvider(
      <Fieldset.Root>
        <Fieldset.Legend legendAsHeading mb={1}>
          Do you know your National Insurance number?
        </Fieldset.Legend>
        <Fieldset.Content>
          <Radio.Root name="ni-number" defaultValue="yes">
            <Radio.Item value="yes">
              <Radio.ItemHiddenInput />
              <Radio.ItemControl>
                <Radio.ItemIndicator />
              </Radio.ItemControl>
              <Radio.ItemText>Yes</Radio.ItemText>
            </Radio.Item>
          </Radio.Root>
        </Fieldset.Content>
      </Fieldset.Root>
    )

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: /do you know your national insurance number\?/i,
      })
    ).toBeVisible()
  })

  it('renders the error content inside an invalid fieldset', () => {
    renderWithProvider(
      <Fieldset.Root invalid>
        <Fieldset.Legend legendAsHeading mb={1}>
          How would you prefer to be contacted?
        </Fieldset.Legend>
        <Fieldset.Error>Select how you would prefer to be contacted</Fieldset.Error>
        <Fieldset.Content>
          <div>Email</div>
        </Fieldset.Content>
      </Fieldset.Root>
    )

    const fieldset = screen.getByRole('group', {
      name: /how would you prefer to be contacted\?/i,
    })

    expect(
      within(fieldset).getByText(/select how you would prefer to be contacted/i)
    ).toBeVisible()
  })
})
