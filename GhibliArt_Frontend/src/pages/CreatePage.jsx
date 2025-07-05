"use client"

import { useState } from "react"
import PhotoToImageSection from "../components/PhotoToImageSection.jsx"
import TextToImageSection from "../components/TextToImageSection.jsx"
import { Camera, FileText } from "lucide-react"

const CreatePage = () => {
  const [activeTab, setActiveTab] = useState("photo")

  return (
    <div className="container mx-auto py-16 px-8">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">
          Create Your{" "}
          <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
            Ghibli Masterpiece
          </span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Choose your creative path and let our AI transform your vision into enchanting Studio Ghibli artwork
        </p>
      </div>

      <div className="flex justify-center mb-12">
        <div className="bg-white/80 backdrop-blur-sm p-2 rounded-2xl shadow-lg border border-emerald-100/50">
          <button
            onClick={() => setActiveTab("photo")}
            className={`flex items-center gap-3 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 ${
              activeTab === "photo"
                ? "bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg transform scale-105"
                : "text-gray-600 hover:text-emerald-600 hover:bg-emerald-50"
            }`}
          >
            <Camera className="w-5 h-5" />
            Photo to Art
          </button>
          <button
            onClick={() => setActiveTab("text")}
            className={`flex items-center gap-3 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 ${
              activeTab === "text"
                ? "bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg transform scale-105"
                : "text-gray-600 hover:text-emerald-600 hover:bg-emerald-50"
            }`}
          >
            <FileText className="w-5 h-5" />
            Text to Art
          </button>
        </div>
      </div>

      <div className="animate-fade-in">
        {activeTab === "photo" && <PhotoToImageSection />}
        {activeTab === "text" && <TextToImageSection />}
      </div>
    </div>
  )
}

export default CreatePage
