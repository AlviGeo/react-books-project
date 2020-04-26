const Books = require("../models/Books");

module.exports = {
  create: (req, res, next) => {
    Books.create({
      name: req.body.name,
      years: req.body.years,
      book_number: req.body.book_number,
      status: req.body.status,
    })
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res.json(err);
      });
  },
  getAllData: (req, res) => {
    Books.find({})
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res.json(err);
      });
  },
  getDatabyId: (req, res) => {
    Books.findById(req.params.booksId)
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res.json(err);
      });
  },
  updateDatabyId: (req, res) => {
    Books.findByIdAndUpdate(req.params.booksId, {
      name: req.body.name,
      years: req.body.years,
      book_number: req.body.number,
      status: req.body.status,
    })
      .then((result) => res.json(result))
      .catch((err) => res.json(err));
  },
  deleteDataById: (req, res) => {
    Books.findByIdAndRemove(req.params.booksId)
      .then((result) => res.json(result))
      .catch((err) => res.json(err));
  },
};
