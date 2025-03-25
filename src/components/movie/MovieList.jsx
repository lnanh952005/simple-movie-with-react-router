//https://api.themoviedb.org/3/search/movie?api_key=b214ffc928a4d0c4b361593fdb4ad6ad&query=avengers
import axios from "axios";
import useSWR from "swr";
import { useEffect, useState } from "react";

import { SwiperSlide, Swiper } from "swiper/react";

import "swiper/css";

import MovieCard from "./MovieItem";
import fetcher from "../../configs/Config";
import Skeleton from "react-loading-skeleton";

const MovieList = ({ category }) => {
  const { data, error, isLoading } = useSWR(category, fetcher);

  const movieList = data?.results;

  console.log(data);

  return isLoading ? (
    <Skeleton count={10} />
  ) : (
    <div className="movie-list">
      <Swiper grabCursor="true" spaceBetween={40} slidesPerView={"auto"}>
        {movieList.length > 0 &&
          movieList.map((e) => (
            <SwiperSlide key={e.id}>
              <MovieCard item={e}/>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};


export default MovieList
