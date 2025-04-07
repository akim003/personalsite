import HeroSection from "@/components/hero-section"
import ProjectsSection from "@/components/projects-section"
import ExperienceSection from "@/components/experience-section"
import ScrollToTop from "@/components/scroll-to-top"
import { Separator } from "@/components/ui/separator"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <Separator className="my-8" />
      <ProjectsSection />
      <Separator className="my-8" />
      <ExperienceSection />
      <ScrollToTop />
    </main>
  )
}

