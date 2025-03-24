
import "./App.css";
import { NavLink } from "react-router-dom";
import MovieCard from "./components/movie/MovieCard";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import MovieList from "./components/movie/MovieList";
//https://api.themoviedb.org/3/search/movie?api_key=b214ffc928a4d0c4b361593fdb4ad6ad&query=avengers

const App = () => {
  return (
    <>
      <header className="flex items-center justify-center gap-2 ">
        <span className="p-3">Home</span>
        <span className="p-3">Movies</span>
      </header>
      <section className="page-container h-[500px] pb-10">
        <div className=" relative w-full h-full rounded-lg">
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] rounded-lg"></div>
          <img
            className=" w-full h-full object-cover rounded-lg"
            src="https://media3.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/July2022/biet-doi-avenger_(1).jpg"
            alt=""
          />
          <div className="absolute left-[5%] bottom-[10%] w-[40%] bg-transparent text-white">
            <h2 className="font-bold text-3xl">Avengers: Endgame</h2>
            <div className="flex gap-2  my-5">
              <span className="py-2 px-4 border border-white rounded-lg">
                Action
              </span>
              <span className="py-2 px-4 border border-white rounded-lg">
                Adventure
              </span>
              <span className="py-2 px-4 border border-white rounded-lg">
                Drama
              </span>
            </div>
            <button className="py-3 px-10 bg-pink-500 rounded-lg">
              Watch Now
            </button>
          </div>
        </div>
      </section>
      {/* play now */}
      <section className="page-container">
        <h2 className="font-bold mb-5">Now Playing</h2>
        <MovieList/>
      </section>
      <section className="page-container">
        <h2 className="font-bold mb-5">Top Rated</h2>
        <div className="grid grid-cols-4 gap-10">
          <MovieCard />
        </div>
      </section>
      <section className="page-container">
        <h2 className="font-bold mb-5">Trending</h2>
        <div className="grid grid-cols-4 gap-10">
          <MovieCard />
        </div>
      </section>
    </>
  );
};

export default App;
