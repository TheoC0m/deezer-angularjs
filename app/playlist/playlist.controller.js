angular.module('DeezerAngularJS')
	.controller('PlaylistController', ['$scope', '$location', '$routeParams', 'PlaylistService',
		function($scope, $location, $routeParams, PlaylistService) {


			$scope.getUserPlaylists = function() {
				$scope.loading = true;
				PlaylistService.getUserPlaylists().then(function(response) {
					if (response != undefined) {
						$scope.userPlaylists = response;
						console.log($scope.userPlaylists);
					}
					$scope.loading = false;
				})
			}


			$scope.getPlaylist = function(playlistId) {
				$scope.loading = true;
				PlaylistService.getPlaylist(playlistId).then(function(response) {
					if (response != undefined) {
						$scope.playlist = response;
						console.log($scope.playlist);
					}
					$scope.loading = false;
				})
			}

			$scope.previousPage = function(){
				window.history.back();
			}


			$scope.start = function() {
				$scope.userPlaylists = null;
				$scope.playlist = null;
				$scope.textSearched = undefined;
				$scope.loading = true;




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
