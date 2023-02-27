import React from 'react'
import './Plan.css'
import {plansData} from '../../data/plansData'
import whiteTick from '../../assets/whiteTick.png'
import tick2 from '../../assets/tick-2.png'
const Plan = () => {
  return (
   <div className="plans-container"><br/><br/><br/><br/><br/>
<div className="program-header" style={{gap:'2rem'}}>
<span className='stroke-text'>READY TO START</span>
<span>YOUR JOURNEY</span>
<span className='stroke-text'>WITH US</span>
</div>

{/* plans card */}
<div className="plans">
{plansData.map((plan,i)=>(
    <div className="plan" key={i}>
{plan.icon}
<span>{plan.name}</span>
<span>$ {plan.price}</span>
<div className="features">
{plan.features.map((feature,i)=>(
    <div className="feature">
<img src={whiteTick} alt="" />
<span key={i}>{feature}</span>

    </div>
))}

</div>
<div><span>See More Benefits -></span></div>
<button className='btn'>Join Now</button>

    </div>
))}

</div>

   </div>
  );
  
};

export default Plan