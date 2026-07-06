const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const { requireSignin } = require('../middleware/auth.middleware');

router.get('/',       userController.getAll);
router.get('/:id',    userController.getById);
router.post('/',      userController.create);
router.put('/:id',    requireSignin, userController.updateById);
router.delete('/:id', requireSignin, userController.deleteById);
router.delete('/',    requireSignin, userController.deleteAll);

module.exports = router;
