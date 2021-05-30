import React from 'react'
import './Function.css';
import CardItem from './CardItem';

import PaymentIcon from '@material-ui/icons/Payment';
import PersonIcon from '@material-ui/icons/Person';
import LockIcon from '@material-ui/icons/Lock';
import SettingsIcon from '@material-ui/icons/Settings';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import CodeIcon from '@material-ui/icons/Code';

function Function() {
   const text = "Amet facilisis magna etiam tempor orci eu lobortis. Pharetra pharetra massa massa ultricies.";
   return (
      <div className="function">
         <div className="wrapper_container">
            <h5 className="text-center" style={{ color: '#3f50b5' }}>BUILD FASTER</h5>
            <h1 className="text-center">Everything your app needs and more</h1>
            <p className="text-center" style={{ fontSize: '18px', marginBottom: '2em' }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt optio officiis dolore earum error eaque perferendis laudantium sed.</p>

            <div className="function__list">
               <div className="function__item">
                  <CardItem title="Payments" icon={PaymentIcon} text={text} />
               </div>
               <div className="function__item">
                  <CardItem title="Authentication" icon={PersonIcon} text={text} />
               </div>
               <div className="function__item">
                  <CardItem title="Role-based access control" icon={LockIcon} text={text} />
               </div>
               <div className="function__item">
                  <CardItem title="Powerful API" icon={SettingsIcon} text={text} />
               </div>
               <div className="function__item">
                  <CardItem title="Easy upgrades" icon={CloudUploadIcon} text={text} />
               </div>
               <div className="function__item">
                  <CardItem title="Fully customizable" icon={CodeIcon} text={text} />
               </div>
            </div>
         </div>
      </div >
   )
}

export default Function
