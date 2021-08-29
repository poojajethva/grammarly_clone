import React,{useRef} from "react";
import Section from "./helper/Section";
import Text from "./helper/Text";
// import { useInViewport } from "react-in-viewport";
import "./Section4.scss";

const Section4 = () => {
  const myRef = useRef();
  // const { inViewport } = useInViewport(
  //   myRef,
  //   options,
  //   (config = { disconnectOnLeave: false }),
  //   props
  // );
  return (
    <Section classList="section4" ref={myRef}>
      <Text classList="text--h2 text--light">
        Premium Customers Report Better Results
      </Text>
      <Text classList="text--h5 text--light">
        We routinely survey Grammarly users and have found that:
      </Text>
      {/* <div className="container colsContainer threeCols">
        {text + " " + inViewport}
      </div> */}
    </Section>
  );
};

export default Section4;
