angular.module('DeezerAngularJS')
	.controller('HomeController', ['$scope', '$location', '$routeParams', '$mdDialog', function($scope, $location, $routeParams, $mdDialog) {








		$scope.start = function() {
			console.log("start");

			console.log($routeParams);

			if ($routeParams.error_reason == "user_denied") {
				console.log("user denied access to the application");
				$mdDialog.show(
					$mdDialog.alert()
					.parent(angular.element(document.querySelector('#home-view')))
					.clickOutsideToClose(true)
					.title('Error')
					.textContent("User denied application's access to the deezer account")
					.ariaLabel('Alert Dialog')
					.ok('Got it!')
				);
			} else {
				//if url has an hash
				if ($location.hash()) {
						console.log("access_token = " + $location.hash());
					//url is lke : http://127.0.0.1/pocket-angularjs/#access_token=frbTaXdXcWSgHjEJ8cZM5U6WyrvoIJnmsl1AFFUXmO3YWlttz0&expires=0
					//we have to split it if we want to get the token only
					var access_token = $location.hash().split('=')[1].split('&')[0];
					console.log(access_token);
				}
			}




		}

		$scope.start();




	}]);
