import React from "react";
import fetcher from "../configs/Config";
import useSWR from "swr";
import MovieCard from "../components/movie/MovieItem";
import MovieItem from "../components/movie/MovieItem";
import searchIcon from "/searchicon.svg";
const category =
  "https://api.themoviedb.org/3/movie/popular?api_key=b214ffc928a4d0c4b361593fdb4ad6ad";

const MoviePage = () => {
  const { data, error, isLoading } = useSWR(category, fetcher);

  return (
    <div className="flex flex-col gap-10">
      <div className="w-[600px] mx-auto">
        <div className="relative">
          <input
            type="text"
            placeholder="find your movies..."
            className="w-full p-4 bg-white rounded-2xl text-[#0000009f] outline-none"
          />
          <div className="absolute right-0 top-1/2 -translate-y-1/2 h-full bg-pink-600 flex items-center rounded-l-2xl rounded-r-2xl pl-20 pr-10">
            <img className="w-5 h-5 object-cover" src={searchIcon} alt="" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-10 px-4">
        {data && data.results.map((e) => <MovieItem key={e.id} item={e} />)}
      </div>
    </div>
  );
};

export default MoviePage;
