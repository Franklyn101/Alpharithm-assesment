"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

interface AnimatedGradientBorderProps {
  children: React.ReactNode
  className?: string
  borderWidth?: number
  duration?: number
  borderRadius?: string
}

export default function AnimatedGradientBorder({
  children,
  className = "",
  borderWidth = 2,
  duration = 8,
  borderRadius = "1rem",
}: AnimatedGradientBorderProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    container.style.setProperty("--border-width", `${borderWidth}px`)
    container.style.setProperty("--animation-duration", `${duration}s`)
    container.style.setProperty("--border-radius", borderRadius)
  }, [borderWidth, duration, borderRadius])

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative p-[var(--border-width)] rounded-[var(--border-radius)] overflow-hidden",
        "before:content-[''] before:absolute before:inset-0 before:rounded-[var(--border-radius)]",
        "before:bg-[length:200%_200%] before:animate-gradient-border",
        "before:bg-gradient-to-r before:from-primary before:via-purple-500 before:to-primary",
        className,
      )}
    >
      <div className="relative bg-background rounded-[calc(var(--border-radius)-var(--border-width))] h-full w-full overflow-hidden">
        {children}
      </div>
    </div>
  )
}

