import { Award } from "lucide-react"
import { certificates } from "../../utils/certificatesList"

const Certificates = () => {
  return (
    <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">Certificates & Recognition</h2>
            <p className="text-xl text-gray-600">
              Earn valuable certifications that are recognized by leading companies
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {certificates.map((cert, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
                <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">{cert}</h3>
                <p className="text-gray-600">
                  Validate your skills with certificates that employers trust and value in the hiring process.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default Certificates