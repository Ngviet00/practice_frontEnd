import React from 'react';
import './Brand.css';
import gray from './../../image/graygrids.svg';
import lineIcon from './../../image/lineicons.svg';
import uiDeck from './../../image/uideck.svg';
import PageBulb from './../../image/pagebulb.svg';

function Brand() {
   return (
      <div className="brand bg-light">
         <div className="wrapper_container">
            <h3>TRUSTED BY TOP-LEADING COMPANIES</h3>

            <div id="brand__list">
               <div id="brand__item">
                  <img src={gray} alt="" />
               </div>
               <div id="brand__item">
                  <img src={lineIcon} alt="" />
               </div>
               <div id="brand__item">
                  <img src={uiDeck} alt="" />
               </div>
               <div id="brand__item">
                  <img src={PageBulb} alt="" />
               </div>
            </div>
         </div>
      </div>
   )
}

export default Brand
