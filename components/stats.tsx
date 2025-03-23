"use client"

import { motion } from "framer-motion"
import { Users, BarChart3, Clock, Award } from "lucide-react"
import AnimatedCounter from "./animated-counter"

const stats = [
  {
    icon: Users,
    value: 5000,
    label: "Clients Worldwide",
    suffix: "+",
  },
  {
    icon: BarChart3,
    value: 98,
    label: "Accuracy Rate",
    suffix: "%",
  },
  {
    icon: Clock,
    value: 40,
    label: "Time Saved",
    suffix: "%",
  },
  {
    icon: Award,
    value: 15,
    label: "Industry Awards",
    suffix: "",
  },
]

export default function Stats() {
  return (
    <section className="py-12 bg-muted/30">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
              className="flex flex-col items-center text-center"
            >
              <div className="mb-4 p-4 rounded-full bg-primary/10">
                <stat.icon className="h-6 w-6 text-primary" />
              </div>
              <AnimatedCounter end={stat.value} suffix={stat.suffix} duration={2000 + index * 300} />
              <p className="text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

