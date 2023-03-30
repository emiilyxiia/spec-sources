const data = require('../data.js');

module.exports = {
  hello: (req, res) => {
      res.json({"message": "Hello World!"});
  },

  sources: (req,res) => {
      res.json({"sources": data.sources});
  },

  add_source: (req,res) => {
    
    res.json({"sources": data.sources});
  },
};