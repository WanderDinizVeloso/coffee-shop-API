const express = require('express');

const { wrapper, validateLogin } = require('../middlewares');
const { login } = require('../documents/login');

const router = express.Router({ mergeParams: true });

router.post('/', wrapper([
  validateLogin,
  login,
]));

module.exports = router;
