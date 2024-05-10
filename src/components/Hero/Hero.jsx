import React from 'react'
import './Hero.css'
import Header from '../Header/Header'
import hero_image from '../../assets/hero_image.png'
import hero_image_back from '../../assets/hero_image_back.png'
import Heart from '../../assets/heart.png'
import Calories from '../../assets/calories.png'
import NumberCounter from 'number-counter'

const Hero = () => {
  // const mobile=window.innerWidth<=768?true:false;
  return (
<div className="hero" id='home'>
  <div className="blur hero-blur"></div>

    <div className="left-h">
        <Header/>
        {/* the best ad */}
        <div className="the-best-ad">
            <div></div>
            <span>The Best Fitness Club In The Town</span>
        </div>

        {/* Hero Heading */}
        <div className="hero-text">
            <div>
              <span className='stroke-text'>Shape </span>
              <span>Your</span>
            </div>
            <div>
              <span>Ideal Body</span>
            </div>
            <div>
              <span>
              In here we will help you to shape and build your ideal body and live up your life to fullest
              </span> 
            </div>
        </div>

        {/* figures */}
        <div className="figures">
          <div>
            <span>
              <NumberCounter end={50} start={1} delay='4' preFix="+" />
            </span>
            <span>expert coaches</span>
          </div>
          <div>
            <span>
            <NumberCounter end={500} start={1} delay='4' preFix="+" />
            </span>
            <span>members joined</span>
          </div>
          <div>
            <span>
            <NumberCounter end={20} start={1} delay='4' preFix="+" />
            </span>
            <span>fitness programs</span>
          </div>
        </div>

        {/* hero buttons */}
        <div className="hero-buttons">
          <buttons className='btn'>Get Started</buttons>
          <buttons className='btn'>Learn More</buttons>
        </div>
    </div>

    <div className="right-h">
      <button className='btnn'>Join Now</button>
      <div className="heart-rate">
        <img src={Heart} alt="" />
        <span>Heart Rate</span>
        <span>116 BPM</span>
      </div>

      {/* hero images */}
      <img src={hero_image} alt="" className='hero-image' />
      <img src={hero_image_back} alt="" className='hero-image-back' />

      {/* Calories */}
      <div className="calories">
        <img src={Calories} alt="" />
        <div>
          <span>Calories Burned</span>
          <span>220 kcal</span>
        </div>
      </div>


    </div>
</div>
  )
}

export default Hero

