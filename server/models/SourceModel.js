const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// WRITE THE SCHEMA HERE

const sources = mongoose.model('spec_sources', YOUR_SCHEMA);

module.exports = sources;