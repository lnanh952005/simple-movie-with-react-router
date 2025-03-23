import React from 'react'

const MovieCard = () => {
  return (
    <div className="rounded-lg p-3">
      <img
        className="block w-full h-[250px] object-cover rounded-lg"
        src="https://i.ytimg.com/vi/K43xpeAmZ-g/maxresdefault.jpg"
        alt=""
      />
      <div className="mt-2">
        <h3 className="mb-3">Spiderman: Homecoming</h3>
        <div className="flex justify-between mb-5">
          <span>2017</span>
          <span>rating</span>
        </div>
        <button className="w-full bg-pink-500 py-3 rounded-xl">
          Watch now
        </button>
      </div>
    </div>
  );
}

export default MovieCard