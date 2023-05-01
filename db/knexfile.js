const dotenv = require("dotenv").config();
module.exports = {
  development: {
    client: 'mysql',
    connection: {
      user: process.env.DB_USER,
      password: process.env.DB_PW,
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      database: "dream_team"	
    }
  }
};
