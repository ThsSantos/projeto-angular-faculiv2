angular.module("animeList").controller("AnimeController", function ($scope, AnimeService, $state){
    // $scope.nome = "Ola anime";

    $scope.animes = [];
    $scope.pagina = 0;
    $scope.itensPaginas = 8;
    $scope.paginaTotal = 0;

    

    function carregaAnime(){
        AnimeService.listTop().then(res=>{
            $scope.animes = res.data.data;
            $scope.paginaTotal = Math.ceil($scope.animes.length/8);
            console.log($scope.paginaTotal);
        });
    }

    $scope.nextPage = function nextPage(page){
        console.log(page);
        if(page<$scope.paginaTotal){
            $scope.pagina++;
        }
    }

    $scope.previous = function previous(page){
        if(page>=($scope.pagina+1) && page>1){
            $scope.pagina--;
        }
        
    }
    // if($state.is("listAnime")){
    //     console.log(true);
    //     carregaAnime();
    // }else{
    //     console.log(false)
    // }

        carregaAnime();
    
});