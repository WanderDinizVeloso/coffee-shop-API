const express = require('express');

const { wrapper } = require('../middlewares');

const { searchAll } = require('../documents/home');

const router = express.Router({ mergeParams: true });

router.get('/', wrapper([
  searchAll,
]));

module.exports = router;
