"use client"

import type React from "react"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

interface AccordionProps {
  title: string
  children: React.ReactNode
  defaultOpen?: boolean
}

export default function Accordion({ title, children, defaultOpen = false }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <>
      <button
        className="flex w-full justify-between items-center py-2 text-left font-medium border-b border-gray-200 transition-colors duration-300 hover:text-primary"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span>{title}</span>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 flex-shrink-0 transition-transform duration-300" />
        ) : (
          <ChevronDown className="h-5 w-5 flex-shrink-0 transition-transform duration-300" />
        )}
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="pb-4 pt-2 animate-fadeIn">{children}</div>
      </div>
    </>
  )
}
