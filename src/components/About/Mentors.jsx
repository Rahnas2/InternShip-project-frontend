import { mentors } from "../../utils/mentorsList"

const Mentors = () => {
  return (
    <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">Our Expert Mentors</h2>
            <p className="text-xl text-gray-600">
              Learn from industry professionals with years of experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mentors.map((mentor, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all hover:-translate-y-1 group">
                <div className="text-center mb-4">
                  <img 
                    src={mentor.image} 
                    alt={mentor.name}
                    className="w-16 h-16 rounded-full object-cover mx-auto mb-3 group-hover:scale-105 transition-transform"
                  />
                  <h3 className="font-bold text-gray-900">{mentor.name}</h3>
                  <p className="text-blue-600 font-semibold text-sm">{mentor.expertise}</p>
                </div>
                <p className="text-gray-600 text-sm italic text-center">"{mentor.message}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default Mentors