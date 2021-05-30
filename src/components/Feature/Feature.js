import React from 'react'
import './Feature.css';
import OfflineBoltIcon from '@material-ui/icons/OfflineBolt';
import StarsIcon from '@material-ui/icons/Stars';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

import ft1 from './../../image/sw.png';
import ft4 from './../../image/sw1.png';
import ft2 from './../../image/fast.jpg';
import ft3 from './../../image/product.jpg';

import Button from '@material-ui/core/Button';

function Feature() {
   return (
      <div className="feature">
         <div className="wrapper_container">

            <div className="feature__item">
               <div className="feature__info">
                  <h2>Perfect Solution for Thriving Online Business</h2>
                  <p>
                     Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                     sed dinonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                     sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                     Stet clita kasd gubergren, no sea takimata sanctus est Lorem.Lorem ipsum dolor sit amet.
                  </p>
                  <Button id="btn__discover" variant="outlined" color="secondary">
                     Discover More
                  </Button>
               </div>
               <div className="feature__image">
                  <img src={ft1} alt="" />
               </div>
            </div>

            <div className="feature__item item_even">
               <div className="feature__info">
                  <div className="feature__icon">
                     <OfflineBoltIcon />
                  </div>
                  <h2>Build products faster</h2>
                  <p>
                     Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                     sed dinonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                     sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                     Stet clita kasd gubergren, no sea takimata sanctus est Lorem.Lorem ipsum dolor sit amet.
                  </p>
                  <Button variant="contained" color="primary">
                     Get Started
                  </Button>
               </div>
               <div className="feature__image">
                  <img src={ft2} alt="" />
               </div>
            </div>

            <div className="feature__item">
               <div className="feature__info">
                  <div className="feature__icon">
                     <StarsIcon />
                  </div>
                  <h2>Focus on your product</h2>
                  <p>
                     Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                     sed dinonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                     sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                     Stet clita kasd gubergren, no sea takimata sanctus est Lorem.Lorem ipsum dolor sit amet.
                  </p>
                  <Button variant="contained" color="primary">
                     Get Started
                  </Button>
               </div>
               <div className="feature__image">
                  <img src={ft3} alt="" />
               </div>
            </div>

            <div className="feature__item item_even">
               <div className="feature__info">
                  <div className="feature__icon">
                     <CheckCircleIcon />
                  </div>
                  <h2>Easy to Manage</h2>
                  <p>
                     Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                     sed dinonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                     sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                     Stet clita kasd gubergren, no sea takimata sanctus est Lorem.Lorem ipsum dolor sit amet.
                  </p>
                  <Button variant="contained" color="primary">
                     Get Started
                  </Button>
               </div>
               <div className="feature__image">
                  <img src={ft4} alt="" />
               </div>
            </div>
         </div>
      </div>
   )
}
export default Feature
