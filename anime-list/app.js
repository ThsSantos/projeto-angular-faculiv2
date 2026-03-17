angular.module("animeList", ["ui.router"]).config(function ($stateProvider, $urlRouterProvider) {

$urlRouterProvider.otherwise("/listAnime");

    $stateProvider.state("listAnime", {
        url: "/listAnime",
        templateUrl: "views/topListAnime.html",
        controller: "ConteudoController"
    })
        .state("listManga", {
            url: "/topListManga",
            templateUrl: "views/topListManga.html",
            controller: "ConteudoController"
        })

        .state("busca", {
            url: "/busca",
            templateUrl: "views/formBusca.html",
            controller: "FormController"
        })

        .state("favoritos", {
            url: "/favoritos",
            templateUrl: "views/pageFavoritos.html",
            controller: "FavoritosController"
        })


    
});