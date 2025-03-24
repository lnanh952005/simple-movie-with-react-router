import React from 'react'

const BannerItem = ({item}) => {
     const { title, poster_path, release_date, vote_average } = item;
  return (
    <div className=" relative w-full h-full rounded-lg">
      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] rounded-lg"></div>
      <img
        className=" w-full h-full object-cover rounded-lg"
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
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
        <button className="py-3 px-10 bg-pink-500 rounded-lg">Watch Now</button>
      </div>
    </div>
  );
}

export default BannerItem