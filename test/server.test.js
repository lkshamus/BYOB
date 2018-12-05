const chai = require('chai')
const chaiHTTP = require('chai-http')
const app = require('../server.js')
const expect = chai.expect
chai.use(chaiHTTP)

describe('Server file', () => {
	describe('/api/v1/artists', () => {
		beforeEach((done) => {
			knex.migrate.rollback()
		})

		it('should return a 200 status', () => {
			chai.request(app)
				.get('/api/v1/artists')
				.end((error, response) => {
					expect(response).to.have.status(200)
					done()
			})
		})

		it()
	})
})