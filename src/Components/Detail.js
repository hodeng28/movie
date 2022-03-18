import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import moviesApi from "../Api/MoviesApi";
import "./Style/Detail.scss";

const Detail = () => {
  const [movieData, setMovieData] = useState([]);
  const [loading, setLoading] = useState(false);
  const params = useParams();

  const fetchDetailMovie = async (id) => {
    setLoading(true);
    console.log(params);
    try {
      const response = await moviesApi.getMovie(id);
      setMovieData(response.data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };
  useEffect(() => {
    fetchDetailMovie(params.idx);
  }, []);
  if (loading) return <div>로딩</div>;

  return (
    <>
      {Object.keys(movieData).length && (
        <div className="detail-container">
          <img
            src={`https://image.tmdb.org/t/p/w400/${movieData.poster_path}`}
            title={movieData.original_title}
          />
          <div className="detail-infor">
            <div>
              <h2>{movieData.title}</h2>
              <div className="movie-score">
                Average score
                <span>{movieData.vote_average}</span>
              </div>
              <div>{movieData.overview}</div>
            </div>
            <div className="releaseDate">Release: {movieData.release_date}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Detail;
