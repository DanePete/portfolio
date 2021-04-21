import React from "react";
import { motion } from "framer-motion";
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
      <section className="glass">
        <div className="statusBar">
          <div className="notiication-center">
            <div className="red-dot"></div>
            <div className="yellow-dot"></div>
          </div>
        </div>
        <div className="cards">
          <div className="card">
            <h5>Example</h5>
          </div>
          <div className="card">
            <h5>Example</h5>
          </div>
          <div className="card">
            <h5>Example</h5>
          </div>
          <div className="card">
            <h5>Example</h5>
          </div>
          <div className="card">
            <h5>Example</h5>
          </div>          
        </div>
      </section>
    </div>
  );

};

export default Hero;