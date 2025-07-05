"use client"

import { Sparkles, ArrowRight } from "lucide-react"

const CallToAction = ({ onNavigate }) => (
  <div className="py-20 relative overflow-hidden">
    {/* Animated background elements */}
    <div className="absolute inset-0 bg-gradient-to-r from-emerald-100/30 to-teal-100/30"></div>
    <div className="absolute top-10 left-10 w-20 h-20 bg-emerald-300/20 rounded-full animate-bounce delay-300"></div>
    <div className="absolute bottom-10 right-10 w-16 h-16 bg-teal-300/20 rounded-full animate-bounce delay-700"></div>
    <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-cyan-300/20 rounded-full animate-pulse delay-1000"></div>

    <div className="container mx-auto px-8 relative z-10">
      <div className="bg-gradient-to-br from-white/90 to-emerald-50/90 backdrop-blur-xl rounded-3xl p-12 text-center flex flex-col items-center shadow-2xl border border-emerald-200/50 transform hover:scale-105 transition-all duration-700 group">
        {/* Floating sparkles */}
        <div className="absolute top-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <Sparkles className="w-6 h-6 text-emerald-400 animate-spin" />
        </div>
        <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
          <Sparkles className="w-5 h-5 text-teal-400 animate-pulse" />
        </div>
        <div className="absolute bottom-6 left-8 opacity-0 group-hover:opacity-100 transition-opacity duration-900">
          <Sparkles className="w-4 h-4 text-cyan-400 animate-bounce" />
        </div>

        <div className="mb-6 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-teal-400/20 rounded-full blur-2xl animate-pulse"></div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-700 to-teal-700 bg-clip-text text-transparent mb-4 relative z-10 animate-fade-in">
            Create Your Magical Ghibli Artwork Today
          </h2>
        </div>

        <p className="text-gray-600 max-w-3xl mb-10 text-lg leading-relaxed animate-slide-up delay-300">
          Join thousands of artists and Studio Ghibli fans who are creating stunning Miyazaki-inspired artwork with our
          Ghibli AI generator. Transform your imagination into breathtaking art.
        </p>

        <button
          onClick={() => onNavigate("/create")}
          className="group/btn bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold py-4 px-10 rounded-2xl hover:from-emerald-700 hover:to-teal-700 transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:shadow-emerald-500/25 relative overflow-hidden animate-slide-up delay-500"
        >
          <span className="relative z-10 flex items-center gap-3">
            <Sparkles className="w-5 h-5 group-hover/btn:animate-spin transition-transform duration-300" />
            Try Ghibli AI For Free
            <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 animate-shimmer"></div>
        </button>

        {/* Floating user avatars */}
        <div className="mt-8 flex items-center gap-4 animate-fade-in delay-700">
          <div className="flex -space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full border-3 border-white shadow-lg animate-bounce delay-100"></div>
            <div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-full border-3 border-white shadow-lg animate-bounce delay-300"></div>
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-emerald-500 rounded-full border-3 border-white shadow-lg animate-bounce delay-500"></div>
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full border-3 border-white shadow-lg animate-bounce delay-700 flex items-center justify-center text-white font-bold text-sm">
              +
            </div>
          </div>
          <span className="text-sm font-medium text-gray-600">Join 10,000+ magical creators</span>
        </div>
      </div>
    </div>
  </div>
)

export default CallToAction
