import React from "react";
import Text from "./helper/Text";
import "./PercentageSec.scss";

const PercentageSec = ({content, percent}) => {

  return (
    <>
        <div className="circleWrap">
            <span className="percentDy">{percent}</span>
            <span className="percent">%</span>
        </div>
      <div className="textWrap">
        <Text classList="text--h6">{percent} {content}</Text>
      </div>
    </>
  );
};

export default PercentageSec;
