const config = require('./src/config/env.config');
const router = require('./src/api/router');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');

const node_env = 'dev';

const port = 3000;

//Headers


//Middleware
app.use(bodyParser.urlencoded({​​​​​
  extended: true
}​​​​​)); // for parsing application/x-www-form-urlencoded
app.use(bodyParser.json()); // for parsing application/json

app.use(morgan(config.node_env));
app.use(cors());

//Routes
router(app);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(config.port, () => {
  console.log(`listening on port ${config.port} in ${config.node_env} mode`)
})