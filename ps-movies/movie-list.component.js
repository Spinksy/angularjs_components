(function(){

    'use strict;'

    angular.module('psMovies');

    angular.module('psMovies').component('movieList', {
        templateUrl: "/ps-movies/movie-list.component.html",
        controllerAs: 'vm',
        controller: movieListController
    })

    movieListController.$inject = ['$http','$scope'];
    
    function movieListController($http, $scope){
        
        var vm = this;

        $scope.$on('Movie.Rating', function(){
            console.log('Received message from rating');
        });

        vm.$onInit = onInit;
        vm.upRating = upRating;
        vm.downRating = downRating;

        var ratings = [];

        vm.addRating = function(rating){
            console.log('Adding ' + rating);
            ratings.push(rating);
        }

        vm.reset = function(){
            ratings[0].reset();
        }

        vm.callParent = function(){
            console.log('Called parent');
        }

        function onInit(){
            fetchMovies().then(function(movies){
                vm.movies = movies;
            });
        }

        function upRating(movie){
            if(movie.rating < 5){
                movie.rating += 1;
            }
        }

        function downRating(movie){
            if(movie.rating > 1){
                movie.rating -= 1;
            }
        }

        function fetchMovies(){
            return $http.get('/movies.json').then(function(response){ return response.data });
        }
    }

})()