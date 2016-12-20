var app = angular.module('app', []);

app.controller('myCtrl', function($scope) {
	$scope.money1 = '1,22$';
	$scope.money2 = '$2.33';
	$scope.money3 = '123';


});

app.filter('moneyFilter', function() {
	return function (str) {
		var lastChar = str.slice(-1),
		var firstChar = str.slice(0,1),
		var slicedPart

		if (;astChar === '$') {
			
		}


	};


});