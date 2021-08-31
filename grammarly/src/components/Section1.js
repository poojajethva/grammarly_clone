import React from "react";
import Section from "./helper/Section";
import Text from "./helper/Text";
import Button from "./helper/Button";
import "./Section1.scss";
import AtfContent from "./helper/AtfContent";

const Section1 = () => {
  return (
    <Section classList="section1">
      <Text classList="text--h1">Aim High With Brilliant Writing</Text>
      <Button link="#">Upgrade to Grammarly Premium</Button>
      <div className="sliderContent">
        <div className="container twoCols">
          <div className="col col1"></div>
          <div className="col col2">
            <AtfContent />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Section1;
