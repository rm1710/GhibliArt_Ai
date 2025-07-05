"use client"

import HeroSection from "../components/HeroSection.jsx"
import GhibliSteps from "../components/GhibliSteps.jsx"
import CallToAction from "../components/CallToAction.jsx"
import { useNavigate } from "react-router-dom"
import FeaturesSection from "../components/FeaturesSection.jsx"
import GallerySection from "../components/GallerySection.jsx"
import FaqSection from "../components/FaqSection.jsx"

const LandingPage = () => {
  const navigate = useNavigate()

  return (
    <div className="relative overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-emerald-200/10 to-teal-200/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-tr from-cyan-200/10 to-emerald-200/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-teal-200/5 to-emerald-200/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10">
        <div className="animate-fade-in">
          <HeroSection />
        </div>

        <div className="animate-slide-up delay-300">
          <FeaturesSection />
        </div>

        <div className="animate-slide-up delay-500">
          <GallerySection />
        </div>

        <div className="animate-slide-up delay-700">
          <GhibliSteps />
        </div>

        <div className="animate-slide-up delay-900">
          <FaqSection />
        </div>

        <div className="animate-fade-in delay-1100">
          <CallToAction onNavigate={navigate} />
        </div>
      </div>
    </div>
  )
}

export default LandingPage
