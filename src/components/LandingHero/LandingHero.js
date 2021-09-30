import React, { useState, useEffect } from "react";
import "animate.css"
import { motion, useAnimation, AnimatePresence, useViewportScroll } from "framer-motion";
import {
    BrowserRouter as Router,
    useHistory,
    useParams
  } from "react-router-dom";

  const LandingHero = () => {

  const controls = useAnimation()
  const list = { hidden: { opacity: 0 } }
  const item = { hidden: { x: -10, opacity: 0 } }
  const { scrollYProgress } = useViewportScroll();
  const history = useHistory();

  function goToGitHub() {
    window.location.assign('https://github.com/DanePete');
  }

  useEffect(() => {
    controls.start(i => ({
      opacity: 1,
      x: 100,
      transition: { delay: i * 9 },
    }))
  }, [])

  return (
    <div className="landing-hero-container">
      <div className="infinity-container">
        <div class="frame animate__animated animate__fadeOutUp animate__delay-5s"></div>
        <div class="frame animate__animated animate__fadeOutUp animate__delay-5s"></div>
        <div class="frame animate__animated animate__fadeOutUp animate__delay-5s"></div>
        <div class="frame animate__animated animate__fadeOutUp animate__delay-5s"></div>
        <div class="frame animate__animated animate__fadeOutUp animate__delay-3s"></div>
        <div class="frame animate__animated animate__fadeOutUp animate__delay-3s"></div>
        <div class="frame animate__animated animate__fadeOutUp animate__delay-3s"></div>
        <div class="frame animate__animated animate__fadeOutUp animate__delay-3s"></div>
        <div class="frame animate__animated animate__fadeOutUp animate__delay-7s"></div>
        <div class="frame animate__animated animate__fadeOutUp animate__delay-7s"></div>
        <div class="frame animate__animated animate__fadeOutUp animate__delay-7s"></div>
        <div class="frame animate__animated animate__fadeOutUp animate__delay-7s"></div>
        <div class="frame animate__animated animate__fadeOutUp animate__delay-3s"></div>
      </div>
    </div>
  );
};

export default LandingHero;