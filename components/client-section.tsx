"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface ClientSectionProps {
  children: ReactNode
}

export function ClientSection({ children }: ClientSectionProps) {
  return (
    <motion.div
       className="bg-card text-card-foreground p-4 rounded-lg shadow-md"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  )
}
