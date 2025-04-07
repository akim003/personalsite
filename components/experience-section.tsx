import ExperienceItem from "@/components/experience-item"
import { AnimatedSection } from "@/components/ui/animated-section"

// Updated experience data
const experiences = [
  {
    id: 1,
    title: "President",
    company: "AIAA CanSat",
    location: "Minneapolis",
    period: "August 2024 - Present",
    description: "Doubled team size and boosted funding by 50% while leading strategy and design.",
    responsibilities: [
      "Elected into position following the successful performance of the flight software in the 2023-2024 CanSat competition",
      "Increased sponsorship funding by over 50% year-over-year by cultivating new partnerships and maintaining existing ones",
      "Doubled team headcount by utilizing effective recruiting strategies and emphasizing mentoring efforts for new members",
      "Collaborated with and directed sub-leads on design and strategy",
    ],
  },
  {
    id: 2,
    title: "Mechanical Engineering Intern",
    company: "Trane Technologies",
    location: "Minneapolis",
    period: "May 2024 - August 2024",
    description: "Developed systems and analyzed building efficiency to identify energy-saving measures.",
    responsibilities: [
      "Developed and optimized a Synchrony data storage system in excel, saving over $20,000 in technician hours",
      "Analyzed building efficiency and performance using Trane Connect and Trace 3D Plus",
      "Identified energy-saving measures by creating ECMs to track equipment inefficiencies and system errors",
      "Consulted clients on energy-saving methods and assisted in the closing of multiple deals with Fortune 500 companies",
    ],
  },
  {
    id: 3,
    title: "Software Team Lead",
    company: "AIAA CanSat",
    location: "Minneapolis",
    period: "November 2023 - Present",
    description: "Led the development of ground station and flight software for a NASA simulated mission.",
    responsibilities: [
      "Successfully led the development of the ground station and flight software of a NASA simulated mission, for the 2023-2024 CanSat competition",
      "Developed flight software in Arduino using C++ to interact with and handle data from seven sensors and two servos, and used that data to implement the logic for multiple flight stages to run on the PCB that was controlling the satellite",
      "Implemented Plotly Dash and Pandas in Python to create an interactive local webpage with multithreading, allowing for simultaneous command transmission and real-time updates",
      "Collaborated with electrical team to design and test satellite PCB to ensure proper performance of sensors and software",
    ],
  },
]

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-16 md:py-20 bg-aerospace-background dark:bg-aerospace-text/30 rounded-3xl">
      <div className="container px-4 md:px-6">
        <AnimatedSection animation="fade-up">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-aerospace-text dark:text-white">
                Experience
              </h2>
              <p className="mx-auto max-w-[700px] text-aerospace-text/80 dark:text-white/80 md:text-xl">
                My professional experience and leadership roles in aerospace and software engineering.
              </p>
            </div>
          </div>
        </AnimatedSection>
        <div className="space-y-6">
          {experiences.map((experience, index) => (
            <AnimatedSection
              key={experience.id}
              animation={index % 2 === 0 ? "slide-in-left" : "slide-in-right"}
              delay={index * 100}
            >
              <ExperienceItem experience={experience} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}

