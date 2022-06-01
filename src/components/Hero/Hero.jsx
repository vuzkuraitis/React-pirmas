import React from "react";
import "./Hero.css";

const Hero = ({ title, subtitle }) => {
  return (
    <header>
      <div className="heroContainer">
        <h1 className="title">{title}</h1>
        <p className="subtitle">{subtitle}</p>
      </div>
    </header>
  );
};

export default Hero;
