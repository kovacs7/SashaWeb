import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Brain,
  Cpu,
  Factory,
  FastForward,
  Headphones,
  Layers,
  Lightbulb,
  ShieldCheck,
  Truck,
  Users,
  Zap,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { ClientSection } from "@/components/client-section"
import { FeatureCard } from "@/components/feature-card"
import { HowItWorks } from "@/components/how-it-works"
import { UseCaseCard } from "@/components/use-case-card"
import { TestimonialCard } from "@/components/testimonial-card"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Brain className="h-8 w-8 text-yellow-500" />
            <span className="text-xl font-bold">RoboLLM</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#features" className="text-sm font-medium hover:text-yellow-500 transition-colors">
              Features
            </Link>
            <Link href="#how-it-works" className="text-sm font-medium hover:text-yellow-500 transition-colors">
              How It Works
            </Link>
            <Link href="#use-cases" className="text-sm font-medium hover:text-yellow-500 transition-colors">
              Use Cases
            </Link>
            <Link href="#about" className="text-sm font-medium hover:text-yellow-500 transition-colors">
              About Us
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-yellow-500 transition-colors">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" className="hidden md:flex">
              Log In
            </Button>
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-black">Get Started</Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-yellow-50 dark:bg-yellow-950/20 -z-10" />
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
                  Redefining Robotics with <span className="text-yellow-500">LLM Intelligence</span>
                </h1>
                <p className="text-xl text-muted-foreground md:max-w-[500px]">
                  Harness the power of Large Language Models to create smarter, more intuitive robotic systems that
                  understand human intent and adapt to complex environments.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <Button className="bg-yellow-500 hover:bg-yellow-600 text-black">Request Demo</Button>
                  <Button variant="outline">Learn More</Button>
                </div>
              </div>
              <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/placeholder.svg?height=500&width=600"
                  alt="Robotic arm with AI visualization"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-white dark:bg-background">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features</h2>
              <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
                Our platform combines cutting-edge LLM technology with advanced robotics to deliver unprecedented
                automation capabilities.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <ClientSection>
                <FeatureCard
                  icon={<Brain className="h-10 w-10 text-yellow-500" />}
                  title="Natural Language Control"
                  description="Control robotic systems using natural language commands that are interpreted contextually."
                />
              </ClientSection>

              <ClientSection>
                <FeatureCard
                  icon={<Lightbulb className="h-10 w-10 text-yellow-500" />}
                  title="Adaptive Learning"
                  description="Systems that learn from interactions and improve performance over time through continuous feedback."
                />
              </ClientSection>

              <ClientSection>
                <FeatureCard
                  icon={<ShieldCheck className="h-10 w-10 text-yellow-500" />}
                  title="Enhanced Safety"
                  description="Advanced predictive algorithms that anticipate and prevent potential safety issues."
                />
              </ClientSection>

              <ClientSection>
                <FeatureCard
                  icon={<Zap className="h-10 w-10 text-yellow-500" />}
                  title="Real-time Processing"
                  description="Process and respond to complex inputs in milliseconds for seamless human-machine interaction."
                />
              </ClientSection>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-20 bg-yellow-50 dark:bg-yellow-950/20">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
              <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
                Our three-step process makes implementing LLM-powered robotics simple and effective.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <ClientSection>
                <HowItWorks
                  step="01"
                  icon={<Cpu className="h-10 w-10 text-yellow-500" />}
                  title="Integration"
                  description="Connect our LLM system to your existing robotic infrastructure through our simple API or hardware adapters."
                />
              </ClientSection>

              <ClientSection>
                <HowItWorks
                  step="02"
                  icon={<Layers className="h-10 w-10 text-yellow-500" />}
                  title="Training"
                  description="Customize the system to understand your specific industry terminology and operational requirements."
                />
              </ClientSection>

              <ClientSection>
                <HowItWorks
                  step="03"
                  icon={<FastForward className="h-10 w-10 text-yellow-500" />}
                  title="Deployment"
                  description="Deploy the trained system to production with continuous monitoring and improvement cycles."
                />
              </ClientSection>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section id="use-cases" className="py-20 bg-white dark:bg-background">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Industry Use Cases</h2>
              <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
                See how our LLM-powered robotics solutions are transforming industries across the globe.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <ClientSection>
                <UseCaseCard
                  icon={<Factory className="h-10 w-10 text-yellow-500" />}
                  title="Manufacturing"
                  description="Intelligent assembly lines that adapt to production changes without reprogramming, reducing downtime by up to 60%."
                />
              </ClientSection>

              <ClientSection>
                <UseCaseCard
                  icon={<Truck className="h-10 w-10 text-yellow-500" />}
                  title="Logistics"
                  description="Warehouse robots that understand complex instructions and optimize routing in real-time, improving efficiency by 45%."
                />
              </ClientSection>

              <ClientSection>
                <UseCaseCard
                  icon={<Headphones className="h-10 w-10 text-yellow-500" />}
                  title="Customer Support"
                  description="Physical support robots that can understand customer needs and provide assistance in retail and service environments."
                />
              </ClientSection>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-yellow-50 dark:bg-yellow-950/20">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Industry Leaders</h2>
              <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
                See what our clients have to say about our revolutionary technology.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ClientSection>
                <TestimonialCard
                  quote="RoboLLM has transformed our manufacturing process, reducing errors by 75% and increasing throughput by 40%."
                  author="Sarah Chen"
                  role="CTO, GlobalTech Manufacturing"
                />
              </ClientSection>

              <ClientSection>
                <TestimonialCard
                  quote="The natural language interface has made our warehouse operations accessible to all staff, regardless of technical background."
                  author="Marcus Johnson"
                  role="Operations Director, LogiSmart"
                />
              </ClientSection>

              <ClientSection>
                <TestimonialCard
                  quote="Customer satisfaction scores increased by 35% after deploying RoboLLM's interactive support systems in our stores."
                  author="Priya Patel"
                  role="Customer Experience Lead, RetailPlus"
                />
              </ClientSection>
            </div>
            <div className="mt-16">
              <h3 className="text-xl font-semibold mb-8 text-center">Our Clients</h3>
              <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="h-12 w-32 bg-muted rounded-md flex items-center justify-center">
                    <span className="text-muted-foreground font-medium">Logo {i}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section id="about" className="py-20 bg-white dark:bg-background">
          <div className="container px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Team working on robotics"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">About RoboLLM</h2>
                <p className="text-lg text-muted-foreground">
                  Founded in 2021, RoboLLM is at the forefront of combining large language models with robotics to
                  create more intuitive and adaptive automation solutions. Our team of AI researchers, robotics
                  engineers, and industry specialists work together to solve the most challenging problems in
                  human-machine interaction.
                </p>
                <p className="text-lg text-muted-foreground">
                  Our mission is to democratize advanced robotics by making systems that understand human intent, adapt
                  to changing environments, and collaborate seamlessly with human workers.
                </p>
                <div className="flex gap-4">
                  <div className="text-center">
                    <h3 className="text-3xl font-bold text-yellow-500">50+</h3>
                    <p className="text-sm text-muted-foreground">Engineers</p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-3xl font-bold text-yellow-500">100+</h3>
                    <p className="text-sm text-muted-foreground">Deployments</p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-3xl font-bold text-yellow-500">12</h3>
                    <p className="text-sm text-muted-foreground">Countries</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-yellow-50 dark:bg-yellow-950/20">
          <div className="container px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">Ready to Transform Your Operations?</h2>
                <p className="text-xl text-muted-foreground">
                  Get in touch with our team to schedule a demo and see how RoboLLM can revolutionize your automation
                  processes.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center">
                      <Users className="h-5 w-5 text-yellow-500" />
                    </div>
                    <div>
                      <h3 className="font-medium">Sales Team</h3>
                      <p className="text-sm text-muted-foreground">sales@robollm.tech</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center">
                      <Headphones className="h-5 w-5 text-yellow-500" />
                    </div>
                    <div>
                      <h3 className="font-medium">Support</h3>
                      <p className="text-sm text-muted-foreground">support@robollm.tech</p>
                    </div>
                  </div>
                </div>
              </div>
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle>Contact Us</CardTitle>
                  <CardDescription>Fill out the form below and we'll get back to you within 24 hours.</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="first-name" className="text-sm font-medium">
                          First Name
                        </label>
                        <Input id="first-name" placeholder="John" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="last-name" className="text-sm font-medium">
                          Last Name
                        </label>
                        <Input id="last-name" placeholder="Doe" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input id="email" type="email" placeholder="john.doe@example.com" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="company" className="text-sm font-medium">
                        Company
                      </label>
                      <Input id="company" placeholder="Acme Inc." />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message
                      </label>
                      <Textarea id="message" placeholder="Tell us about your project and requirements..." />
                    </div>
                    <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black">Send Message</Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-12 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Brain className="h-6 w-6 text-yellow-500" />
                <span className="font-bold">RoboLLM</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Redefining robotics with LLM intelligence for a smarter, more efficient future.
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-4">Product</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-yellow-500">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-yellow-500">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-yellow-500">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-yellow-500">
                    API
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-4">Company</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-yellow-500">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-yellow-500">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-yellow-500">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-yellow-500">
                    Press
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-4">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-yellow-500">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-yellow-500">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-yellow-500">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} RoboLLM. All rights reserved.</p>
            <div className="flex gap-4">
              <Link href="#" className="text-muted-foreground hover:text-yellow-500">
                <span className="sr-only">Twitter</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-yellow-500">
                <span className="sr-only">LinkedIn</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-yellow-500">
                <span className="sr-only">GitHub</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
