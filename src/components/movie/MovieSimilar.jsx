import useSWR from "swr";
import fetcher, { api_key } from "../../configs/Config";
import { Swiper, SwiperSlide } from "swiper/react";
import MovieItem from "./MovieItem";

import MovieStyle from "./MovieStyle";

const MovieSimilar = ({ movieId }) => {
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${api_key}`,
    fetcher
  );
  if (!data) return null;
  const { results: movieSimilar } = data;
  console.log(data);
  return (
    <MovieStyle>
      <Swiper grabCursor="true" spaceBetween={40} slidesPerView={"auto"}>
        {movieSimilar.length > 0 &&
          movieSimilar.map((e) => (
            <SwiperSlide key={e.id}>
              <MovieItem item={e} />
            </SwiperSlide>
          ))}
      </Swiper>
    </MovieStyle>
  );
}

export default MovieSimilar