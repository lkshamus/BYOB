const express = require('express')
const cors = require('cors')
const app = express();
const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const database = require('knex')(config)

function checkParams(request, response, next) {
  const body = request.body
  let missingParams = []
  let params = []
  if (request.url.includes('/api/v1/artists')) {
    params = ['name', 'genre']
  }
  if (request.url.includes('/api/v1/albums')) {
    params = ['title', 'release_date']
  }

  for(let requiredParam of params) {
    if (!body[requiredParam]) {
      missingParams = [...missingParams, requiredParam]
    }
  }

  if (missingParams.length) {
    response.status(422).send({ message: `Missing ${missingParams} in request`})
  } else {
    next()
  }
}

app.use(express.json());

app.use(cors())

app.use(express.static('public'));

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

app.post('/api/v1/artists', checkParams, (request, response) => {
  const artist = request.body
  database('artists').insert(artist, 'id')
    .then(artistIds => {
      response.status(201).json({ id: artistIds[0] })
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

app.patch('/api/v1/artists/:id', checkParams, (request, response) => {
  const { id } = request.params
  const { body } = request

  database('artists').where('id', id).update(body)
    .then(row => response.status(206).json({ message:  `Number of rows updated ${row}`}))
    .catch(error => {
      console.log(error)
      response.status(500).json({ error })
  })
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
app.post('/api/v1/albums', checkParams, (request, response) => {
  const album = request.body;
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

app.patch('/api/v1/albums/:id', (request, response) => {
  const { id } = request.params

  database('albums').where('id', request.params.id)
    .update({title: request.body.title, release_date: request.body.release_date})
    .then(() => {
      response.status(200).json(id);
    })
    .catch(error => {
      response.status(500).json({ error: error.message })
    })
})

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on localhost:${app.get('port')}.`);
});

module.exports = app;
