angular.module('DeezerAngularJS')
	.controller('MainController', ['$scope', '$location', '$routeParams', '$timeout', '$mdSidenav', '$log', 'DeezerService', 'UserService',
		function($scope, $location, $routeParams, $timeout, $mdSidenav, $log, DeezerService, UserService) {



			$scope.connected = DeezerService.isConnected();

			$scope.deezerLogin = function() {
				DeezerService.deezerLogin();
				$scope.connected = DeezerService.isConnected();
				console.log("nav afeter login click connected : " + $scope.connected);
			}
			$scope.deezerLogout = function() {
				DeezerService.deezerLogout();
				$scope.connected = DeezerService.isConnected();
				console.log("nav after logout click connected : : " + $scope.connected);
			}


			$scope.toggleLeft = buildDelayedToggler('left');

			$scope.closeSideNav = function() {
				// Component lookup should always be available since we are not using `ng-if`
				$mdSidenav('left').close()
					.then(function() {
						$log.debug("close LEFT is done");
					});

			};

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

			$scope.start = function() {
				//if current url has an hash with access_token
				if ($location.hash().startsWith("access_token=")) {
					DeezerService.storeToken($location.hash());
					console.log("main start : " + DeezerService.isConnected());
					$scope.connected = DeezerService.isConnected();
					// store user informations for an easyer access (only one request needed)
			 //UserService.getMe();

					localStorage.setItem('deezer-user_infos', UserService.getMe());

					console.log("-------")
					console.log(localStorage.getItem('deezer-user_infos').id)
				}

			}

			$scope.start();




		}
	])
