var app = angular.module('app', []);

app.controller('myCtrl', function($scope) {
	$scope.me = 'LoL'
	$scope.data = [
		{
			name: 'Cris',
			age: 34
		},
		{
			name: 'Robin',
			age: 24
		},
		{
			name: 'Kate',
			age: 22
		},
	];
	$scope.dothis = function() {
		$scope.me = 'input';
	};



});
