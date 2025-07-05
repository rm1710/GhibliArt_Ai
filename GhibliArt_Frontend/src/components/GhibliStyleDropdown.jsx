"use client"

import { Palette } from "lucide-react"

const GhibliStyleDropdown = ({ value, onChange }) => (
  <div className="group">
    <label htmlFor="ghibli-style" className="text-lg font-semibold mb-3 block text-gray-800 flex items-center gap-2">
      <Palette className="w-5 h-5 text-emerald-600" />
      Ghibli Style
    </label>
    <div className="relative">
      <select
        id="ghibli-style"
        value={value}
        onChange={onChange}
        className="w-full p-4 border-2 border-emerald-200 rounded-xl bg-white focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100 transition-all duration-300 appearance-none cursor-pointer hover:border-emerald-300 group-hover:shadow-lg"
      >
        <option value="analog-film">📸 Analog Film - Vintage Ghibli</option>
        <option value="anime">🎌 Anime - Classic Animation</option>
        <option value="cinematic">🎬 Cinematic - Movie Quality</option>
        <option value="comic-book">📚 Comic Book - Illustrated Style</option>
        <option value="digital-art">🎨 Digital Art - Modern Ghibli</option>
      </select>

      {/* Custom dropdown arrow */}
      <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
        <svg
          className="w-5 h-5 text-emerald-500 group-hover:text-emerald-600 transition-colors duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  </div>
)

export default GhibliStyleDropdown
