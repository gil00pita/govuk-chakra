import type { Meta, StoryObj } from '@storybook/react'

import { Box } from '@chakra-ui/react'
import { GovUKHeader } from './GovUKHeader'
import { pxToRem } from '../../utils'

const meta: Meta = {
  title: 'GOV.UK/Components/GOV.UK - Header',
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <GovUKHeader>
      <GovUKHeader.Container>
        <Box
          display="flex"
          flexDirection={{ base: 'column', md: 'row' }}
          alignItems={{ md: 'center' }}
          justifyContent="space-between"
          gap={pxToRem(10)}
        >
          <GovUKHeader.ProductName href="#" />
          <GovUKHeader.ServiceName href="#">Passport application</GovUKHeader.ServiceName>
        </Box>

        <GovUKHeader.Navigation>
          <GovUKHeader.List>
            <GovUKHeader.ListItem>
              <GovUKHeader.Link href="#">Home</GovUKHeader.Link>
            </GovUKHeader.ListItem>
            <GovUKHeader.ListItem current>
              <GovUKHeader.Link href="#" current>
                Settings
              </GovUKHeader.Link>
            </GovUKHeader.ListItem>
            <GovUKHeader.ListItem>
              <GovUKHeader.Link href="#">Sign out</GovUKHeader.Link>
            </GovUKHeader.ListItem>
          </GovUKHeader.List>
        </GovUKHeader.Navigation>
      </GovUKHeader.Container>
    </GovUKHeader>
  ),
}

export const ProductOnly: Story = {
  render: () => (
    <GovUKHeader>
      <GovUKHeader.Container>
        <GovUKHeader.ProductName href="#" />
      </GovUKHeader.Container>
    </GovUKHeader>
  ),
}
