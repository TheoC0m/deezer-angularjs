angular.module('DeezerAngularJS')
	.factory('UserFactory', ['$resource', 'DeezerService', function($resource, DeezerService) {


			return $resource(DeezerService.apiUrl + '/user/:id'+'?access_token='+localStorage.getItem('deezer-access_token')+'&output=jsonp', {
					id: '@id'
				}, {

					get: {
						headers: {
							'Authorization': 'Bearer '+localStorage.getItem('deezer-access_token')
						}},

					addAlbum: {
						method: 'POST',
						url: DeezerService.apiUrl + '/user/:id/albums'
						}
					});

			}])
