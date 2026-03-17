angular.module("animeList").controller("FavoritosController", function ($scope, LocalStorageService) {

    $scope.conteudos = null;
    $scope.pagina = 0;
    $scope.itensPaginas = 8;
    $scope.paginaTotal = 0;
    $scope.detalhes = null;
    $scope.categoria = "Anime";
    $scope.inputComentario = true;

    $scope.getCategoria = function () {
        console.log($scope.categoria);
        // $scope.categoria = categoria;
        carregaFavoritos();
    }

    function carregaFavoritos() {
        if ($scope.categoria == "Anime") {
            $scope.conteudos = LocalStorageService.getListAnime();
            // console.log($scope.conteudos);
        } else {
            $scope.conteudos = LocalStorageService.getListManga();
            // console.log($scope.conteudos);
        }

    }

    $scope.removerFav = function revomerFav(id) {

        if ($scope.categoria == "Anime") {
            // console.log(id);
            LocalStorageService.removeFavoritoAnime(id);
            carregaFavoritos();
        } else {
            // console.log(id);
            LocalStorageService.removeFavoritoManga(id);
            carregaFavoritos();
        }

    }

    $scope.salvarComentario = function salvarComentario(id) {


        if ($scope.categoria == "Anime") {
            // console.log($scope.comentInput);
            LocalStorageService.updateComentAnime(id,$scope.comentInput);
            $scope.editarComentario();
        } else {
            console.log($scope.comentInput);
            LocalStorageService.updateComentManga(id,$scope.comentInput);
            $scope.editarComentario();
        }

    }

    $scope.editarComentario = function editarComentario() {
        $scope.inputComentario = !$scope.inputComentario;

    }


    $scope.carregaModal = function carregaModal(id) {

        // console.log(true);
        console.log(id);

        if ($scope.categoria == "Anime") {
            $scope.detalhes = LocalStorageService.getAnime(id);
            $scope.comentInput = $scope.detalhes.comentario;
        } else {
            $scope.detalhes = LocalStorageService.getManga(id);
            $scope.comentInput = $scope.detalhes.comentario;
            // console.log($scope.detalhes);
        }





    }

    carregaFavoritos();
})