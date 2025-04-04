//https://api.themoviedb.org/3/search/movie?apiKey=b214ffc928a4d0c4b361593fdb4ad6ad&query=avengers
import useSWR from "swr";

import { SwiperSlide, Swiper } from "swiper/react";
import fetcher from "../../configs/Config";
import MovieItem from "./MovieItem";
import MovieItemSkeleton from "./MovieItemSkeleton";
const MovieList = ({ category }) => {
  const { data, error, isLoading } = useSWR(category, fetcher);

  const movieList = data?.results || [];

  return (
    <>
      {isLoading ? (
        <Swiper
          className="flex"
          grabCursor="true"
          spaceBetween={40}
          slidesPerView={"auto"}
        >
          {new Array(5).fill(0).map((e,index) => (
            <SwiperSlide className="max-w-[300px] w-full" key={index}>
              <MovieItemSkeleton />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <Swiper
          className="flex"
          grabCursor="true"
          spaceBetween={40}
          slidesPerView={"auto"}
        >
          {movieList.length > 0 &&
            movieList.map((e) => (
              <SwiperSlide className="max-w-[300px] w-full" key={e.id}>
                <MovieItem item={e} />
              </SwiperSlide>
            ))}
        </Swiper>
      )}
    </>
  );
};

export default MovieList;
