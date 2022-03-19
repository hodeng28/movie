import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { MovieContext } from "../Context";
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
          return (
            <Link to={`/${movie.id}`} key={`${movie.id}`}>
              <li key={movie.id}>
                <img
                  className="movie-thumnail"
                  alt={movie.original_title}
                  src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                />
              </li>
            </Link>
          );
        })}
      </ul>
    </>
  );
};

export default NowPlaying;
