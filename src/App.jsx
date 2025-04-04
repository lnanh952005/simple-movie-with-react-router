import { lazy, Suspense } from "react";
import "swiper/css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./layout/Header";
import MoviePageV2 from "./pages/MoviePageV2";
import For0For from "./components/404/For0For";


const HomePage = lazy(() => import("./pages/HomePage"));
const MoviePage = lazy(() => import("./pages/MoviePage"));
const MovieDetailPage = lazy(() => import("./pages/MovieDetailPage"));

//https://api.themoviedb.org/3/search/movie?apiKey=b214ffc928a4d0c4b361593fdb4ad6ad&query=avengers

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<></>}>
        <Routes>
          <Route element={<Header />}>
            <Route index element={<HomePage />} />
            <Route path="/movies" element={<MoviePage />} />
            <Route path="/movies/:movieId" element={<MovieDetailPage />} />
          </Route>
          <Route path="*" element={<For0For/>}></Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
