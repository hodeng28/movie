import Nav from "./Components/Nav";
import { MovieContextProvider } from "./Context";
import MainRouter from "./Router/MainRouter";

const App = () => {
  return (
    <>
      <MovieContextProvider>
        <Nav />
        <MainRouter />
      </MovieContextProvider>
    </>
  );
};

export default App;
