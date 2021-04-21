import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import {
    BrowserRouter as Router,
    useHistory,
    useParams
  } from "react-router-dom";

  const Hero = () => {
  const controls = useAnimation()

  const list = { hidden: { opacity: 0 } }
const item = { hidden: { x: -10, opacity: 0 } }

  useEffect(() => {
    controls.start(i => ({
      opacity: 1,
      x: 100,
      transition: { delay: i * 9 },
    }))
  }, [])

  return (
    <div className="hero-container">
      <div className="header-section">
        <h1>Dane Petersen</h1>
        <i>Full Stack Web Developer, </i>
        <i>Designer, </i>
        <i>Mentor,</i>
      </div>
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


        <motion.ul animate="hidden" variants={list}>
    <motion.li variants={item} />
    <motion.li variants={item} />
    <motion.li variants={item} />
  </motion.ul>


        <ul>
        <motion.li custom={0} animate={controls} />
        <motion.li custom={1} animate={controls} />
        <motion.li custom={2} animate={controls} />
        </ul>


        <div className="cards">
          <motion.div custom={0} animate={controls} className="card">
            <h5>Example</h5>
          </motion.div>
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