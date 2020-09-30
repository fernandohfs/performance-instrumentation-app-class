process.env.APP_NAME = "index-A";

const newrelic = require('newrelic');
const express = require('express');

const log = require('./log');

const app = express();

const port = process.env.PORT || 3000;

// add root route to express
app.get('/', (req, res) => {
  const message = 'OK - by API A';

  log.info(message);
  res.send(message);
});

// add root route to express
app.get('/error', (req, res) => {
  res.status(500).send('Something broke!');
});

// start application server
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
