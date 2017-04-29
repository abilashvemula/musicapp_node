'use strict';
(function () {
	angular.module('myApp', ['ngRoute'])

	// .constant('ALBUM_API', 'http://localhost:3000/api/albums')
	// .constant('SONG_API', 'http://localhost:3000/api/songs')
	.constant('ALBUM_API', 'http://139.59.74.153:3000/api/albums')
	.constant('SONG_API', 'http://139.59.74.153:3000/api/songs')

	.config(['$routeProvider', config]);

	function config ($routeProvider) {
		$routeProvider
		.when('/albums', {
			templateUrl: '../partials/album-list.html',
			controller: 'albumListCtrl'
		})
		.when('/songs', {
			templateUrl: '../partials/song-list.html',
			controller: 'songListCtrl'
		})
		.when('/albums/:albumId', {
			templateUrl: '../partials/album.html',
			controller: 'albumCtrl'
		})
		.when('/upload-song', {
			templateUrl: '../partials/upload-song.html',
			controller: 'uploadCtrl'
		})
		.otherwise('/albums')
	}

})();