import React from 'react'
import './Team.css';
import t1 from './../../image/team-1.jpg';
import t2 from './../../image/team-2.jpg';
import t3 from './../../image/team-3.jpg';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
function Team() {
   return (
      <div className="team bg-light">
         <div className="wrapper_container">

            <h1 className="text-center" id="title">
               Meet Our<br />
               Creative Team Members
            </h1>
            <p className="text-center" style={{ marginBottom: '3em' }}>
               Lorem ipsum dolor sit amet, consetetur s
               adipscing elitr, sed dinonumy eirmod tempor
               invidunt ut labore et dolore magna.
               </p>
            <div className="team__list">
               <div className="team__item">
                  <div className="team__image">
                     <img src={t1} alt="" />
                     <div id="layer">
                        <ul>
                           <li>
                              <FacebookIcon />
                           </li>
                           <li>
                              <TwitterIcon />
                           </li>
                           <li>
                              <InstagramIcon />
                           </li>
                           <li>
                              <LinkedInIcon />
                           </li>
                        </ul>
                     </div>
                  </div>
                  <div className="team__info">
                     <h4>Jonathon Smith</h4>
                     <p>Creative Product Designer</p>
                  </div>
               </div>

               <div className="team__item">
                  <div className="team__image">
                     <img src={t2} alt="" />
                     <div id="layer">
                        <ul>
                           <li>
                              <FacebookIcon />
                           </li>
                           <li>
                              <TwitterIcon />
                           </li>
                           <li>
                              <InstagramIcon />
                           </li>
                           <li>
                              <LinkedInIcon />
                           </li>
                        </ul>
                     </div>
                  </div>
                  <div className="team__info">
                     <h4>Gray Simon</h4>
                     <p>Frontend Developer</p>
                  </div>
               </div>

               <div className="team__item">
                  <div className="team__image">
                     <img src={t3} alt="" />
                     <div id="layer">
                        <ul>
                           <li>
                              <FacebookIcon />
                           </li>
                           <li>
                              <TwitterIcon />
                           </li>
                           <li>
                              <InstagramIcon />
                           </li>
                           <li>
                              <LinkedInIcon />
                           </li>
                        </ul>
                     </div>
                  </div>
                  <div className="team__info">
                     <h4>Donal Trump</h4>
                     <p>Head Of UX</p>
                  </div>
               </div>
            </div>
         </div>
      </div >
   )
}

export default Team
