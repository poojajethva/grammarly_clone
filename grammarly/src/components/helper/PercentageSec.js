import React, { useEffect, useState } from "react";
import Text from "./Text";
import "./PercentageSec.scss";

const PercentageSec = ({ data, startAnimation }) => {
  const [strokeVal, setStrokeVal] = useState(534);
  const [percentProgress, setPercentProgress] = useState(0);
  useEffect(() => {
    let timer;
    if (startAnimation) {
      const circumference = 71 * 2 * Math.PI;
      const offset = circumference - (data.percent / 100) * circumference;
      setStrokeVal(offset + 120);
      timer = setInterval(() => {
        setPercentProgress((counter) => {
          const updatedCounter = counter + 1;
          if (updatedCounter < data.percent) {
            return updatedCounter;
          } else {
            return data.percent;
          }
        });
      }, 40);
    }
    return () => clearInterval(timer);
  });

  return (
    <div className="percentWrap">
      <div className="circleWrap">
        <svg className="svgContainer">
          <defs>
            <linearGradient
              id="grad1"
              gradientUnits="userSpaceOnUse"
              x1="100%"
              y1="100%"
              x2="0%"
              y2="0%"
            >
              <stop stopColor="#4FDBCA" offset="0"></stop>
              <stop stopColor="#4CD696" offset="1"></stop>
            </linearGradient>
          </defs>
          <circle
            stroke="#e6e6e8"
            cx="73"
            cy="73"
            r="71"
            strokeWidth="4"
          ></circle>
          <circle
            className="circle"
            cx="73"
            cy="73"
            r="71"
            stroke="#15C39A"
            strokeWidth="4"
            style={{ strokeDashoffset: strokeVal }}
          ></circle>
        </svg>
        <span className="percentDy">{percentProgress}</span>
        <span className="percent">%</span>
      </div>
      <div className="textWrap">
        <Text classList="text--h6">
          {data.percent}% {data.content}
        </Text>
      </div>
    </div>
  );
};

export default PercentageSec;
