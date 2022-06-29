const express = require('express');

const controllers = require('./controllers');

const router = express.Router();

router.post('/addNote', controllers.addNote);
router.get('/getNote', controllers.getNote);
router.get('/getAllNotes', controllers.getAllNotes);
router.put('/editNote', controllers.editNote);
router.put('/deleteNote', controllers.deleteNote);

module.exports = router;
