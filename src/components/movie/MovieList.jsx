//https://api.themoviedb.org/3/search/movie?api_key=b214ffc928a4d0c4b361593fdb4ad6ad&query=avengers
import useSWR from "swr";

import { SwiperSlide, Swiper } from "swiper/react";
import fetcher from "../../configs/Config";
import MovieItem from "./MovieItem";
import MovieStyle  from "./MovieStyle";

const MovieList = ({ category }) => {
  const { data, error, isLoading } = useSWR(category, fetcher);

  const movieList = data?.results;

  console.log(data);

  return (
    <MovieStyle >
      <Swiper grabCursor="true" spaceBetween={40} slidesPerView={"auto"}>
        {movieList?.length > 0 &&
          movieList.map((e) => (
            <SwiperSlide  key={e.id}>
              <MovieItem item={e} />
            </SwiperSlide>
          ))}
      </Swiper>
    </MovieStyle>
  );
};

export default MovieList
