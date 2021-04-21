import React from "react";
import {
    BrowserRouter as Router,
    useHistory,
    useParams
  } from "react-router-dom";

  const Hero = () => {
  return (
    <div className="hero-container">
      <div className="cube"></div>
      <div className="cube"></div>
      <div className="cube"></div>
      <div className="cube"></div>
      <div className="cube"></div>
      <div className="cube"></div>
      <section className="glass"></section>
    </div>
  );

};

export default Hero;