"use client"

import { useState } from "react"
import { Eye, Heart, Download } from "lucide-react"

const GalleryCard = ({ imageSrc, title }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [isLiked, setIsLiked] = useState(false)

  return (
    <div
      className="group relative rounded-2xl shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/20 bg-white"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image container */}
      <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-72 overflow-hidden">
        <img
          src={imageSrc || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          onError={(e) => {
            e.target.onerror = null
            e.target.src = `https://placehold.co/400x300/e2e8f0/64748b?text=Image+Error`
          }}
        />

        {/* Gradient overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        ></div>

        {/* Floating action buttons */}
        <div
          className={`absolute top-4 right-4 flex flex-col gap-2 transition-all duration-300 ${
            isHovered ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
          }`}
        >
          <button
            onClick={() => setIsLiked(!isLiked)}
            className={`p-2 rounded-full backdrop-blur-sm transition-all duration-300 ${
              isLiked ? "bg-red-500 text-white shadow-lg shadow-red-500/25" : "bg-white/80 text-gray-700 hover:bg-white"
            }`}
          >
            <Heart className={`w-4 h-4 ${isLiked ? "fill-current" : ""}`} />
          </button>
          <button className="p-2 rounded-full bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-white transition-all duration-300 hover:shadow-lg">
            <Download className="w-4 h-4" />
          </button>
        </div>

        {/* View button */}
        <div
          className={`absolute bottom-4 left-4 right-4 transition-all duration-300 ${
            isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          }`}
        >
          <button className="w-full bg-white/90 backdrop-blur-sm text-gray-800 font-semibold py-2 px-4 rounded-xl hover:bg-white transition-all duration-300 flex items-center justify-center gap-2 shadow-lg">
            <Eye className="w-4 h-4" />
            View Details
          </button>
        </div>
      </div>

      {/* Animated border */}
      <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-emerald-300/50 transition-all duration-300"></div>

      {/* Shimmer effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
    </div>
  )
}

export default GalleryCard
