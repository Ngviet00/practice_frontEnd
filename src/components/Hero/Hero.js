import React from 'react';
import './Hero.css';
import Button from '@material-ui/core/Button';
function Hero() {
   return (
      <div className="hero">
         <div id="started">
            <h1>Jumpstart your next</h1>
            <h2>SaaS product</h2>
            <p>
               Lorem, ipsum dolor sit amet consectetur adipisicing elit.
               Incidunt optio officiis dolore earum error eaque perferendis laudantium sed.
               </p>
            <div id="btn_started">
               <Button variant="contained" color="primary">
                  Get Started
               </Button>
               <Button variant="outlined" color="primary" id="btn_live_demo">
                  Live Demo
               </Button>
            </div>
         </div>
      </div >
   )
}
export default Hero;
