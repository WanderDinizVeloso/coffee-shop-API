require('dotenv').config();

const express = require('express');
const { json } = require('body-parser');
const cors = require('cors');

const root = require('../controllers/routers/root');
const { error } = require('../controllers/middlewares');

const app = express();

app.use(cors());
app.use(json());
app.use(root);
app.use(error);

module.exports = app;
