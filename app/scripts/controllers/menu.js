'use strict';

/**
 * @ngdoc function
 * @name udaciMealsApp.controller:MenuCtrl
 * @description
 * # MenuCtrl
 * Controller of the udaciMealsApp
 */
angular.module('udaciMealsApp')
  .controller('MenuCtrl', function() {
    // console.log(this);
    // this.items = '';
    // const vm = this;
    // // console.log(vm);
    // menu.getMenu().then(function(data){
    //   return vm.items = data;
    //   // console.log(this.items);
    // });
    // console.log(menu.getMenu());
    this.items = [
        {
        id: "strawberry-pudding",
        name: "Strawberry Pudding",
        img: "strawberry-pudding.jpg",
        calories: 375,
        rating: 5
        },
        {
        id: "chicken-salad",
        name: "Chicken Salad",
        img: "chicken-salad.jpg",
        calories: 450,
        rating: 4.1
        },
        {
        id: "ham-sandwich",
        name: "Ham Sandwich",
        img: "ham-sandwich.jpg",
        calories: 255,
        rating: 3
        },
        {
        id: "chocolate-cookie",
        name: "Chocolate Chip Cookie",
        img: "chocolate-cookie.jpg",
        calories: 310,
        rating: 4.6
        }
    ];
    this.increment = item => {
      item.rating = ((item.rating * 10) + 1) / 10;
    };
    this.decrement = item => {
      item.rating = ((item.rating * 10) -1) / 10;
    };
  });
