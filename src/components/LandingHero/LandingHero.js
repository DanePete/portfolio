import React, { useState, useEffect } from "react";
import * as THREE from 'three';
import "animate.css"
import mojs from '@mojs/core'
import { slide as Menu } from 'react-burger-menu'
import image from '../../assets/tenor.gif'
import { motion, useAnimation, AnimatePresence, useViewportScroll } from "framer-motion";
import {
    BrowserRouter as Router,
    useHistory,
    useParams
  } from "react-router-dom";

  const LandingHero = () => {

    const [moon_hover, set_moon_hover] = useState('moon-hide');

  // const controls = useAnimation()
  // const scene = new THREE.Scene();
  // const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

  // const renderer = new THREE.WebGLRenderer();
  // renderer.setSize( window.innerWidth, window.innerHeight );
  // document.body.appendChild( renderer.domElement );

  // const geometry = new THREE.BoxGeometry();
  // const material = new THREE.MeshBasicMaterial( { color: 0xfff, flatShading: true, fog: true, reflectivity:true } );
  // const cube = new THREE.Mesh( geometry, material );
  // scene.add( cube );

  // camera.position.z = 5;

  // const animate = function () {
  //   requestAnimationFrame( animate );

  //   cube.rotation.x += 0.03;
  //   cube.rotation.y += 0.01;

  //   renderer.render( scene, camera );
  // };

  // animate();


  function goToGitHub() {
    window.location.assign('https://github.com/DanePete');
  }

  // useEffect(() => {
  //   controls.start(i => ({
  //     opacity: 1,
  //     x: 100,
  //     transition: { delay: i * 9 },
  //   }))
  // }, [])

  

  return (
    <div className="landing-hero-container container-fluid">
      <div id="moon" class="light-beam" onMouseEnter={() => set_moon_hover('moon-hover')}  onMouseLeave={() => set_moon_hover('moon-hide')}></div>
      <div className="row landing-hero-row align-items-center">
        <div className="col-sm landing-title">
          <div className="header-section">
            <h1>Dane Petersen</h1>
            <i>Full Stack Web Developer, </i>
            <i>Designer</i>
          </div>
          <div id="bouncyCircle"></div>         
        </div>
        <div className="col-sm landing-animation">
          <div className="infinity-container">
            <div class="frame animate__animated animate__jello animate__delay-5s animate__infinite"></div>
            <div class="frame animate__animated animate__jello animate__delay-5s animate__infinite"></div>
            <div class="frame animate__animated animate__jello animate__delay-5s animate__infinite"></div>
            <div class="frame animate__animated animate__jello animate__delay-5s animate__infinite"></div>
            <div class="frame animate__animated animate__jello animate__delay-4.5s animate__infinite"></div>
            <div class="frame animate__animated animate__jello animate__delay-4s animate__infinite"></div>
            <div class="frame animate__animated animate__jello animate__delay-3.5s animate__infinites"></div>
            <div class="frame animate__animated animate__jello animate__delay-3s animate__infinite"></div>
            <div class="frame animate__animated animate__jello animate__delay-2.5s animate__infinite"></div>
            <div class="frame animate__animated animate__jello animate__delay-2s animate__infinite"></div>
            <div class="frame animate__animated animate__jello animate__delay-1.5s animate__infinite"></div>
            <div class="frame animate__animated animate__jello animate__delay-1s animate__infinite"></div>
            <div class="frame animate__animated animate__jello animate__delay-0.5s animate__infinite"></div>
          </div>
        </div>
      </div>
      <div id="dance" className={moon_hover}>
        <span class="thought">
          <div class="tought-message">
            "The universe is a pretty big place. If it's just us, seems like an awful waste of space"
          </div>
          <div class="source clear">
            - <i>Carl Sagan</i>
          </div>
        </span>
        <img src={image}></img>
      </div>
    </div>
  );
};

export default LandingHero;