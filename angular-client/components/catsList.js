var app = angular.module('catsList');

app.component('cats', {
	templateUrl: '/templates/adoptCat.html'
});
app.controller('catsCtrl', ['$scope', '$http', '$window', function ($scope, $http, $window) {
	var getCats = function () {
		// TODO: Your code here

	};
	getCats();

	$scope.addCats = function (catName = '', ownerEmail = '', imageUrl = '', adoptionMessage = '') {
		console.log('Hello world', catName, ownerEmail,  imageUrl, adoptionMessage)
var req = {
	method: 'POST',
	url: '/addCats',
	data: {
		catName: catName,
		ownerEmail: ownerEmail,
		imageUrl: imageUrl,
		adoptionMessage: adoptionMessage
	}

}

$http(req).then((res) => { }, (err) => { });


	}


}]);
