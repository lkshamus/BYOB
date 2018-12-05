const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const database = require('knex')(config)

app.use( bodyParser.json() );

app.use(express.static('public'));

app.locals.title = 'Album Finder'

app.set('port', process.env.PORT || 3000);

app.get('/api/v1/artists', (request, response) => {
  database('artists').select()
    .then(artists => {
      response.status(200).json(artists)
    })
    .catch(error => {
      response.status(500).json({ error: error.message })
    })
})

app.get('/api/v1/artists/:id', (request, response) => {
  const { id } = request.params

  database('artists').where('id', id).select()
    .then(artist => response.status(200).json(artist))
    .catch(error => console.log(`Error fetching artist: ${error.message}`))
})

app.get('/', (request, response) => {
  response.send('hello world');
});

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on localhost:${app.get('port')}.`);
});