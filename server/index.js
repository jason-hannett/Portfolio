
require('dotenv').config({path: __dirname + '/../.env'});
const express = require('express'),
     {SERVER_PORT} = process.env,
     cors = require('cors'),
     ctrl = require('./controller'),
     path = require('path'),
     port = SERVER_PORT,
     app = express();

     app.use(express.json());
     app.use(cors())
     app.use(express.static(`${__dirname}/../build`));

     app.get("*", (req, res) => {
          res.sendFile(path.join(__dirname, "../build/index.html"));
        });

    app.listen(port, () => console.log(`server is thoomin on ${SERVER_PORT}`))