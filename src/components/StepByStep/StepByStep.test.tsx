import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { vi } from 'vitest'
import { renderWithProvider } from '@/test/renderWithProvider'
import { StepByStep } from './StepByStep'

const items = [
  {
    id: 'first',
    title: 'Check eligibility',
    content: <a href="/eligibility">Eligibility guidance</a>,
  },
  { id: 'second', title: 'Apply', content: 'Application guidance' },
]

const disclosure = (title: string) =>
  screen.getByRole('button', { name: (name) => name.startsWith(title) })

describe('StepByStep', () => {
  it('opens individual steps and exposes the associated content', async () => {
    renderWithProvider(<StepByStep items={items} />)
    const trigger = disclosure('Check eligibility')
    expect(trigger).toHaveAttribute('aria-expanded', 'false')
    await userEvent.click(trigger)
    expect(trigger).toHaveAttribute('aria-expanded', 'true')
    expect(trigger).toHaveAttribute('data-state', 'open')
    const contentId = trigger.getAttribute('aria-controls')
    if (!contentId) throw new Error('Step trigger must identify its content with aria-controls')
    expect(document.getElementById(contentId)).toContainElement(
      screen.getByText('Eligibility guidance')
    )
    await userEvent.click(trigger)
    expect(trigger).toHaveAttribute('aria-expanded', 'false')
  })

  it('shows all steps from a partially expanded state and then hides all', async () => {
    renderWithProvider(<StepByStep items={items} defaultValue={['first']} />)
    await userEvent.click(screen.getByRole('link', { name: 'Show all steps' }))
    for (const item of items)
      expect(disclosure(item.title)).toHaveAttribute('aria-expanded', 'true')
    await userEvent.click(screen.getByRole('link', { name: 'Hide all steps' }))
    for (const item of items)
      expect(disclosure(item.title)).toHaveAttribute('aria-expanded', 'false')
  })

  it('requests controlled changes without changing state until the parent updates', async () => {
    const onValueChange = vi.fn()
    const { rerender } = renderWithProvider(
      <StepByStep items={items} value={[]} onValueChange={onValueChange} />
    )
    await userEvent.click(disclosure('Check eligibility'))
    expect(onValueChange).toHaveBeenCalledWith({ value: ['first'] })
    expect(disclosure('Check eligibility')).toHaveAttribute('aria-expanded', 'false')
    rerender(<StepByStep items={items} value={['first']} onValueChange={onValueChange} />)
    expect(disclosure('Check eligibility')).toHaveAttribute('aria-expanded', 'true')
  })

  it('omits the bulk control for an empty journey', async () => {
    renderWithProvider(<StepByStep items={[]} />)
    expect(screen.queryByRole('button')).not.toBeInTheDocument()
  })
})
