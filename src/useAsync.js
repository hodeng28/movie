import { useReducer } from "react";
import { initialState, movieReducer } from "./Reducer";
import moviesApi from "./Api/MoviesApi";

const useAsync = () => {
  const [state, dispatch] = useReducer(movieReducer, initialState);

  const setLoading = () => dispatch({ type: "LOADING" });

  const fetchNowplaying = async () => {
    setLoading();
    const movies = await moviesApi.getNowPlaying();
    dispatch({ type: "NOWPLAYING", movies });
  };

  const fetchPopular = async (page = 1) => {
    setLoading();
    const movies = await moviesApi.getPopular(page);
    dispatch({ type: "POPULAR", movies });
  };

  const fetchUpcoming = async () => {
    setLoading();
    const movies = await moviesApi.getUpcoming();
    dispatch({ type: "UPCOMING", movies });
  };

  const fetchDetailMovie = async (id) => {
    setLoading();
    const movie = await moviesApi.getMovie(id);
    dispatch({ type: "DETIAL", movie });
  };

  const clearDetailMovie = () => {
    dispatch({ type: "CLEAR_DETAIL" });
  };

  return [
    state,
    fetchNowplaying,
    fetchPopular,
    fetchUpcoming,
    fetchDetailMovie,
    clearDetailMovie,
  ];
};

export default useAsync;
