const db = require("../models");

// Defining methods for the articleController
module.exports = {
  findAll: function(req, res) {
    db.Request
      .find(req.query)
      .sort({ date: -1 })
      .then(dbRequest => res.json(dbRequest))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Request
      .findById(req.params.id)
      .then(dbRequest => res.json(dbRequest))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    const article = {
      _id: req.body._id,
      title: req.body.headline.main,

    };
    db.Request
      .create(request)
      .then(dbArticle => res.json(dbRequest))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Request
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbArticle => res.json(dbRequest))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Request
      .findById({ _id: req.params.id })
      .then(dbRequest => dbRequest.remove())
      .then(dbRequest => res.json(dbRequest))
      .catch(err => res.status(422).json(err));
  }
};
