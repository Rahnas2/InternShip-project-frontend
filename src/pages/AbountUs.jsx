import OurStory from '../components/About/OurStory'
import Vision from '../components/About/Vision'
import Mission from '../components/About/Mission'
import Certificates from '../components/About/Certificates'
import LeaderShipTeam from '../components/About/LeaderShipTeam'
import Mentors from '../components/About/Mentors'
import CustomHero from '../components/common/CustomHero'

const AbountUs = () => {
  return (
    <div className="min-h-screen">

      {/* Hero Section */}
      <CustomHero title={"Building Careers, Empowering Future"} 
      para={"We are dedicated to transforming the way students transition from academia to industry through personalized mentorship and practical skill development."}/>

      {/* Our Story */}
      <OurStory />

      {/* Vision */}
      <Vision />

      {/* Mission */}
      <Mission />

      {/* Certificates */}
      <Certificates />

      {/* LeaderShip Team */}
      <LeaderShipTeam />

      {/* Mentors */}
      <Mentors />
      
    </div>
  )
}

export default AbountUs