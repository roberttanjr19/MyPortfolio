const express = require('express');
const router = express.Router();
const projectController = require('../controllers/project.controller');

router.get('/',     projectController.getAll);
router.get('/:id',  projectController.getById);
router.post('/',    projectController.create);
router.put('/:id',  projectController.updateById);
router.delete('/:id', projectController.deleteById);
router.delete('/',  projectController.deleteAll);

module.exports = router;
