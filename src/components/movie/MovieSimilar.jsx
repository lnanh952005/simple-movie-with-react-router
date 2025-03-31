import useSWR from "swr";
import fetcher from "../../configs/Config";
import { Swiper, SwiperSlide } from "swiper/react";
import MovieItem from "./MovieItem";
import tmdbAPI from "../../configs/ApiConfig";

const MovieSimilar = ({ movieId }) => {
  const { data } = useSWR(tmdbAPI.getMovieDetail("similar", movieId), fetcher);
  if (!data) return null;
  const { results: movieSimilar } = data;
  console.log(data);
  return (
    <Swiper
      className="flex"
      grabCursor="true"
      spaceBetween={40}
      slidesPerView={"auto"}
    >
      {movieSimilar?.length > 0 &&
        movieSimilar.map((e) => (
          <SwiperSlide className="max-w-[300px] w-full" key={e.id}>
            <MovieItem item={e} />
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default MovieSimilar;
