import React, { useRef, useState, useEffect } from "react";
import Section from "./helper/Section";
import Text from "./helper/Text";
import PercentageSec from "./helper/PercentageSec";
import "./Section4.scss";

const Section4 = () => {
  const ref = useRef(null);
  const [isVisible, setVisible] = useState(false);
  const percentData = [
    {
      percent: 76,
      content: "of Grammarly users find writing more enjoyable.",
    },
    {
      percent: 85,
      content: "of Grammarly users are now stronger writers.",
    },
    {
      percent: 70,
      content:
        "of Grammarly users reported an increased level of writing confidence.",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(entry.isIntersecting);
          observer.unobserve(ref.current);
        }
      },
      { rootMargin: "0px" }
    );

    ref.current && observer.observe(ref.current);

    return () => observer.unobserve(ref.current);
  }, []);

  return (
    <Section classList="section4">
      {console.log(isVisible)}
      <div className="container">
        <Text classList="text--h2">
          Premium Customers Report Better Results
        </Text>
        <Text classList="text--h5">
          We routinely survey Grammarly users and have found that:
        </Text>
        <div className="colsContainer threeCols" ref={ref}>
          {percentData.map((data, index) => {
            return (
              <PercentageSec
                key={index}
                data={data}
                startAnimation={isVisible}
              />
            );
          })}
        </div>
      </div>
    </Section>
  );
};

export default Section4;
