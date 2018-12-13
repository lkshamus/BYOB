const testArtistsBtn = document.querySelector('.test-button-artists')
const testSingArtistBtn = document.querySelector('.test-button-single-artist')
const artistQueryBtn = document.querySelector('.test-button-artist-query')
const testAlbumsBtn = document.querySelector('.test-button-albums')
const testSingAlbum = document.querySelector('.test-button-album-single')

const showArtists = () => {
  const artistsDisplay = document.querySelector('.example-json-1')
  if (artistsDisplay.style.display === "none") {
    artistsDisplay.style.display = "block";
  } 
}

const showOneArtist = () => {
  const artist = document.querySelector('.example-json-2')
  if (artist.style.display === "none") {
    artist.style.display = "block";
  } 
}

const showQuery = () => {
  const query = document.querySelector('.example-json-3')
  if (query.style.display === "none") {
    query.style.display = "block";
  } 
}

const showAlbums = () => {
  const albumsDisplay = document.querySelector('.example-json-4')
  if (albumsDisplay.style.display === "none") {
    albumsDisplay.style.display = "block";
  }
}

const showOneAlbum = () => {
  const album = document.querySelector('.example-json-5')
  if (album.style.display === "none") {
    album.style.display = "block";
  }
}

testArtistsBtn.addEventListener('click', showArtists)
testSingArtistBtn.addEventListener('click', showOneArtist)
artistQueryBtn.addEventListener('click', showQuery)
testAlbumsBtn.addEventListener('click', showAlbums)
testSingAlbum.addEventListener('click', showOneAlbum)

