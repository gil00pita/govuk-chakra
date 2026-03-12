import type { Meta, StoryObj } from '@storybook/react'

import { SummaryList } from './SummaryList'

const meta: Meta = {
  title: 'GOV.UK/SummaryList',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <SummaryList.Root width={{ base: '340px', md: '720px' }}>
      <SummaryList.Row>
        <SummaryList.Key>Name</SummaryList.Key>
        <SummaryList.Value>Firstname Lastname</SummaryList.Value>
        <SummaryList.Actions>
          <SummaryList.ActionLink href="#" visuallyHiddenText="name">
            Change
          </SummaryList.ActionLink>
        </SummaryList.Actions>
      </SummaryList.Row>

      <SummaryList.Row>
        <SummaryList.Key>Date of birth</SummaryList.Key>
        <SummaryList.Value>7 January 1980</SummaryList.Value>
        <SummaryList.Actions>
          <SummaryList.ActionLink href="#" visuallyHiddenText="date of birth">
            Change
          </SummaryList.ActionLink>
        </SummaryList.Actions>
      </SummaryList.Row>

      <SummaryList.Row>
        <SummaryList.Key>Contact information</SummaryList.Key>
        <SummaryList.Value>
          72 Guild Street
          <br />
          London
          <br />
          SE23 6FH
        </SummaryList.Value>
        <SummaryList.Actions>
          <SummaryList.ActionsList>
            <SummaryList.ActionsListItem>
              <SummaryList.ActionLink href="#" visuallyHiddenText="contact information">
                Change
              </SummaryList.ActionLink>
            </SummaryList.ActionsListItem>
            <SummaryList.ActionsListItem>
              <SummaryList.ActionLink href="#" visuallyHiddenText="contact information">
                Remove
              </SummaryList.ActionLink>
            </SummaryList.ActionsListItem>
          </SummaryList.ActionsList>
        </SummaryList.Actions>
      </SummaryList.Row>
    </SummaryList.Root>
  ),
}

export const Card: Story = {
  render: () => (
    <SummaryList.Card width={{ base: '340px', md: '720px' }}>
      <SummaryList.CardHeader>
        <SummaryList.CardTitle>University of Gloucestershire</SummaryList.CardTitle>
        <SummaryList.CardActions>
          <SummaryList.ActionLink href="#" visuallyHiddenText="University of Gloucestershire">
            Change
          </SummaryList.ActionLink>
        </SummaryList.CardActions>
      </SummaryList.CardHeader>

      <SummaryList.CardContent>
        <SummaryList.Root>
          <SummaryList.Row>
            <SummaryList.Key>Course</SummaryList.Key>
            <SummaryList.Value>English (3D00)</SummaryList.Value>
            <SummaryList.Actions>
              <SummaryList.ActionLink href="#" visuallyHiddenText="course">
                Change
              </SummaryList.ActionLink>
            </SummaryList.Actions>
          </SummaryList.Row>

          <SummaryList.Row>
            <SummaryList.Key>Location</SummaryList.Key>
            <SummaryList.Value>Cheltenham</SummaryList.Value>
            <SummaryList.Actions>
              <SummaryList.ActionLink href="#" visuallyHiddenText="location">
                Change
              </SummaryList.ActionLink>
            </SummaryList.Actions>
          </SummaryList.Row>

          <SummaryList.Row>
            <SummaryList.Key>Offer status</SummaryList.Key>
            <SummaryList.Value>Conditional offer</SummaryList.Value>
            <SummaryList.Actions>
              <SummaryList.ActionLink href="#" visuallyHiddenText="offer status">
                Change
              </SummaryList.ActionLink>
            </SummaryList.Actions>
          </SummaryList.Row>
        </SummaryList.Root>
      </SummaryList.CardContent>
    </SummaryList.Card>
  ),
}
