import CustomHero from "../components/common/CustomHero"
import ContactForm from "../components/Contact/ContactForm"
import ContactInformation from "../components/Contact/ContactInformation"

const ContactUs = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <CustomHero title={"Get In Touch"}
        para={"Ready to start your learning journey? We're here to help you choose the right course and answer any questions you might have."} />


      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <ContactForm />
            {/* Contact Informations */}
            <ContactInformation />
          </div>
        </div>
      </section>

    </div>
  )
}

export default ContactUs