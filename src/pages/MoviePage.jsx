import React, { createContext, useEffect, useState } from "react";
import fetcher, { api_key } from "../configs/Config";
import useSWR from "swr";
import MovieItem from "../components/movie/MovieItem";
import useDebounce from "../hooks/useDebounce";
import NoResult from "../utils/NoResult";

import ReactPaginate from "react-paginate";
import PaginatedItems from "../utils/Pagination";

const ThemeContext = createContext();

const MoviePage = () => {
  const [nextPage, setNextPage] = useState(1);
  const [url, setUrl] = useState(
    `https://api.themoviedb.org/3/movie/popular?page=${nextPage}&api_key=${api_key}`
  );
  const { data, error, isLoading } = useSWR(url, fetcher);
  const [movieFilter, setMovieFilter] = useState("");
  const movieFilterDebounce = useDebounce(movieFilter, 1000);

  const handleInputChange = (e) => {
    setMovieFilter(e.target.value);
  };

  // const handleNextPage = (indexOfPage) => {
  //   if(indexOfPage == -1 && nextPage - 1 > 0){
  //     setNextPage(nextPage-1);
  //   }
  //   else if (indexOfPage == 1 && nextPage + 1 <= data?.total_pages) {
  //     setNextPage(nextPage + 1);
  //   } else if (indexOfPage <= data?.total_pages) {
  //     setNextPage(indexOfPage);
  //   }
  // }
  useEffect(() => {
    if (movieFilterDebounce) {
      setUrl(
        `https://api.themoviedb.org/3/search/movie?query=${movieFilterDebounce}&api_key=${api_key}`
      );
    } else {
      setUrl(
        `https://api.themoviedb.org/3/movie/popular?page=${nextPage}&api_key=${api_key}`
      );
    }
  }, [movieFilterDebounce, nextPage]);
  const movies = data?.results || [];
  console.log(movies.length);
  console.log(data);
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
            <img
              className="w-5 h-5 object-cover"
              src="/searchicon.svg"
              alt=""
            />
          </div>
        </div>
      </div>
      {isLoading ? (
        <div className="flex justify-center mt-20">
          <span className="w-10 h-10 rounded-full border-[5px] border-t-transparent border-pink-500 animate-spin"></span>
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
          <NoResult />
        </>
      )}

      {movies.length > 0 && (
        <div className="mx-auto">
          <ThemeContext.Provider value={{ movies, setNextPage }}>
            <PaginatedItems itemsPerPage={10} page={movies} />
          </ThemeContext.Provider>
        </div>
      )}
    </div>
  );
};

export { MoviePage, ThemeContext };
// <div className="flex justify-center items-center gap-5 mt-auto min-w-[500px] mx-auto">
//   <p
//     onClick={() => handleNextPage(-1)}
//     className="flex-1 border-2 border-pink-800 rounded-lg px-4 py-2 hover:border-white hover:text-pink-800 transition-all cursor-pointer text-center"
//   >
//     Prev
//   </p>
//   <p className="flex-1 text-center px-4 py-2 bg-pink-900 rounded-lg cursor-pointer">
//     {data?.page}
//   </p>
//   <p className="flex-1 text-center px-4 py-2 bg-pink-400 rounded-lg cursor-pointer">
//     {data?.page + 1}
//   </p>
//   <p className="flex-1 text-center px-4 py-2 bg-pink-400 rounded-lg cursor-pointer">
//     . . .
//   </p>
//   <p className="flex-1 text-center px-4 py-2 bg-pink-400 rounded-lg cursor-pointer">
//     {data?.total_pages}
//   </p>
//   <p
//     onClick={() => handleNextPage(1)}
//     className="flex-1 border-2 border-pink-800 rounded-lg px-4 py-2 hover:border-white hover:text-pink-800 transition-all cursor-pointer text-center"
//   >
//     Next
//   </p>
// </div>
