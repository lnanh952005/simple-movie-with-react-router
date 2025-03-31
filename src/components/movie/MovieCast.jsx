import React from "react";
import useSWR from "swr";
import fetcher from "../../configs/Config";
import tmdbAPI from "../../configs/ApiConfig";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Skeleton from "react-loading-skeleton";
const MovieCast = ({ movieId }) => {
  const { data } = useSWR(tmdbAPI.getMovieDetail("credits", movieId), fetcher);
  console.log(data);
  if (!data) return null;
  const { cast } = data;

  return (
    <>
      <h2 className="text-center font-bold text-4xl">Casts</h2>
      <Swiper
        className="w-full"
        grabCursor="true"
        spaceBetween={20}
        slidesPerView={"auto"}
      >
        {cast.map((e) => (
          <SwiperSlide className="max-w-[200px]" key={e.cast_id}>
            <div className="flex flex-col gap-5 justify-center items-center">
              <div className="h-[300px] w-full rounded-lg relative before:content-[' '] before:absolute before:bg-gray-400 before:inset-0 before:rounded-lg before:animate-pulse">
                <img
                  className="relative h-full w-full object-cover rounded-lg select-none"
                  src={tmdbAPI.getOriginalImg("w500", e.profile_path)}
                  alt={e.name}
                />
              </div>
              <h3 className="text-center text-lg mt-5">{e.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default MovieCast;
