import React from 'react'
import useSWR from 'swr';
import fetcher, { api_key } from '../../configs/Config';
const MovieCast = ({ movieId }) => {
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${api_key}`,
    fetcher
  );
  if (!data) return null;
  const { cast } = data;

  return (
    <>
      <h2 className="text-center text-2xl">Casts</h2>
      <div className="grid grid-cols-4 gap-5">
        {cast.slice(0, 4).map((e) => (
          <div key={e.cast_id} className="flex flex-col gap-5">
            <img
              className="rounded-lg"
              src={`https://image.tmdb.org/t/p/original${e.profile_path}`}
              alt="image of character"
            />
            <h3 className="text-center text-2xl">{e.name}</h3>
          </div>
        ))}
      </div>
    </>
  );
}


export default MovieCast