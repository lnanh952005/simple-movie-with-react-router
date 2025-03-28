import "swiper/css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./layout/Header";
import HomePage from "./pages/HomePage";
import MoviePage from "./pages/MoviePage";
import MovieDetailPage from "./pages/MovieDetailPage";
//https://api.themoviedb.org/3/search/movie?api_key=b214ffc928a4d0c4b361593fdb4ad6ad&query=avengers

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Header />}>
          <Route index element={<HomePage />} />
          <Route path="/movies" element={<MoviePage />} />
          <Route path="/movies/:movieId" element={<MovieDetailPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
