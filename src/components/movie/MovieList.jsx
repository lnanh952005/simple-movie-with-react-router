//https://api.themoviedb.org/3/search/movie?api_key=b214ffc928a4d0c4b361593fdb4ad6ad&query=avengers
import axios from "axios";
import useSWR from "swr";
import { useEffect, useState } from "react";

import { SwiperSlide, Swiper } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import MovieCard from "./MovieCard";
import fetcher from "../../configs/Config";

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  const { data, error, isLoading } = useSWR(
    `https://api.themoviedb.org/3/search/movie?api_key=b214ffc928a4d0c4b361593fdb4ad6ad&query=avengers`,
    fetcher
  );

  useEffect(() => {
    if(data) {
      setMovies(data.results);
    }
  }, [data]);

  console.log(data);

  return (
    <div className="movie-list">
      <Swiper grabCursor="true" spaceBetween={40} slidesPerView={"auto"}>
        {movies.length > 0 &&
          movies.map((e) => (
            <SwiperSlide key={e.id}>
              <MovieCard item={e} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default MovieList;
