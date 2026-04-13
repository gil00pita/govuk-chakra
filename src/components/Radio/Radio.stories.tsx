import type { Meta, StoryObj } from '@storybook/react-vite'
import { VStack } from '@chakra-ui/react'

import { Radio } from './Radio'
import { pxToRem } from '@/utils'

const meta: Meta = {
  title: 'GOV.UK/Components/Radio',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Use the Radio component to allow users to select one option from a set of choices.\n\n' +
          'The radio component can be used in forms and surveys where a single choice is required. It supports hints and error messages to guide users and provide feedback.\n\n' +
          'For GOV.UK guidance, see the GOV.UK Design System radio documentation: https://design-system.service.gov.uk/components/radios/.',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Radio.Group legend="Where do you live?" hint="Select one option" legendAsHeading>
      <Radio.Root defaultValue="england" name="where-do-you-live">
        <Radio.Item value="england">
          <Radio.ItemHiddenInput />
          <Radio.ItemControl>
            <Radio.ItemIndicator />
          </Radio.ItemControl>
          <Radio.ItemText>England</Radio.ItemText>
        </Radio.Item>

        <Radio.Item value="scotland">
          <Radio.ItemHiddenInput />
          <Radio.ItemControl>
            <Radio.ItemIndicator />
          </Radio.ItemControl>
          <Radio.ItemText>Scotland</Radio.ItemText>
        </Radio.Item>

        <Radio.Item value="wales">
          <Radio.ItemHiddenInput />
          <Radio.ItemControl>
            <Radio.ItemIndicator />
          </Radio.ItemControl>
          <Radio.ItemText>Wales</Radio.ItemText>
        </Radio.Item>

        <Radio.Item value="northern-ireland">
          <Radio.ItemHiddenInput />
          <Radio.ItemControl>
            <Radio.ItemIndicator />
          </Radio.ItemControl>
          <Radio.ItemText>Northern Ireland</Radio.ItemText>
        </Radio.Item>
      </Radio.Root>
    </Radio.Group>
  ),
}

export const WithHints: Story = {
  render: () => (
    <Radio.Group
      legend="How do you want to sign in?"
      hint="Choose the option you normally use to access your account."
      legendAsHeading
    >
      <Radio.Root defaultValue="government-gateway" name="sign-in-method">
        <Radio.Item
          value="government-gateway"
          hint="Use the email address you used to create your Government Gateway account."
        >
          <Radio.ItemHiddenInput />
          <Radio.ItemControl>
            <Radio.ItemIndicator />
          </Radio.ItemControl>
          <Radio.ItemText>Government Gateway</Radio.ItemText>
        </Radio.Item>

        <Radio.Item
          value="govuk-one-login"
          hint="Use the sign in details connected to your GOV.UK One Login account."
        >
          <Radio.ItemHiddenInput />
          <Radio.ItemControl>
            <Radio.ItemIndicator />
          </Radio.ItemControl>
          <Radio.ItemText>GOV.UK One Login</Radio.ItemText>
        </Radio.Item>
      </Radio.Root>
    </Radio.Group>
  ),
}

export const Error: Story = {
  render: () => (
    <Radio.Group
      legend="Do you have a UK passport?"
      error="Select whether you have a UK passport"
      legendAsHeading
    >
      <Radio.Root name="passport-question">
        <Radio.Item value="yes">
          <Radio.ItemHiddenInput />
          <Radio.ItemControl>
            <Radio.ItemIndicator />
          </Radio.ItemControl>
          <Radio.ItemText>Yes</Radio.ItemText>
        </Radio.Item>

        <Radio.Item value="no">
          <Radio.ItemHiddenInput />
          <Radio.ItemControl>
            <Radio.ItemIndicator />
          </Radio.ItemControl>
          <Radio.ItemText>No</Radio.ItemText>
        </Radio.Item>
      </Radio.Root>
    </Radio.Group>
  ),
}

export const Disabled: Story = {
  render: () => (
    <Radio.Group legend="Contact preference">
      <Radio.Root defaultValue="email" name="contact-preference" disabled>
        <Radio.Item value="email">
          <Radio.ItemHiddenInput />
          <Radio.ItemControl>
            <Radio.ItemIndicator />
          </Radio.ItemControl>
          <Radio.ItemText>Email</Radio.ItemText>
        </Radio.Item>

        <Radio.Item value="phone">
          <Radio.ItemHiddenInput />
          <Radio.ItemControl>
            <Radio.ItemIndicator />
          </Radio.ItemControl>
          <Radio.ItemText>Phone</Radio.ItemText>
        </Radio.Item>
      </Radio.Root>
    </Radio.Group>
  ),
}

export const Sizes: Story = {
  render: () => (
    <VStack align="stretch" gap={8} minW="420px">
      <Radio.Group legend="Small radios">
        <Radio.Root defaultValue="email-small" name="contact-preference-small" smaller>
          <Radio.Item value="email-small">
            <Radio.ItemHiddenInput />
            <Radio.ItemControl>
              <Radio.ItemIndicator />
            </Radio.ItemControl>
            <Radio.ItemText>Email</Radio.ItemText>
          </Radio.Item>

          <Radio.Item value="phone-small">
            <Radio.ItemHiddenInput />
            <Radio.ItemControl>
              <Radio.ItemIndicator />
            </Radio.ItemControl>
            <Radio.ItemText>Phone</Radio.ItemText>
          </Radio.Item>
        </Radio.Root>
      </Radio.Group>

      <Radio.Group legend="Default radios">
        <Radio.Root defaultValue="email-default" name="contact-preference-default">
          <Radio.Item value="email-default">
            <Radio.ItemHiddenInput />
            <Radio.ItemControl>
              <Radio.ItemIndicator />
            </Radio.ItemControl>
            <Radio.ItemText>Email</Radio.ItemText>
          </Radio.Item>

          <Radio.Item value="phone-default">
            <Radio.ItemHiddenInput />
            <Radio.ItemControl>
              <Radio.ItemIndicator />
            </Radio.ItemControl>
            <Radio.ItemText>Phone</Radio.ItemText>
          </Radio.Item>
        </Radio.Root>
      </Radio.Group>

      <Radio.Group legend="Large radios">
        <Radio.Root defaultValue="email-large" name="contact-preference-large">
          <Radio.Item value="email-large">
            <Radio.ItemHiddenInput />
            <Radio.ItemControl width={pxToRem(48)} height={pxToRem(48)} minWidth={pxToRem(48)}>
              <Radio.ItemIndicator width={pxToRem(22)} height={pxToRem(22)} />
            </Radio.ItemControl>
            <Radio.ItemText fontSize="24px" lineHeight={pxToRem(48)}>
              Email
            </Radio.ItemText>
          </Radio.Item>

          <Radio.Item value="phone-large">
            <Radio.ItemHiddenInput />
            <Radio.ItemControl width={pxToRem(48)} height={pxToRem(48)} minWidth={pxToRem(48)}>
              <Radio.ItemIndicator width={pxToRem(22)} height={pxToRem(22)} />
            </Radio.ItemControl>
            <Radio.ItemText fontSize="24px" lineHeight={pxToRem(48)}>
              Phone
            </Radio.ItemText>
          </Radio.Item>
        </Radio.Root>
      </Radio.Group>
    </VStack>
  ),
}

export const Smaller: Story = {
  render: () => (
    <Radio.Group legend="Organisation">
      <Radio.Root defaultValue="hmrc" name="organisation" smaller>
        <Radio.Item value="hmrc">
          <Radio.ItemHiddenInput />
          <Radio.ItemControl>
            <Radio.ItemIndicator />
          </Radio.ItemControl>
          <Radio.ItemText>HM Revenue and Customs</Radio.ItemText>
        </Radio.Item>

        <Radio.Item value="employment">
          <Radio.ItemHiddenInput />
          <Radio.ItemControl>
            <Radio.ItemIndicator />
          </Radio.ItemControl>
          <Radio.ItemText>Employment Tribunal</Radio.ItemText>
        </Radio.Item>

        <Radio.Item value="mod">
          <Radio.ItemHiddenInput />
          <Radio.ItemControl>
            <Radio.ItemIndicator />
          </Radio.ItemControl>
          <Radio.ItemText>Ministry of Defence</Radio.ItemText>
        </Radio.Item>
      </Radio.Root>
    </Radio.Group>
  ),
}
