import React from "react";
import fetcher, { api_key } from "../../configs/Config";
import useSWR from "swr";
import styled from "styled-components";

const MovieVideo = ({ movieId }) => {
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${api_key}`,
    fetcher
  );
  if (!data) return null;
  const { results } = data;

  console.log(results);

  return (
    <div className="h-[500px]">
      {results[0]?.key && (
        <iframe
          className="w-full h-full rounded-lg"
          src={`https://www.youtube.com/embed/${results[0]?.key}`}
          title={results[0]?.name}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
};

const PlayerStyle = styled.div`
  .react-player video {
    width: 100%;
    height: 100%;
  }
`;

export default MovieVideo;
