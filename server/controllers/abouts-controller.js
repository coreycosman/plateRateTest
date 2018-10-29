const { About } = require('../models/about');
const path = require('path');
const views = path.join(__dirname, '../../public/views');
const partials = path.join(__dirname, '../../public/partials');

exports.index = (req, res, next) => {
  res.render(views + '/about')
}

exports.all = (req, res, next) => {
  About.find({})
    .then((questions) => {
      var description = questions[0].description;
      var tech = questions[0].tech;
      var stack = questions[0].stack;
      var hobbies = questions[0].hobbies;

      res.render(partials + '/all',
      { description, tech, stack, hobbies })
    })
}

exports.description = (req, res, next) => {
  About.find({})
    .then((questions) => {
      var description = questions[0].description;
      res.render(partials + '/description', { description });
    })
}

exports.tech = (req, res, next) => {
  About.find({})
    .then((questions) => {
      var tech = questions[0].tech;

      res.render(partials + '/tech', { tech });
    })
}

exports.stack = (req, res, next) => {
  About.find({})
    .then((questions) => {
      var stack = questions[0].stack;

      res.render(partials + '/stack', { stack });
    })
}

exports.hobbies = (req, res, next) => {
  About.find({  })
    .then((questions) => {
      var hobbies = questions[0].hobbies;

      res.render(partials + '/hobbies', { hobbies });
    })
}
