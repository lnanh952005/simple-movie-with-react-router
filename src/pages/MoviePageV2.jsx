import React, { createContext, useEffect, useState } from "react";
import fetcher from "../configs/Config";
import MovieItem from "../components/movie/MovieItem";
import useDebounce from "../hooks/useDebounce";

import PaginatedItems from "../utils/Pagination";
import tmdbAPI from "../configs/ApiConfig";
import For0For from "../components/404/For0For";

import MovieItemSkeleton from "../components/movie/MovieItemSkeleton";
import useSWRInfinite from "swr/infinite";
import Button from "../components/button/Button";
import NoResult from "../components/404/NoResult";

const MoviePageV2 = () => {
  // const [nextPage, setNextPage] = useState(1);
  const [url, setUrl] = useState(tmdbAPI.getMovieList("popular", 1));
  const [movieFilter, setMovieFilter] = useState("");
  const movieFilterDebounce = useDebounce(movieFilter, 1000);

  const { data, error, isLoading, mutate, size, setSize } = useSWRInfinite(
    (index) => {
      return url.replace("page=1", `page=${index + 1}`);
    },
    fetcher
  );

  useEffect(() => {
    if (movieFilterDebounce) {
      setUrl(tmdbAPI.getSearchMovie(movieFilterDebounce, 1));
    } else {
      setUrl(tmdbAPI.getMovieList("popular", 1));
    }
  }, [movieFilterDebounce]);

  const handleInputChange = (e) => {
    setMovieFilter(e.target.value);
  };

  const movies = data ? data.reduce((a, b) => a.concat(b.results), []) : [];
  console.log(movies);
  console.log(data);
  console.log(size);

  // return ===================
  return (
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
          {new Array(20).fill(0).map((e, index) => (
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
        <NoResult />
      )}
      {size != data?.[0]?.total_pages ? (
        <>
          <hr className="max-w-[700px] w-full mx-auto bg-[#ccc] h-1 rounded-lg" />
          <Button
            className={"w-fit bg-pink-600 px-8 py-2 rounded-lg mx-auto"}
            onClick={() => setSize(size + 1)}
            content={"Load More"}
          />
        </>
      ) : (
        <span className="inline-block px-20 py-2 bg-slate-400 mx-auto rounded-sm text-2xl">
          End!
        </span>
      )}
    </div>
  );
};

export default MoviePageV2;
