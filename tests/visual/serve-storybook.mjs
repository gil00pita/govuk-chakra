import { createReadStream, existsSync, statSync } from 'node:fs'
import { join, normalize, resolve } from 'node:path'
import { createServer } from 'node:http'

const port = 6006
const root = resolve(process.cwd(), 'storybook-static')

if (!existsSync(root)) {
  console.error('storybook-static was not found. Run `yarn visual:build` first.')
  process.exit(1)
}

const contentTypes = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.map': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.txt': 'text/plain; charset=utf-8',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
}

function getContentType(filePath) {
  const ext = filePath.slice(filePath.lastIndexOf('.'))
  return contentTypes[ext] ?? 'application/octet-stream'
}

createServer((req, res) => {
  const url = new URL(req.url ?? '/', `http://${req.headers.host ?? '127.0.0.1'}`)
  const pathname = decodeURIComponent(url.pathname === '/' ? '/index.html' : url.pathname)
  const safePath = normalize(pathname).replace(/^(\.\.[/\\])+/, '')
  const filePath = join(root, safePath)

  if (!filePath.startsWith(root)) {
    res.writeHead(403)
    res.end('Forbidden')
    return
  }

  let targetPath = filePath

  if (existsSync(targetPath) && statSync(targetPath).isDirectory()) {
    targetPath = join(targetPath, 'index.html')
  }

  if (!existsSync(targetPath)) {
    res.writeHead(404)
    res.end('Not found')
    return
  }

  res.writeHead(200, { 'Content-Type': getContentType(targetPath) })
  createReadStream(targetPath).pipe(res)
}).listen(port, '127.0.0.1', () => {
  console.log(`Storybook static server listening on http://127.0.0.1:${port}`)
})
