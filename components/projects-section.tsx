import ProjectCard from "@/components/project-card"
import { AnimatedSection } from "@/components/ui/animated-section"

// Sample project data - in a real implementation, you might want to move this to a separate data file
const projects = [
  {
    id: 1,
    title: "MinneSat Ground Station",
    description:
      "Python-based UI for the CanSat Satellite, designed to display flight data and issue commands for the AAS CanSat competition.",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["Python", "Dash", "Pandas"],
    features: [
      "Designed using Dash and Pandas Python libraries for real-time data visualization",
      "Overhauled under my leadership for the 2023-2024 AAS CanSat competition",
      "Currently being updated for the 2024-2025 AAS CanSat competition",
      "Enables real-time satellite command transmission and data monitoring",
    ],
    links: {
      github: "https://github.com/akim003/MinneSat_Ground_Station",
    },
  },
  {
    id: 2,
    title: "MinneSat Flight Software",
    description:
      "C++ based controls program that runs on the satellite's PCB, controlling sensors and servos while making decisions based on collected data.",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["C++", "Arduino", "Embedded Systems"],
    features: [
      "Controls the sensors and servos in the satellite and uses the collected data to make decisions",
      "Communicates with the ground station using radio",
      "Completely redesigned by me for the 2023-2024 AAS CanSat competition",
      "Currently being updated for the 2024-2025 AAS CanSat competition",
    ],
    links: {
      github: "https://github.com/akim003/MinneSat_Flight_Software",
    },
  },
  {
    id: 3,
    title: "North Star Rocket",
    description:
      "Designed and successfully launched an L1 rocket under the guidance of a mentor, to over 1000 feet before recovering it.",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["SolidWorks", "3D Printing", "MATLAB"],
    features: [
      "Utilized 3D printing and Solidworks for the creation of the nose cone",
      "Laser cutting for the production of the fins",
      "Tested drag and performance of the parachute using a wind tunnel",
      "Analyzed test data using MATLAB",
    ],
    links: {},
  },
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-16 md:py-20">
      <div className="container px-4 md:px-6">
        <AnimatedSection animation="fade-up">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-aerospace-text dark:text-white">
                Projects
              </h2>
              <p className="mx-auto max-w-[700px] text-aerospace-text/80 dark:text-white/80 md:text-xl">
                A selection of my technical projects in aerospace engineering and software development.
              </p>
            </div>
          </div>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <AnimatedSection key={project.id} animation="fade-up" delay={index * 150}>
              <ProjectCard project={project} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}

