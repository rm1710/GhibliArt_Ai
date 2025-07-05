"use client"

import { assets } from "../assets/assets.js"
import { ArrowRight, Sparkles } from "lucide-react"

const GalleryStories = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
      <div className="group bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-6 sm:p-8 border border-emerald-100/50 hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-500 transform hover:-translate-y-2">
        {/* Header with animation */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-3 h-3 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full animate-pulse"></div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 group-hover:text-emerald-700 transition-colors duration-300">
            Mountain Lake Ghibli Transformation
          </h2>
          <Sparkles className="w-5 h-5 text-emerald-400 opacity-0 group-hover:opacity-100 group-hover:animate-spin transition-all duration-300" />
        </div>

        {/* Image grid with stagger animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="relative rounded-xl overflow-hidden shadow-lg group/img">
            <img
              src={assets.grid_1 || "/placeholder.svg"}
              className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover transition-transform duration-700 group-hover/img:scale-110"
              alt="Original landscape"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-2 left-2 bg-white/80 backdrop-blur-sm px-2 py-1 rounded-lg text-xs font-medium opacity-0 group-hover/img:opacity-100 transition-opacity duration-300">
              Original
            </div>
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-lg group/img">
            <img
              src={assets.grid_2 || "/placeholder.svg"}
              className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover transition-transform duration-700 group-hover/img:scale-110"
              alt="Ghibli transformation"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-2 left-2 bg-emerald-500/80 backdrop-blur-sm px-2 py-1 rounded-lg text-xs font-medium text-white opacity-0 group-hover/img:opacity-100 transition-opacity duration-300">
              Ghibli Magic
            </div>
          </div>
        </div>

        <p className="text-gray-700 leading-relaxed text-sm sm:text-base mb-4 group-hover:text-gray-800 transition-colors duration-300">
          See how our Ghibli AI generator transforms ordinary landscapes into breathtaking Studio Ghibli worlds with
          authentic Ghibli art style and magical details in every Ghibli image.
        </p>

        <button className="flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700 transition-colors duration-300 group/btn">
          <span>Learn More</span>
          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
        </button>
      </div>

      <div className="group bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-6 sm:p-8 border border-emerald-100/50 hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-500 transform hover:-translate-y-2">
        {/* Header with animation */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-3 h-3 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full animate-pulse delay-500"></div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 group-hover:text-emerald-700 transition-colors duration-300">
            Urban Scene Ghibli AI Transformation
          </h2>
          <Sparkles className="w-5 h-5 text-teal-400 opacity-0 group-hover:opacity-100 group-hover:animate-spin transition-all duration-300" />
        </div>

        {/* Image grid with stagger animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="relative rounded-xl overflow-hidden shadow-lg group/img">
            <img
              src={assets.grid_3 || "/placeholder.svg"}
              className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover transition-transform duration-700 group-hover/img:scale-110"
              alt="Original urban scene"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-2 left-2 bg-white/80 backdrop-blur-sm px-2 py-1 rounded-lg text-xs font-medium opacity-0 group-hover/img:opacity-100 transition-opacity duration-300">
              Original
            </div>
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-lg group/img">
            <img
              src={assets.grid_4 || "/placeholder.svg"}
              className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover transition-transform duration-700 group-hover/img:scale-110"
              alt="Ghibli urban transformation"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-2 left-2 bg-teal-500/80 backdrop-blur-sm px-2 py-1 rounded-lg text-xs font-medium text-white opacity-0 group-hover/img:opacity-100 transition-opacity duration-300">
              Ghibli Magic
            </div>
          </div>
        </div>

        <p className="text-gray-700 leading-relaxed text-sm sm:text-base mb-4 group-hover:text-gray-800 transition-colors duration-300">
          Watch city streets transform into charming Studio Ghibli towns with magical details using our Ghibli
          generator. Every building and element captures the iconic Ghibli art aesthetic in these Ghibli images.
        </p>

        <button className="flex items-center gap-2 text-teal-600 font-semibold hover:text-teal-700 transition-colors duration-300 group/btn">
          <span>Learn More</span>
          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
        </button>
      </div>
    </div>
  )
}

export default GalleryStories
