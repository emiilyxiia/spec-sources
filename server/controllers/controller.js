const data = require('../data.js');

module.exports = {
  hello: (req, res) => {
      res.json({"message": "Hello World!"});
  },

  sources: (req,res) => {
      res.json({"sources": data.sources});
  },

  addSource: (req,res) => {
    //toAdd = req.body;
    toAdd = data.sources[0];
    data.sources.push(toAdd);
    res.json({"added": toAdd, "sources": data.sources});
  },

  getSource: (req,res) => {
    res.json({"source": data.sources[1]});
  },

  /*
  Removes a source based on its id
  */
  delete_source: (req,res) => {
    let removed;

    for (let i=0; i<data.sources.length; i++)
    {
      if (data.sources[i].id === req.params.id)
      {
        removed = data.sources[i];
        data.sources.splice(i,1);
      }
    }
    res.json({"sources": data.sources, "removed": removed});
  },
};