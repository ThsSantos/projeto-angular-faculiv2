angular.module("animeList", ["ui.router"]).config(function ($stateProvider, $urlRouterProvider) {

$urlRouterProvider.otherwise("/listAnime");

    $stateProvider.state("listAnime", {
        url: "/listAnime",
        templateUrl: "views/topListAnime.html",
        controller: "AnimeController"
    })
        .state("listManga", {
            url: "/topListManga",
            templateUrl: "views/topListManga.html",
            controller: "mangaController"
        })

        .state("busca", {
            url: "/busca",
            templateUrl: "views/formBusca.html",
            controller: "FormController"
        })

    
});