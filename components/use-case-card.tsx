import type { ReactNode } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface UseCaseCardProps {
  icon: ReactNode
  title: string
  description: string
}

export function UseCaseCard({ icon, title, description }: UseCaseCardProps) {
  return (
    <Card className="h-full bg-[#0B192C] text-white shadow-md hover:shadow-lg transition-shadow duration-300 border-[#1E3E62]">
      <CardHeader>
        <div className="mb-2">{icon}</div>
        <CardTitle className="text-[#FF6500]">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-[#E0E0E0]">{description}</p>
      </CardContent>
    </Card>
  )
}

