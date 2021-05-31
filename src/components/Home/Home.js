import React from 'react';
import Hero from '../Hero/Hero';
import Brand from '../Brand/Brand';
import Feature from '../Feature/Feature';
import Function from '../Function/Function';
import Team from '../Team/Team';
import Price from '../Price/Price';
import News from '../News/News';
// import Blog from '../Blog/Blog';

function Home() {
   return (
      <div className="home">
         <Hero />
         <Brand />
         <Feature />
         <Function />
         <Team />
         <News />
         {/* <Blog /> */}
         <Price />
      </div>
   )
}

export default Home;
