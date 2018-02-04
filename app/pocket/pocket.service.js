angular.module("PocketAngularJS")
	.service("PocketService", ["$http", function($http){

		var service = {};

		service.getRequestToken = function(consumerKey, redirectURI){
			console.log("service ajax")
			return $http({
				method: "GET",
				url: "https://getpocket.com/v3/oauth/request/?consumer_key="+consumerKey+"&redirect_uri="+redirectURI
			})
			.then(function(response){
				return response;
			})
			.catch(function(){
				return undefined;
			})
		}



		return service;
	}])
