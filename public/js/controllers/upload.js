'use strict';
(function() {
    angular.module('myApp')

    .controller('uploadCtrl', ['$scope', 'SongServ', uploadCtrl]);

    function uploadCtrl($scope, SongServ) {
      
        $scope.uploadFile = function(file) {
        	SongServ.upload(file)
        	.then(function (data) {
        		console.log(data)
        		if (data.isSuccess) {}
        		alert('File Uploaded Successfully')
        	})
        };

    }

})();
