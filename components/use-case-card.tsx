import type { ReactNode } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface UseCaseCardProps {
  icon: ReactNode
  title: string
  description: string
}

export function UseCaseCard({ icon, title, description }: UseCaseCardProps) {
  return (
    <Card className="h-full shadow-md hover:shadow-lg transition-shadow duration-300 border-yellow-200 dark:border-yellow-900/50">
      <CardHeader>
        <div className="mb-2">{icon}</div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}
