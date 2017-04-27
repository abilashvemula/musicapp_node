'use strict';
const mongoose     = require('mongoose');
const Schema       = mongoose.Schema;
const uuid         = require('uuid');

const AlbumSchema   = new Schema({
	id: { type: String, default: uuid },
    title: String,
});

const Album = mongoose.model('Album', AlbumSchema);

module.exports = Album;