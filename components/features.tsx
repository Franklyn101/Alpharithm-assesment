"use client"

import { useEffect, useRef } from "react"
import { Brain, BarChart3, Zap, Shield, Users, Layers } from "lucide-react"
import { motion } from "framer-motion"

const features = [
  {
    icon: Brain,
    title: "Advanced AI Models",
    description: "Access state-of-the-art machine learning models trained on diverse datasets.",
  },
  {
    icon: BarChart3,
    title: "Actionable Insights",
    description: "Transform raw data into meaningful business intelligence with powerful analytics.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized infrastructure ensures rapid processing even with complex workloads.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade encryption and compliance with industry security standards.",
  },
  {
    icon: Users,
    title: "Collaborative Platform",
    description: "Enable seamless teamwork with robust sharing and permission controls.",
  },
  {
    icon: Layers,
    title: "Scalable Architecture",
    description: "Grows with your business from startup to enterprise without compromising performance.",
  },
]

export default function Features() {
  const featureRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in")
          }
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" },
    )

    featureRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => {
      featureRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref)
      })
    }
  }, [])

  return (
    <section id="features" className="py-20 bg-muted/50">
      <div className="container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features for Modern Businesses</h2>
          <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
            Our platform combines cutting-edge AI technology with intuitive design to deliver exceptional results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              ref={(el) => (featureRefs.current[index] = el)}
              className="bg-background rounded-lg p-6 shadow-sm border opacity-0 transform translate-y-4 transition-all duration-700 ease-out group hover:border-primary/50 hover:shadow-md"
              style={{ transitionDelay: `${index * 100}ms` }}
              whileHover={{
                scale: 1.03,
                transition: { duration: 0.2 },
              }}
            >
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

