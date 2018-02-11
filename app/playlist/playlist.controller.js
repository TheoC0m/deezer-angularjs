angular.module('DeezerAngularJS')
	.controller('PlaylistController', ['$scope', '$location', '$routeParams', 'PlaylistService',
		function($scope, $location, $routeParams, PlaylistService) {


			$scope.getUserPlaylists = function() {
				PlaylistService.getUserPlaylists().then(function(response) {
					if (response != undefined) {
						$scope.userPlaylists = response;
						console.log($scope.userPlaylists);
					}
					$scope.loaded = true;
				})
			}


			$scope.getPlaylist = function(playlistId) {
				PlaylistService.getPlaylist(playlistId).then(function(response) {
					if (response != undefined) {
						$scope.playlist = response;
						console.log($scope.playlist);
					}
					$scope.loaded = true;
				})
			}

			$scope.previousPage = function(){
				window.history.back();
			}


			$scope.start = function() {
				$scope.userPlaylists = null;
				$scope.playlist = null;




				if($routeParams.playlistId){
					console.log($routeParams.playlistId);

					$scope.getPlaylist($routeParams.playlistId);

				}
				else{


					$scope.getUserPlaylists();
				}

			}

			$scope.start();


		}
	])
