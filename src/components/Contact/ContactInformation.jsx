import { contactInfo } from "../../utils/contactInfo"

const ContactInformation = () => {
    return (
        <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Information</h2>

            <div className="space-y-6">
                {contactInfo.map((info, index) => {
                    const Icon = info.icon
                    return(
                    <div key={index} className="flex items-start space-x-4 p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                        <div className="flex-shrink-0">
                            <Icon className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-900 mb-1">{info.title}</h3>
                            <p className="text-gray-800 font-medium">{info.details}</p>
                            <p className="text-gray-600 text-sm">{info.subtitle}</p>
                        </div>
                    </div>
                )
                })}
            </div>
        </div>
    )
}

export default ContactInformation