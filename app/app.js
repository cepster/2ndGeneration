var app = angular.module("2ndGen", function(){

});

app.config(['$routeProvider', function($routeProvider){
	$routeProvider
	.when('/members', {
		templateUrl: 'partials/members.html',
		controller: 'MembersCtrl'
	})
	.when('/index', {
		templateUrl: 'partials/index.html',
		controller: 'IndexCtrl'
	})
	.when('/gigs', {
		templateUrl: 'partials/gigs.html',
		controller: 'GigsCtrl'
	})
	.when('/booking', {
		templateUrl: 'partials/booking.html',
		controller: 'BookingCtrl'
	})
	.when('/songList', {
		templateUrl: 'partials/songList.html',
		controller: 'SongListCtrl'
	})
	.when('/photos', {
		templateUrl: 'partials/photos.html',
		controller: 'PhotosCtrl'
	})
	.when('/demo', {
		templateUrl: 'partials/demo.html',
		controller: 'DemoCtrl'
	})
	.when('/silverHammer', {
		templateUrl: 'partials/silverHammer.html',
		controller: 'SilverHammerCtrl'
	})
	.when('/silverHammerMedia', {
		templateUrl: 'partials/silverHammer/media.html',
		controller: 'SilverHammerMediaCtrl'
	})
	.when('/silverHammerSongList', {
		templateUrl: 'partials/silverHammer/songList.html',
		controller: 'SilverHammerSongListCtrl'
	})
	.otherwise({
		redirectTo: 'index/'
	})
}]);