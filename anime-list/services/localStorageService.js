angular.module("animeList").factory("LocalStorageService", function () {
    let listAnime = JSON.parse(localStorage.getItem("animes_fav")) || [];


    return {
        salvarAnime: (dados) => {
            dados.comentario = "";
            console.log(listAnime);
            listAnime.push(dados)
            console.log(listAnime);
            localStorage.setItem("animes_fav", JSON.stringify(listAnime))
        },

        getListAnime: () => JSON.parse(localStorage.getItem("animes_fav")),

        removeFavoritoAnime: (indice) =>{
            listAnime.splice(indice,1);
            localStorage.setItem("animes_fav", JSON.stringify(listAnime))
        },

        getAnime: (indice) => listAnime.findIndex((i)=> i==indice)
    }
})