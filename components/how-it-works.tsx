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
    <Card className="h-full shadow-md hover:shadow-lg transition-shadow duration-300 border-yellow-200 dark:border-yellow-900/50">
      <CardHeader className="relative">
        <div className="absolute -top-4 -left-4 h-10 w-10 rounded-full bg-[#FB930Bff] flex items-center justify-center text-yellow-50 font-bold">
          {step}
        </div>
        <div className="mb-2 pt-4">{icon}</div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}
