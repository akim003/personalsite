"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Mail, Linkedin, Github, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useMediaQuery } from "@/hooks/use-media-query"
import { scrollToSection } from "@/utils/scroll-utils"
import { cn } from "@/lib/utils"
import { useToast } from "@/hooks/use-toast"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [copied, setCopied] = useState(false)
  const isMobile = useMediaQuery("(max-width: 768px)")
  const { toast } = useToast()

  const email = "kim01598@umn.edu"

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      if (offset > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => {
        setCopied(false)
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [copied])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const copyToClipboard = (e: React.MouseEvent) => {
    e.preventDefault()
    navigator.clipboard
      .writeText(email)
      .then(() => {
        setCopied(true)
        toast({
          title: "Email copied!",
          description: `${email} has been copied to your clipboard.`,
          variant: "success",
          duration: 3000,
        })
      })
      .catch((err) => {
        console.error("Failed to copy: ", err)
        toast({
          title: "Copy failed",
          description: "Please try again or manually copy the email.",
          variant: "destructive",
          duration: 3000,
        })
      })
  }

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
  ]

  const contactLinks = [
    {
      icon: copied ? <Check className="h-5 w-5" /> : <Mail className="h-5 w-5" />,
      href: "#",
      label: "Copy Email",
      onClick: copyToClipboard,
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      href: "https://linkedin.com/in/alwaysalex",
      label: "LinkedIn",
    },
    {
      icon: <Github className="h-5 w-5" />,
      href: "https://github.com/akim003",
      label: "GitHub",
    },
  ]

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full border-b border-aerospace-primary/30 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 transition-all duration-300",
        scrolled ? "shadow-md" : "",
      )}
    >
      <div className="container flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-bold text-xl text-aerospace-text">Alex Kim</span>
        </Link>

        {isMobile ? (
          <>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              aria-label="Toggle menu"
              className="text-aerospace-text hover:bg-aerospace-primary/20 hover:text-aerospace-accent"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>

            {isMenuOpen && (
              <div className="fixed inset-0 top-16 z-50 bg-white animate-in fade-in slide-in-from-top-5">
                <nav className="container grid gap-6 p-6">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-lg font-medium text-aerospace-text hover:text-aerospace-accent transition-all duration-300 hover:translate-x-1"
                      onClick={(e) => {
                        e.preventDefault()
                        setIsMenuOpen(false)
                        scrollToSection(item.href.substring(1))
                      }}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <div className="flex gap-6 pt-4">
                    {contactLinks.map((link, index) => (
                      <button
                        key={index}
                        onClick={(e) => {
                          if (link.onClick) {
                            link.onClick(e)
                          } else if (link.href.startsWith("#")) {
                            e.preventDefault()
                            scrollToSection(link.href.substring(1))
                          }
                        }}
                        className="text-aerospace-text hover:text-aerospace-accent transition-all duration-300"
                        aria-label={link.label}
                      >
                        {link.icon}
                      </button>
                    ))}
                  </div>
                </nav>
              </div>
            )}
          </>
        ) : (
          <div className="flex items-center">
            <nav className="flex items-center gap-6 mr-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-aerospace-text hover:text-aerospace-accent transition-all duration-300 relative group"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(item.href.substring(1))
                  }}
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-aerospace-accent transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </nav>
            <div className="flex items-center gap-6">
              {contactLinks.map((link, index) =>
                link.onClick ? (
                  <button
                    key={index}
                    onClick={link.onClick}
                    className={cn(
                      "text-aerospace-text hover:text-aerospace-accent transition-all duration-300",
                      copied && index === 0 ? "text-green-500" : "",
                    )}
                    aria-label={link.label}
                  >
                    {link.icon}
                  </button>
                ) : (
                  <Link
                    key={index}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-aerospace-text hover:text-aerospace-accent transition-all duration-300"
                    aria-label={link.label}
                  >
                    {link.icon}
                  </Link>
                ),
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

