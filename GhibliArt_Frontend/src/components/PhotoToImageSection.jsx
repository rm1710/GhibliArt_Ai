"use client"

import Spinner from "./Spinner.jsx"
import UploadIcon from "./UploadIcon.jsx"
import ErrorMessage from "./ErrorMessage.jsx"
import { useRef, useState } from "react"
import { Download, PlusCircle, Upload, Sparkles, ImageIcon } from "lucide-react"

const PhotoToImageSection = () => {
  const [uploadedImage, setUploadedImage] = useState(null)
  const [uploadedFile, setUploadedFile] = useState(null)
  const [generatedImage, setGeneratedImage] = useState(null)
  const [prompt, setPrompt] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const fileInputRef = useRef(null)

  const isCreateDisabled = isLoading || !uploadedFile

  const onBrowseClick = () => fileInputRef.current.click()

  const handleFileChange = (file) => {
    if (file && file.type.startsWith("image/")) {
      setUploadedFile(file)
      setUploadedImage(URL.createObjectURL(file))
      setGeneratedImage(null)
      setError(null)
    } else {
      setError("Please upload a valid image file.")
      setUploadedImage(null)
      setUploadedFile(null)
    }
  }

  const handleGenerate = async () => {
    if (!uploadedFile) {
      setError("Please upload an image first!")
      return
    }

    setIsLoading(true)
    setError(null)

    const formData = new FormData()
    formData.append("image", uploadedFile)
    formData.append("prompt", prompt)

    try {
      const API_URL = "http://localhost:8080/api/v1/generate"
      const response = await fetch(API_URL, {
        method: "POST",
        body: formData,
      })

      if (!response.ok) {
        const errorText = await response.text()
        throw new Error(`Network response was not ok. Status: ${response.status}. Message: ${errorText}`)
      }

      const resultBlob = await response.blob()
      setGeneratedImage(URL.createObjectURL(resultBlob))
    } catch (error) {
      console.error("Error generating image:", error)
      setError("Failed to generate image. Please ensure the backend is running and check the console.")
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
    setUploadedFile(null)
    setUploadedImage(null)
    setGeneratedImage(null)
    setPrompt("")
    setError(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {error && <ErrorMessage message={error} onClose={() => setError(null)} />}

      {/* Upload Section */}
      <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-emerald-100/50 flex flex-col relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-emerald-200/20 to-transparent rounded-full blur-2xl"></div>

        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-gradient-to-br from-emerald-500 to-teal-600 p-2 rounded-xl">
              <Upload className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Photo to Ghibli Art</h2>
          </div>

          <div className="flex-grow border-2 border-dashed border-emerald-300 rounded-2xl flex flex-col justify-center items-center text-center p-8 transition-all duration-300 hover:border-emerald-400 hover:bg-emerald-50/30 group">
            {uploadedImage ? (
              <div className="relative group">
                <img
                  src={uploadedImage || "/placeholder.svg"}
                  alt="Uploaded preview"
                  className="max-h-80 w-auto rounded-xl object-contain shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-emerald-100 to-teal-100 p-6 rounded-2xl">
                  <UploadIcon />
                </div>
                <div>
                  <p className="text-gray-700 font-medium text-lg mb-2">Drag and drop your magical photo here</p>
                  <p className="text-gray-500 text-sm mb-4">or</p>
                  <button
                    onClick={onBrowseClick}
                    className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold py-3 px-6 rounded-xl hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Browse Files
                  </button>
                </div>
                <input
                  ref={fileInputRef}
                  onChange={(e) => handleFileChange(e.target.files[0])}
                  type="file"
                  className="hidden"
                  accept="image/*"
                />
              </div>
            )}
          </div>

          {!generatedImage && (
            <>
              <div className="mt-8 space-y-6">
                <div>
                  <label
                    htmlFor="prompt-photo"
                    className="text-lg font-semibold mb-3 block text-gray-800 flex items-center gap-2"
                  >
                    <Sparkles className="w-5 h-5 text-emerald-600" />
                    Magical Enhancement Details
                  </label>
                  <textarea
                    id="prompt-photo"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    className="w-full p-4 border-2 border-emerald-200 rounded-xl focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100 transition-all duration-300 resize-none"
                    rows="3"
                    placeholder="Describe the magical transformation you envision... (e.g., 'Add floating spirits, mystical lighting, enchanted forest atmosphere')"
                  />
                </div>
              </div>
              <button
                onClick={handleGenerate}
                disabled={isCreateDisabled}
                className="mt-8 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold py-4 px-8 rounded-xl hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed w-full transform hover:scale-105 shadow-lg disabled:transform-none disabled:shadow-none flex items-center justify-center gap-3"
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                    Weaving Magic...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-5 h-5" />
                    Transform to Ghibli Art
                  </>
                )}
              </button>
            </>
          )}

          {generatedImage && (
            <div className="mt-8 flex gap-4">
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

      {/* Result Section */}
      <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-emerald-100/50 flex flex-col justify-center items-center relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-teal-200/20 to-transparent rounded-full blur-2xl"></div>

        <div className="w-full h-full flex justify-center items-center border-2 border-emerald-200 rounded-2xl bg-gradient-to-br from-emerald-50/50 to-teal-50/50 min-h-[500px] relative overflow-hidden">
          {isLoading ? (
            <div className="text-center space-y-4">
              <Spinner />
              <div className="space-y-2">
                <p className="text-emerald-700 font-semibold text-lg">Creating your masterpiece...</p>
                <p className="text-emerald-600 text-sm">Infusing Ghibli magic into every pixel</p>
              </div>
            </div>
          ) : generatedImage ? (
            <div className="relative group w-full h-full">
              <img
                src={generatedImage || "/placeholder.svg"}
                alt="Final Ghibli art"
                className="max-h-full w-auto rounded-xl object-contain shadow-2xl mx-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
            </div>
          ) : (
            <div className="text-center space-y-6 max-w-sm">
              <div className="bg-gradient-to-br from-emerald-200 to-teal-200 p-8 rounded-2xl">
                <ImageIcon className="w-16 h-16 mx-auto text-emerald-600" />
              </div>
              <div>
                <p className="text-gray-700 font-semibold text-lg mb-2">Your Ghibli masterpiece will appear here</p>
                <p className="text-gray-500 text-sm">Upload an image and let the magic begin!</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default PhotoToImageSection
