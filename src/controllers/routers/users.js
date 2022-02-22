const express = require('express');

const { create, remove, update } = require('../documents/users');
const {
  wrapper, authentication, userAuthorization, validateUsers, validateId,
} = require('../middlewares');

const router = express.Router({ mergeParams: true });

router.post('/', wrapper([
  validateUsers,
  create,
]));

router.put('/:id', wrapper([
  // authentication,
  // userAuthorization,
  validateId,
  validateUsers,
  update,
]));

router.delete('/:id', wrapper([
  // authentication,
  // userAuthorization,
  validateId,
  remove,
]));

module.exports = router;
