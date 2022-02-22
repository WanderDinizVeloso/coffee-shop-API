const express = require('express');

const { create, remove, searchAll, searchById, update } = require('../documents/components');
const {
  wrapper, authentication, admAuthorization, validateIngredients,
} = require('../middlewares');

const router = express.Router({ mergeParams: true });

router.get('/', wrapper([
  authentication,
  searchAll,
]));

router.get('/:id', wrapper([
  authentication,
  searchById,
]));

router.post('/', wrapper([
  authentication,
  admAuthorization,
  validateIngredients,
  create,
]));

router.put('/:id', wrapper([
  authentication,
  admAuthorization,
  update,
]));

router.delete('/:id', wrapper([
  authentication,
  admAuthorization,
  remove,
]));

module.exports = router;
