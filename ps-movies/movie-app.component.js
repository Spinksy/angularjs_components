(function(){
    angular.module('psMovies');

    angular.module('psMovies').component('movieApp', {
        templateUrl: "/ps-movies/movie-app.component.html",
        $routeConfig: [
            { path: "/list", component: 'movieList', name: "List" },
            { path: "/about", component: 'appAbout', name: "About" },
            { path: "/**", redirectTo: ["List"] }
        ]

    })
})()