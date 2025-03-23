"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="w-full py-12 md:py-24 bg-[#051131] text-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 md:space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-sm text-[#7191FF] text-[16px] font-bold"
          >
            Leverage on Automation
          </motion.div>

          <motion.h1
            className="text-[76px] w-[30rem] md:text-6xl font-semibold tracking-tighter max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            AI Models for Business Solutions
          </motion.h1>

          <motion.p
            className="text-[22px] font-medium text-white max-w-[800px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Leverage the power of AI to automate, analyze, and optimize your workflows. Our specialized models are
            designed to fit different business needs
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button className="bg-white text-[#051131] w-[192px] h-[5px] rounded-[12px] hover:bg-white/90 px-8 py-6 text-base">Get Started Now</Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

