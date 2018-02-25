(function(){

    'use strict;'

    angular.module('psMovies');

    angular.module('psMovies').component('movieRating', {
        templateUrl: "/ps-movies/movie-rating.component.html",
        controllerAs: 'vm',
        controller: movieRatingController,
        require: {
           'parent': '^movieList'
        },
        bindings: {
            rating: '<'
        }
    })

    movieRatingController.$inject = ['$scope'];
    
    function movieRatingController($scope){
        
        var vm = this;

        vm.publish = function(){
            $scope.$emit('Movie.Rating');
        }

        vm.reset = function(){
            vm.entries = new Array(2);
        }
        
        vm.$onInit = function(){
            vm.entries = new Array(vm.rating);
            vm.parent.addRating(vm);
            vm.parent.callParent();
        }

        vm.$onChanges = function(){
            vm.entries = new Array(vm.rating);
        }
    }

})()