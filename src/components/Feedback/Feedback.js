import React from 'react'
import './Feedback.css';
import fback from './../../image/user.jpg';

function Feedback() {
   return (
      <div className="feedback">
         <div className="wrapper_container ">
            <div id="img__customer">
               <img src={fback} alt="" />
            </div>
            <div id="text">
               <p id="title">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Convallis posuere morbi leo urna molestie at elementum eu facilisis.
               </p>
               <p>Judith Lord</p>
               <p>CEO at AlterClass</p>
            </div>
         </div>
      </div>
   )
}

export default Feedback
