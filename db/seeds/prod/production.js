const artistsData = require('../../../helper/data.js')

const addArtist = (knex, artist) => {
  return knex('artists').insert({
    name: artist.artist,
    genre: artist.genre,
  }, 'id')
  .then(artistIds => {
    let albumPromises = artist.albums.map(album => {
      return createAlbums(knex, {
        title: album.name,
        release_date: album.year,
        artist_id: artistIds[0]
      })
    })

    return Promise.all(albumPromises)
  })
}

const createAlbums = (knex, album) => {
  return knex('albums').insert(album)
}

exports.seed = function(knex, Promise) {
  return knex('albums').del()
    .then(() => knex('artists').del())
    .then(() => {
      let artistPromises = artistsData.map(artist => {
        return addArtist(knex, artist)
      })
      return Promise.all(artistPromises)
    })
    .then(() => console.log('Successfully seeded database'))
    .catch(error => console.log(`Error seeding database: ${error.message}`))
};