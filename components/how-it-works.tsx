import type { ReactNode } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface HowItWorksProps {
  step: string
  icon: ReactNode
  title: string
  description: string
}

export function HowItWorks({ step, icon, title, description }: HowItWorksProps) {
  return (
    <Card className="h-full bg-[#0B192C] text-white shadow-md hover:shadow-lg transition-shadow duration-300 border-[#1E3E62]">
      <CardHeader className="relative">
        <div className="absolute -top-4 -left-4 h-10 w-10 rounded-full bg-[#FF6500] flex items-center justify-center text-black font-bold shadow-md">
          {step}
        </div>
        <div className="mb-2 pt-4">{icon}</div>
        <CardTitle className="text-[#FF6500]">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-[#E0E0E0]">{description}</p>
      </CardContent>
    </Card>
  )
}

