import Companies from "../LandingPage/Companies"
import DreamJob from "../LandingPage/DreamJob"
import JobCategoty from "../LandingPage/JobCategoty"
import Working from "../LandingPage/Working"
import Testimonials from "../LandingPage/Testimonials"
import Subcribe from "../LandingPage/Subcribe"

const HomePage = () => {
  return (
    <div className="min-h-[100vh] bg-mine-shaft-950 font-['Poppins']">
      <DreamJob />
      <Companies/>
      <JobCategoty/>
      <Working/>
      <Testimonials/>
      <Subcribe/>
    </div>
    
    
  )
}

export default HomePage