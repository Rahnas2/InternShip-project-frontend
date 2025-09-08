import { Eye } from 'lucide-react'

const Vision = () => {
    return (
        <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="flex items-center mb-6">
                <Eye className="w-8 h-8 text-blue-600 mr-4" />
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
                To become the leading platform that empowers every student with industry-relevant skills and mentorship, creating a seamless transition from academic learning to professional success. We envision a future where no student graduates without practical experience and industry connections.
            </p>
        </div>
    )
}

export default Vision