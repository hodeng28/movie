import { useContext, useEffect } from "react";
import { MovieContext } from "../Context";
import MovieList from "./MovieList";
import "./Style/MovieList.scss";

const NowPlaying = () => {
  const context = useContext(MovieContext);
  const { state, fetchNowplaying } = context;

  useEffect(() => {
    fetchNowplaying();
  }, []);

  return (
    <>
      <ul className="movie-container">
        {state.nowplaying?.results?.map((movie) => {
          return <MovieList movie={movie} />;
        })}
      </ul>
    </>
  );
};

export default NowPlaying;
