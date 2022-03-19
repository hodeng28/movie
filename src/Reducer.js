export const initialState = {
  loading: false,
  nowplaying: {},
  popular: {},
  upcoming: {},
  detail: {},
};

export const movieReducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return {
        ...state,
        loading: true,
      };
    case "NOWPLAYING":
      return {
        ...state,
        nowplaying: action.movies.data,
        loading: false,
      };
    case "POPULAR":
      return {
        ...state,
        popular: action.movies,
        loading: false,
      };
    case "UPCOMING":
      return {
        ...state,
        upcoming: action.movies,
        loading: false,
      };
    case "DETIAL":
      return {
        ...state,
        detail: action.movie.data,
        loading: false,
      };

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
