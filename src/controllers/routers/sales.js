const express = require('express');

const { create, searchAll } = require('../documents/sales');
const { wrapper, authentication, admAuthorization, validateSales } = require('../middlewares');

const router = express.Router({ mergeParams: true });

router.get('/', wrapper([
  authentication,
  admAuthorization,
  searchAll,
]));

router.post('/', wrapper([
  authentication,
  validateSales,
  create,
]));

module.exports = router;
