const Spinner = () => (
  <div className="flex justify-center items-center h-full">
    <div className="relative">
      <div className="animate-spin rounded-full h-16 w-16 border-4 border-emerald-200"></div>
      <div className="animate-spin rounded-full h-16 w-16 border-4 border-emerald-500 border-t-transparent absolute top-0 left-0"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="w-6 h-6 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full animate-pulse"></div>
      </div>
    </div>
  </div>
)

export default Spinner
