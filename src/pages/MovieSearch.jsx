import React from "react";
import useSWR from "swr";
import fetcher, { api_key } from "../configs/Config";
//https://api.themoviedb.org/3/search/movie?query=${search}&api_key=${api_key}
const MovieSearch = ({ searchMovie }) => {
  const { data } = useSWR(
    `https://api.themoviedb.org/3/search/movie?query=${searchMovie}&api_key=${api_key}`,
    fetcher
  );
  !data ? null : console.log(data);
  
  return <div>MovieSearch</div>;
};

export default MovieSearch;
