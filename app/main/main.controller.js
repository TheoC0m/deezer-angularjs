angular.module('DeezerAngularJS')
	.controller('MainController', ['$scope', '$location', '$routeParams', '$timeout', '$mdSidenav', '$log', 'DeezerService',
		function($scope, $location, $routeParams, $timeout, $mdSidenav, $log, DeezerService) {

			$scope.toggleLeft = buildDelayedToggler('left');

			$scope.closeSideNav = function() {
				// Component lookup should always be available since we are not using `ng-if`
				$mdSidenav('left').close()
					.then(function() {
						$log.debug("close LEFT is done");
					});

			};

			$scope.deezerLogin = function() {
				DeezerService.deezerLogin();
			}



			function buildDelayedToggler(navID) {
				return debounce(function() {
					// Component lookup should always be available since we are not using `ng-if`
					$mdSidenav(navID)
						.toggle()
						.then(function() {
							$log.debug("toggle " + navID + " is done");
						});
				}, 200);
			}

			function debounce(func, wait, context) {
				var timer;

				return function debounced() {
					var context = $scope,
						args = Array.prototype.slice.call(arguments);
					$timeout.cancel(timer);
					timer = $timeout(function() {
						timer = undefined;
						func.apply(context, args);
					}, wait || 10);
				};
			}





		}
	])
