import { teamMembers } from "../../utils/teamMembersList"

const LeaderShipTeam = () => {
  return (
    <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">Leadership Team</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-6">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-20 h-20 rounded-full object-cover mr-6"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                    <p className="text-blue-600 font-semibold">{member.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed italic">"{member.message}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default LeaderShipTeam