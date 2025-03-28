import React, { useEffect, useReducer, useState } from "react";
import fetcher, { api_key } from "../configs/Config";
import useSWR from "swr";
import MovieItem from "../components/movie/MovieItem";
import searchIcon from "/searchicon.svg";
import useDebounce from "../hooks/useDebounce";
import NoResult from "../utils/NoResult";

const MoviePage = () => {
  const [url, setUrl] = useState(
    `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}`
  );
  const { data, error, isLoading } = useSWR(url, fetcher);
  const [movieFilter, setMovieFilter] = useState("");
  const movieFilterDebounce = useDebounce(movieFilter, 1000);
  const handleInputChange = (e) => {
    setMovieFilter(e.target.value);
  };

  useEffect(() => {
    if (movieFilterDebounce) {
      setUrl(
        `https://api.themoviedb.org/3/search/movie?query=${movieFilterDebounce}&api_key=${api_key}`
      );
    } else {
      setUrl(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}`);
    }
  }, [movieFilterDebounce]);

  const movies = data?.results || [];

  // return ===================
  return (
    <div className="flex flex-col gap-10">
      <div className="w-[1000px] mx-auto">
        <div className="relative">
          <input
            onChange={handleInputChange}
            type="text"
            placeholder="find your movies..."
            className="w-full p-4 bg-white border-2 border-transparent rounded-2xl text-[#0000009f] outline-none focus:border-pink-500 transition-all"
          />
          <div className="absolute right-0 top-1/2 -translate-y-1/2 h-full bg-pink-600 flex items-center rounded-l-2xl rounded-r-2xl pl-20 pr-10">
            <img className="w-5 h-5 object-cover" src={searchIcon} alt="" />
          </div>
        </div>
      </div>
      {isLoading && (
        <div className="flex justify-center mt-20">
          <span className="w-10 h-10 rounded-full border-2 border-t-transparent border-pink-500 animate-spin"></span>
        </div>
      )}
      {movies.length > 0 ? (
        <div className="grid grid-cols-4 gap-10 px-4">
          {movies.map((e) => (
            <MovieItem key={e.id} item={e} />
          ))}
        </div>
      ) : (
        <NoResult />
      )}
    </div>
  );
};

export default MoviePage;
