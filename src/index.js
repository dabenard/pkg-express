const http = require('http');
const path = require('path');
const express = require('express');

// Express app
const app = express();
// Express views
app.set('views', path.join(__dirname, '../public/views'));
// Use pug as Express view engine
app.set('view engine', 'pug');
// Match all routes
app.use('*', (_req, res) => {
  res.render('index.pug');
});

// Start HTTP server
const listener = http.createServer(app).listen(8080, () => {
  console.info('Server started, listening on %d', listener.address().port);
});