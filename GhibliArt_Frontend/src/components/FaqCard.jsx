"use client"

import { useState } from "react"
import { ChevronDown, Sparkles } from "lucide-react"

const FaqCard = ({ question, children }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 border border-emerald-100/50 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-8 text-left flex items-center justify-between hover:bg-emerald-50/50 transition-colors duration-300"
      >
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full animate-pulse"></div>
          <h3 className="text-xl font-semibold text-gray-800 group-hover:text-emerald-700 transition-colors duration-300">
            {question}
          </h3>
        </div>
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <ChevronDown
            className={`w-6 h-6 text-gray-500 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          />
        </div>
      </button>

      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-8 pb-8">
          <div className="w-full h-px bg-gradient-to-r from-emerald-200 to-teal-200 mb-4 animate-fade-in"></div>
          <p className="text-gray-600 leading-relaxed animate-slide-up">{children}</p>
        </div>
      </div>
    </div>
  )
}

export default FaqCard
