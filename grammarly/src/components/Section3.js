import React from "react";
import Section from "./helper/Section";
import Text from "./helper/Text";
import "./Section3.scss";
import video from "../images/video.png";

const Section3 = () => {
  return (
    <Section classList="section3">
      <div className="container colsContainer twoCols">
        <div className="col col1">
          <Text classList="text--h2 text--light">Get the Job Done</Text>
          <Text classList="text--h5 text--light">
            Effective communication is the key to making things happen.
          </Text>
        </div>
        <div className="col col2">
            <a className="imgButton">
                <img src={video} />
            </a>
        </div>
      </div>
    </Section>
  );
};

export default Section3;
