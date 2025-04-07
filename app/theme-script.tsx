"use client"

import { useEffect } from "react"

export function ThemeScript() {
  useEffect(() => {
    // This ensures dark mode is applied immediately
    document.documentElement.classList.add("dark")
  }, [])

  return null
}

