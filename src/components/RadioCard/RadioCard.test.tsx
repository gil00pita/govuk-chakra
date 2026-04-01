import { HStack } from '@chakra-ui/react'
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { renderWithProvider } from '@/test/renderWithProvider'
import radioCardRecipe from './RadioCard.recipe'
import { RadioCard } from './RadioCard'

describe('RadioCard', () => {
  it('uses the expected recipe defaults', () => {
    expect(radioCardRecipe.defaultVariants?.size).toBe('md')
    expect(radioCardRecipe.defaultVariants?.variant).toBe('outline')
    expect(radioCardRecipe.base?.itemControl).toMatchObject({
      borderWidth: 'max(2px, 0.125rem)',
      borderColor: 'border.input',
    })
  })

  it('updates selection when a card is clicked', async () => {
    const user = userEvent.setup()

    renderWithProvider(
      <RadioCard.Root defaultValue="next">
        <RadioCard.Label>Select framework</RadioCard.Label>
        <HStack align="stretch">
          {['next', 'vite', 'astro'].map((item) => (
            <RadioCard.Item key={item} value={item}>
              <RadioCard.ItemHiddenInput />
              <RadioCard.ItemControl>
                <RadioCard.ItemText>{item}</RadioCard.ItemText>
                <RadioCard.ItemIndicator />
              </RadioCard.ItemControl>
            </RadioCard.Item>
          ))}
        </HStack>
      </RadioCard.Root>
    )

    await user.click(screen.getByText('vite'))

    const radios = screen.getAllByRole('radio', { hidden: true })
    expect(radios[1]).toBeChecked()
  })
})
