var app = angular.module('app', []);

app.directive('fooBar', function() {
	var book = [
		{
			id: 1,
			name: 'lol1'
		},
		{
			id: 2,
			name: 'lol2'
		},
		{
			id: 3,
			name: 'lol3'
		}

	];
	return {
		template: "<div ng-repeat='book in myBook'> {{book.name}} </div>",
		link: function (scope, element, attrs) {
			console.log('foobar');
			scope.myBook = book;


		}
	};

});