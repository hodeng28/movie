import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import moviesApi from "../Api/MoviesApi";
import "./Style/MovieList.scss";

const Popular = () => {
  const [movieData, setMovieData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchPopular = async () => {
    setLoading(true);
    try {
      const response = await moviesApi.getPopular();
      setMovieData(response.results);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };
  useEffect(() => {
    fetchPopular();
  }, []);

  if (loading) return <div>로딩</div>;

  return (
    <>
      <ul className="movie-container">
        {movieData &&
          movieData.map((movie) => {
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
        ;
      </ul>
    </>
  );
};

export default Popular;
