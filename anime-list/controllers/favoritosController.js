angular.module("animeList").controller("FavoritosController", function($scope, LocalStorageService){

    $scope.conteudos = null;
    $scope.pagina = 0;
    $scope.itensPaginas = 8;
    $scope.paginaTotal = 0;
    $scope.detalhes = null;



    function carregaAnime(){
       $scope.conteudos =  LocalStorageService.getListAnime();
       console.log($scope.conteudos);

    }

    $scope.removerFav = function revomerFav(indice){
        console.log(indice);
        LocalStorageService.removeFavoritoAnime(indice);
        carregaAnime();
    }


    $scope.carregaModal = function carregaModal(indice) {
        
            console.log(true);
            // console.log(id);
            
                $scope.detalhes = LocalStorageService.getAnime(indice);
                console.log($scope.detalhes);
            

        
    }

    carregaAnime();
})