angular.module("DeezerAngularJS")
	.service("UserService", ["$http", 'DeezerService', function($http, DeezerService) {

		var service = {};

		service.getMe = function(pageNumber) {
			return $http({
					method: "GET",
					url: DeezerService.apiUrl + '/user/me' + '?output=json&access_token=' + localStorage.getItem('deezer-access_token')
				})
				.then(function(response) {

					console.log(response);
					var data = response.data;
					console.log(data);
					return data;
				})
				.catch(function() {
					return undefined;
				})
		}


		return service;
	}])
