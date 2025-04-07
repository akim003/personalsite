"use client"

import type React from "react"
import { cn } from "@/lib/utils"
import { useInView } from "@/hooks/use-in-view"

interface AnimatedSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  delay?: number
  animation?: "fade-up" | "fade-in" | "slide-in-left" | "slide-in-right" | "scale-in"
}

export function AnimatedSection({
  children,
  className,
  delay = 0,
  animation = "fade-up",
  ...props
}: AnimatedSectionProps) {
  const { ref, isInView } = useInView({ triggerOnce: true, threshold: 0.2 })

  const animationClasses = {
    "fade-up": "translate-y-10 opacity-0",
    "fade-in": "opacity-0",
    "slide-in-left": "-translate-x-10 opacity-0",
    "slide-in-right": "translate-x-10 opacity-0",
    "scale-in": "scale-95 opacity-0",
  }

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out",
        isInView ? "" : animationClasses[animation],
        delay > 0 && !isInView ? `delay-${delay}` : "",
        className,
      )}
      style={{
        transitionDelay: delay > 0 ? `${delay}ms` : "",
      }}
      {...props}
    >
      {children}
    </div>
  )
}

