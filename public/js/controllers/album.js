'use strict';
(function () {
	angular.module('myApp')

	.controller('albumCtrl', ['$scope', '$routeParams', 'AlbumServ', albumCtrl]);

	function albumCtrl ($scope, $routeParams, AlbumServ) {
		var id = $routeParams.albumId;
		AlbumServ.get(id)
		.then(data => {
			// console.log(data)
			$scope.album = data;
		})
	}

})();