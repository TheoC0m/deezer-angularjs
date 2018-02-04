angular.module('PocketAngularJS')
	.factory('PocketFactory', ['$http', 'PocketService', function($http, PocketService) {

		var factory = {

			consumerKey: "74616-dfd7ee2a0b075c591734cb31",

			redirectURI: "http://127.0.0.1/pocket-angularjs/#!/",

			permissions: "",

			connectPocket: function() {
				console.log("connect");
				PocketService.getRequestToken(factory.consumerKey, factory.redirectURI)

			}

		}


		return factory
	}])
