"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const models = [
  {
    id: "market-prediction",
    title: "Market Prediction",
    description: "Use AI insights for smarter business decisions and stay competitive.",
    image: "/marketpredict.png?height=600&width=400",
  },
  {
    id: "finance",
    title: "Finance",
    description: "Our AI models analyze financial data for better investment decisions.",
    image: "/finance.png?height=300&width=400",
  },
  {
    id: "analytics",
    title: "Analytics",
    description: "Transform your data into actionable business intelligence.",
    image: "/data.png?height=300&width=400",
  },
  {
    id: "content-generation",
    title: "Content Generation",
    description: "Create engaging content at scale with our AI-powered tools.",
    image: "/contentimg.png?height=300&width=400",
  },
  {
    id: "customer-support",
    title: "Customer Support",
    description: "Enhance customer experience with AI-powered support solutions.",
    image: "/customersupport.png?height=300&width=400",
  },
]

export default function AiModels() {
  const [activeTab, setActiveTab] = useState("market-prediction")
  const [isInView, setIsInView] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const activeModel = models.find((model) => model.id === activeTab) || models[0]

  return (
    <section id="models" className="pt-20 bg-white" ref={sectionRef}>
      <div className="container px-4 md:px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">AI Models tailored for your business needs</h2>
          <p className="text-lg text-gray-600 max-w-[800px] mx-auto">
            Leverage the power of AI to automate, analyze, and optimize your workflows. Our specialized models are
            designed to fit different business needs
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {models.map((model, index) => (
            <motion.div
              key={model.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Button
                variant={activeTab === model.id ? "default" : "outline"}
                className={cn(
                  "transition-all h-[36px] w-[158px] duration-300 relative overflow-hidden",
                  activeTab === model.id ? "bg-[#03217F] text-white" : "text-[#A7A7A7]",
                )}
                onClick={() => setActiveTab(model.id)}
              >
                {model.title}
                {activeTab === model.id && (
                  <motion.span
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Tab Content */}
        <div className="relative min-h-[400px] bg-[#f8faf8] rounded-lg overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8"
            >
              <div className="flex flex-col justify-center">
              <motion.h3
                className="text-[19px] text-[#828282] font-semi-bold mb-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {activeModel.title} {/* ✅ Fix: Display Title Here */}
              </motion.h3>


                <motion.p
                  className="text-[42.9px] text-[#22263F] font-bold mb-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {activeTab === "market-prediction"
                    ? "Use AI insights for smarter business decisions and stay competitive."
                    : activeModel.description}
                </motion.p>

                <motion.div
                  className="mt-6"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button className="bg-[#03217F] text-white hover:bg-[#051131]/90">Learn More</Button>
                </motion.div>
              </div>

              <motion.div
                className="relative h-[513px] w-[520.6] rounded-tl-lg rounded-br-lg overflow-hidden"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Image
                  src={activeModel.image || "/placeholder.svg"}
                  alt={activeModel.title}
                  fill
                  className="object-cover"
                />
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

