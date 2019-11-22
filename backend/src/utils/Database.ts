let mongoose = require('mongoose');

const DatabaseConfig = require('../../ServerConfig.json').database
const server = DatabaseConfig.server;
const database = DatabaseConfig.database;     

export default class Database {
  constructor() {
    this._connect()
  }
  
_connect() {
     mongoose.connect(`mongodb://${server}/${database}`)
       .then(() => {
         console.log('Database connection successful')
       })
       .catch(err => {
         console.error('Database failed to connect')
       })
  }
}
