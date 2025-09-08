import { Send } from 'lucide-react'
import useForm from '../../hooks/useForm'
import { courses } from '../../utils/coursesList'
import emailjs from "emailjs-com";
import { useState } from 'react';
import toast from 'react-hot-toast';

const initial = {
    name: '',
    email: '',
    mobile: '',
    institution: '',
    course: '',
    message: ''
}

const ContactForm = () => {
    const { data, handleChange, reset } = useForm(initial)
    const [isSendingMessage, setIsSendingMessage] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setIsSendingMessage(true)
            const response = await emailjs.send(
                "service_lxskhxa",   //Service ID
                "template_069u0xg",  //Template ID
                {
                    name: data.name,
                    email: data.email,
                    mobile: data.mobile,
                    institution: data.institution,
                    course: data.course,
                    message: data.message,
                },
                "B7ZelEDVZmgnfmLhH"    // from EmailJS
            )
            console.log('response ', response)

            reset()
            toast.success('successfully send message')

        } catch (error) {
            console.error('errro sending message ', error)
            toast.error('error sending message ')
        } finally {
            setIsSendingMessage(false)
        }

    };

    return (
        <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Send us a Message</h2>

            <form onSubmit={handleSubmit} className="space-y-6 text-gray-700">
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                            Full Name *
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={data.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border  border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                            placeholder="Enter your full name"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                            Email Address *
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={data.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                            placeholder="Enter your email"
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="mobile" className="block text-sm font-semibold text-gray-700 mb-2">
                        Mobile Number *
                    </label>
                    <input
                        type="tel"
                        id="mobile"
                        name="mobile"
                        value={data.mobile}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        placeholder="Enter your mobile number"
                    />
                </div>

                <div>
                    <label htmlFor="institution" className="block text-sm font-semibold text-gray-700 mb-2">
                        Institution/Current Study *
                    </label>
                    <input
                        type="text"
                        id="institution"
                        name="institution"
                        value={data.institution}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        placeholder="Enter your college/university name"
                    />
                </div>

                <div>
                    <label htmlFor="course" className="block text-sm font-semibold text-gray-700 mb-2">
                        Course Interest *
                    </label>
                    <select
                        id="course"
                        name="course"
                        value={data.course}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    >
                        <option value="">Select a course</option>
                        {courses.map((course, index) => (
                            <option key={index} value={course}>{course}</option>
                        ))}
                    </select>
                </div>

                <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={data.message}
                        onChange={handleChange}
                        rows={5}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                        placeholder="Tell us more about your goals and how we can help you..."
                    />
                </div>

                <button
                    disabled={isSendingMessage}
                    type="submit"
                    className={`w-full ${isSendingMessage ? 'bg-blue-200': 'bg-blue-600'}  text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center`}
                >
                    {isSendingMessage ? <>Sending...</> 
                        : <><Send className="w-5 h-5 mr-2" />
                            Send Message
                        </>
                    }
                </button>
            </form>
        </div>
    )
}

export default ContactForm