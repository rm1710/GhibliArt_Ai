"use client"

import { useNavigate } from "react-router-dom"
import { Sparkles, Wand2, Stars } from "lucide-react"

const HeroSection = () => {
  const navigate = useNavigate()
  return (
    <div className="container mx-auto flex flex-col items-center justify-center text-center py-20 lg:py-32 relative">
      {/* Floating elements */}
      <div className="absolute top-20 left-10 animate-bounce delay-1000">
        <Sparkles className="w-8 h-8 text-emerald-400/60" />
      </div>
      <div className="absolute top-32 right-20 animate-bounce delay-500">
        <Stars className="w-6 h-6 text-teal-400/60" />
      </div>
      <div className="absolute bottom-20 left-20 animate-bounce delay-700">
        <Wand2 className="w-7 h-7 text-cyan-400/60" />
      </div>

      <div className="mb-8 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6 leading-tight relative z-10">
          Transform Your Photos into{" "}
          <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent animate-pulse">
            Magical Ghibli Art
          </span>
        </h1>
      </div>

      <p className="text-xl text-gray-600 max-w-3xl mb-12 leading-relaxed">
        Experience the enchanting world of Studio Ghibli with our AI-powered transformation tool. Turn ordinary photos
        into extraordinary masterpieces with the signature Ghibli aesthetic.
      </p>

      <div className="flex flex-col sm:flex-row gap-6 items-center">
        <button
          onClick={() => navigate("/create")}
          className="group bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold py-4 px-10 rounded-full hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-emerald-500/25 relative overflow-hidden"
        >
          <span className="relative z-10 flex items-center gap-3">
            <Sparkles className="w-5 h-5 group-hover:animate-spin" />
            Start Creating Magic
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>

        <div className="flex items-center gap-2 text-gray-600">
          <div className="flex -space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full border-2 border-white"></div>
            <div className="w-8 h-8 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-full border-2 border-white"></div>
            <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-emerald-500 rounded-full border-2 border-white"></div>
          </div>
          <span className="text-sm font-medium">Join 10,000+ creators</span>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
