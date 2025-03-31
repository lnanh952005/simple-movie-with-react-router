import React from "react";
import useSWR from "swr";
import fetcher, { apiKey } from "../configs/Config";
//https://api.themoviedb.org/3/search/movie?query=${search}&apiKey=${apiKey}
const MovieSearch = ({ searchMovie }) => {
  const { data } = useSWR(
    `https://api.themoviedb.org/3/search/movie?query=${searchMovie}&apiKey=${apiKey}`,
    fetcher
  );
  !data ? null : console.log(data);

  return <div>MovieSearch</div>;
};

export default MovieSearch;
