import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MovieContext } from "../Context";
import "./Style/Detail.scss";

const Detail = () => {
  const context = useContext(MovieContext);
  const { state, fetchDetailMovie, clearDetailMovie } = context;
  const params = useParams();

  useEffect(() => {
    fetchDetailMovie(params.idx);
    return () => {
      clearDetailMovie();
    };
  }, [clearDetailMovie, fetchDetailMovie, params.idx]);

  return (
    <>
      {Object.keys(state.detail).length && (
        <div className="detail-container">
          <img
            alt={state.detail.original_title}
            src={`https://image.tmdb.org/t/p/w400/${state.detail.poster_path}`}
          />
          <div className="detail-infor">
            <div>
              <h2>{state.detail.title}</h2>
              <div className="movie-score">
                Average score
                <span>{state.detail.vote_average}</span>
              </div>
              <div>{state.detail.overview}</div>
            </div>
            <div className="releaseDate">
              Release: {state.detail.release_date}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Detail;
