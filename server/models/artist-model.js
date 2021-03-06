/*jshint esversion: 6*/
const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const artistSchema = new Schema({
  username: String,
  description: String,
  image: String
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Artist = mongoose.model('Artist', artistSchema);
module.exports = Artist;
