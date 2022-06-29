const Note = require('./note');

exports.postAddNote = async (req, res, next) => {
  const { title, text } = req.body;
  const note = new Note({ title, text });
  await note.save();

  res.status(201).json({ message: 'created', note });
};
