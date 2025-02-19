const http = require('http');
const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');
  if (req.url === '/home') {
    res.statusCode = 200;
    res.end('<h1>Welcome to Home</h1>');
  } else if (req.url === '/about') {
    res.statusCode = 200;
    res.end('<h1>About Us</h1>');
  } else if (req.url === '/contact') {
    res.statusCode = 200;
    res.end('<h1>Contact Us</h1>');
  } else {
    res.statusCode = 404;
    res.end('<h1>404 - Page Not Found</h1>');
  }
});
server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
