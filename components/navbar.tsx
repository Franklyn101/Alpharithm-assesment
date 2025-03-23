"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Image from "next/image"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky pt-6 top-0 z-50 w-full bg-[#051131]">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded  flex items-center justify-center">
             <Image
             src={"/Content.png"}
             width={40}
             height={40}
             alt="logo"
             />
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden  md:flex items-center gap-6">
          <Link href="#models" className="text-sm font-medium text-white/90 transition-colors hover:text-white">
            Models
          </Link>
          <Link href="#pricing" className="text-sm font-medium text-white/90 transition-colors hover:text-white">
            Pricing
          </Link>
          <Link href="#about" className="text-sm font-medium text-white/90 transition-colors hover:text-white">
            About Us
          </Link>
          <Link href="#contact" className="text-sm font-medium text-white/90 transition-colors hover:text-white">
            Contact Us
          </Link>
          <Link href="#custom" className="text-sm font-medium text-white/90 transition-colors hover:text-white">
            Custom Models
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button variant="outline" className="text-white bg-[#04142B] border-white hover:bg-white/10 hover:text-white">
            Login
          </Button>
          <Button className="bg-white text-[#051131] hover:bg-white/90">Get Started Now</Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-md animate-in md:hidden bg-[#051131]",
          isMenuOpen ? "slide-in-from-top-80" : "hidden",
        )}
      >
        <div className="relative z-20 grid gap-6 rounded-md p-4">
          <Link
            href="#models"
            className="flex items-center py-2 text-[16px] font-semibold text-white"
            onClick={() => setIsMenuOpen(false)}
          >
            Models
          </Link>
          <Link
            href="#pricing"
            className="flex items-center py-2 text-[16px] font-semibold text-white"
            onClick={() => setIsMenuOpen(false)}
          >
            Pricing
          </Link>
          <Link
            href="#about"
            className="flex items-center py-2 text-[16px] font-semibold text-white"
            onClick={() => setIsMenuOpen(false)}
          >
            About Us
          </Link>
          <Link
            href="#contact"
            className="flex items-center py-2 text-[16px] font-semibold text-white"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact Us
          </Link>
          <Link
            href="#custom"
            className="flex items-center py-2 ttext-[16px] font-semibold text-white"
            onClick={() => setIsMenuOpen(false)}
          >
            Custom Models
          </Link>
          <div className="flex flex-col gap-4 mt-4">
            <Button variant="outline" className="w-[88px] text-[14px] text-white border-white/20 hover:bg-white/10">
              Login
            </Button>
            <Button className="w-[128px] bg-white text-[#051131] hover:bg-white/90">Get Started Now</Button>
          </div>
        </div>
      </div>
    </header>
  )
}

