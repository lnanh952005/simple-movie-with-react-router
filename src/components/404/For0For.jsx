import React from 'react'
import NoResult from './NoResult'
import { Navigate, useNavigate } from 'react-router-dom';
import Button from '../button/Button';

const For0For = ({ error }) => {
    const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-10 w-[1000px] mx-auto">
      <NoResult />
      <h2 className="text-3xl text-center">{"May be you are lost..."}</h2>
      <Button
        className={"w-[200px] py-3 rounded-xl bg-purple-700 mx-auto  "}
        onClick={(e) => navigate("/")}
        content={error || "Go HomePage"}
      />
    </div>
  );
};

export default For0For