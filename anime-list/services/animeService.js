angular.module("animeList").factory("AnimeService", function($http){
    const API_URL = "https://api.jikan.moe/v4";

    return {
        listTopAnime: () => $http.get(`${API_URL}/top/anime`),
        listTopManga: () => $http.get(`${API_URL}/top/manga`),
        getAnime: (id) =>$http.get(`${API_URL}/anime/${id}`),
        getManga: (id) =>$http.get(`${API_URL}/manga/${id}`),
        allAnime: () => $http.get(`${API_URL}/anime?order_by=popularity`),
        allManga: () => $http.get(`${API_URL}/manga??order_by=popularity`)
    }
})