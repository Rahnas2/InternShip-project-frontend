import { Target } from 'lucide-react'

const Mission = () => {
    return (
        <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="flex items-center mb-6">
                <Target className="w-8 h-8 text-blue-600 mr-4" />
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
                To provide personalized mentorship, practical training, and industry exposure to final-year students, helping them develop the skills and confidence needed to excel in their chosen careers. We are committed to making quality mentorship accessible and affordable for all students.
            </p>
        </div>
    )
}

export default Mission