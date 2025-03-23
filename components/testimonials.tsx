"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const testimonials = [
  {
    quote:
      "Alpharithm's AI solutions have transformed our customer service operations. We've seen a 40% reduction in response time and a 25% increase in customer satisfaction.",
    author: "Sarah Johnson",
    role: "CTO, TechCorp",
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    quote:
      "The predictive analytics model helped us forecast market trends with remarkable accuracy. It's been instrumental in our strategic planning process.",
    author: "Michael Chen",
    role: "VP of Strategy, Global Innovations",
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    quote:
      "Implementing Alpharithm's document intelligence solution reduced our processing time by 75%. What used to take days now takes hours.",
    author: "Elena Rodriguez",
    role: "Operations Director, Finance Plus",
    avatar: "/placeholder.svg?height=80&width=80",
  },
]

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const nextTestimonial = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
    setTimeout(() => setIsAnimating(false), 500)
  }

  const prevTestimonial = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setTimeout(() => setIsAnimating(false), 500)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial()
    }, 8000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Industry Leaders</h2>
          <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
            See what our clients have to say about their experience with our AI solutions.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto" ref={containerRef}>
          <motion.div
            className="absolute top-1/2 -left-4 md:-left-12 transform -translate-y-1/2 z-10"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <button
              onClick={prevTestimonial}
              className="h-10 w-10 rounded-full bg-background border shadow-sm flex items-center justify-center hover:bg-muted transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
          </motion.div>

          <div className="overflow-hidden rounded-xl bg-background border shadow-sm">
            <AnimatePresence initial={false} mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="p-8 md:p-12"
              >
                <div className="flex flex-col items-center text-center">
                  <motion.div
                    className="flex mb-4"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <Star className="h-5 w-5 fill-primary text-primary" />
                      </motion.div>
                    ))}
                  </motion.div>

                  <motion.blockquote
                    className="text-xl md:text-2xl italic mb-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    "{testimonials[activeIndex].quote}"
                  </motion.blockquote>

                  <motion.div
                    className="flex flex-col items-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    <div className="h-16 w-16 rounded-full overflow-hidden mb-4 border-2 border-primary/20">
                      <Image
                        src={testimonials[activeIndex].avatar || "/placeholder.svg"}
                        alt={testimonials[activeIndex].author}
                        width={80}
                        height={80}
                        className="object-cover"
                      />
                    </div>
                    <div className="text-center">
                      <div className="font-semibold">{testimonials[activeIndex].author}</div>
                      <div className="text-sm text-muted-foreground">{testimonials[activeIndex].role}</div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <motion.div
            className="absolute top-1/2 -right-4 md:-right-12 transform -translate-y-1/2 z-10"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <button
              onClick={nextTestimonial}
              className="h-10 w-10 rounded-full bg-background border shadow-sm flex items-center justify-center hover:bg-muted transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </motion.div>

          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAnimating(true)
                  setActiveIndex(index)
                  setTimeout(() => setIsAnimating(false), 500)
                }}
                className={cn(
                  "h-2 rounded-full transition-all duration-300",
                  activeIndex === index ? "bg-primary w-6" : "bg-muted-foreground/30 hover:bg-muted-foreground/50 w-2",
                )}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

