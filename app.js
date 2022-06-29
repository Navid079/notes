const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes');

const app = express();

app.use(router);

mongoose.connect('mongodb://localhost:27017/notesapi').then(() => {
  app.listen(3001, () => {
    console.log('connected!');
  });
});
