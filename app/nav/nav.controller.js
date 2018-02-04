angular.module('DeezerAngularJS')
	.controller('NavController', ['$scope', '$location', '$timeout', '$mdSidenav', '$log', function($scope, $location, $timeout, $mdSidenav, $log) {

		$scope.toggleLeft = buildDelayedToggler('left');

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







	}])
	.controller('LeftCtrl', function($scope, $timeout, $mdSidenav, $log) {
		$scope.close = function() {
			// Component lookup should always be available since we are not using `ng-if`
			$mdSidenav('left').close()
				.then(function() {
					$log.debug("close LEFT is done");
				});

		};
	})