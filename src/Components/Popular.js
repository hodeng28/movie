import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { MovieContext } from "../Context";
import "./Style/MovieList.scss";

const Popular = () => {
  const context = useContext(MovieContext);
  const { state, fetchPopular } = context;

  useEffect(() => {
    fetchPopular();
  }, []);

  return (
    <>
      <ul className="movie-container">
        {state.popular?.results?.map((movie) => {
          return (
            <Link to={`/${movie.id}`} key={`${movie.id}`}>
              <li key={movie.id}>
                <figure>
                  <img
                    className="movie-thumnail"
                    alt={movie.original_title}
                    src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                  />
                  <figcaption>{movie.original_title}</figcaption>
                </figure>
              </li>
            </Link>
          );
        })}
      </ul>
    </>
  );
};

export default Popular;
