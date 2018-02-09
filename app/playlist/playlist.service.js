angular.module("DeezerAngularJS")
	.service("PlaylistService", ["$http", 'DeezerService', function($http, DeezerService) {

		var service = {};


		service.getUserPlaylists = function() {
			return $http({
					method: "GET",
					url: DeezerService.apiUrl + '/user/me/playlists' + '?output=json&access_token=' + localStorage.getItem('deezer-access_token')
				})
				.then(function(response) {

					//console.log(response);
					var data = response.data;
					//console.log(data);
					return data;
				})
				.catch(function() {
					return undefined;
				})
		}


		service.getPlaylist = function(playlistId) {
			return $http({
					method: "GET",
					url: DeezerService.apiUrl + '/playlist/' + playlistId + '?output=json&access_token=' + localStorage.getItem('deezer-access_token')
				})
				.then(function(response) {

					//console.log(response);
					var data = response.data;
					//console.log(data);
					return data;
				})
				.catch(function() {
					return undefined;
				})
		}






		return service;
	}])
