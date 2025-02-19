const http = require('http');
const url = require('url');
http.createServer((req, res) => {
  const name = url.parse(req.url, true).query.name;
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(name ? `Hello, ${name}!` : 'Please provide a name.');
}).listen(3000, () => console.log('Server running on http://localhost:3000'));
