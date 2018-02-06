angular.module('DeezerAngularJS')
	.factory('UserFactory',['$resource', 'DeezerService', function($resource, DeezerService){


 		return $resource(DeezerService.apiUrl + '/user/:id', { id: '@id' }, {

			addAlbum: {method:'POST', url: DeezerService.apiUrl + '/user/:id/albums'}
		} );

	}])
