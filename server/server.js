// imports
require('./config/config');
const express = require('express')
const hbs = require('hbs');
const path = require('path');
// Server Setup
const app = express();
const publicPath = path.join(__dirname, '../public')
const port = process.env.PORT;
const { mongoose } = require('./db/mongoose');
const router = require('./router');
router(app);

app.listen(port, () => {
  console.log(`server up on: ${ port }`);
});

// view engine
hbs.registerPartials(publicPath + '/partials')
hbs.registerHelper('json', (context) => {
  return JSON.stringify(context)
});
app.set('view engine', 'hbs');
app.set('views', publicPath)

// middleware

app.use(express.static(publicPath))
app.use((req, res, next) => {
  next({
    status: 404,
    message: 'Not Found'
  });
});
app.use((err, req, res, next) => {
  if (err.status === 404) {
    return res.status(400).send(err.message)
  }
  if (err.status === 500) {
    return res.status(500).render('500')
  }
  next();
});
// exports
module.exports = { app }
