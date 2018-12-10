const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const database = require('knex')(config)

app.use( bodyParser.json() );

app.use(express.static('public'));

app.use((request, response, next) => {
  response.header('Access-Control-Allow-Origin', '*');
  response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
})

app.locals.title = 'Album Finder'

app.set('port', process.env.PORT || 3000);

app.get('/', (request, response) => {
  response.send('BYOB!');
});


// /api/v1/artists
app.get('/api/v1/artists', (request, response) => {

  if(request.query.name) {
    let nameQuery = request.query.name
    database('artists').where("name", nameQuery).select()
    .then(artists => {
      response.status(200).json(artists)
    })
    .catch(error => {
      response.status(500).json({ error: error.message })
    })
  } else {
    database('artists').select()
    .then(artists => {
      response.status(200).json(artists)
    })
    .catch(error => {
      response.status(500).json({ error: error.message })
    })
  }
})

app.post('/api/v1/artists', (request, response) => {
  const artist = request.body

  let missingProperties = []

  for(let requiredProperty of ['name', 'genre']) {
    if(artist[requiredProperty] === undefined) {
      missingProperties = [...missingProperties, requiredProperty]
    }
  }

  if(missingProperties.length) {
    response.status(422).send({ message: `Missing ${missingProperties} in request` })
  } else {
    database('artists').insert(artist, 'id')
      .then(artistIds => {
        response.status(201).json({ id: artistIds[0] })
      })
      .catch(error => {
        response.status(500).json({ error: error.message })
      })
  }
})

app.get('/api/v1/artists/:id', (request, response) => {
  const { id } = request.params

  database('artists').where('id', id).select()
    .then(artist => response.status(200).json(artist))
    .catch(error => console.log(`Error fetching artist: ${error.message}`))
})

app.delete('/api/v1/artists/:id', (request, response) => {
  const { id } = request.params

  database('albums').where('artist_id', id).del()
  .then( () => database('artists').where('id', id).del())
  .then(album => {
    response.status(201).json(id)
  })
  .catch(error => {
    response.status(500).json({error: error.message})
  })
})

app.put('/api/v1/artists/:id', (request, response) => {
  const { id } = request.params

  database('artists').where('id', request.params.id)
    .update({name: request.body.name, genre: request.body.genre})
    .then(() => {
      response.status(200).json(id);
    })
    .catch(error => {
      response.status(500).json({ error: error.message })
    })
});

// /api/v1/albums 
app.post('/api/v1/albums', (request, response) => {
  const album = request.body;

  if (!album) {
    return response.status(422).json({ error: 'No album object provided' })
  }

  for (let requiredParameter of ['title', 'release_date']) {
    if (!album[requiredParameter]) {
      return response.status(422).json({error: `Expected format: {title: <STRING>, releaseDate: 
        <STRING>. Missing the required parameter of ${requiredParameter}.`})
    }

  }

  database('albums').insert(album, 'id')
    .then(album => {
        response.status(201).json({ id: album[0] })
      })
      .catch(error => {
        response.status(500).json({ error });
      });
})

app.get('/api/v1/albums', (request, response) => {
  database('albums').select()
    .then(albums => {
      response.status(200).json(albums)
    })
    .catch(error => {
      response.status(500).json({ error: error.message })
    })
})

app.get('/api/v1/albums/:id', (request, response) => {
  const { id } = request.params

  database('albums').where('id', id).select()
    .then(album => response.status(200).json(album))
    .catch(error => console.log(`Error fetching artist: ${error.message}`))
})

app.delete('/api/v1/albums/:id', (request, response) => {
  const { id } = request.params

  database('albums').where('id', id).del()
  .then(album => {
    response.status(201).json(id)
  })
  .catch(error => {
    response.status(500).json({error: error.message})
  })
})

app.put('/api/v1/albums/:id', (request, response) => {
  const { id } = request.params

  database('albums').where('id', request.params.id)
    .update({title: request.body.title, release_date: request.body.release_date})
    .then(() => {
      response.status(200).json(id);
    })
    .catch(error => {
      response.status(500).json({ error: error.message })
    })
});

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on localhost:${app.get('port')}.`);
});

module.exports = app;