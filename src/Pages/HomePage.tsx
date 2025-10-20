import Header from "../Header/Header"
import Companies from "../LandingPage/Companies"
import DreamJob from "../LandingPage/DreamJob"
import JobCategoty from "../LandingPage/JobCategoty"
import Working from "../LandingPage/Working"
import Testimonials from "../LandingPage/Testimonials"
import Subcribe from "../LandingPage/Subcribe"
import Footer from "../Footer/Footer"

const HomePage = () => {
  return (
    <div className="min-h-[100vh] bg-mine-shaft-950 font-['Poppins']">
      <Header />
      <DreamJob />
      <Companies/>
      <JobCategoty/>
      <Working/>
      <Testimonials/>
      <Subcribe/>
      <Footer/>
    </div>
    
    
  )
}

export default HomePage