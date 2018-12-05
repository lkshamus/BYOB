const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const database = require('knex')(config)

app.use( bodyParser.json() );

app.use(express.static('public'));

app.set('port', process.env.PORT || 3000);

app.get('/', (request, response) => {
  response.send('hello world');
});

app.listen(app.get('port'), () => {
  console.log(`App is running on localhost:${app.get('port')}.`);
});