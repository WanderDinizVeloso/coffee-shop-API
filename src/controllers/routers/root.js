const express = require('express');

const users = require('./users');
const login = require('./login');
const ingredients = require('./ingredients');

const root = express.Router({ mergeParams: true });

root.use('/users', users);
root.use('/login', login);
root.use('/ingredients', ingredients);

module.exports = root;
