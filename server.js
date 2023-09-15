// Server-side JavaScript file
const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  let filePath = '.' + req.url;
  if (filePath === './') {
    filePath = './index.html';
  }

  const extname = String(path.extname(filePath)).toLowerCase();
  const mimeTypes = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
  };

  const contentType = mimeTypes[extname] || 'application/octet-stream';

  // Validate and sanitize the requested file path
  filePath = path.normalize(filePath);

  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      if (err.code === 'ENOENT') {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('404 Not Found');
      } else {
        res.writeHead(500, { 'Content-Type': 'text/html' });
        res.end('500 Internal Server Error');
      }
    } else {
      // Stream the file content directly to the response
      const fileStream = fs.createReadStream(filePath);
      res.writeHead(200, { 'Content-Type': contentType });
      fileStream.pipe(res);
    }
  });
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
