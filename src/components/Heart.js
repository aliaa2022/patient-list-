import React from 'react';
import './Heart.css';

const Heart = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100"
      height="100"
      viewBox="0 0 100 100"
      className="icon heart"
    >
      <path
        className="path"
        d="M10,30 Q50,5 90,30 T50,90 T10,30 Z"
        fill="none"
        stroke="red"
        strokeWidth="2"
      />
    </svg>
  );
};

export default Heart;
