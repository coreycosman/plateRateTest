const path = require('path');
const views = path.join(__dirname, '../../public/views');

exports.root = (req, res, next) => {
  res.render(views + '/root')
}

exports.test = (req, res, next) => {
  var test = JSON.stringify({ test: "test" })
  res.send(test)
}
