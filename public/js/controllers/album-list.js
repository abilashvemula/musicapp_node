'use strict';
(function () {
	angular.module('myApp')

	.controller('albumListCtrl', ['$scope', 'AlbumServ', albumListCtrl]);

	function albumListCtrl ($scope, AlbumServ) {
		AlbumServ.getAll()
		.then(data => {
			// console.log(data)
			$scope.albums = data;
		})
	}

})();