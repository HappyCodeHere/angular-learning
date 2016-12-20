var app = angular.module('app', []);

app.directive('fooBar', function() {
	return {
		restrict: '',
		link: function () {
			console.log('fooBar');


		}
	}

});