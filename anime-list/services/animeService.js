angular.module("animeList").factory("AnimeService", function($http){
    const API_URL = "https://api.jikan.moe/v4";

    return {
        listTop: () => $http.get(`${API_URL}/top/anime`),
        getAnime: (id) =>$http.get(`${API_URL}/anime/${id}`),
        allAnime: () => $http.get(),
        allManga: () => $http.get()
    }
})