import React from "react";
import Banner from "../components/banner/Banner.jsx";
import MovieList from "../components/movie/MovieList.jsx";
import { api_key } from "../configs/Config.jsx";

const HomePage = () => {
  return (
    <>
      <Banner />

      <section className="page-container">
        <h2 className="font-bold mb-5">Now Playing</h2>
        <MovieList
          category={`https://api.themoviedb.org/3/movie/now_playing?api_key=${api_key}&language=en-US&page=1`}
        />
      </section>

      <section className="page-container">
        <h2 className="font-bold mb-5">Top Rated</h2>
        <MovieList
          category={`https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}&query=avengers`}
        />
      </section>

      <section className="page-container">
        <h2 className="font-bold mb-5">Trending</h2>
        <MovieList
          category={`https://api.themoviedb.org/3/trending/movie/week?api_key=${api_key}&query=avengers`}
        />
      </section>
    </>
  );
};

export default HomePage;
