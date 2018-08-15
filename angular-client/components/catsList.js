var app = angular.module('catsList');

app.component('cats', {
	templateUrl: '/templates/adoptCat.html'
});
app.controller('catsCtrl', ['$scope', '$http', '$window', function ($scope, $http, $window) {
	$scope.defaultImage = 'https://tse4.mm.bing.net/th?id=OIP.XLWg-PlAJtWnObkpO_i9qQHaEx&pid=15.1&P=0&w=266&h=173'
	var getCats = function () {
		//fetch the data form the data-base
		var req = {
			method: 'GET',
			url: '/getCats',
		}

		$http(req).then((res) => {
			$scope.cats = res['data']

		}, (err) => {
			console.log(err)

		});

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
			alert('your information has been saved!')

		}, (err) => {
			console.log(err)

		});


	}


}]);
