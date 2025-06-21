import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Quote } from "lucide-react"

interface TestimonialCardProps {
  quote: string
  author: string
  role: string
}

export function TestimonialCard({ quote, author, role }: TestimonialCardProps) {
  return (
    <Card className="h-full bg-[#0B192C] text-white shadow-md hover:shadow-lg transition-shadow duration-300 border-[#1E3E62]">
      <CardContent className="pt-6 relative">
        <Quote className="h-8 w-8 text-[#FF6500] absolute top-4 left-4 opacity-30" />
        <div className="pt-6">
          <p className="text-[#E0E0E0] italic">"{quote}"</p>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-start">
        <p className="font-semibold text-[#FF6500]">{author}</p>
        <p className="text-sm text-[#E0E0E0]">{role}</p>
      </CardFooter>
    </Card>
  )
}

