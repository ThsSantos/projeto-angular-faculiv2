angular.module("animeList").factory("LocalStorageService", function () {
    let listAnime = JSON.parse(localStorage.getItem("animes_fav")) || [];
    let listManga = JSON.parse(localStorage.getItem("manga_fav")) || [];


    return {
        salvarAnime: (dados) => {
            dados.comentario = "";
            // console.log(listAnime);
            listAnime.push(dados)
            // console.log(listAnime);
            localStorage.setItem("animes_fav", JSON.stringify(listAnime))
        },

        getListAnime: () => JSON.parse(localStorage.getItem("animes_fav")),

        removeFavoritoAnime: (id) =>{
            let indice = listAnime.findIndex((a)=> a.mal_id==id);
            // console.log(indice);
            listAnime.splice(indice,1);
            localStorage.setItem("animes_fav", JSON.stringify(listAnime))
        },

        getAnime: (id) => listAnime.find((a)=> a.mal_id==id),

        updateComentAnime: (id,coment) => {
            let indice = listAnime.findIndex((a)=> a.mal_id==id);
            let dados = listAnime.find((a)=> a.mal_id==id);
            // console.log(dados.comentario);
            dados.comentario = coment;
            listAnime.splice(indice,1,dados);
            localStorage.setItem("animes_fav", JSON.stringify(listAnime));

        },

        salvarManga: (dados) => {
            dados.comentario = "";
            // console.log(listManga);
            listManga.push(dados)
            // console.log(listManga);
            localStorage.setItem("manga_fav", JSON.stringify(listManga))
        },

        getListManga: () => JSON.parse(localStorage.getItem("manga_fav")),

        removeFavoritoManga: (id) =>{
            let indice = listManga.findIndex((a)=> a.mal_id==id);
            // console.log(indice);
            listManga.splice(indice,1);
            localStorage.setItem("manga_fav", JSON.stringify(listManga))
        },

        getManga: (id) => listManga.find((a)=> a.mal_id==id),

        updateComentManga: (id,coment) => {
            let indice = listManga.findIndex((a)=> a.mal_id==id);
            let dados = listManga.find((a)=> a.mal_id==id);
            // console.log(dados.comentario);
            dados.comentario = coment;
            listManga.splice(indice,1,dados);
            localStorage.setItem("manga_fav", JSON.stringify(listManga));

        },
        
    }
})