import React from "react";
import "./FeatureBox.scss";
import Text from "./Text";
import Button from "./Button";
const FeatureBox = (props) => {
  return (
    <div className={"featureBox " + props.classList}>
      <Text classList="text--tiny">{props.tinyText}</Text>
      <Text classList="text--h3">{props.h3}</Text>
      <Text classList="text--medium">{props.desc}</Text>
      <Button link={props.buttonText.link} classList={props.buttonText.classList}>{props.buttonText.text}</Button>
      <ul>
        {props.features.map((feature, index) => {
          return <li key={index}><span>{feature}</span></li>;
        })}
      </ul>
    </div>
  );
};

export default FeatureBox;
