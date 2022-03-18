import { Route, Routes } from "react-router-dom";
import Detail from "../Components/Detail";
import NowPlaying from "../Components/NowPlaying";
import Popular from "../Components/Popular";
import Upcoming from "../Components/Upcoming";

const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<NowPlaying />} />
      <Route path="/Popular" element={<Popular />} />
      <Route path="/Upcoming" element={<Upcoming />} />
      <Route path="/:idx" element={<Detail />} />
    </Routes>
  );
};

export default MainRouter;
