'use strict';
(function () {
	angular.module('myApp')

	.controller('songListCtrl', ['$scope', 'SongServ', songListCtrl]);

	function songListCtrl ($scope, SongServ) {
		console.log(SongServ)
		SongServ.getAll()
		.then(data => {
			// console.log(data)
			$scope.songs = data;
		})
	}

})();