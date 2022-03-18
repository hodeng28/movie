import { useEffect, useState } from "react";
import moviesApi from "../Api/MoviesApi";

const NowPlaying = () => {
  const [movieData, setMovieData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchPopular = async () => {
    setLoading(true);
    try {
      const response = await moviesApi.getNowPlaying();
      setMovieData(response.data.results);
      console.log(response);
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
      <ul>
        {movieData &&
          movieData.map((movie) => {
            return (
              <li key={movie.id}>
                <img
                  alt={movie.original_title}
                  src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                />
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default NowPlaying;
