const FeatureCard = ({ icon, title, children }) => (
  <div className="group bg-white/70 backdrop-blur-sm p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-emerald-100/50 relative overflow-hidden">
    {/* Gradient overlay on hover */}
    <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 to-teal-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

    <div className="relative z-10">
      <div className="bg-gradient-to-br from-emerald-500 to-teal-600 text-white w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-emerald-700 transition-colors duration-300">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
        {children}
      </p>
    </div>

    {/* Decorative elements */}
    <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-emerald-200/20 to-teal-200/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
  </div>
)

export default FeatureCard
