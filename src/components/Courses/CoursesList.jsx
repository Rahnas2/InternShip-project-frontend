import { ChevronRight, Clock, Users } from "lucide-react"
import { coursesDetails as courses } from "../../utils/coursesList"

const CoursesList = () => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                        Our Course Offerings
                    </h2>
                    <p className="text-xl text-gray-600">
                        Choose from our carefully crafted programs designed for career success
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                    {courses.map((course, index) => {
                        const Icon = course.icon
                        return (
                            
                            <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8">
                                <div className="flex items-center mb-6">
                                    <div className="mr-4">
                                        <Icon className={course.className}/>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900">{course.name}</h3>
                                        <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                                            <span className="flex items-center">
                                                <Clock className="w-4 h-4 mr-1" />
                                                {course.duration}
                                            </span>
                                            <span className="flex items-center">
                                                <Users className="w-4 h-4 mr-1" />
                                                {course.students}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <p className="text-gray-700 mb-6 leading-relaxed">
                                    {course.description}
                                </p>

                                <div className="mb-6">
                                    <h4 className="font-semibold text-gray-900 mb-3">What You'll Learn:</h4>
                                    <ul className="space-y-2">
                                        {course.features.map((feature, featureIndex) => (
                                            <li key={featureIndex} className="flex items-center text-gray-600">
                                                <ChevronRight className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                                        {course.level}
                                    </span>
                                    <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                                        Enroll Now
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

export default CoursesList