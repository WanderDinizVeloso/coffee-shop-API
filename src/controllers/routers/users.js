const express = require('express');

const { create, remove, update } = require('../documents/users');
const { wrapper, authentication, userAuthorization } = require('../middlewares');

const router = express.Router({ mergeParams: true });

router.post('/', wrapper([
  create,
]));

router.put('/:id', wrapper([
  authentication,
  userAuthorization,
  update,
]));

router.delete('/:id', wrapper([
  authentication,
  userAuthorization,
  remove,
]));

module.exports = router;
