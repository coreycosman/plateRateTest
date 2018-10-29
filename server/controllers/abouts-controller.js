const { About } = require('../models/about');
new About({description: { "Tell me a little bit about yourself?": "I am a Full-Stack Web Developer and Musician"},
tech: { "What excites you about technology?": "Technology is resourcful human innovation. It has and always will be a beautiful intersection between art and science that provides hardware and software instrumentation to better the Earth and the lives of organisms living among it. Its applications are as infinite as the knowledge and inquiry it is based upon, and it continues its develomental feedback loop, always fractalling outward. Its contribution to art and science are ineffable."},
stack: { "What is your preferred technology stack?": "My preferred tech stack right now is the MERN full-stack. I use MongoDB/Mongoose for Database storage and interaction, Express for serving http requests, React/Redux for the client side interface, and Node for compiling JavaScript code to C++ (and later to machine code) through its V8 engine, and for event looping and thread pooling via its libuv engine. I use Jest, Mocha, Chai, Supertest, and Selenium-WebDriver for unit, integration, and feature/e2e testing."},
hobbies: { "What are your favorite hobbies?": "I am interested in all areas of software programming/engineering as well as electrical engineering via electronic hardware design. I am in the process of learning to build my own electronic audio hardware circuits. I am also learning to build software to interface with raspberry Pi/Arduino hardware for audio/visual applications via Java. I am interested in DSP and am learning the basics of sound design with JavaScript and eventually want to learn how to use C++ for DSP. I am also interested in blockchain technology and am in the process of building my first blockchain and smart contract with Python (though I would like to eventually move to Golang/Rust for this)."}}).save()
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
