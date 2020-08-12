
require('dotenv').config();
const express = require('express'),
     massive = require('massive'),
     session = require('express-session'),
     {SERVER_PORT} = process.env,
     cors = require('cors'),
     ctrl = require('./controller'),
     port = SERVER_PORT,
     app = express();

     app.use(express.json());
     app.use(cors())

    app.listen(port, () => console.log(`server is thoomin on ${SERVER_PORT}`))