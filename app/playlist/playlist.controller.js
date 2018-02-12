angular.module('DeezerAngularJS')
	.controller('PlaylistController', ['$scope', '$location', '$routeParams', 'PlaylistService', '$mdDialog',
		function($scope, $location, $routeParams, PlaylistService, $mdDialog, ) {


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

				if ($scope.userPlaylists && !$scope.playlist) {

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

					});

				}
				if (!$scope.userPlaylists && $scope.playlist) {


					$mdDialog.show({
							controller: DialogController,
							templateUrl: 'app/playlist/dialogAddSong.tmpl.html',
							parent: angular.element(document.body),
							targetEvent: ev,
							clickOutsideToClose: true,
							fullscreen: true,
							locals: {
								trackSearched: DialogController.trackSearched,
								selectedTrack: DialogController.selectedTrack,
								searchTrack: DialogController.searchTrack,
								foundTracks: DialogController.foundTracks
							},
							bindToController: true
						})
						.then(function(answer) {
							console.log('You said the information was "' + answer + '".');
						}, function() {
							console.log('You cancelled the dialog.');
						});


				}
			};

			function DialogController($scope, $mdDialog) {

				$scope.start = function() {
					$scope.trackSearched = undefined;
					$scope.selectedTrack = undefined;
					$scope.foundTracks = undefined;
				}


				$scope.hide = function() {
					$mdDialog.hide();
				};

				$scope.cancel = function() {
					$mdDialog.cancel();
				};

				$scope.answer = function(answer) {
					$mdDialog.hide(answer);
				};


				$scope.searchTrack = function() {
					$scope.loading = true;
					PlaylistService.searchTrack($scope.trackSearched).then(function(response) {
						if (response != undefined) {
							//$scope.playlist = response;
							console.log(response);
							$scope.foundTracks = response
						}
						$scope.loading = false;
						// $scope.getUserPlaylists();
					})
				}
			}



			$scope.previousPage = function() {
				window.history.back();
			}


			$scope.start = function() {
				$scope.userPlaylists = null;
				$scope.playlist = null;
				$scope.textSearched = undefined;
				$scope.loading = true;
				$scope.customFullscreen = false;





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
