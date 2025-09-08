
import Hero from "../components/Home/Hero"
import MentorGuidenceCenter from "../components/Home/MentorGuidenceCenter"
import MOUPartners from "../components/Home/MOUPartners"

const Home = () => {
  return (
    <div className="">

        {/* Nero section */}
        <Hero />

        {/* Mentor Guidence Center */}
        <MentorGuidenceCenter />

        {/* Mou Partners */}
        <MOUPartners />

    </div>
  )
}

export default Home