"use client"

import FaqCard from "./FaqCard.jsx"
import { HelpCircle, Sparkles } from "lucide-react"

const FaqSection = () => (
  <div className="container mx-auto py-20 px-8 relative">
    {/* Animated background elements */}
    <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-emerald-200/20 to-teal-200/20 rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute bottom-10 left-10 w-24 h-24 bg-gradient-to-tr from-cyan-200/20 to-emerald-200/20 rounded-full blur-2xl animate-pulse delay-1000"></div>

    <div className="text-center mb-16 relative z-10">
      <div className="flex items-center justify-center gap-3 mb-6">
        <div className="bg-gradient-to-br from-emerald-500 to-teal-600 p-3 rounded-2xl shadow-lg animate-bounce">
          <HelpCircle className="w-8 h-8 text-white" />
        </div>
        <Sparkles className="w-6 h-6 text-emerald-400 animate-spin" />
      </div>

      <h2 className="text-5xl font-bold bg-gradient-to-r from-emerald-700 to-teal-700 bg-clip-text text-transparent mb-6 animate-fade-in">
        Frequently Asked Questions about Ghibli AI
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-slide-up delay-300">
        Everything you need to know about creating magical Ghibli artwork
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
      <div className="space-y-6 animate-slide-left">
        <FaqCard question="What is the Studio Ghibli AI Generator?">
          The Ghibli AI Generator is an advanced platform powered by AI that creates original artwork in the distinctive
          style of Studio Ghibli films. Our technology transforms photos or text descriptions into beautiful Ghibli art
          images with authentic aesthetic elements.
        </FaqCard>
        <FaqCard question="Can I select specific Ghibli film styles for my Ghibli art?">
          You can choose influences from various Studio Ghibli films like 'Spirited Away,' 'Princess Mononoke,' or 'My
          Neighbor Totoro' and customize the style, mood, and visual elements to reflect your creative vision in the
          generated Ghibli images.
        </FaqCard>
      </div>

      <div className="space-y-6 animate-slide-right">
        <FaqCard question="What are the key features of the Ghibli AI?">
          Key features include photo-to-Ghibli art transformation, text-to-Ghibli image generation, Ghibli character
          creation, scene extension, Ghibli background generation, and animation preparation - all in authentic Studio
          Ghibli style using our specialized Ghibli generator.
        </FaqCard>
        <FaqCard question="Is the Studio Ghibli AI Generator available on mobile?">
          Yes, our Ghibli AI platform is accessible on both desktop and mobile devices via web browsers, allowing you to
          create Ghibli-style artwork and Ghibli images wherever you are.
        </FaqCard>
      </div>
    </div>
  </div>
)

export default FaqSection
