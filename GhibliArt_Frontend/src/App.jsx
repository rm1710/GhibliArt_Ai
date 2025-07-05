import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header.jsx"
import FeaturesSection from "./components/FeaturesSection.jsx"
import FaqSection from "./components/FaqSection.jsx"
import GallerySection from "./components/GallerySection.jsx"
import Footer from "./components/Footer.jsx"
import LandingPage from "./pages/LandingPage.jsx"
import CreatePage from "./pages/CreatePage.jsx"

const App = () => {
  return (
    <BrowserRouter>
      <div className="bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 min-h-screen font-sans text-gray-800 flex flex-col relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-emerald-200/30 to-teal-200/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-cyan-200/30 to-emerald-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-teal-200/20 to-emerald-200/20 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <Header />
        <main className="flex-grow relative z-10">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/create" element={<CreatePage />} />
            <Route path="/features" element={<FeaturesSection />} />
            <Route path="/faq" element={<FaqSection />} />
            <Route path="/gallery" element={<GallerySection />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
