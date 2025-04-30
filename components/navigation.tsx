"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

interface NavItem {
  label: string
  href: string
}

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const navItems: NavItem[] = [
    { label: "Курси", href: "#music-course" },
    { label: "FAQ", href: "#faq" },
    { label: "Контакти", href: "#contacts" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false)

    // Smooth scroll to the section
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-[#e7969c] shadow-md py-1" : "bg-[#e7969c] py-1"
      }`}
    >
      <div className="max-w-[430px] mx-auto px-4 flex justify-center items-center">
        {/* Desktop Navigation */}
        <div className="flex space-x-8">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              className="text-sm font-medium text-white hover:text-gray-100 transition-all duration-300 py-2 hover:scale-105"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile Navigation Toggle */}
        <button
          className="md:hidden absolute right-4 text-white hover:text-gray-100 transition-transform duration-300 hover:scale-110"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Закрити меню" : "Відкрити меню"}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#e7969c] shadow-md animate-fadeIn">
          <div className="max-w-[430px] mx-auto py-2 px-4 flex flex-col">
            {navItems.map((item, index) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className={`text-left py-2 text-sm font-medium text-white hover:text-gray-100 transition-all duration-300 hover:translate-x-1 animate-fadeIn`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
