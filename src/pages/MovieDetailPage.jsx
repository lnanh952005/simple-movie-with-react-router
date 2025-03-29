
import { useParams } from "react-router-dom";
import useSWR from "swr";
import fetcher, { api_key } from "../configs/Config";
import styled from "styled-components";
import MovieCast from "../components/movie/MovieCast";
import MovieSimilar from "../components/movie/MovieSimilar";
import MovieVideo from "../components/movie/MovieVideo";
//https://api.themoviedb.org/3/movie/{movie_id}?api_key=b214ffc928a4d0c4b361593fdb4ad6ad

const MovieType = styled.div`
  display: grid;
  grid-template-columns: ${(props) => `repeat(${props.cols},1fr)`};
  gap: 38px;
  align-items: center;
`;

const MovieDetailPage = () => {
  useSWR, fetcher;
  const { movieId } = useParams();
  
  const { data: movieData } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${api_key}`,
    fetcher
  );

  return (
    <>
      {movieData && (
        <div className="w-full h-[500px] mx-auto relative">
          <div className="absolute inset-0 bg-black opacity-30"></div>
          <div
            className={`w-full h-full bg-no-repeat bg-cover rounded-lg bg-top ${
              !movieData?.backdrop_path ? "animate-pulse bg-gray-300" : ""
            }`}
            style={{
              backgroundImage: movieData?.backdrop_path
                ? `url(https://image.tmdb.org/t/p/original${movieData?.backdrop_path})`
                : "none",
            }}
          ></div>
          <div className="flex flex-col px-5 w-[840px] mx-auto -mt-[100px] relative gap-[58px]">
            <img
              className="w-full h-[400px] object-cover rounded-lg"
              src={`https://image.tmdb.org/t/p/original${movieData?.poster_path}`}
              alt=""
            />
            <h1 className="text-center font-[600] text-5xl mt-10">
              {movieData?.title}
            </h1>
            <MovieType cols={movieData?.genres.length}>
              {movieData?.genres.map((e) => (
                <span
                  className="px-4 py-2 border-2 rounded-[9999px] border-purple-700 text-center"
                  key={e.id}
                >
                  {e.name}
                </span>
              ))}
            </MovieType>
            <p className="text-center">{movieData.overview}</p>
            <MovieCast movieId={movieId} />
            <MovieVideo movieId={movieId} />
          </div>
          <div className="mt-10 w-full max-w-[1200px] mx-auto">
            <MovieSimilar movieId={movieId} />
          </div>
        </div>
      )}
    </>
  );
};

export default MovieDetailPage;
