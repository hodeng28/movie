import { Link } from "react-router-dom";

const MovieList = ({ movie }) => {
  return (
    <>
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
    </>
  );
};

export default MovieList;
