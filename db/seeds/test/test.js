const artistsData = [
  {
  artist: 'Queen',
  genre: 'Classic Rock',
  albums: [
    {name: 'Queen', year: 1973},
    {name: 'Queen II', year: 1974},
    {name: 'Sheer Heart Attack', year: 1974},
    {name: 'A Night At The Opera', year: 1975},
    {name: 'A Day At The Races', year: 1976},
    {name: 'News Of The World', year: 1977},
    {name: 'Jazz', year: 1979},
    {name: 'The Game', year: 1980},
    {name: 'Flash Gordon', year: 1980},
    {name: 'Hot Space', year: 1982},
    {name: 'The Works', year: 1984},
    {name: 'A Kind Of Magic', year: 1986},
    {name: 'The Miracle', year: 1989},
    {name: 'Innuendo', year: 1991},
    {name: 'Made in Heaven', year: 1995}
  ]},
  {
    artist: 'Michael Buble', 
    genre: 'Jazz', 
    albums: [
      {name: 'Michael Buble', year: 2003},
      {name: 'Its Time',  year: 2005},
      {name: 'Call Me Irresponsible', year: 2007},
      {name: 'Crazy Love', year: 2009},
      {name: 'Christmas', year: 2011}, 
      {name: 'To Be Loved', year: 2013},
      {name: 'Nobody But Me', year: 2016},
      {name: 'Love', year: 2018}
    ]
  }, 
  {
    artist: 'Travis Scott', 
    genre: 'Hip-Hop', 
    albums: [
      {name: 'Rodeo', year: 2015},
      {name: 'Birds in the Trap Sing McKnight',  year: 2016},
      {name: 'Astroworld', year: 2018}
    ]
  }
]

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