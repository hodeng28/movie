import { useContext, useEffect } from "react";
import { MovieContext } from "../Context";
import MovieList from "./MovieList";
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
          return <MovieList movie={movie} />;
        })}
      </ul>
    </>
  );
};

export default Upcoming;
