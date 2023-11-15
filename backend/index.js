const express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');

const PORT = process.env.PORT || 5000;
const app = express();

app.use(bodyParser.json());

app.use(cors({
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionsSuccessStatus: 204,
}));

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/message', require('./controllers/message.controller') );

app.listen(PORT, async () => {
  console.log(`Listening on the port ${PORT}`);
});