import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

const keyQuery = "api_key=10923b261ba94d897ac6b81148314a3f";

const moviesApi = {
  getMovie: (id) =>
    //특정 영화 디테일 데이터
    api.get(`movie/${id}?${keyQuery}`, {
      params: { append_to_response: "videos" },
    }),
  // 인기순위 데이터
  getPopular: (page = 1) =>
    api.get(`movie/popular?${keyQuery}&page=${page}`).then((r) => r.data),

  //최신 영화 개봉작 순
  getUpcoming: (page = 1) =>
    api.get(`movie/upcoming?${keyQuery}&page=${page}`).then((r) => r.data),
  //현재 상영작
  getNowPlaying: () => api.get(`movie/now_playing?${keyQuery}`),
};

export default moviesApi;
