angular.module("animeList").controller("ConteudoController", function ($scope, AnimeService, LocalStorageService, $state) {
    // $scope.nome = "Ola anime";
    $scope.local = null;
    $scope.conteudos = [];
    $scope.pagina = 0;
    $scope.itensPaginas = 8;
    $scope.paginaTotal = 0;
    $scope.detalhes = null;
    // $scope.btnFavorito = true;

    function carregaTopAnime() {
        AnimeService.listTopAnime().then(res => {
            $scope.conteudos = res.data.data;
            $scope.paginaTotal = Math.ceil($scope.conteudos.length / 8);
            console.log($scope.paginaTotal);
            console.log($scope.conteudos);
        });
    }

    function carregaTopManga() {
        AnimeService.listTopManga().then(res => {
            $scope.conteudos = res.data.data;
            $scope.paginaTotal = Math.ceil($scope.conteudos.length / 8);
            console.log($scope.paginaTotal);
        });
    }

    $scope.btnFavorito = function btnFavorito(id) {
        if ($state.is("listAnime")) {
            if (LocalStorageService.getAnime(id)) {
                return false;
            } else {
                return true;
            }
        } else {
            if (LocalStorageService.getManga(id)) {
                return false;
            } else {
                return true;
            }
        }

    }

    $scope.favoritar = function favoritar(id) {
        if ($state.is("listAnime")) {
            // console.log(true);
            // console.log(id);
            AnimeService.getAnime(id).then(res => {
                LocalStorageService.salvarAnime(res.data.data);
            })

        } else {
            AnimeService.getManga(id).then(res => {
                LocalStorageService.salvarManga(res.data.data);
            })
        }
    }

    $scope.removerFav = function revomerFav(id) {


        if ($state.is("listAnime")) {
            // console.log(id);
            LocalStorageService.removeFavoritoAnime(id);
            carregaLayout();
        } else {
            // console.log(id);
            LocalStorageService.removeFavoritoManga(id);
            carregaLayout();
        }
    }



    $scope.carregaModal = function carregaModal(id) {
        if ($state.is("listAnime")) {
            AnimeService.getAnime(id).then(res => {
                $scope.detalhes = res.data.data;
                // console.log($scope.detalhes);
            })

        } else {
            AnimeService.getManga(id).then(res => {
                $scope.detalhes = res.data.data;
                // console.log($scope.detalhes);
                // console.log(id);
            })
        }
    }



    $scope.nextPage = function nextPage(page) {
        // console.log(page);
        if (page < $scope.paginaTotal) {
            $scope.pagina++;
        }
    }

    $scope.previous = function previous(page) {
        if (page >= ($scope.pagina + 1) && page > 1) {
            $scope.pagina--;
        }

    }

    function carregaLayout() {
        if ($state.is("listAnime")) {
            // console.log(true);
            carregaTopAnime();
        } else {
            carregaTopManga();
        }
    }


    carregaLayout();

});