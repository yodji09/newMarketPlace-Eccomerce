const express = require('express');
const app = express();
const port = process.enc.PORT || 3000;
const cors = require('cors');
const routes = require('./routes')

require('dotenv').config()

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(routes);

app.listen(port, () => {
  console.log('This app is listen to port ', port)
})