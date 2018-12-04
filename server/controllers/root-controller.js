const path = require("path");
const views = path.join(__dirname, "../../public/views");

exports.root = (req, res, next) => {
  res.render(views + "/root");
};

exports.test = (req, res, next) => {
  var test = JSON.stringify({ test: "test" });
  res.send(test);
};

exports.description = (req, res, next) => {
  let description = JSON.stringify({
    "Tell me a little bit about yourself?":
      "I am a Full-Stack Web Developer and Musician"
  });
  res.send(description);
};
