"use client"

import { useState } from "react"
import ErrorMessage from "./ErrorMessage.jsx"
import Spinner from "./Spinner.jsx"
import { Download, FileText, PlusCircle, Sparkles, Wand2 } from "lucide-react"
import GhibliStyleDropdown from "./GhibliStyleDropdown.jsx"

const TextToImageSection = () => {
  const [generatedImage, setGeneratedImage] = useState(null)
  const [prompt, setPrompt] = useState("")
  const [style, setStyle] = useState("general")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const isCreateDisabled = isLoading || !prompt.trim()

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      setError("Please enter a description for your artwork.")
      return
    }

    setIsLoading(true)
    setError(null)

    const payload = { prompt, style }

    try {
      const API_URL = "http://localhost:8080/api/v1/generate-from-text"
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })

      if (!response.ok) {
        const errorText = await response.text()
        throw new Error(`Network response was not ok. Status: ${response.status}. Message: ${errorText}`)
      }

      const resultBlob = await response.blob()
      setGeneratedImage(URL.createObjectURL(resultBlob))
    } catch (error) {
      console.error("Error generating image from text:", error)
      setError("Failed to generate image. Please ensure the backend is running and check the console")
    } finally {
      setIsLoading(false)
    }
  }

  const handleDownload = () => {
    const link = document.createElement("a")
    link.href = generatedImage
    link.download = `ghibli-art-${Date.now()}.png`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleCreateAnother = () => {
    setGeneratedImage(null)
    setPrompt("")
    setStyle("general")
    setError(null)
  }

  return (
    <div className="relative">
      {error && <ErrorMessage message={error} onClose={() => setError(null)} />}

      <div className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-2xl flex flex-col max-w-4xl mx-auto border border-emerald-100/50 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-emerald-200/20 to-transparent rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-teal-200/20 to-transparent rounded-full blur-xl animate-pulse delay-1000"></div>

        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-gradient-to-br from-emerald-500 to-teal-600 p-3 rounded-2xl shadow-lg animate-bounce">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-emerald-700 to-teal-700 bg-clip-text text-transparent">
              Text to Ghibli Art
            </h2>
            <Sparkles className="w-5 h-5 text-emerald-400 animate-spin" />
          </div>

          <div className="w-full h-80 flex justify-center items-center border-2 border-emerald-200 rounded-2xl bg-gradient-to-br from-emerald-50/50 to-teal-50/50 mb-8 relative overflow-hidden group">
            {/* Animated border */}
            <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-emerald-300/50 transition-all duration-300"></div>

            {isLoading ? (
              <div className="text-center space-y-4">
                <Spinner />
                <div className="space-y-2">
                  <p className="text-emerald-700 font-semibold text-lg animate-pulse">Weaving your magical story...</p>
                  <p className="text-emerald-600 text-sm">Creating Ghibli art from your imagination</p>
                </div>
              </div>
            ) : generatedImage ? (
              <div className="relative w-full h-full group/image">
                <img
                  src={generatedImage || "/placeholder.svg"}
                  alt="Generated Ghibli art"
                  className="h-full w-full rounded-xl object-contain p-2 transition-transform duration-300 group-hover/image:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/10 to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              </div>
            ) : (
              <div className="text-center text-gray-500 space-y-4">
                <div className="bg-gradient-to-br from-emerald-100 to-teal-100 p-8 rounded-2xl inline-block">
                  <FileText size={48} className="mx-auto text-emerald-500" />
                </div>
                <div>
                  <p className="text-lg font-medium text-gray-700 mb-2">
                    Generate Ghibli art from your text description
                  </p>
                  <p className="text-sm text-gray-500">Describe your magical vision and watch it come to life</p>
                </div>
              </div>
            )}
          </div>

          {!generatedImage && (
            <div className="space-y-6 animate-fade-in">
              <GhibliStyleDropdown value={style} onChange={(e) => setStyle(e.target.value)} />
              <div>
                <label
                  htmlFor="prompt-text"
                  className="text-lg font-semibold mb-3 block text-gray-800 flex items-center gap-2"
                >
                  <Wand2 className="w-5 h-5 text-emerald-600" />
                  Your Magical Description
                </label>
                <textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  id="prompt-text"
                  className="w-full p-4 border-2 border-emerald-200 rounded-xl focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100 transition-all duration-300 resize-none"
                  rows="4"
                  placeholder="Describe the Ghibli scene you want to create in detail... (e.g., 'A mystical forest with floating spirits, ancient trees with glowing leaves, and a small wooden bridge over a crystal-clear stream')"
                />
                <div className="mt-2 flex justify-between items-center">
                  <span className="text-sm text-gray-500">{prompt.length}/1000 characters</span>
                  <div className="flex items-center gap-2 text-emerald-600">
                    <Sparkles className="w-4 h-4" />
                    <span className="text-sm font-medium">Be descriptive for better results</span>
                  </div>
                </div>
              </div>
              <button
                onClick={handleGenerate}
                disabled={isCreateDisabled}
                className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold py-4 px-8 rounded-xl hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed transform hover:scale-105 shadow-lg disabled:transform-none disabled:shadow-none flex items-center justify-center gap-3"
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                    Generating Magic...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-5 h-5" />
                    Generate Ghibli Art
                  </>
                )}
              </button>
            </div>
          )}

          {generatedImage && (
            <div className="flex gap-4 animate-slide-up">
              <button
                onClick={handleDownload}
                className="flex-1 bg-white border-2 border-emerald-300 text-emerald-700 font-bold py-4 px-6 rounded-xl hover:bg-emerald-50 transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <Download size={20} /> Download Magic
              </button>
              <button
                onClick={handleCreateAnother}
                className="flex-1 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold py-4 px-6 rounded-xl hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <PlusCircle size={20} /> Create Another
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default TextToImageSection
