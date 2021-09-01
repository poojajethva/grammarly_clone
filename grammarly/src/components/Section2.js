import React from "react";
import Section from "./helper/Section";
import Text from "./helper/Text";
import "./Section2.scss";
import FeatureBox from "./helper/FeatureBox";

const Section2 = () => {
  return (
    <Section classList="section2">
      <Text classList="text--h2">Up-Level Your Communication</Text>
      <Text classList="text--h5">
        Unlock Grammarly Premium’s advanced features and suggestions.
      </Text>
      <div className="colsContainer twoCols">
        <div className="col col1">
          <FeatureBox
            classList="featureBox1"
            tinyText="FOR CASUAL WRITING"
            h3="Free"
            desc="Basic writing suggestions."
            buttonText={{ text: "Included In Premium", classList: "disabled", link:"#" }}
            features={["Spelling", "Grammar", "Punctuation", "Conciseness"]}
          />
        </div>
        <div className="col col2">
          <FeatureBox
            classList="featureBox2"
            tinyText="FOR WORK OR SCHOOL"
            h3="Premium"
            desc="Style, tone, and clarity improvements for writing at work and school."
            buttonText={{ text: "Upgrade to Grammarly Premium", classList: "", link:"#" }}
            features={[
              "Everything in Free",
              "Clarity-focused sentence rewrites",
              "Tone adjustments",
              "Plagiarism detection",
              "Word choice",
              "Formality level",
              "Fluency",
              "Additional advanced suggestions",
            ]}
          />
        </div>
      </div>
    </Section>
  );
};

export default Section2;
