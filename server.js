const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');

const mode_env = 'dev'

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const port = randomInteger(3000,4000);

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/ping', (req, res) => {
    res.status(200).json({"result": "pong"});
  });

app.listen(port, () => {
  console.log(`listening on port ${port} in ${mode_env} mode`)
})

