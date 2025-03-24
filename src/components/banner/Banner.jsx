import React, { useEffect, useState } from "react";
import useSWR from "swr";
import fetcher from "../../configs/Config";
import BannerItem from "./BannerItem";
import { Swiper, SwiperSlide } from "swiper/react";
const upcoming =
  "https://api.themoviedb.org/3/movie/upcoming?api_key=b214ffc928a4d0c4b361593fdb4ad6ad";
const Banner = () => {
  const { data, error, isLoading } = useSWR(upcoming, fetcher);
  const movieList = data?.results;

  return (
    <section className="banner page-container h-[500px] pb-10 overflow-hidden">
      <Swiper grabCursor="true" spaceBetween={40} slidesPerView={"auto"}>
        {movieList?.length > 0 &&
          movieList.map((item) => (
            <SwiperSlide key={item.id}>
              <BannerItem item={item} />
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
};

export default Banner;
