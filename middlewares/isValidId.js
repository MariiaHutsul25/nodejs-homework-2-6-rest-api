const { isValidObject } = require("mongoose");
const { HttpError } = require("../helpers");

const isValidId = (req, res, next) => {
  const { contactId } = req.params;
  if (!isValidObject(contactId)) {
    next(HttpError(404, `${contactId} is valid id format`));
  }
  next();
};

module.exports = isValidId;
