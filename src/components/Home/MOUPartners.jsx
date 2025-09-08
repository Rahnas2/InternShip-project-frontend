
import { partners } from "../../utils/mouPartners"

const MOUPartners = () => {
  return (
    <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our MoU Partners
            </h2>
            <p className="text-xl text-gray-600">
              Collaborating with leading educational institutions to provide the best opportunities
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {partners.map((partner, index) => (
              <div key={partner.id} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow text-center group">
                <img 
                  src={partner.logo} 
                  alt={partner.name}
                  className="w-20 h-20 rounded-full mx-auto mb-4 object-cover group-hover:scale-105 transition-transform"
                />
                <h3 className="font-semibold text-gray-900 text-sm">{partner.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default MOUPartners