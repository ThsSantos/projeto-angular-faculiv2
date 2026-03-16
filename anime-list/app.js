angular.module("animeList", ["ui.router"]).config(function ($stateProvider, $urlRouterProvider) {

$urlRouterProvider.otherwise("/listAnime");

    $stateProvider.state("listAnime", {
        url: "/listAnime",
        templateUrl: "views/listAnime.html",
        controller: "AnimeController"
    })
        .state("listManga", {
            url: "/listManga",
            templateUrl: "views/listManga",
            controller: "listMangaController"
        })

    
});