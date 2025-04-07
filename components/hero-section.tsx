import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { FileText } from "lucide-react"
import { AnimatedSection } from "@/components/ui/animated-section"

export default function HeroSection() {
  // Google Drive link to resume
  const resumeUrl = "https://drive.google.com/file/d/16xH2KpNedibBvt2QbquKXMB8wAHvPEqb/view?usp=drive_link"

  return (
    <section
      id="about"
      className="py-16 md:py-24 lg:py-32 flex flex-col items-center text-center bg-aerospace-background dark:bg-aerospace-text/30 rounded-3xl my-8"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-8">
          {/* Profile Picture */}
          <AnimatedSection animation="fade-in">
            <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white dark:border-aerospace-text shadow-aerospace transition-transform duration-500 hover:scale-105">
              <Image
                src="/placeholder.svg?height=200&width=200"
                alt="Alex Kim"
                fill
                className="object-cover"
                priority
              />
            </div>
          </AnimatedSection>

          <div className="space-y-6 md:space-y-8">
            <AnimatedSection animation="fade-up" delay={150}>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-aerospace-text dark:text-white">
                Alex Kim
              </h1>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={300}>
              <p className="mx-auto max-w-[800px] text-lg md:text-xl lg:text-2xl text-aerospace-text/80 dark:text-white/80">
                Aerospace Engineering student with a strong software background, passionate about developing innovative
                solutions at the intersection of aerospace and technology.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={450}>
              <div className="flex justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-aerospace-accent hover:bg-aerospace-hover dark:bg-aerospace-primary dark:hover:bg-aerospace-primary/80 text-white dark:text-aerospace-text font-medium rounded-full px-8 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <Link href={resumeUrl} target="_blank" rel="noopener noreferrer">
                    <FileText className="mr-2 h-5 w-5" />
                    View Resume
                  </Link>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}

