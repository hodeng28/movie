import { useContext, useEffect } from "react";
import { MovieContext } from "../Context";
import MovieList from "./MovieList";
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
          return <MovieList movie={movie} />;
        })}
      </ul>
    </>
  );
};

export default Popular;
