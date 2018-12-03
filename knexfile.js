module.exports = {

  development: {
    client: 'pg',
    connection: {
      filename: './dev.sqlite3'
    },
    migrations: {
      directory: './db/migrations',
    },
    seeds: {
      directory: './db/seeds/dev',
    },    
    useNullAsDefault: true
  }
}