import React from 'react'
import { useParams } from 'react-router-dom'
import useSWR from 'swr';
import fetcher from '../configs/Config';
//https://api.themoviedb.org/3/movie/{movie_id}?api_key=b214ffc928a4d0c4b361593fdb4ad6ad
const MovieDetailPage = () => {
  useSWR,fetcher
  const {movieId} = useParams();
  
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=b214ffc928a4d0c4b361593fdb4ad6ad`,
    fetcher
  );

  console.log(data || null);

  return (
    <div>MovieDetail</div>
  )
}

export default MovieDetailPage