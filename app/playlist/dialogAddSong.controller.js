angular.module('DeezerAngularJS')
	.controller('DialogAddSongController', ['$scope', '$mdDialog', 'PlaylistService',
		function($scope, $mdDialog, PlaylistService, ) {


			// $scope.hide = function() {
			// 	$mdDialog.hide();
			// };
			//
			// $scope.cancel = function() {
			// 	$mdDialog.cancel();
			// };
			//
			// $scope.answer = function(answer) {
			// 	$mdDialog.hide(answer);
			// };
			//
			//
			// $scope.searchTrack = function() {
			// 	$scope.loading = true;
			// 	PlaylistService.searchTrack($scope.trackSearched).then(function(response) {
			// 		if (response != undefined) {
			// 			//$scope.playlist = response;
			// 			console.log(response);
			// 			$scope.foundTracks = response
			// 		}
			// 		$scope.loading = false;
			// 		// $scope.getUserPlaylists();
			// 	})
			// }
			//
			// $scope.start = function() {
			// 	$scope.trackSearched = undefined;
			// 	$scope.selectedTrack = undefined;
			// 	$scope.foundTracks = undefined;
			// }
			//
			// $scope.start();




		}
	]);
