import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { MovieContext } from "../Context";
import "./Style/MovieList.scss";

const Upcoming = () => {
  const context = useContext(MovieContext);
  const { state, fetchUpcoming } = context;

  useEffect(() => {
    fetchUpcoming();
  }, []);

  return (
    <>
      <ul className="movie-container">
        {state.upcoming?.results?.map((movie) => {
          return (
            <li key={`${movie.id}`}>
              <Link to={`/${movie.id}`}>
                <figure>
                  <img
                    className="movie-thumnail"
                    alt={movie.original_title}
                    src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                  />
                  <figcaption>{movie.original_title}</figcaption>
                </figure>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Upcoming;
