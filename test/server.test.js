process.env.NODE_ENV = 'test'

const chai = require('chai')
const chaiHTTP = require('chai-http')
const app = require('../server.js')
const expect = chai.expect
const config = require('../knexfile')['test']
const database = require('knex')(config)
chai.use(chaiHTTP)

describe('Server file', () => {
	describe('/api/v1/artists', () => {
		beforeEach(done => {
     		database.migrate.latest()
     		.then(()=> {
       		return database.seed.run()
       		.then(()=> {
         	done();
       		});
     	  });
 	  });

		it('should return a 200 status', (done) => {
			chai.request(app)
				.get('/api/v1/artists')
				.end((error, response) => {
					expect(response).to.have.status(200)
					done()
			})
		})

		it('should add a new artist when a post request is made', (done) => {
			const newArtist = {
				name: 'Kygo',
				genre: 'Pop',
			}

			chai.request(app)
				.post('/api/v1/artists')
				.send(newArtist)
				.set('Content-Type', 'application/json')
				.end((error, response) => {
					expect(response).to.have.status(201)
					expect(typeof response.body.id).to.equal('number')
					done()
			})
		})
	})

	describe('/api/v1/albums', () => {
		it('should return a 200 status', (done) => {
			chai.request(app)
				.get('/api/v1/albums')
				.end((error, response) => {
					expect(response).to.have.status(200)
					done()
			})
		})

		it('should add a new album when a post request is made', (done) => {
		const newAlbum = {
			title: 'Kids in Love',
			release_date: 2017
		}

		chai.request(app)
			.post('/api/v1/albums')
			.send(newAlbum)
			.set('Content-Type', 'application/json')
			.end((error, response) => {
				expect(response).to.have.status(201)
				expect(typeof response.body.id).to.equal('number')
				done()
		})
	})

})

	describe('/api/v1/artists/:id', () => {
		it('should return a single artist', (done) => {
			chai.request(app)
				.get('/api/v1/artists/8')
				.end((error, response) => {
					expect(response).to.have.status(200)
					done()
				})
		})

		it('should delete an artist when a DELETE request is made', (done) => {

			chai.request(app)
				.delete('/api/v1/artists/312')
				.end((error, response) => {
					expect(response).to.have.status(201)
					done()
				})
		})

		it('should update artist entry when a post request is made', (done) => {
			const updatedArtist = {
				name: 'Travis Scottland',
				genre: 'Pop'
			}

		chai.request(app)
			.put('/api/v1/artists/312')
			.send(updatedArtist)
			.end((error, response) => {
				expect(response).to.have.status(200)
				done()
			})
		})
	})

	describe('/api/v1/albums/:id', () => {
		it('should return a single album', (done) => {
			chai.request(app)
				.get('/api/v1/albums/5')
				.end((error, response) => {
					expect(response).to.have.status(200)
					done()
				})
		})

		it('should delete an album when a DELETE request is made', (done) => {

			chai.request(app)
				.delete('/api/v1/albums/2235')
				.end((error, response) => {
					expect(response).to.have.status(201)
					done()
				})
		})

		it('should update an album entry when a post request is made', (done) => {
			const updatedAlbum = {
				title: 'Sheer Attack',
				release_date: 2000
			}

		chai.request(app)
			.put('/api/v1/albums/2235')
			.send(updatedAlbum)
			.end((error, response) => {
				expect(response).to.have.status(200)
				done()
			})
		})
	})
})