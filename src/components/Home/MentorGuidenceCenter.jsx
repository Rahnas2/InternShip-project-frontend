import { ChevronRight } from 'lucide-react'
import { mentorServices } from '../../utils/mentorServicesList'
const MentorGuidenceCenter = () => {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
                        Mentor Guidance Centre
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Our comprehensive mentorship program provides personalized support for your academic and professional development
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {mentorServices.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all hover:-translate-y-1 group">
                                <div className="mb-6 group-hover:scale-110 transition-transform">
                                    <Icon className="w-8 h-8 text-blue-600" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{service.description}</p>
                                <div className="mt-6">
                                    <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors flex items-center">
                                        Learn More <ChevronRight className="w-4 h-4 ml-1" />
                                    </button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default MentorGuidenceCenter