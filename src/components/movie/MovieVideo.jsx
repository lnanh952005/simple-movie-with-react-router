import React from "react";
import fetcher from "../../configs/Config";
import useSWR from "swr";
import styled from "styled-components";
import tmdbAPI from "../../configs/ApiConfig";
import { Swiper, SwiperSlide } from "swiper/react";

const MovieVideo = ({ movieId }) => {
  const { data } = useSWR(tmdbAPI.getMovieDetail("videos", movieId), fetcher);
  if (!data) return null;
  const { results } = data;
  console.log(data);

  return (
    <>
      <h2 className="text-center font-bold text-4xl">Videos</h2>
      <div className="flex flex-col gap-10">
        {results.length > 0 &&
          results.slice(0, 2).map((e) => (
            <div key={e.id}>
              <h3 className="text-2xl mb-3">{e.name}</h3>
              <iframe
                className="w-full h-[400px] rounded-lg"
                src={tmdbAPI.getYoutubeTrailer(e.key)}
                title={e.name}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          ))}
      </div>
    </>
  );
};

const PlayerStyle = styled.div`
  .react-player video {
    width: 100%;
    height: 100%;
  }
`;

export default MovieVideo;
