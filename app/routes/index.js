'use strict';

const albumCtrl = require('./album');
const songsCtrl = require('./song');

module.exports = app => {
   app.use('/api/albums', albumCtrl);
   app.use('/api/songs', songsCtrl);
};