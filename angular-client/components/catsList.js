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
		//send data to the server
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

		$http(req).then((res) => {
			alert('your shit has been saved!')

		}, (err) => {
			console.log(err)
			alert('Hello error')
		});


	}


}]);
