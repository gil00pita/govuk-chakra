import { describe, expect, it } from 'vitest'
import { loadReactIcon } from './react-icon'

describe('loadReactIcon', () => {
  it('loads an icon from a short library name', async () => {
    await expect(loadReactIcon('LuCheck', 'lu')).resolves.toEqual(expect.any(Function))
  })

  it('loads an icon from a full library path', async () => {
    await expect(loadReactIcon('LuCheck', 'react-icons/lu')).resolves.toEqual(expect.any(Function))
  })

  it('returns null for an unknown icon', async () => {
    await expect(loadReactIcon('NotARealIcon', 'lu')).resolves.toBeNull()
  })
})
