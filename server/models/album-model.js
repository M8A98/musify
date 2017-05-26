/*jshint esversion: 6*/
const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const albumSchema = new Schema({
  title: String,
  description: String,
  year: Number,
  image: String,
  artist:{type: Schema.ObjectId, ref: 'Artist'}
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Album = mongoose.model('Album', albumSchema);
module.exports = Album;
