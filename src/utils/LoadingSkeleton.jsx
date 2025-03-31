import React from "react";
import styled, { keyframes } from "styled-components";

const shine = keyframes`
    to{
        background-position-x: -200%;
    }
`;

const Skeleton = styled.div`
  background-color: #eee;
  background-image: linear-gradient(
    110deg,
    #ececec 8%,
    #f5f5f5 18%,
    #ececec 33%
  );
  background-size: 200% 100%;
  animation: 1.5s ${shine} linear infinite;
`;

const LoadingSkeleton = ({ className }) => {
  return <Skeleton className={className}></Skeleton>;
};

export default LoadingSkeleton;
