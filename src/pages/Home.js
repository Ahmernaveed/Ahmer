import Hero from '../components/Hero/Hero.jsx';
import Programs from '../components/Programs/Programs';
import Reasons from '../components/Reasons/reasons';
import Gallery from '../components/Gallery/gallery.jsx';                                              
import Testimonials from '../components/Testimonials/Testimonials';
import Join from '../components/Join/Join'
import Plans from '../components/Plans/Plan'
import Footer from '../components/Footer/Footer';
import BMI from '../components/BMI/BMI';

const Home = () => {
  return (
    <>
    <Hero/>
          <Programs/>
          <BMI/>
          <Reasons/>
          <Gallery/>
          <Testimonials/>
          <Plans/>
          <Join/>
          <Footer/>
    </>
  )
}

export default Home