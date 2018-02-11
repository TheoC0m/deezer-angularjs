angular.module('DeezerAngularJS')
	.controller('PlaylistController', ['$scope', '$location', '$routeParams', 'PlaylistService', '$mdDialog',
		function($scope, $location, $routeParams, PlaylistService, $mdDialog) {


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

			$scope.addUserPlaylist = function(title) {
				$scope.loading = true;
				PlaylistService.addUserPlaylist(title).then(function(response) {
					if (response != undefined) {
						//$scope.playlist = response;
						console.log(response);
					}
					$scope.loading = false;
					$scope.getUserPlaylists();
				})
			}



			$scope.addPlaylistDialog = function(ev) {
				// Appending dialog to document.body to cover sidenav in docs app
				var confirm = $mdDialog.prompt()
					.title('Create a new Playlist')
					.textContent('Name of the new playlist')
					.placeholder('playlist title')
					.ariaLabel('Playlist title')
					.initialValue('')
					.targetEvent(ev)
					.required(true)
					.ok('Create')
					.cancel('Cancel');

				$mdDialog.show(confirm).then(function(result) {
					//$scope.status = 'You decided to name your dog ' + result + '.';
					$scope.addUserPlaylist(result);
				}, function() {
					$scope.status = 'You didn\'t name your dog.';
				});
			};



			$scope.previousPage = function() {
				window.history.back();
			}


			$scope.start = function() {
				$scope.userPlaylists = null;
				$scope.playlist = null;
				$scope.textSearched = undefined;
				$scope.loading = true;




				if ($routeParams.playlistId) {
					console.log($routeParams.playlistId);

					$scope.getPlaylist($routeParams.playlistId);

				} else {


					$scope.getUserPlaylists();
				}

			}

			$scope.start();


		}
	])
