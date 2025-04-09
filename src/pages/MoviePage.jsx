import React, { createContext, useEffect, useState } from "react";
import fetcher from "../configs/Config";
import useSWR from "swr";
import MovieItem from "../components/movie/MovieItem";
import useDebounce from "../hooks/useDebounce";

import PaginatedItems from "../utils/Pagination";
import tmdbAPI from "../configs/ApiConfig";
import For0For from "../components/404/For0For";
import styled from "styled-components";
import MovieItemSkeleton from "../components/movie/MovieItemSkeleton";

export const ThemeContext = createContext();

const MoviePage = () => {
  const [nextPage, setNextPage] = useState(1);
  const [url, setUrl] = useState(tmdbAPI.getMovieList("popular", 1));
  const { data, error, isLoading } = useSWR(url, fetcher);
  const [movieFilter, setMovieFilter] = useState("");
  const movieFilterDebounce = useDebounce(movieFilter, 1000);

  const handleInputChange = (e) => {
    setMovieFilter(e.target.value);
  };

  useEffect(() => {
    if (movieFilterDebounce) {
      setUrl(tmdbAPI.getSearchMovie(movieFilterDebounce));
    } else {
      setUrl(tmdbAPI.getMovieList("popular", nextPage));
    }
  }, [movieFilterDebounce, nextPage]);
  const movies = data?.results || [];
  console.log(data);
  // return ===================

  return (
    <ThemeContext.Provider value={{ nextPage, setNextPage }}>
      <div className="flex flex-col gap-10">
        <div className="w-[1000px] mx-auto">
          <div className="relative overflow-hidden">
            <input
              onChange={handleInputChange}
              type="text"
              placeholder="find your movies..."
              className="w-full p-4 bg-white border-2 border-transparent rounded-2xl text-[#0000009f] outline-none focus:border-pink-500 transition-all"
            />
            <div className="absolute right-0 top-1/2 -translate-y-1/2 h-full bg-pink-600 flex items-center rounded-l-2xl rounded-r-2xl pl-20 pr-10 ">
              <img
                className="w-5 h-5 object-cover"
                src="/searchicon.svg"
                alt=""
              />
            </div>
          </div>
        </div>
        {isLoading ? (
          <div className="grid grid-cols-4 gap-10 px-4">
            {new Array(20).fill(0).map((e,index) => (
              <MovieItemSkeleton key={index} />
            ))}
          </div>
        ) : movies.length > 0 ? (
          <div className="grid grid-cols-4 gap-10 px-4">
            {movies.map((e) => (
              <MovieItem key={e.id} item={e} />
            ))}
          </div>
        ) : (
          <>
            <h2 className="text-center text-red-600 font-bold text-2xl">
              {data?.status_message}
            </h2>
            <For0For />
          </>
        )}

        {movies.length > 0 && (
          <div className="mx-auto mb-[20px]">
            <PaginatedItems
              nextPage={nextPage}
              setNextPage={setNextPage}
              itemsPerPage={20}
              total_results={data?.total_results}
            />
          </div>
        )}
      </div>
    </ThemeContext.Provider>
  );
};

export default MoviePage;
