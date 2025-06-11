import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Quote } from "lucide-react"

interface TestimonialCardProps {
  quote: string
  author: string
  role: string
}

export function TestimonialCard({ quote, author, role }: TestimonialCardProps) {
  return (
    <Card className="h-full shadow-md hover:shadow-lg transition-shadow duration-300 border-[#FB930Bff]/30 dark:border-yellow-900/50">
      <CardContent className="pt-6 relative">
        <Quote className="h-8 w-8 text-[#FB930Bff] absolute top-4 left-4 opacity-30" />
        <div className="pt-6">
          <p className="text-muted-foreground italic">"{quote}"</p>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-start">
        <p className="font-semibold">{author}</p>
        <p className="text-sm text-muted-foreground">{role}</p>
      </CardFooter>
    </Card>
  );
}
