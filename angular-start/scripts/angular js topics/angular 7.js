var app = angular.module('app', []);


app.directive('foo', function() {

	return {
		link: function(scope, element, attrs) {
			console.log(scope);
			console.log(element);
			console.log(attrs);
			element.text('LoL');
			element.on('click', function() {
				if (element.text() === 'LoL') {
					element.text('LoL2');
				}
				else {
					element.text('LoL');
				};
				
			})
		}
	};
});

