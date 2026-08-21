import HeroSection from '@/components/sections/HeroSection'
import ImpactNumbers from '@/components/sections/ImpactNumbers'
import FeaturedProjects from '@/components/sections/FeaturedProjects'
import ArchitectureDiagram from '@/components/sections/ArchitectureDiagram'
import TechStackSection from '@/components/sections/TechStackSection'
import CTASection from '@/components/sections/CTASection'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ImpactNumbers />
      <FeaturedProjects />
      <ArchitectureDiagram />
      <TechStackSection />
      <CTASection />
    </>
  )
}
