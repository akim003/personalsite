"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronDown, ChevronUp, Github, FileText } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface ProjectLink {
  github?: string
  demo?: string
  paper?: string
  slides?: string
  video?: string
}

interface ProjectProps {
  project: {
    id: number
    title: string
    description: string
    image: string
    tags: string[]
    features: string[]
    links: ProjectLink
  }
}

export default function ProjectCard({ project }: ProjectProps) {
  const [expanded, setExpanded] = useState(false)
  const hasLinks = project.links && Object.keys(project.links).some((key) => !!project.links[key as keyof ProjectLink])

  return (
    <Card className="overflow-hidden h-full flex flex-col rounded-xl shadow-aerospace border-none transition-all duration-500 hover:shadow-lg hover:-translate-y-1 dark:bg-slate-700/60 dark:text-white">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 hover:scale-105"
        />
      </div>
      <CardHeader className="pb-2">
        <div className="space-y-1">
          <h3 className="text-xl font-bold text-aerospace-text dark:text-white">{project.title}</h3>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="text-xs bg-aerospace-primary text-aerospace-text dark:bg-aerospace-primary/30 dark:text-white font-medium transition-colors duration-300"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-aerospace-text/80 dark:text-white/80">{project.description}</p>

        {expanded && (
          <div className="mt-4">
            <h4 className="font-medium mb-2 text-aerospace-text dark:text-white">Key Features</h4>
            <ul className="list-disc pl-5 space-y-1">
              {project.features.map((feature, index) => (
                <li key={index} className="text-sm text-aerospace-text/70 dark:text-white/70">
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex flex-col gap-4 pt-0">
        <div className="flex justify-between w-full">
          <div className="flex gap-2">
            {project.links.github && (
              <Button
                variant="outline"
                size="icon"
                asChild
                className="rounded-full border-aerospace-accent text-aerospace-accent dark:border-aerospace-primary dark:text-aerospace-primary hover:bg-aerospace-primary hover:text-aerospace-text dark:hover:bg-aerospace-primary/30 hover:border-aerospace-primary transition-all duration-300 hover:rotate-6"
              >
                <Link href={project.links.github} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
            )}
            {project.links.paper && (
              <Button
                variant="outline"
                size="icon"
                asChild
                className="rounded-full border-aerospace-accent text-aerospace-accent dark:border-aerospace-primary dark:text-aerospace-primary hover:bg-aerospace-primary hover:text-aerospace-text dark:hover:bg-aerospace-primary/30 hover:border-aerospace-primary transition-all duration-300 hover:rotate-6"
              >
                <Link href={project.links.paper} target="_blank" rel="noopener noreferrer">
                  <FileText className="h-4 w-4" />
                  <span className="sr-only">Paper</span>
                </Link>
              </Button>
            )}
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-1 text-aerospace-accent dark:text-aerospace-primary hover:text-aerospace-hover dark:hover:text-aerospace-primary/70 hover:bg-aerospace-primary/20 dark:hover:bg-aerospace-primary/10 transition-all duration-300"
          >
            {expanded ? (
              <>
                <span className="text-xs">Less</span>
                <ChevronUp className="h-4 w-4 transition-transform duration-300" />
              </>
            ) : (
              <>
                <span className="text-xs">More</span>
                <ChevronDown className="h-4 w-4 transition-transform duration-300" />
              </>
            )}
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}

