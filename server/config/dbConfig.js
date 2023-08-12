const { Pool} = require('pg');

const db = new Pool({
   host:"localhost",
   user:"postgres",
   password:"admin",
   port:5432,
   database:"postgres"
});

module.exports = db;
