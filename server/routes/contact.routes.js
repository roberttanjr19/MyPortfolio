const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contact.controller');

router.get('/',     contactController.getAll);
router.get('/:id',  contactController.getById);
router.post('/',    contactController.create);
router.put('/:id',  contactController.updateById);
router.delete('/:id', contactController.deleteById);
router.delete('/',  contactController.deleteAll);

module.exports = router;
