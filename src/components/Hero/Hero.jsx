import React from 'react'
import Header from '../Header/header';
import './Hero.css';
import hero_image from '../../assets/hero_image.png';
import hero_image_back from '../../assets/hero_image_back.png';
import Heart from '../../assets/heart.png';
import Calories from '../../assets/calories.png';
import hero_2 from '../../assets/hero_2.png';
const hero = () => {
  return (
    <div className="hero">
        <div className="left-h">
           <Header/>
           {/* the-best-ad*/}
           <div className="the-best-ad">
            <div></div>
            <span>The Best Fitness Club In Town</span>
           </div>
           {/* hero headings*/}
           <div className="hero-text">
            <div>
              <span className='stroke-text'>
                Shape </span>
              <span>
                 Your
                </span>
                </div>
                <div>
                  <span>
                    Ideal Body
                  </span>
                  </div>
                  <div className="span">
                  Want to be healthy and have a perfect body? FIT BIT is the right decision for you! It will create your personal training program and balance your diet so you could get the
shape of your dream shortly!
                  </div>
           </div>
           {/*figures */}
           <div className="figures">
            <div><span>+10</span><span>Expert Coaches</span></div>
            <div><span>+200</span><span>Members Joined</span></div>
            <div><span>+20</span><span>Fitness Programs</span></div>
           </div>
           {/* hero buttons */}
           <div className="hero-button">
            <buuton className="btn">Get Consultation</buuton>
            <buuton className="btn">Learn More</buuton>
           </div>

        </div>
        <div className="right-h">
          <button className='btn'>Join Now</button>
          <div className="heart-rate">
            <img src={Heart} alt="" />
            <span>Heart Rate </span><span>141 bpm</span>
          </div>
          <img src={hero_2} alt="" className='hero_image' />
        
        </div>
    </div>
  )
}

export default hero