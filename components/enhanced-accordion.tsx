"use client"

import type React from "react"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

interface EnhancedAccordionProps {
  title: string
  children: React.ReactNode
  defaultOpen?: boolean
  icon?: React.ReactNode
}

export default function EnhancedAccordion({ title, children, defaultOpen = false, icon }: EnhancedAccordionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden mb-3 bg-white shadow-sm transition-all duration-300 hover:shadow-md hover-lift rounded-fix">
      <button
        className={`flex w-full justify-between items-center p-4 text-left font-medium transition-all duration-300 ${
          isOpen ? "bg-primary/10" : "hover:bg-gray-50"
        }`}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-3">
          {icon && <div className="text-primary transition-transform duration-300 group-hover:scale-110">{icon}</div>}
          <span className="font-project-main">{title}</span>
        </div>
        <div className="bg-primary/10 rounded-full p-1 transition-all duration-300 hover:bg-primary/20">
          {isOpen ? (
            <ChevronUp className="h-5 w-5 flex-shrink-0 text-primary transition-transform duration-300" />
          ) : (
            <ChevronDown className="h-5 w-5 flex-shrink-0 text-primary transition-transform duration-300" />
          )}
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className={`p-4 border-t border-gray-100 ${isOpen ? "animate-fadeIn" : ""}`}>{children}</div>
      </div>
    </div>
  )
}
