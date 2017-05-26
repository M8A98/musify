/*jshint esversion: 6*/
const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const songSchema = new Schema({
  number: String,
  name: String,
  duration: String,
  file: String,
  album:{type: Schema.ObjectId, ref: 'Album'}
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Song = mongoose.model('Song', songSchema);
module.exports = Song;
