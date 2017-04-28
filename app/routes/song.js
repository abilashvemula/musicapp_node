'use strict';
const express = require('express');
const Album = require('../models/album');
const Song = require('../models/song');
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const id3Js = require('id3js');
const fs = require('fs');
const path = require('path');

router.route('/')
    .get((req, res) => {
        Song.find({}, (error, songs) => {
            if (error) return console.log(error);
            res.json(songs)
        })
    })

.post(upload.single('song'), (req, res) => {
    const file = req.file;
    const originalname = file.originalname;
    const currentPath = file.path;
    const destination = file.destination;
    const newPath = path.resolve(destination, originalname);
    fs.rename(currentPath, newPath, error => {
        if (error) return console.log(error);
        // console.log(file)
        id3Js({ file: newPath, type: id3Js.OPEN_LOCAL }, function(err, tags) {
            if (error) return error;
            // console.log(tags);

            const albumTitle = tags.album || 'Unknown Album'

            Album.find({ title: albumTitle }, (error, albums) => {
                if (error) return console.log(error);
                // console.log(albums)
                if (albums.length > 0) {
                    const albumId = albums[0].id
                    createSong(albumId);
                } else {
                    const album = new Album({ title: albumTitle });
                    album.save((error, album) => {
                        if (error) return console.log(error);
                        const albumId = album.id;
                        createSong(albumId)
                    })
                }



                function createSong(albumId) {
                    const song = new Song({
                        title: originalname,
                        url: '/' + originalname,
                        albumId: albumId
                    });

                    song.save((error, song) => {
                        if (error) return console.log(error);
                        res.json({ isSuccess: true })

                    })
                }

            })


            // tags now contains your ID3 tags
        });

    });
})

router.route('/:songId')
    .get((req, res) => {
    	const songId = req.params.songId;
    	Song.findOne({ id: songId}, (error, song) => {
    		if (error) return console.log(error);
    		res.json(song);
    	})
    })

module.exports = router;
