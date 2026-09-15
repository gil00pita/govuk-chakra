import '@testing-library/jest-dom/vitest'

const testDom = (
  globalThis as typeof globalThis & {
    jsdom?: { virtualConsole: import('node:events').EventEmitter }
  }
).jsdom

if (testDom) {
  // Filter at jsdom's event source: console spies do not cover diagnostics
  // emitted during teardown. Browser visual tests validate Chakra's CSS.
  const virtualConsole = testDom.virtualConsole
  const listeners = virtualConsole.listeners('jsdomError')
  virtualConsole.removeAllListeners('jsdomError')
  virtualConsole.on('jsdomError', (error: Error & { type?: string }) => {
    if (error.type === 'css-parsing' && error.message === 'Could not parse CSS stylesheet') return
    for (const listener of listeners) listener.call(virtualConsole, error)
  })
}
