"use client"

import { ImageIcon, Palette, Users, ArrowRight, Sparkles } from "lucide-react"
import { assets } from "../assets/assets.js"

const GhibliSteps = () => {
  return (
    <div className="container mx-auto px-8 pb-20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-br from-emerald-200/20 to-teal-200/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-gradient-to-tr from-cyan-200/20 to-emerald-200/20 rounded-full blur-2xl animate-pulse delay-1000"></div>

      <div className="rounded-3xl flex flex-col lg:flex-row items-center lg:items-start gap-12 bg-white/60 backdrop-blur-sm p-8 lg:p-12 shadow-2xl border border-emerald-100/50">
        <div className="lg:w-1/2 order-2 lg:order-1 space-y-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full animate-pulse"></div>
              <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-emerald-700 to-teal-700 bg-clip-text text-transparent">
                Photo to Ghibli Art
              </h2>
              <Sparkles className="w-6 h-6 text-emerald-400 animate-spin" />
            </div>
            <p className="text-gray-700 leading-relaxed text-lg">
              Transform any photo into beautiful Studio Ghibli-style artwork with our Ghibli AI. Simply upload your
              image and describe elements you want to enhance - mood, scene setting, character details - and our
              advanced Ghibli image generator will craft a complete transformation that captures the iconic Ghibli art
              aesthetic that Studio Ghibli fans love.
            </p>
          </div>

          <ul className="space-y-6">
            <li className="group flex items-start hover:bg-emerald-50/50 p-4 rounded-2xl transition-all duration-300 transform hover:scale-105">
              <div className="p-3 rounded-2xl mr-4 bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                <ImageIcon size={24} />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-800 text-lg sm:text-xl mb-2 group-hover:text-emerald-700 transition-colors duration-300">
                  Simple Ghibli AI Prompting
                </h3>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                  Use everyday language to guide the Studio Ghibli transformation with our Ghibli generator. No artistic
                  background required. Our Ghibli AI translates your vision into perfect Ghibli art imagery with
                  authentic Studio Ghibli qualities.
                </p>
              </div>
              <ArrowRight className="w-5 h-5 text-emerald-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
            </li>

            <li className="group flex items-start hover:bg-emerald-50/50 p-4 rounded-2xl transition-all duration-300 transform hover:scale-105">
              <div className="p-3 rounded-2xl mr-4 bg-gradient-to-br from-teal-500 to-cyan-600 text-white shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                <Palette size={24} />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-800 text-lg sm:text-xl mb-2 group-hover:text-emerald-700 transition-colors duration-300">
                  Ghibli Art Style Control
                </h3>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                  Select specific Studio Ghibli film influences like 'Spirited Away,' 'Howl's Moving Castle,' or 'My
                  Neighbor Totoro' with our Ghibli image generator to customize your Ghibli artwork's aesthetic to your
                  exact preferences.
                </p>
              </div>
              <ArrowRight className="w-5 h-5 text-teal-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
            </li>

            <li className="group flex items-start hover:bg-emerald-50/50 p-4 rounded-2xl transition-all duration-300 transform hover:scale-105">
              <div className="p-3 rounded-2xl mr-4 bg-gradient-to-br from-cyan-500 to-emerald-600 text-white shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                <Users size={24} />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-800 text-lg sm:text-xl mb-2 group-hover:text-emerald-700 transition-colors duration-300">
                  Ghibli Character Integration
                </h3>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                  Our Ghibli AI can seamlessly integrate your pets or family members into the Studio Ghibli universe,
                  maintaining their recognizable features while giving them distinctive Ghibli art charm in every Ghibli
                  image we generate.
                </p>
              </div>
              <ArrowRight className="w-5 h-5 text-cyan-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
            </li>
          </ul>
        </div>

        <div className="lg:w-1/2 order-1 lg:order-2 relative group">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-200/20 to-teal-200/20 rounded-3xl blur-2xl animate-pulse"></div>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl transform group-hover:scale-105 transition-all duration-700">
            <img
              src={assets.step1 || "/placeholder.svg"}
              alt="Photo to Ghibli Art Transformation"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            {/* Floating elements on image */}
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 animate-bounce">
              <Sparkles className="w-4 h-4 text-emerald-600" />
            </div>
            <div className="absolute bottom-4 left-4 bg-emerald-500/90 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-500">
              Ghibli Magic ✨
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GhibliSteps
