import "./App.css";
import { NavLink } from "react-router-dom";
import MovieCard from "./components/movie/MovieItem";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import MovieList from "./components/movie/MovieList";
import Banner from "./components/banner/Banner";
//https://api.themoviedb.org/3/search/movie?api_key=b214ffc928a4d0c4b361593fdb4ad6ad&query=avengers

const App = () => {
  return (
    <>
      <header className="flex items-center justify-center gap-2 ">
        <span className="p-3">Home</span>
        <span className="p-3">Movies</span>
      </header>
      <Banner />
      {/* play now */}
      <section className="page-container">
        <h2 className="font-bold mb-5">Now Playing</h2>
        <MovieList category="https://api.themoviedb.org/3/movie/now_playing?api_key=b214ffc928a4d0c4b361593fdb4ad6ad&language=en-US&page=1" />
      </section>
      <section className="page-container">
        <h2 className="font-bold mb-5">Top Rated</h2>
        <MovieList category="https://api.themoviedb.org/3/movie/top_rated?api_key=b214ffc928a4d0c4b361593fdb4ad6ad&query=avengers" />
      </section>
      <section className="page-container">
        <h2 className="font-bold mb-5">Trending</h2>
        <MovieList category="https://api.themoviedb.org/3/trending/movie/week?api_key=b214ffc928a4d0c4b361593fdb4ad6ad&query=avengers" />
      </section>
    </>
  );
};

export default App;
