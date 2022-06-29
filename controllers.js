const Note = require('./note');

exports.addNote = async (req, res, next) => {
  const { title, text } = req.body;
  const note = new Note({ title, text });
  await note.save();

  res.status(201).json({ message: 'created', note });
};

exports.getNote = async (req, res, next) => {
  const id = req.query.id;
  const note = await Note.findById(id);
  if (!note) {
    return res.status(404).json({ message: 'not found' });
  }
  res.json({ message: 'found', note });
};

exports.getAllNotes = async (req, res, next) => {
  const notes = Note.find();
  const mappedNotes = notes.map(note => {
    note._id, note.title, note.createdAt, note.updatedAt;
  });
  res.json({ message: 'done', notes: mappedNotes });
};

exports.editNote = async (req, res, next) => {
  const { id, title, text } = req.body;
  const note = Note.findById(id);
  if (!note) {
    return res.status(404).json({ message: 'not found' });
  }
  
  note.title = title || note.title;
  note.text = text || note.text;
  await note.save();
  res.json({ message: 'edited', note });
};

exports.deleteNote = (req, res, next) => {
  const { id } = req.body;
  const note = await Note.findByIdAndDelete(id);
  if(!note) {
    return res.status(404).json({ message: 'not found' });
  }

  res.json({message: 'deleted', note})
};
