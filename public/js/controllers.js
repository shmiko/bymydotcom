'use strict';

/* Controllers */

angular.module('myApp.controllers', ['ngResource'])
  .controller('indexCtrl', ['$scope', function($scope) {
		$scope.lots = [{
			title: 'Jumper Orange',
			img: '/i/lots/index_demo1.jpg',
			gift: true
		},
		{
			title: 'Player disk',
			img: '/i/lots/index_demo3.jpg'
		},
		{
			title: 'Phone iPhone 5S',
			img: '/i/lots/index_demo4.jpg'
		},
		{
			title: 'Jacket Apricot',
			img: '/i/lots/index_demo2.jpg'
		},
		{
			title: 'Dress beige',
			img: '/i/lots/index_demo6.jpg'
		},
		{
			title: 'Player disk',
			img: '/i/lots/index_demo2.jpg',
			closeHome: true
		},
		{
			title: 'Phone iPhone 5S',
			img: '/i/lots/index_demo5.jpg'
		},
		{
			title: 'Sunglasses',
			img: '/i/lots/index_demo4.jpg',
			closeHome: true
		},
		{
			title: 'Dress beige',
			img: '/i/lots/index_demo3.jpg'
		},
		{
			title: 'Vase',
			img: '/i/lots/index_demo5.jpg',
			gift: true
		},
		{
			title: 'Phone iPhone 5S',
			img: '/i/lots/index_demo2.jpg',
			gift: true
		},
		{
			title: 'Jacket',
			img: '/i/lots/index_demo4.jpg'
		}];
		$scope.exchanges = [{
			lot1: {
				title: 'Bag shines on his shoulder',
				img: '/i/lots/exchange_demo1.jpg'
			},
			lot2: {
				title: 'Jacket',
				img: '/i/lots/exchange_demo3.jpg'
			}
		},{
			lot1: {
				title: 'Player Disk',
				img: '/i/lots/exchange_demo2.jpg'
			},
			lot2: {
				title: 'Jacket',
				img: '/i/lots/exchange_demo6.jpg'
			}
		},{
			lot1: {
				title: 'Player Disk',
				img: '/i/lots/exchange_demo4.jpg'
			},
			lot2: {
				title: 'Jacket',
				img: '/i/lots/exchange_demo1.jpg'
			}
		},{
			lot1: {
				title: 'Player Disk',
				img: '/i/lots/exchange_demo2.jpg'
			},
			lot2: {
				title: 'Jacket',
				img: '/i/lots/exchange_demo5.jpg'
			}
		},{
			lot1: {
				title: 'ПPlayer Disk',
				img: '/i/lots/exchange_demo6.jpg'
			},
			lot2: {
				title: 'Jacket',
				img: '/i/lots/exchange_demo2.jpg'
			}
		},{
			lot1: {
				title: 'Player Disk',
				img: '/i/lots/exchange_demo4.jpg'
			},
			lot2: {
				title: 'Jacket',
				img: '/i/lots/exchange_demo3.jpg'
			}
		}];
	}])
	.controller('footerCtrl', ['$scope', function($scope) {
		$scope.news = [{
			date: '15 July 2013',
			title: 'New Online Store',
			text: 'Allows users to create order, select payment method'
		},{
			date: '8 March 2012',
			title: 'New features',
			text: 'Generate order, choose a payment method allows users to '
		}];
}]);