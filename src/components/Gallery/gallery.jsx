import React from 'react'
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import './gallery.css'
import hero_image from '../../assets/hero_image.png';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../../assets/img1.jpg';
import img2 from '../../assets/img2.jpg';
import img3 from '../../assets/img3.jpg';
import img4 from '../../assets/img4.jpg';
import img5 from '../../assets/img5.jpg';
import img6 from '../../assets/img6.jpg';
export default () => {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout
        let mouseOver = false
        function clearNextTimeout() {
          clearTimeout(timeout)
        }
        function nextTimeout() {
          clearTimeout(timeout)
          if (mouseOver) return
          timeout = setTimeout(() => {
            slider.next()
          }, 2000)
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true
            clearNextTimeout()
          })
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false
            nextTimeout()
          })
          nextTimeout()
        })
        slider.on("dragStarted", clearNextTimeout)
        slider.on("animationEnded", nextTimeout)
        slider.on("updated", nextTimeout)
      },
    ]
  )

  return (
    <>
    
    <p id='ahmer'>Club Snap</p>
      <div ref={sliderRef} className="keen-slider">
        <center>
        <div className="keen-slider__slide number-slide1"><img src={img1} height='500px' width='1100px'/></div> </center>
      <center>  <div className="keen-slider__slide number-slide2"><img src={img2} height='500px' width='1100px' /></div></center>
      <center> <div className="keen-slider__slide number-slide3"><img src={img3} height='500px' width='1100px' /></div></center>
      <center><div className="keen-slider__slide number-slide4"><img src={img4} height='500px' width='1100px' /></div></center>
      <center><div className="keen-slider__slide number-slide5"><img src={img5} height='500px' width='1100px' /></div></center>
      <center><div className="keen-slider__slide number-slide6"><img src={img6} height='500px' width='1100px' /></div></center>
       
      </div>
    
    </>
  )
}
