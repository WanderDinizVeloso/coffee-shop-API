require('dotenv').config();

const express = require('express');
const { json } = require('body-parser');
const cors = require('cors');
const path = require('path');

const root = require('../controllers/routers/root');
const { error } = require('../controllers/middlewares');

const app = express();

app.use(cors());
app.use(json());
app.use(express.urlencoded({ extended: true }));
app.use('/images', express.static(path.join(__dirname, '../../temp/images')));
app.use(root);
app.use(error);

module.exports = app;
