var app = angular.module('app', []);


app.controller('mainCtrl', function($scope) {
	$scope.name = 'Lom';




});

app.directive('fooBar', function() {
	return {
		transclude: true,
		restruct: 'E',
		template: "This is my directive <ng-transclude> </ng-transclude>",
		link: function (scope, element, attrs) {
			console.log('this is my');
			


		}
	};

});