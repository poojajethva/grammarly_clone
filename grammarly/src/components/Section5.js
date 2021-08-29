import React from 'react';
import Section from './helper/Section';
import Text from './helper/Text';
import Button from './helper/Button';
import "./Section5.scss";

const Section5 = () => {
  return (
    <Section classList="section5">
        <Text classList="text--h1">Take Your Writing from Good to Great</Text> 
        <Text classList="text--h4">Unlock Grammarly Premium’s advanced features to up-level your communication.</Text> 
        <Button link="#">Upgrade to Grammarly Premium</Button>
    </Section>
  );
};

export default Section5;
