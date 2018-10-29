// ABOUT MODEL:

const mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  description: {
    "Tell me a little bit about yourself?": {
      type: String
    }
  },
  tech: {
    "What excites you about technology?": {
      type: String
    }
  },
  stack: {
    "What is your preferred technology stack?": {
      type: String
    }
  },
  hobbies: {
    "What are your favorite hobbies?": {
      type: String
    }
  }
});

const About = mongoose.model('About', UserSchema);

module.exports = { About };
