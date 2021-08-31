import React from "react";
import "./AtfImage.scss";

const AtfImages = (props) => {
  const data = [
    {
      big: "",
      small: "",
    },
    
  ];

  return (
    <ul>
      {data.map((cont, index) => {
        return <img key={index} h5={cont.h5} tiny={cont.tiny} />;
      })}
    </ul>
  );
};

export default AtfImages;
