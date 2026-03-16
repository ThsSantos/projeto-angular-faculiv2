angular.module("animeList").controller("AnimeController", function ($scope, AnimeService, $state){
    // $scope.nome = "Ola anime";

    $scope.animes = [];
    $scope.pagina = 0;
    $scope.itensPaginas = 8;

    function carregaAnime(){
        AnimeService.list().then(res=>{
            $scope.animes = res.data.data;
            console.log($scope.animes);
        });
    }

    carregaAnime();
});