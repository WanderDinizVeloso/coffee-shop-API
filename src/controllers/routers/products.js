const express = require('express');

const { create, remove, searchAll, searchById, update, upload } = require('../documents/products');
const {
  wrapper, authentication, admAuthorization, upload: uploadMidd, validateProducts, validateId,
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
  validateProducts,
  create,
]));

router.put('/:id', wrapper([
  authentication,
  admAuthorization,
  validateId,
  update,
]));

router.put('/:id/image', wrapper([
  authentication,
  admAuthorization,
  validateId,
  uploadMidd.single('image'),
  upload,
]));

router.delete('/:id', wrapper([
  authentication,
  admAuthorization,
  validateId,
  remove,
]));

module.exports = router;
