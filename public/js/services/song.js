'use strict';
(function() {
    angular.module('myApp')

    .factory('SongServ', ['$http', 'SONG_API', SongServ]);

    function SongServ($http, SONG_API) {
        function upload(file) {
            var fd = new FormData();
            //Take the first selected file
            fd.append("song", file);

            return $http.post(SONG_API, fd, {
                    headers: { 'Content-Type': undefined },
                })
                .then(function(res) {
                    return res.data;
                })
        }

        function getAll() {
            return $http.get(SONG_API)
                .then(function(res) {
                    return res.data;
                })
        }

        return {
            upload: upload,
            getAll: getAll
        }
    }

})();
