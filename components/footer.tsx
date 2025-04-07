"use client"

import Link from "next/link"
import { scrollToSection } from "@/utils/scroll-utils"

export default function Footer() {
  return (
    <footer className="border-t border-aerospace-primary/30 py-6 md:py-0 bg-white dark:bg-aerospace-text">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
        <p className="text-sm text-aerospace-text/70 dark:text-white/70">
          © {new Date().getFullYear()} Alex Kim. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <Link
            href="#about"
            className="text-sm text-aerospace-text/70 dark:text-white/70 hover:text-aerospace-accent dark:hover:text-aerospace-primary transition-colors"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection("about")
            }}
          >
            About
          </Link>
          <Link
            href="#projects"
            className="text-sm text-aerospace-text/70 dark:text-white/70 hover:text-aerospace-accent dark:hover:text-aerospace-primary transition-colors"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection("projects")
            }}
          >
            Projects
          </Link>
          <Link
            href="#experience"
            className="text-sm text-aerospace-text/70 dark:text-white/70 hover:text-aerospace-accent dark:hover:text-aerospace-primary transition-colors"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection("experience")
            }}
          >
            Experience
          </Link>
        </div>
      </div>
    </footer>
  )
}

