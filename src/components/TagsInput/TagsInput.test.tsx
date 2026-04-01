import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { renderWithProvider } from '@/test/renderWithProvider'
import tagsInputRecipe from './TagsInput.recipe'
import { TagsInput } from './TagsInput'

describe('TagsInput', () => {
  it('uses the expected recipe defaults', () => {
    expect(tagsInputRecipe.defaultVariants?.size).toBe('md')
    expect(tagsInputRecipe.defaultVariants?.variant).toBe('outline')
    expect(tagsInputRecipe.base?.control).toMatchObject({
      borderColor: 'border.input',
      borderRadius: '0',
    })
  })

  it('adds a tag from keyboard input', async () => {
    const user = userEvent.setup()

    renderWithProvider(
      <TagsInput.Root defaultValue={['React', 'Chakra']} maxW="320px">
        <TagsInput.HiddenInput />
        <TagsInput.Label>Frameworks</TagsInput.Label>
        <TagsInput.Control>
          <TagsInput.Items />
          <TagsInput.Input placeholder="Add tag" />
        </TagsInput.Control>
      </TagsInput.Root>
    )

    const input = screen.getByPlaceholderText(/add tag/i)
    await user.type(input, 'Vue{Enter}')

    expect(screen.getByText('Vue')).toBeVisible()
  })
})
