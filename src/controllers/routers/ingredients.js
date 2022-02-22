const express = require('express');

const { create, remove, searchAll, searchById, update } = require('../documents/ingredients');
const {
  wrapper, authentication, admAuthorization, validateIngredients, validateId,
} = require('../middlewares');

const router = express.Router({ mergeParams: true });

router.get('/', wrapper([
  // authentication,
  searchAll,
]));

router.get('/:id', wrapper([
  // authentication,
  validateId,
  searchById,
]));

router.post('/', wrapper([
  // authentication,
  // admAuthorization,
  validateIngredients,
  create,
]));

router.put('/:id', wrapper([
  // authentication,
  // admAuthorization,
  validateId,
  validateIngredients,
  update,
]));

router.delete('/:id', wrapper([
  // authentication,
  // admAuthorization,
  validateId,
  remove,
]));

module.exports = router;
