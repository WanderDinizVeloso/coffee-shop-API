const express = require('express');

const { create, remove, searchAll, searchById, update } = require('../documents/ingredients');
const { wrapper, authentication, admAuthorization } = require('../middlewares');

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
