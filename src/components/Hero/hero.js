import React, { useState, useEffect } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
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

        <div className="cards">

        <motion.div className="card"
          initial={{y: -1000}}
          animate={{y: 10}}
          transition={{ duration: 6 }}
        >
            <h5>Example</h5>
        </motion.div>
        <motion.div className="card"
          initial={{y: -1000}}
          animate={{y: 10}}
          transition={{ duration: 5 }}
        >
            <h5>Example</h5>
        </motion.div>
        <motion.div className="card"
          initial={{y: -1000}}
          animate={{y: 10}}
          transition={{ duration: 4 }}
        >
            <h5>Example</h5>
        </motion.div>
        <motion.div className="card"
          initial={{y: -1000}}
          animate={{y: 10}}
          transition={{ duration: 3 }}
        >
            <h5>Example</h5>
        </motion.div>       
        </div>
      </section>
    </div>
  );

};

export default Hero;