var foodieApp = angular.module('foodieApp',['ngRoute']);



foodieApp.controller('loginController',function($scope, $location){
	$scope.goToHome = function() {
		//console.log('Do Something')
		$location.url('home')

	}

})

foodieApp.controller('restaurantController', function($scope, $routeParams, $http) {
	$scope.restaurantId = $routeParams.id;
	var restaurants = [{
		name: 'Farzi Cafe',
		address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
		location: 'Connaught Place',
		category: 'Casual Dining, Bar',
		vote: '4.2',
		cuisines: 'Modern Indian',
		cost: '2200',
		hours: '12 Noon to 1 AM (Mon-Sun)',
		image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg',
		bestDish: {
			name: 'Corn Pizza',
			image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
		}
	}, {
		name: 'Pirates',
		address: '38/39, Level 10, Block F , Inner Circle, Corol bagh',
		location: 'Connaught Place',
		category: 'Bakery',
		vote: '4.4',
		cuisines: 'Desert',
		cost: '200',
		hours: '12 Noon to 10 PM (Mon-Sun)',
		image: 'https://tobuz.com/wp-content/uploads/2016/12/sweet-tooth-fairy-bakery-5.jpg',
		bestDish: {
			name: 'Chocolate Cake',
			image: 'http://ghk.h-cdn.co/assets/15/12/1426719496-chocolate-cake.jpg'
		}
	},

	{
		name: 'Mad Blend',
		address: 'SCF 7-8, 1st Floor, Block F, BRS Nagar, Ludhiana',
		location: 'BRS Nagar',
		category: 'LOUNGE',
		vote: '3.9',
		cuisines: 'Continental, Mexican, Chinese, Italian',
		cost: '2200',
		hours: '11:30 AM to 12 Midnight (Mon, Tue, Thu, Fri, Sun)',
		image: 'https://b.zmtcdn.com/data/pictures/6/15896/46e04d0575f2897ba375cfebf6ab223f_featured_v2.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
		bestDish: {
			name: 'Corn Pizza',
			image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
		}
	},
	{
		name: 'Bistro 266',
		address: '226, Civil Street, Ghumar Mandi Chowk, Civil Lines, Ludhiana',
		location: 'Civil Lines',
		category: 'CASUAL DINING,CAFE',
		vote: '4.2',
		cuisines: 'Italian, Continental, North Indian, Cafe',
		cost: '1400',
		hours: '11:30 AM to 11:30 PM (Mon-Sun)',
		image: 'https://b.zmtcdn.com/data/pictures/2/15292/1a2058dd9b55f47344bfa9f17727ebb8_featured_v2.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
		bestDish: {
			name: 'Corn Pizza',
			image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
		}
	},
	  {
		name: 'Barbeque Nation',
		address: '2nd Floor, Munshilal Building, Block N, Outer Circle, Connaught Place, New Delhi',
		location: 'Connaught Place',
		category: 'Casual Dining',
		vote: '4.1',
		cuisines: 'North Indian, Chinese',
		cost: '1600',
		hours: '12 Noon to 3 PM, 7 PM to 11 PM (Mon-Sun)',
   image: 'https://b.zmtcdn.com/data/pictures/chains/2/1212/3a128bead1bf42c1d5254078c39d75a2_featured_v2.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
	 bestDish: {
	 	name: 'Corn Pizza',
	 	image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
	 }
	},
	{
		name: 'IHOP',
		address: 'Ground Floor, Cyber Hub, DLF Cyber City, Gurgaon',
		location: 'Cyber Hub,DLF Cyber City',
		category: 'CAFE',
		vote: '3.9',
		cuisines: 'Cafe, American',
		cost: '1200',
		hours: '8 AM to 11 PM (Mon-Sun)',
		image: 'https://b.zmtcdn.com/data/pictures/1/18415341/a0cef1e4ccb641304753f2ce4f0fc98e_featured_v2.png?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
		bestDish: {
			name: 'Corn Pizza',
			image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
		}
	},
	{
		name: 'Karims ',
		address: '16, Gali Kababian, Jama Masjid, New Delhi',
		location: 'Jamma Masjid',
		category: 'Casual Dining',
		vote: '3.9',
		cuisines: 'Mughlai,North Indian',
		cost: '800',
		hours: '11 AM to 4 PM, 8 PM to 11:30 PM (Mon-Sun)',
		image: 'https://b.zmtcdn.com/data/pictures/chains/1/461/d0dfc30ed835602c35d703fa3bb1159b_featured_v2.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
		bestDish: {
			name: 'Corn Pizza',
			image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
		}
	},
	{
		name: 'Hauz Khas Social',
		address: '9-A & 12, Hauz Khas Village, New Delhi',
		location: 'Hauz Khas Village',
		category: 'LOUNGE,CASUAL DINING',
		vote: '4.3',
		cuisines: 'Continental, American, Asian, North Indian',
		cost: '1600',
		hours: '11 AM to 1 AM (Mon-Sun)',
		image: 'https://b.zmtcdn.com/data/pictures/2/308322/bd3d04b1fea905b38819e0fd6e8dbfb4_featured_v2.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
		bestDish: {
			name: 'Corn Pizza',
			image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
		}
	},
	{
		name: 'On the Waterfront - The Lodhi',
		address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
		location: 'The Lodhi,Lodhi Road',
		category: 'FINE DINING',
		vote: '4.1',
		cuisines: 'European, Italian, Chinese, Thai, Sushi',
		cost: '3100',
		hours: '12:30 PM to 3:50 PM, 7 PM to 11:30 PM (Mon-Sun)',
		image: 'https://b.zmtcdn.com/data/pictures/2/8222/0cd71e9a87fb95f2ee05b0facee5c61a_featured_v2.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
		bestDish: {
			name: 'Corn Pizza',
			image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
		}
	}]; //array of main.html page ends here.

	  /* $scope.x = 0;
				$scope.toggle=function(){
   			$scope.x = 1-$scope.x;
				console.log($scope.x);
			} */

	$scope.restaurant = restaurants[$routeParams.id - 1];
	$scope.getIngredients = function(url) {
		var data = '{"inputs":[{"data":{"image":{"url":"' + url + '"}}}]}'
		$http({
			'method': 'POST',
			'url': 'https://api.clarifai.com/v2/models/bd367be194cf45149e75f01d59f77ba7/outputs',
			'headers': {
				'Authorization': 'Key d4aa0fd8f7c94d9a85f0eaddf27c4deb',
				'Content-Type': 'application/json'
			},
			'data': data
		}).then(function(response) {
			var ingredients = response.data.outputs[0].data.concepts;
			$scope.ingredients = [];
			for (var i = 0; i < ingredients.length; i++) {
				$scope.ingredients.push(ingredients[i].name);
			}
			list = $scope.ingredients;
			// $('.ingredients').html(list);
		}, function(xhr) {
			console.log(xhr);
		})


	}

})

foodieApp.controller('mainController',function($scope) {
	$scope.restaurants = [{
		name: 'Farzi Cafe',
		address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
		location: 'Connaught Place',
		category: 'Casual Dining, Bar',
		vote: '4.2',
		cuisines: 'Modern Indian',
		cost: '2200',
		hours: '12 Noon to 1 AM (Mon-Sun)',
		image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg',
		id:1
	},
	{
		name: 'Mad Blend',
		address: 'SCF 7-8, 1st Floor, Block F, BRS Nagar, Ludhiana',
		location: 'BRS Nagar',
		category: 'LOUNGE',
		vote: '3.9',
		cuisines: 'Continental, Mexican, Chinese, Italian',
		cost: '2200',
		hours: '11:30 AM to 12 Midnight (Mon, Tue, Thu, Fri, Sun)',
		image: 'https://b.zmtcdn.com/data/pictures/6/15896/46e04d0575f2897ba375cfebf6ab223f_featured_v2.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
		id:2
	},
	{
		name: 'Bistro 266',
		address: '226, Civil Street, Ghumar Mandi Chowk, Civil Lines, Ludhiana',
		location: 'Civil Lines',
		category: 'CASUAL DINING,CAFE',
		vote: '4.2',
		cuisines: 'Italian, Continental, North Indian, Cafe',
		cost: '1400',
		hours: '11:30 AM to 11:30 PM (Mon-Sun)',
		image: 'https://b.zmtcdn.com/data/pictures/2/15292/1a2058dd9b55f47344bfa9f17727ebb8_featured_v2.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
		id:3
	},
	  {
		name: 'Barbeque Nation',
		address: '2nd Floor, Munshilal Building, Block N, Outer Circle, Connaught Place, New Delhi',
		location: 'Connaught Place',
		category: 'Casual Dining',
		vote: '4.1',
		cuisines: 'North Indian, Chinese',
		cost: '1600',
		hours: '12 Noon to 3 PM, 7 PM to 11 PM (Mon-Sun)',
   image: 'https://b.zmtcdn.com/data/pictures/chains/2/1212/3a128bead1bf42c1d5254078c39d75a2_featured_v2.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
	 id:4
	},
	{
		name: 'IHOP',
		address: 'Ground Floor, Cyber Hub, DLF Cyber City, Gurgaon',
		location: 'Cyber Hub,DLF Cyber City',
		category: 'CAFE',
		vote: '3.9',
		cuisines: 'Cafe, American',
		cost: '1200',
		hours: '8 AM to 11 PM (Mon-Sun)',
		image: 'https://b.zmtcdn.com/data/pictures/1/18415341/a0cef1e4ccb641304753f2ce4f0fc98e_featured_v2.png?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
    id:5
	},
	{
		name: 'Karims ',
		address: '16, Gali Kababian, Jama Masjid, New Delhi',
		location: 'Jamma Masjid',
		category: 'Casual Dining',
		vote: '3.9',
		cuisines: 'Mughlai,North Indian',
		cost: '800',
		hours: '11 AM to 4 PM, 8 PM to 11:30 PM (Mon-Sun)',
		image: 'https://b.zmtcdn.com/data/pictures/chains/1/461/d0dfc30ed835602c35d703fa3bb1159b_featured_v2.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
		id:6
	},
	{
		name: 'Hauz Khas Social',
		address: '9-A & 12, Hauz Khas Village, New Delhi',
		location: 'Hauz Khas Village',
		category: 'LOUNGE,CASUAL DINING',
		vote: '4.3',
		cuisines: 'Continental, American, Asian, North Indian',
		cost: '1600',
		hours: '11 AM to 1 AM (Mon-Sun)',
		image: 'https://b.zmtcdn.com/data/pictures/2/308322/bd3d04b1fea905b38819e0fd6e8dbfb4_featured_v2.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
		id:7
	},
	{
		name: 'On the Waterfront - The Lodhi',
		address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
		location: 'The Lodhi,Lodhi Road',
		category: 'FINE DINING',
		vote: '4.1',
		cuisines: 'European, Italian, Chinese, Thai, Sushi',
		cost: '3100',
		hours: '12:30 PM to 3:50 PM, 7 PM to 11:30 PM (Mon-Sun)',
		image: 'https://b.zmtcdn.com/data/pictures/2/8222/0cd71e9a87fb95f2ee05b0facee5c61a_featured_v2.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
		id:8
	}]; //array of main.html page ends here.

	console.log($scope.restaurants[0].name);
$scope.change = function(){
$scope.restaurants.push({
	name: 'Pirates',
	address: '38/39, Level 10, Block F , Inner Circle, Corol bagh',
	location: 'Connaught Place',
	category: 'Bakery',
	vote: '4.4',
	cuisines: 'Desert',
	cost: '200',
	hours: '12 Noon to 10 PM (Mon-Sun)',
	image: 'https://tobuz.com/wp-content/uploads/2016/12/sweet-tooth-fairy-bakery-5.jpg',
	id: 2
});

console.log($scope);
console.log($scope.$parent.restaurants);

}

})

foodieApp.config(function ($routeProvider) {
	$routeProvider
	.when('/',{
		templateUrl: 'pages/login.html',
		controller: 'loginController'
	})
	.when('/home',{
		templateUrl: 'pages/main.html',
		controller: 'mainController'
	})

	.when('/restaurant/:id', {
		templateUrl: 'pages/restaurant.html',
		controller: 'restaurantController'
	})
})
