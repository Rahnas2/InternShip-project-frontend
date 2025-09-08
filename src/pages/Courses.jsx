import CustomHero from "../components/common/CustomHero"
import Footer from "../components/common/Footer"
import CoursesList from "../components/Courses/CoursesList"


const Courses = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <CustomHero title={"Industry-Ready Courses"}
      para={"Transform your career with our comprehensive courses designed by industry experts. Gain practical skills and real-world experience that employers value."}/>

      {/* Available Courses List and Info */}
      <CoursesList />

    </div>
  )
}

export default Courses