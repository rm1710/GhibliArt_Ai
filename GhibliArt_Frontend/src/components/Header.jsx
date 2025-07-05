import { Link, NavLink } from "react-router-dom"
import { Sparkles } from "lucide-react"

const Header = () => (
  <header className="border-b border-emerald-200/50 sticky top-0 bg-white/80 backdrop-blur-xl z-50 shadow-sm">
    <nav className="container mx-auto flex justify-between items-center p-4 px-8">
      <Link to="/" className="flex items-center text-xl font-bold tracking-wider cursor-pointer group">
        <div className="bg-gradient-to-br from-emerald-500 to-teal-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg mr-3 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
          <Sparkles className="w-5 h-5" />
        </div>
        <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Ghibli AI</span>
      </Link>
      <div className="hidden md:flex items-center space-x-8">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `hover:text-emerald-600 transition-all duration-300 relative group ${isActive ? "font-semibold text-emerald-600" : "text-gray-700"}`
          }
        >
          Home
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 group-hover:w-full transition-all duration-300"></span>
        </NavLink>
        <NavLink
          to="/create"
          className={({ isActive }) =>
            `hover:text-emerald-600 transition-all duration-300 relative group ${isActive ? "font-semibold text-emerald-600" : "text-gray-700"}`
          }
        >
          Create
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 group-hover:w-full transition-all duration-300"></span>
        </NavLink>
        <NavLink
          to="/features"
          className="hover:text-emerald-600 transition-all duration-300 relative group text-gray-700"
        >
          Features
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 group-hover:w-full transition-all duration-300"></span>
        </NavLink>
        <NavLink
          to="/gallery"
          className="hover:text-emerald-600 transition-all duration-300 relative group text-gray-700"
        >
          Gallery
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 group-hover:w-full transition-all duration-300"></span>
        </NavLink>
        <NavLink to="/faq" className="hover:text-emerald-600 transition-all duration-300 relative group text-gray-700">
          FAQ
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 group-hover:w-full transition-all duration-300"></span>
        </NavLink>
      </div>
      <Link to="/create">
        <button className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold py-3 px-8 rounded-full hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
          Create Magic
        </button>
      </Link>
    </nav>
  </header>
)

export default Header
