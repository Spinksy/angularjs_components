(function() {
    "use strict";

    angular.module("psMovies", ['ngComponentRouter']);

    angular.module("psMovies").value('$routerRootComponent', "movieApp");

    angular.module("psMovies").component('appAbout', {
        template: '<div>About</div>'
    })


}());