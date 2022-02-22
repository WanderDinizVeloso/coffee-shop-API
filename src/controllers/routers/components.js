const express = require('express');

const { create, remove, searchAll, searchById, update } = require('../documents/components');
const {
  wrapper, authentication, admAuthorization, validateComponents, validateId,
} = require('../middlewares');

const router = express.Router({ mergeParams: true });

router.get('/', wrapper([
  authentication,
  searchAll,
]));

router.get('/:id', wrapper([
  authentication,
  validateId,
  searchById,
]));

router.post('/', wrapper([
  authentication,
  admAuthorization,
  validateComponents,
  create,
]));

router.put('/:id', wrapper([
  authentication,
  admAuthorization,
  validateId,
  validateComponents,
  update,
]));

router.delete('/:id', wrapper([
  authentication,
  admAuthorization,
  validateId,
  remove,
]));

module.exports = router;
