
import FeatureSection from './component/FeatureSection.jsx'
import Footer from './component/Footer.jsx'
import HeroSection from './component/HeroSection.jsx'
import Navbar from './component/Navbar.jsx'
import Price from './component/Price.jsx'
import Testimonial from './component/Testimonial.jsx'
import WorkFlow from './component/WorkFlow.jsx'

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6"> <HeroSection /></div>
      <FeatureSection />
      <WorkFlow />
      <Price/>
      <Testimonial />
      <Footer/>
    </div>
  )
}

export default App