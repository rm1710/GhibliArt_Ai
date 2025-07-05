import FeatureCard from "./FeatureCard.jsx"
import { Eye, FileClock, Sparkles, Palette, Wand2, Heart } from "lucide-react"

const FeaturesSection = () => (
  <div className="container mx-auto py-20 px-8 relative">
    <div className="text-center mb-16">
      <h2 className="text-5xl font-bold text-gray-800 mb-6">
        Magical{" "}
        <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Ghibli AI</span>{" "}
        Features
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Discover the enchanting capabilities that bring Studio Ghibli's artistic magic to your fingertips
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      <FeatureCard icon={<Eye size={28} />} title="Pixel-Perfect Transformation">
        Our advanced AI algorithms ensure your photos maintain their essence while transforming into authentic Studio
        Ghibli art style. Every detail is preserved and enhanced with magical precision.
      </FeatureCard>

      <FeatureCard icon={<FileClock size={28} />} title="Lightning-Fast Processing">
        Experience the magic in seconds! Our optimized AI technology delivers stunning Ghibli transformations faster
        than you can say "Totoro" - no more waiting for your artistic dreams.
      </FeatureCard>

      <FeatureCard icon={<Sparkles size={28} />} title="Studio-Quality Results">
        Create breathtaking high-resolution artwork that captures the authentic charm and whimsical beauty of Studio
        Ghibli's legendary animation style.
      </FeatureCard>

      <FeatureCard icon={<Palette size={28} />} title="Style Customization">
        Choose from various Ghibli film influences - from the mystical world of Spirited Away to the pastoral beauty of
        My Neighbor Totoro. Make each creation uniquely yours.
      </FeatureCard>

      <FeatureCard icon={<Wand2 size={28} />} title="Intelligent Enhancement">
        Our AI doesn't just convert - it enhances. Watch as ordinary scenes transform into extraordinary Ghibli
        landscapes filled with wonder and imagination.
      </FeatureCard>

      <FeatureCard icon={<Heart size={28} />} title="Emotion Preservation">
        The soul of your original image remains intact while gaining the emotional depth and storytelling magic that
        makes Studio Ghibli films so beloved worldwide.
      </FeatureCard>
    </div>
  </div>
)

export default FeaturesSection
