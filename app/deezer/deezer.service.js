angular.module("DeezerAngularJS")
	.service("DeezerService", ["$http", function($http) {

		var service = {};

		service.appID = "270062";

		service.redirectURI = "http://127.0.0.1/pocket-angularjs/";

		service.permissions = "basic_access,email,offline_access,manage_library,manage_community,delete_library,listening_history";


		service.deezerLogin = function() {
			console.log("deezer login window");

			window.location.href = "https://connect.deezer.com/oauth/auth.php?app_id="  + service.appID + "&redirect_uri=" + service.redirectURI + "&perms=" + service.permissions + "&response_type=token" ;

		}



		return service;
	}])
