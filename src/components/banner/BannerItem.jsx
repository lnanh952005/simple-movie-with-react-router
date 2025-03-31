import React from "react";
import Button from "../button/Button";
import { useNavigate } from "react-router-dom";
import tmdbAPI from "../../configs/ApiConfig";

const BannerItem = ({ item }) => {
  const { id,title, poster_path } = item;
  const navigate = useNavigate();
  return (
    <div className=" relative w-full h-full rounded-lg">
      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] rounded-lg"></div>
      <img
        className=" w-full h-full object-cover rounded-lg"
        src={tmdbAPI.getOriginalImg("w500", poster_path)}
        alt=""
      />
      <div className="absolute left-[5%] bottom-[10%] w-[40%] bg-transparent text-white">
        <h2 className="font-bold text-3xl">{title}</h2>
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
        <Button
          onClick={(e) => navigate(`/movies/${id}`)}
          className="bg-pink-500 py-3 px-6 rounded-xl"
          content="Watch now"
        />
      </div>
    </div>
  );
};

export default BannerItem;
