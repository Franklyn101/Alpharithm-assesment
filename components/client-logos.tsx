"use client"
import Image from "next/image"

import { motion } from "framer-motion"

const clients = [
  {
    name: "Layers",
    logo: "/layers.png?height=40&width=100",
  },
  {
    name: "Sisyphus",
    logo: "/sisphus.png?height=40&width=100",
  },
  {
    name: "Circooles",
    logo: "/circocooles.png?height=40&width=100",
  },
  {
    name: "Catalog",
    logo: "/catalog.png?height=40&width=100",
  },
  {
    name: "Quotient",
    logo: "/quotent.png?height=40&width=100",
  },
]

export default function ClientLogos() {
  return (
    <section className="w-full py-12 bg-white">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center text-sm text-gray-500 mb-8"
        >
          Join 4,000+ companies already growing
        </motion.div>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-[10rem]">
          {clients.map((client, index) => (
            <motion.div
              key={client.logo}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 flex items-center justify-center">
                  <Image
                  src={client.logo}
                  alt={"logo"}
                  width={30}
                  height={30}

                  />
                </div>
                <span className="text-xl font-medium">{client.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

