const { body, query, validationResult } = require('express-validator');

exports.addNote = [
  body('title', '422-title missing').exists().isString(),
  body('text', '422-text missing').exists().isString(),
];

exports.getNote = [query('id', '404-not found').exists()];

exports.editNote = [
  body('id', '404-not found').exists(),
];

exports.deleteNote = [body('id', '404-not found').exists()];

exports.compiler = (req, res, next) => {
  const result = validationResult(req);
  if (result.isEmpty()) return next();
  const resultArray = result.array({ onlyFirstError: true });
  const [status, message] = resultArray[0].msg.split('-');
  try {
    res.status(+status).json({ message });
  } catch {
    res.status(500).send();
  }
};
