const path = require('path');
const views = path.join(__dirname, '../../public/views')
const bodyParser = require('body-parser');
const axios = require('axios');

exports.posts = (req, res, next) => {
  axios.get("https://jsonplaceholder.typicode.com/posts")
    .then(data =>
      res.render(views + '/posts', {data: data.data, title: "Posts"}))
    .catch(e => res.send(e))
}
