import React from "react";
import "./AtfLi.scss";
import Text from "./Text";

const AtfLi = (props) => {
  return (
    <li className="atfLi">
      <Text classList="text--h5">{props.h5}</Text>
      <Text classList="text--tiny">{props.tiny}</Text>
    </li>
  );
};

export default AtfLi;
