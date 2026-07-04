const http = require('http')
const fs = require('fs')
const path = require('path')

const MIME_TYPES = {
  '.html': 'text/html',
  '.js':   'application/javascript',
  '.css':  'text/css',
}

const server = http.createServer((req, res) => {
  // Default to index.html
  let filePath = req.url === '/' ? '/index.html' : req.url

  // Resolve to absolute path
  const absPath = path.join(__dirname, filePath)

  fs.readFile(absPath, (err, data) => {
    if (err) {
      res.writeHead(404)
      res.end('Not found: ' + filePath)
      return
    }

    const ext = path.extname(absPath)
    const contentType = MIME_TYPES[ext] || 'text/plain'

    res.writeHead(200, { 'Content-Type': contentType })
    res.end(data)
  })
})

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000')
})
