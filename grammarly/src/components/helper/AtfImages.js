import React, {useEffect} from "react";
import "./AtfImages.scss";
import slide1big from "../../images/slider/slide1-big.svg";
import slide1small from "../../images/slider/slide1-small.svg";
import slide2big from "../../images/slider/slide2-big.svg";
import slide2small from "../../images/slider/slide2-small.svg";
import slide3big from "../../images/slider/slide3-big.svg";
import slide3small from "../../images/slider/slide3-small.svg";
import slide4big from "../../images/slider/slide4-big.svg";
import slide4small from "../../images/slider/slide4-small.svg";

const AtfImages = (props) => {
  const data = [
    {
      big: slide1big,
      small: slide1small,
    },
    {
      big: slide2big,
      small: slide2small,
    },
    {
      big: slide3big,
      small: slide3small,
    },
    {
      big: slide4big,
      small: slide4small,
    },
  ];

  return (
    <div className="imgCont">
      <img src={data[props.slideNum].big} className={"bigImg "} />
      <img src={data[props.slideNum].small} className="smallImg" />
    </div>
  );
};

export default AtfImages;
