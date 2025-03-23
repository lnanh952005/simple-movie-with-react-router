//https://api.themoviedb.org/3/search/movie?api_key=b214ffc928a4d0c4b361593fdb4ad6ad&query=avengers
import axios from "axios";
import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

// core version + navigation, pagination modules:
import {SwiperSlide, Swiper} from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const fetchMovieApi = async () => {
  const movieData = await axios.get(
    "https://api.themoviedb.org/3/search/movie?api_key=b214ffc928a4d0c4b361593fdb4ad6ad&query=avengers"
  );
  return movieData.data;
};

const MovieList = () => {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    setMovie([...movie, fetchMovieApi()]);
  }, [movie]);

  // init Swiper:
const swiper = new Swiper('.swiper', {
  // configure Swiper to use modules
  modules: [Navigation, Pagination],
});

  const movieList = movie.map((e) => <MovieCard key={e.id} name={e.name} />);

  return { movieList };
};

export default MovieList;
