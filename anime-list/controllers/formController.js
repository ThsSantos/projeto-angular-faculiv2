angular.module("animeList").controller("FormController", function ($scope, AnimeService, $state) {
    $scope.obras = [];
    $scope.pagina = 0;
    $scope.itensPaginas = 8;
    $scope.paginaTotal = 0;
    $scope.detalhes = null;
    $scope.categoria = "Anime";
    $scope.getCategoria = function (categoria) {
        console.log(categoria);
        $scope.categoria = categoria;
        carregaAcervo();
    }



    function carregaAcervo() {
        if ($scope.categoria == "Anime") {
            AnimeService.allAnime().then(res => {
                $scope.obras = res.data.data;
                $scope.paginaTotal = Math.ceil($scope.obras.length / 8);
                console.log($scope.obras);
            })
        } else {
            AnimeService.allManga().then(res => {
                $scope.obras = res.data.data;
                console.log($scope.obras);
            })
        }
    }

    $scope.carregaModal = function carregaModal(id) {
        if ($scope.categoria == "Anime") {
            console.log(true);
            // console.log(id);
            AnimeService.getAnime(id).then(res => {
                $scope.detalhes = res.data.data;
                console.log($scope.detalhes);
            })

        } else {
            AnimeService.getManga(id).then(res => {
                $scope.detalhes = res.data.data;
                console.log($scope.detalhes);
                console.log(id);
            })
        }
    }

    $scope.nextPage = function nextPage(page) {
        console.log(page);
        if (page < $scope.paginaTotal) {
            $scope.pagina++;
        }
    }

    $scope.previous = function previous(page) {
        if (page >= ($scope.pagina + 1) && page > 1) {
            $scope.pagina--;
        }

    }
    carregaAcervo();
});