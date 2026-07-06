const express = require('express');
const router = express.Router();
const qualificationController = require('../controllers/qualification.controller');

router.get('/',     qualificationController.getAll);
router.get('/:id',  qualificationController.getById);
router.post('/',    qualificationController.create);
router.put('/:id',  qualificationController.updateById);
router.delete('/:id', qualificationController.deleteById);
router.delete('/',  qualificationController.deleteAll);

module.exports = router;
