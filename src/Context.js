import React, { createContext } from "react";
import useAsync from "./useAsync";

const MovieContext = createContext(null);

const MovieContextProvider = ({ children }) => {
  const [
    state,
    fetchNowplaying,
    fetchPopular,
    fetchUpcoming,
    fetchDetailMovie,
  ] = useAsync();

  const data = {
    state,
    fetchNowplaying,
    fetchPopular,
    fetchUpcoming,
    fetchDetailMovie,
  };

  return <MovieContext.Provider value={data}>{children}</MovieContext.Provider>;
};

export { MovieContext, MovieContextProvider };
