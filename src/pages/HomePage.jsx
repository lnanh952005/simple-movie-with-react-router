import React from "react";
import Banner from "../components/banner/Banner.jsx";
import MovieList from "../components/movie/MovieList.jsx";
import tmdbAPI, { apiKey } from "../configs/ApiConfig.jsx";
const HomePage = () => {
  return (
    <>
      <Banner />

      <div className="flex flex-col gap-5">
        <section className="page-container">
          <h2 className="font-bold mb-5">Now Playing</h2>
          <MovieList category={tmdbAPI.getMovieList("now_playing", 1)} />
        </section>

        <section className="page-container">
          <h2 className="font-bold mb-5">Top Rated</h2>
          <MovieList category={tmdbAPI.getMovieList("top_rated", 1)} />
        </section>

        <section className="page-container">
          <h2 className="font-bold mb-5">Trending</h2>
          <MovieList
            category={`https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}`}
          />
        </section>
      </div>
    </>
  );
};

export default HomePage;
