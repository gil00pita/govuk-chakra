import { screen } from '@testing-library/react'
import { LuCheck, LuPackage, LuShip } from 'react-icons/lu'

import { renderWithProvider } from '@/test/renderWithProvider'
import { Timeline } from './Timeline'

describe('Timeline', () => {
  it('renders timeline items with connector content', () => {
    renderWithProvider(
      <Timeline.Root maxW="400px">
        <Timeline.Item>
          <Timeline.Connector>
            <Timeline.Separator />
            <Timeline.Indicator>
              <LuShip />
            </Timeline.Indicator>
          </Timeline.Connector>
          <Timeline.Content>
            <Timeline.Title>Product Shipped</Timeline.Title>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Connector>
            <Timeline.Separator />
            <Timeline.Indicator>
              <LuCheck />
            </Timeline.Indicator>
          </Timeline.Connector>
          <Timeline.Content>
            <Timeline.Title>Order Confirmed</Timeline.Title>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Connector>
            <Timeline.Separator />
            <Timeline.Indicator>
              <LuPackage />
            </Timeline.Indicator>
          </Timeline.Connector>
          <Timeline.Content>
            <Timeline.Title>Order Delivered</Timeline.Title>
          </Timeline.Content>
        </Timeline.Item>
      </Timeline.Root>
    )

    expect(screen.getByText('Product Shipped')).toBeVisible()
    expect(screen.getByText('Order Confirmed')).toBeVisible()
    expect(screen.getByText('Order Delivered')).toBeVisible()
  })
})
