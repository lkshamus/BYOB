module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/albumfinder',
    migrations: {
      directory: './db/migrations',
    },
    seeds: {
      directory: './db/seeds/dev',
    },    
    useNullAsDefault: true
  },
  test: {
    client: 'pg',
    connection: 'postgres://localhost/albumfindertests',
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds/test'
    }
  }
}