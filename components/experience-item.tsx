"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

interface ExperienceProps {
  experience: {
    id: number
    title: string
    company: string
    location: string
    period: string
    description: string
    responsibilities: string[]
  }
}

export default function ExperienceItem({ experience }: ExperienceProps) {
  const [expanded, setExpanded] = useState(false)

  return (
    <Card className="rounded-xl shadow-aerospace border-none bg-white dark:bg-slate-700/60 hover:shadow-lg transition-all duration-500 hover:-translate-y-1">
      <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
        <div className="space-y-1">
          <h3 className="text-xl font-bold text-aerospace-text dark:text-white">{experience.title}</h3>
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
            <p className="font-medium text-aerospace-accent dark:text-aerospace-primary">{experience.company}</p>
            <span className="hidden sm:inline text-aerospace-text/50 dark:text-white/50">•</span>
            <p className="text-sm text-aerospace-text/70 dark:text-white/70">{experience.location}</p>
          </div>
        </div>
        <p className="text-sm text-aerospace-text/70 dark:text-white/70 font-medium">{experience.period}</p>
      </CardHeader>
      <CardContent>
        <p className="text-aerospace-text/80 dark:text-white/80">{experience.description}</p>

        {expanded && (
          <div className="mt-4">
            <h4 className="font-medium mb-2 text-aerospace-text dark:text-white">Key Responsibilities</h4>
            <ul className="list-disc pl-5 space-y-1">
              {experience.responsibilities.map((responsibility, index) => (
                <li key={index} className="text-sm text-aerospace-text/70 dark:text-white/70">
                  {responsibility}
                </li>
              ))}
            </ul>
          </div>
        )}

        <Button
          variant="ghost"
          size="sm"
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-1 mt-4 text-aerospace-accent dark:text-aerospace-primary hover:text-aerospace-hover dark:hover:text-aerospace-primary/70 hover:bg-aerospace-primary/20 dark:hover:bg-aerospace-primary/10 transition-all duration-300"
        >
          {expanded ? (
            <>
              <span className="text-xs">Show Less</span>
              <ChevronUp className="h-4 w-4 transition-transform duration-300" />
            </>
          ) : (
            <>
              <span className="text-xs">Show More</span>
              <ChevronDown className="h-4 w-4 transition-transform duration-300" />
            </>
          )}
        </Button>
      </CardContent>
    </Card>
  )
}

