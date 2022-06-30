const express = require('express');

const controllers = require('./controllers');
const validators = require('./validators');

const router = express.Router();

router.post(
  '/addNote',
  validators.addNote,
  validators.compiler,
  controllers.addNote
);
router.get(
  '/getNote',
  validators.getNote,
  validators.compiler,
  controllers.getNote
);
router.get('/getAllNotes', controllers.getAllNotes);
router.put(
  '/editNote',
  validators.editNote,
  validators.compiler,
  controllers.editNote
);
router.delete(
  '/deleteNote',
  validators.deleteNote,
  validators.compiler,
  controllers.deleteNote
);

module.exports = router;
