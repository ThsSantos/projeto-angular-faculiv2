angular.module("animeList").controller("ConteudoController", function ($scope, AnimeService, LocalStorageService, $state) {
    // $scope.nome = "Ola anime";

    $scope.conteudos = [];
    $scope.pagina = 0;
    $scope.itensPaginas = 8;
    $scope.paginaTotal = 0;
    $scope.detalhes = null;


    function carregaTopAnime() {
        AnimeService.listTopAnime().then(res => {
            $scope.conteudos = res.data.data;
            $scope.paginaTotal = Math.ceil($scope.conteudos.length / 8);
            console.log($scope.paginaTotal);
            console.log($scope.conteudos);
        });
    }

    $scope.favoritar = function favoritar(id) {
        if ($state.is("listAnime")) {
            console.log(true);
            // console.log(id);
            AnimeService.getAnime(id).then(res => {
            LocalStorageService.salvarAnime(res.data.data);
            })

        } else {
            AnimeService.getManga(id).then(res => {
                
            })
        }
    }

    $scope.carregaModal = function carregaModal(id) {
        if ($state.is("listAnime")) {
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

    function carregaTopManga() {
        AnimeService.listTopManga().then(res => {
            $scope.conteudos = res.data.data;
            $scope.paginaTotal = Math.ceil($scope.conteudos.length / 8);
            console.log($scope.paginaTotal);
        });
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

    if ($state.is("listAnime")) {
        console.log(true);
        carregaTopAnime();
    } else {
        carregaTopManga();
    }

    // carregaTopAnime();

});