angular.module("animeList").factory("AnimeService", function($http){
    const API_URL = "https://api.jikan.moe/v4";

    return {
        list: () => $http.get(`${API_URL}/top/anime`),
        get: (id) =>$http.get(`${API_URL}/anime/${id}`)
    }
})