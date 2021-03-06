const express = require('express');

const bodyParser = require('body-parser');

const app = express();

const routes = require('./routes');

app.use(bodyParser.json({ limit: '10mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));
app.use(express.urlencoded({ extended: true }));

app.use(routes);

module.exports = app;