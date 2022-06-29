const express = require('express');

const controllers = require('../controllers');

const router = express.Router();

router.post('/addNote', controllers.postAddNote);

module.exports = router;
