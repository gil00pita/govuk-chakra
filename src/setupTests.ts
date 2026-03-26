import '@testing-library/jest-dom/vitest'

const originalConsoleError = console.error

vi.spyOn(console, 'error').mockImplementation((...args) => {
  const [firstArg] = args
  const message =
    typeof firstArg === 'string'
      ? firstArg
      : firstArg instanceof Error
        ? firstArg.message
        : String(firstArg)

  if (message.includes('Could not parse CSS stylesheet')) {
    return
  }

  originalConsoleError(...args)
})
