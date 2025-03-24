import React from "react";
//https://i.ytimg.com/vi/K43xpeAmZ-g/maxresdefault.jpg
const MovieCard = ({ item  }) => {
  if(!item) return null;
  const {title,poster_path,release_date,vote_average} = item;
  return (
    <div className="flex flex-col h-full rounded-lg p-3 bg-slate-800 select-none">
      <img
        className="block w-full h-[250px] object-cover rounded-lg"
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt=""
      />
      <div className="flex flex-col flex-1">
        <h3 className="mb-3 line-clamp-2">{title}</h3>
        <div className="mt-auto flex justify-between mb-5">
          <span>{new Date(release_date).getFullYear()}</span>
          <span>{vote_average}</span>
        </div>
        <button className="w-full bg-pink-500 py-3 rounded-xl">
          Watch now
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
