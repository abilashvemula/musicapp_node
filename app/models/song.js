'use strict';
const mongoose     = require('mongoose');
const Schema       = mongoose.Schema;
const uuid         = require('uuid');

const SongSchema = new Schema({
	id: { type: String, default: uuid },
	title: String,
	url: String,
	albumId: String
})

const Song = mongoose.model('Song', SongSchema);

module.exports = Song;