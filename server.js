const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');

const mode_env = 'dev'
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/ping', (req, res) => {
    res.send('Pong!')
  })

app.listen(port, () => {
  console.log(`listening on port ${port} in ${mode_env} mode`)
})