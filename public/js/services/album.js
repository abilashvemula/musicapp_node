'use strict';
(function() {
    angular.module('myApp')

    .factory('AlbumServ', ['$http', 'ALBUM_API', AlbumServ]);

    function AlbumServ($http, ALBUM_API) {
        function get(id) {
            if (id) {
                return $http.get(ALBUM_API + '/' + id)
                    .then(function(res) {
                        return res.data;
                    })

            } else {
                throw new Error('Album Id Must Be Provided');
            }
        }

        function getAll() {
            return $http.get(ALBUM_API)
                .then(function(res) {
                    return res.data;
                })
        }


        return {
            get: get,
            getAll: getAll
        }
    }

})();
