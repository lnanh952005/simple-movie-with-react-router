import React from "react";
import {  useNavigate } from "react-router-dom";
import Button from "../button/Button";
import tmdbAPI from "../../configs/ApiConfig";
import propTypes from "prop-types";


const MovieItem = ({ item }) => {
  const navigate = useNavigate();
  if (!item) return null;
  const { title, poster_path, release_date, vote_average, id } = item;
  return (
    <div className="flex flex-col h-full rounded-lg p-3 bg-slate-800 select-none">
      <div className="h-[250px] overflow-hidden rounded-lg">
        <img
          className={
            "block w-full h-full object-cover rounded-lg cursor-pointer hover:scale-110 transition-all duration-300 hover:rotate-2"
          }
          src={tmdbAPI.getOriginalImg("w500", poster_path)}
          onClick={(e) => navigate(`/movies/${id}`)}
          alt={title}
        />
      </div>
      <div className="mt-3 gap-4 flex flex-col flex-1">
        <h3 className="line-clamp-2">{title}</h3>
        <div className="mt-auto flex justify-between mb-5">
          <span>{new Date(release_date).getFullYear()}</span>
          <span>{vote_average.toPrecision(2)}</span>
        </div>
        <Button
          className={"w-full py-3 rounded-xl bg-purple-700 "}
          onClick={(e) => navigate(`/movies/${id}`)}
          content="Watch now"
        />
      </div>
    </div>
  );
};

MovieItem.propTypes = {
  item: propTypes.shape({
    title: propTypes.string,
    poster_path: propTypes.string,
    release_date: propTypes.string,
    vote_average: propTypes.number,
    id: propTypes.number,
  }),
};

export default MovieItem;