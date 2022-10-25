
const Pool = require('pg').Pool;

const pg_conn = new Pool({
  user: 'ptnzjlilysupow',
  host: 'ec2-52-204-157-26.compute-1.amazonaws.com',
  database: 'd4drgm67jp1uu2',
  password: '5d21dca3537678aea067d28ae4189a7026c8b9c34cd34089e479c72a2efde760',
  port: 5432,
  ssl: {
    rejectUnauthorized: false
  },
})

module.exports = pg_conn;