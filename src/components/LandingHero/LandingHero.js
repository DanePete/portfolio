import React, { useState, useEffect } from "react";
import "animate.css"
import mojs from '@mojs/core'
import { slide as Menu } from 'react-burger-menu'
import { motion, useAnimation, AnimatePresence, useViewportScroll } from "framer-motion";
import {
    BrowserRouter as Router,
    useHistory,
    useParams
  } from "react-router-dom";

  const LandingHero = () => {


    const bouncyCircle = new mojs.Shape({
      // parent:       '#bouncyCircle',
      shape:        'circle',
      fill:         {'#F64040': '#FC46AD'},
      radius:       {20: 80},
      duration:     2000,
      isYoyo:       true,
      isShowStart:  true,
      easing:       'elastic.inout',
      repeat:       1,
    });
    
    bouncyCircle.play()

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
      <div className="header-section">
        <h1>Dane Petersen</h1>
        <i>Full Stack Web Developer, </i>
        <i>Designer</i>
      </div>
      <div id="bouncyCircle"></div>
      <div className="infinity-container">
        <div class="frame animate__animated animate__rubberBand animate__delay-5s animate__infinite"></div>
        <div class="frame animate__animated animate__rubberBand animate__delay-5s animate__infinite"></div>
        <div class="frame animate__animated animate__rubberBand animate__delay-5s animate__infinite"></div>
        <div class="frame animate__animated animate__rubberBand animate__delay-5s animate__infinite"></div>
        <div class="frame animate__animated animate__rubberBand animate__delay-4.5s animate__infinite"></div>
        <div class="frame animate__animated animate__rubberBand animate__delay-4s animate__infinite"></div>
        <div class="frame animate__animated animate__rubberBand animate__delay-3.5s animate__infinites"></div>
        <div class="frame animate__animated animate__rubberBand animate__delay-3s animate__infinite"></div>
        <div class="frame animate__animated animate__rubberBand animate__delay-2.5s animate__infinite"></div>
        <div class="frame animate__animated animate__rubberBand animate__delay-2s animate__infinite"></div>
        <div class="frame animate__animated animate__rubberBand animate__delay-1.5s animate__infinite"></div>
        <div class="frame animate__animated animate__rubberBand animate__delay-1s animate__infinite"></div>
        <div class="frame animate__animated animate__rubberBand animate__delay-0.5s animate__infinite"></div>
      </div>
    </div>
  );
};

export default LandingHero;