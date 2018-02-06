angular.module("DeezerAngularJS")
	.service("DeezerService", ["$http", function($http) {

		var service = {};

		service.appID = "270062";

		service.redirectURI = "http://127.0.0.1/deezer-angularjs/";

		service.permissions = "basic_access,email,offline_access,manage_library,manage_community,delete_library,listening_history";

		service.isConnected = function(){
			return (!(typeof localStorage.getItem('deezer-access_token') === 'undefined' || localStorage.getItem('deezer-access_token') === null)) ;
		}

		service.deezerLogin = function() {
			console.log("deezer login window");

			window.location.href = "https://connect.deezer.com/oauth/auth.php?app_id="  + service.appID + "&redirect_uri=" + service.redirectURI + "&perms=" + service.permissions + "&response_type=token" ;

		}

		//extract token from location.hash param aand store it in the localstorage
		service.storeToken = function(hash){
			//url is lke : http://127.0.0.1/pocket-angularjs/#access_token=frbTaXdXcWSgHjEJ8cZM5U6WyrvoIJnmsl1AFFUXmO3YWlttz0&expires=0
			//we have to split it if we want to get the token only
			var access_token = hash.split('=')[1].split('&')[0];
			console.log(access_token);
			localStorage.setItem('deezer-access_token', access_token);
			console.log("deezerservice storeToken connected : " +service.isConnected());
		}

		service.deezerLogout = function(){
			localStorage.removeItem('deezer-access_token');
			console.log("deezerservice logout connected : " +service.isConnected());
		}



		return service;
	}])
