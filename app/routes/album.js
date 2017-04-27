'use strict';
const express = require('express');
const Album    = require('../models/album');
const Song    = require('../models/song');
const router  = express.Router();

router.route('/')
.get((req, res) => {
	Album.find({}, (error, albums) => {
		if (error) return console.log(error);
		res.json(albums);
	});
})

router.route('/:albumId')
.get((req, res) => {
	const albumId = req.params.albumId;
	Song.find({ albumId: albumId}, (error, songs) => {
		if (error) return console.log(error);
		console.log(albumId)
		res.json(songs);
	});
})

 module.exports = router;