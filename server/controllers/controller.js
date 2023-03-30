const data = require('../data.js');

module.exports = {
  hello: (req, res) => {
      res.json({"message": "Hello World!"});
  },

  sources: (req,res) => {
      res.json({"sources": data.sources});
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
    if (parseInt(req.params.id) === data.biggest_id)
    {
      data.biggest_id--;
    }
    res.json({"sources": data.sources, "removed": removed});
  },
};