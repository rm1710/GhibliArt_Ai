"use client"

import GalleryCard from "./GalleryCard.jsx"
import { assets } from "../assets/assets.js"
import GalleryStories from "./GalleryStories.jsx"
import { Images, Sparkles, Star } from "lucide-react"

const GallerySection = () => {
  const topGalleryItems = [
    {
      imageSrc: assets.grid_1,
      title: "Whimsical Forest Dweller",
    },
    {
      imageSrc: assets.grid_2,
      title: "Sky Pirate's Retreat",
    },
    {
      imageSrc: assets.grid_3,
      title: "Spirited River Journey",
    },
    {
      imageSrc: assets.grid_4,
      title: "Enchanted Garden Spirit",
    },
  ]

  return (
    <div className="container mx-auto py-20 px-8 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-1/4 w-40 h-40 bg-gradient-to-br from-emerald-200/20 to-teal-200/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-gradient-to-tr from-cyan-200/20 to-emerald-200/20 rounded-full blur-2xl animate-pulse delay-1000"></div>

      {/* Floating decorative elements */}
      <div className="absolute top-20 right-20 animate-bounce delay-500">
        <Star className="w-6 h-6 text-emerald-400/60" />
      </div>
      <div className="absolute bottom-32 left-16 animate-bounce delay-1000">
        <Sparkles className="w-5 h-5 text-teal-400/60" />
      </div>

      <div className="text-center mb-16 relative z-10">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="bg-gradient-to-br from-emerald-500 to-teal-600 p-3 rounded-2xl shadow-lg animate-bounce">
            <Images className="w-8 h-8 text-white" />
          </div>
          <Sparkles className="w-6 h-6 text-emerald-400 animate-spin" />
        </div>

        <h2 className="text-5xl font-bold bg-gradient-to-r from-emerald-700 to-teal-700 bg-clip-text text-transparent mb-6 animate-fade-in">
          Magical Ghibli AI Transformations Gallery
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-slide-up delay-300">
          Discover breathtaking transformations created by our community of artists
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16">
        {topGalleryItems.map((item, index) => (
          <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 200}ms` }}>
            <GalleryCard imageSrc={item.imageSrc} title={item.title} />
          </div>
        ))}
      </div>

      <div className="space-y-8 sm:space-y-10 animate-fade-in delay-1000">
        <GalleryStories />
      </div>
    </div>
  )
}

export default GallerySection
