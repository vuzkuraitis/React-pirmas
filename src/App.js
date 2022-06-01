import React from "react";
import Hero from "./components/Hero/Hero";
import Button from "./components/Button/Button";
import Section from "./components/Section/Section";
import Article from "./components/Article/Article";

const App = () => {
  return (
    <>
      <Hero
        title="New York"
        subtitle="The City in other words called Big Apple"
      />
      <Section>
        <Article title="Things to do in NY">
          <ul>
            <li>Sight Seeing</li>
            <li>Visiting Best Bars</li>
            <li>Climbing up the Skyscrapers</li>
          </ul>
          <Button
            type="button"
            target="_blank"
            handleClick={() => window.location.replace("http://www.google.com")}
          >
            Let's go!
          </Button>
        </Article>
      </Section>
    </>
  );
};

export default App;
