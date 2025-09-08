
const CustomHero = ({title, para}) => {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                    {title}
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    {para}
                </p>
            </div>
        </section>
  )
}

export default CustomHero