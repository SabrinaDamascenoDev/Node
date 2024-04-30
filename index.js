//const { Person } = require("./person");
const dotenv = require("dotenv");
//chama a conexao do bd
const connectToDatabse = require("./src/database/connect")

dotenv.config();

connectToDatabse();


//require('./modules/path');
//require('./modules/fs')
//require('./modules/http');

require('./modules/express');

//const person = new Person('Sabrina');
