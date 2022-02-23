const express = require('express');

const users = require('./users');
const login = require('./login');
const ingredients = require('./ingredients');
const products = require('./products');
const components = require('./components');
const sales = require('./sales');
const home = require('./home');

const root = express.Router({ mergeParams: true });

root.use('/users', users);
root.use('/login', login);
root.use('/ingredients', ingredients);
root.use('/products', products);
root.use('/components', components);
root.use('/sales', sales);
root.use('/', home);

module.exports = root;
