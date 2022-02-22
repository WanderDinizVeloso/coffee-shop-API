const express = require('express');

const { create, remove, searchAll, searchById, update, upload } = require('../documents/products');
const { wrapper, authentication, admAuthorization, upload: uploadMidd } = require('../middlewares');

const router = express.Router({ mergeParams: true });

router.get('/', wrapper([
  // authentication,
  searchAll,
]));

router.get('/:id', wrapper([
  // authentication,
  searchById,
]));

router.post('/', wrapper([
  // authentication,
  // admAuthorization,
  create,
]));

router.put('/:id', wrapper([
  // authentication,
  // admAuthorization,
  update,
]));

router.put('/:id/image', wrapper([
  // authentication,
  // admAuthorization,
  uploadMidd.single('image'),
  upload,
]));

router.delete('/:id', wrapper([
  // authentication,
  // admAuthorization,
  remove,
]));

module.exports = router;
