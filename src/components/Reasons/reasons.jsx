import React from 'react'
import './reasons.css';
import image1 from '../../assets/image1.png'
import image2 from '../../assets/image2.png'
import image3 from '../../assets/image3.png'
import image4 from '../../assets/image4.png'
import nb from '../../assets/nb.png'
import tick from '../../assets/tick-2.png'
const reasons = () => {
  return (
    <div className="Reasons" id='reasons'>
        <div className="left-r">
            <img src={image1} alt="" />
            <img src={image2} alt="" />
            <img src={image3} alt="" />
            <img src={image4} alt="" />
        </div>
        <div className="right-r">
            <span>Some Reasons</span>
            <div className='details-r'>
                <span className='stroke-text'>Why</span>
                <span> Choose  Us?</span>
                </div>
                <div className='imgs'>
                <div className='imgs'>
                <img src={tick} alt=""/>
                <span>Variety of Training </span>
                </div>
                <div className='imgs'>
                <img src={tick} alt="" />
                <span>High-Quality Exercise Equipment </span>
                </div>
                <div className='imgs'>
                <img src={tick} alt="" />
                <span>Thriving Community </span>
                </div>
                <div className='imgs'>
                <img src={tick} alt="" />
                <span>Well-Designed Space and Facility</span>
                </div>
                <div className='imgs'>
                <img src={tick} alt="" />
                <span>Personal Training Services </span>
                </div>
                <div className='imgs'>
                <img src={tick} alt="" />
                <span>Digital Fitness Platform </span>
                </div>
                </div>
        </div>
    </div>
  )
}

export default reasons