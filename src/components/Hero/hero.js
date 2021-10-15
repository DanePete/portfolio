  import React, { useState, useEffect } from "react";
  import { motion, useAnimation, AnimatePresence, useViewportScroll } from "framer-motion";
  import Contact from "../Contact/Contact";
  import {
      BrowserRouter as Router,
      useHistory,
      useParams
    } from "react-router-dom";
  import { createContact } from '../../graphql/mutations';

  /* First import the API category from Amplify */
  import { API } from 'aws-amplify';

  /* For a dynamic form, create some local state to hold form input. This is pseudocode and will differ based on your JavaScript framework. */
  const formState = { name: '', phone: '' };
  

  const Hero = () => {
  const controls = useAnimation()
  const list = { hidden: { opacity: 0 } }
  const item = { hidden: { x: -10, opacity: 0 } }
  const { scrollYProgress } = useViewportScroll();
  const history = useHistory();

/* Create a function to update the form state. This is pseudocode and will differ based on your JavaScript framework.  */
function updateFormState(key, value) {
  formState[key] = value;
}

/* Create a function that will create a new contact */
async function submitNewContact() {
  try {
    await API.graphql({
      query: createContact,
      variables: {
        input: {
          name: formState.name,
          phone: formState.phone
        }
      }
    })
    console.log('New contact created!');
  } catch (err) {
    console.log({ err });
  }
}





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
    <div className="hero-container">
      <div className="work-in-progress"></div>
      {/* <div className="header-section">
        <h1>Dane Petersen</h1>
        <i>Full Stack Web Developer, </i>
        <i>Designer</i>
      </div> */}
      <h2 className="work-in-progress">THIS IS A WORK IN PROGRESS</h2>
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

        <div className="glass-container">
          <div class="dashboard">
            <div class="user">
              <img src="./images/img.png" alt="" />
              <h3>Contact</h3>
              <p>Dane Petersen</p>
            </div>
            {/* <div class="links">
              <div class="link">
                <img src="./images/img1.png" alt="" />
                <h2>Projects</h2>
              </div>
              <div class="link">
                <img src="./images/img2.png" alt="" />
                <a href="https://github.com/DanePete" target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
              <div class="link">
                <img src="./images/img3.png" alt="" />
                <h2>Blog</h2>
              </div>
              <div class="link">
                <img src="./images/img4.png" alt="" />
                <h2>About</h2>
              </div>
            </div> */}
            {/* <div class="pro">
              <h2>Download Resume</h2>
              <img src="./images/img5.png" alt="" />
            </div> */}
          </div>

          <div className="cards">

          {/* TODO: Convert to loop */}

          {/* <motion.div className="card"
              initial={{y: -1000}}
              animate={{y: 10}}
              transition={{ duration: 9 }}
            >
            <Contact />
            </motion.div> */}
          {/* <motion.div className="card"
              initial={{y: -1000}}
              animate={{y: 10}}
              transition={{ duration: 8 }}
            >
                <h5>Project 2</h5>
            </motion.div>
          <motion.div className="card"
              initial={{y: -1000}}
              animate={{y: 10}}
              transition={{ duration: 7 }}
            >
                <h5>Example</h5>
            </motion.div>
            <motion.div className="card"
              initial={{y: -1000}}
              animate={{y: 10}}
              transition={{ duration: 6 }}
            >
                <h5>Project 3</h5>
            </motion.div>
            <motion.div className="card"
              whileTap={{ scale: 0.8 }}
                initial={{y: -1000}}
              animate={{y: 10}}
              transition={{ duration: 5 }}
            >
                <h5>Project 4</h5>
            </motion.div>
            <motion.div className="card"
              initial={{y: -1000}}
              animate={{y: 10}}
              transition={{ duration: 4 }}
            >
                <h5>Project 5</h5>
            </motion.div> */}
            <motion.div className="card"
              initial={{y: -1000}}
              animate={{y: 10}}
              transition={{ duration: 3 }}
            >
                <Contact />
            </motion.div>       
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;