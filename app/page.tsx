import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ClientSection } from "@/components/client-section";
import { FeatureCard } from "@/components/feature-card";
import { HowItWorks } from "@/components/how-it-works";
import { UseCaseCard } from "@/components/use-case-card";
import { TestimonialCard } from "@/components/testimonial-card";
import { HamburgerMenu } from "@/components/HamburgerMenu";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header - Changed from sticky to fixed */}
      <header className="fixed top-0 left-0 right-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src="/SASHA_LOGO.png" alt="LOGO" width={32} height={32} />
            <span className="lg:text-xl text-sm tracking-tight font-semibold">
              Sasha Innoworks
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="#features"
              className="text-sm font-medium hover:text-[#FB930Bff] transition-colors"
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="text-sm font-medium hover:text-[#FB930Bff] transition-colors"
            >
              How It Works
            </Link>
            <Link
              href="#use-cases"
              className="text-sm font-medium hover:text-[#FB930Bff] transition-colors"
            >
              Use Cases
            </Link>
            <Link
              href="#about"
              className="text-sm font-medium hover:text-[#FB930Bff] transition-colors"
            >
              About Us
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium hover:text-[#FB930Bff] transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Desktop Get Started Button */}
          <Link href="#contact" className="hidden md:inline-block items-center">
            <Button className="bg-[#FB930Bff] hover:bg-[#FB930Bff]/75 text-yellow-100">
              Get Started
            </Button>
          </Link>
        </div>
      </header>

      {/* Mobile Hamburger Menu - Positioned independently */}
      <HamburgerMenu />

      {/* Main Content - Added top padding to account for fixed header */}
      <main className="flex-1 pt-16">
        {/* Hero Section */}
{/* Hero Section – Color Hunt Palette */}
<section className="relative py-12 md:py-24 overflow-hidden bg-[#000000] text-white">
  {/* Background Visual Layer */}
  <div className="absolute inset-0 bg-[#0B192C] -z-10 opacity-90" />

  <div className="container px-4 md:px-6">
    <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
      
      {/* Left Text Content */}
      <div className="space-y-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#1E3E62]">
          Empowering Automation through{" "}
          <span className="text-[#FF6500]">AI, Robotics & Vision</span>
        </h1>

        <p className="text-xl text-[#E0E0E0] md:max-w-[500px]">
          Sasha Innoworks builds intelligent automation that drives
          productivity, eliminates manual error, and accelerates growth
          for manufacturers worldwide.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 pt-4">
          <Button className="bg-[#FF6500] hover:bg-[#ff8633] text-black">
            <Link href="#contact">Request Demo</Link>
          </Button>
          <Button variant="outline" className="border-white text-white hover:bg-[#1E3E62]">
            Learn More
          </Button>
        </div>
      </div>

      {/* Right Image */}
      <div className="relative h-[400px] lg:h-[500px] rounded-xl overflow-hidden shadow-xl">
        <Image
          src="/Hero.jpg"
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
        <section id="features" className="py-20 bg-[#0B192C] text-white">

          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1E3E62]">

                Powerful Features
              </h2>
              <p className="text-xl text-[#E0E0E0] max-w-[800px] mx-auto">

                Our platform combines cutting-edge LLM technology with advanced
                robotics to deliver unprecedented automation capabilities.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <ClientSection>
                <FeatureCard
                  icon={<Brain className="h-10 w-10 text-[#FB930Bff]" />}
                  title="Natural Language Control"
                  description="Control robotic systems using natural language commands that are interpreted contextually."
                />
              </ClientSection>

              <ClientSection>
                <FeatureCard
                  icon={<Lightbulb className="h-10 w-10 text-[#FB930Bff]" />}
                  title="Adaptive Learning"
                  description="Systems that learn from interactions and improve performance over time through continuous feedback."
                />
              </ClientSection>

              <ClientSection>
                <FeatureCard
                  icon={<ShieldCheck className="h-10 w-10 text-[#FB930Bff]" />}
                  title="Enhanced Safety"
                  description="Advanced predictive algorithms that anticipate and prevent potential safety issues."
                />
              </ClientSection>

              <ClientSection>
                <FeatureCard
                  icon={<Zap className="h-10 w-10 text-[#FB930Bff]" />}
                  title="Real-time Processing"
                  description="Process and respond to complex inputs in milliseconds for seamless human-machine interaction."
                />
              </ClientSection>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-20 bg-[#000000] text-white">

          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1E3E62]">

                How It Works
              </h2>
              <p className="text-xl text-[#E0E0E0] max-w-[800px] mx-auto">

                Our three-step process makes implementing LLM-powered robotics
                simple and effective.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <ClientSection>
                <HowItWorks
                  step="01"
                  icon={<Cpu className="h-10 w-10 text-[#FB930Bff]" />}
                  title="Integration"
                  description="Connect our LLM system to your existing robotic infrastructure through our simple API or hardware adapters."
                />
              </ClientSection>

              <ClientSection>
                <HowItWorks
                  step="02"
                  icon={<Layers className="h-10 w-10 text-[#FB930Bff]" />}
                  title="Training"
                  description="Customize the system to understand your specific industry terminology and operational requirements."
                />
              </ClientSection>

              <ClientSection>
                <HowItWorks
                  step="03"
                  icon={<FastForward className="h-10 w-10 text-[#FB930Bff]" />}
                  title="Deployment"
                  description="Deploy the trained system to production with continuous monitoring and improvement cycles."
                />
              </ClientSection>
            </div>
          </div>
        </section>
          
          {/* Use Cases Section */}
        <section id="use-cases" className="py-20 bg-[#0B192C] text-white">
  <div className="container px-4 md:px-6">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1E3E62]">
        Industry Use Cases
      </h2>
      <p className="text-xl text-[#E0E0E0] max-w-[800px] mx-auto">
        See how our LLM-powered robotics solutions are transforming
        industries across the globe.
      </p>
    </div>
    <div className="grid md:grid-cols-3 gap-8">
      <ClientSection>
        <UseCaseCard
          icon={<Factory className="h-10 w-10 text-[#FF6500]" />}
          title="Manufacturing"
          description="Intelligent assembly lines that adapt to production changes without reprogramming, reducing downtime by up to 60%."
        />
      </ClientSection>

      <ClientSection>
        <UseCaseCard
          icon={<Truck className="h-10 w-10 text-[#FF6500]" />}
          title="Logistics"
          description="Warehouse robots that understand complex instructions and optimize routing in real-time, improving efficiency by 45%."
        />
      </ClientSection>

      <ClientSection>
        <UseCaseCard
          icon={<Headphones className="h-10 w-10 text-[#FF6500]" />}
          title="Customer Support"
          description="Physical support robots that can understand customer needs and provide assistance in retail and service environments."
        />
      </ClientSection>
    </div>
  </div>
</section>


        {/* Testimonials Section */}
        <section className="py-20 bg-[#000000] text-white">
  <div className="container px-4 md:px-6">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1E3E62]">
        Trusted by Industry Leaders
      </h2>
      <p className="text-xl text-[#E0E0E0] max-w-[800px] mx-auto">
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
      <h3 className="text-xl font-semibold mb-8 text-center text-[#E0E0E0]">
        Our Clients
      </h3>
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
        {[1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className="h-12 w-32 bg-[#1E3E62] rounded-md flex items-center justify-center"
          >
            <span className="text-[#E0E0E0] font-medium">Logo {i}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>


        {/* About Us Section */}
        <section id="about" className="py-20 bg-[#0B192C] text-white">
  <div className="container px-4 md:px-6">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
        <Image
          src="/About.webp"
          alt="Team working on robotics"
          fill
          className="object-cover"
        />
      </div>
      <div className="space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center md:text-left text-[#1E3E62]">
          About Sasha Innoworks
        </h2>
        <p className="text-lg text-[#E0E0E0]">
          SASHA INNOWORKS PRIVATE LIMITED is a deep-tech company headquartered at
          BITS Pilani – Hyderabad (Telangana, India). Founded in August 2024 by
          Prof. Sandip S. Deshmukh and Mr. Kaki Ramesh, it blends academic
          excellence with industry experience. We specialize in intelligent automation
          using AI, robotics, and computer vision to eliminate manual errors and
          boost efficiency. Our solutions serve key sectors like logistics,
          automotive, and manufacturing, driving the future of industrial innovation.
        </p>
        <p className="text-lg text-[#E0E0E0]">
          Our mission is to democratize advanced robotics by making systems that
          understand human intent, adapt to changing environments, and collaborate
          seamlessly with human workers.
        </p>
        <div className="flex gap-4">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-[#FF6500]">50+</h3>
            <p className="text-sm text-[#E0E0E0]">Engineers</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl font-bold text-[#FF6500]">100+</h3>
            <p className="text-sm text-[#E0E0E0]">Deployments</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl font-bold text-[#FF6500]">12</h3>
            <p className="text-sm text-[#E0E0E0]">Countries</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


        {/* Contact Section */}
        <section id="contact" className="py-20 bg-[#000000] text-white">
  <div className="container px-4 md:px-6">
    <div className="grid lg:grid-cols-2 gap-12">
      {/* Left Section */}
      <div className="space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1E3E62]">
          Ready to Transform Your Operations?
        </h2>
        <p className="text-xl text-[#E0E0E0]">
          Get in touch with our team to schedule a demo and see how
          Sasha Innoworks future‑proofs your operations.
        </p>

        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-[#1E3E62] flex items-center justify-center">
              <Users className="h-5 w-5 text-[#FF6500]" />
            </div>
            <div>
              <h3 className="font-medium text-[#FF6500]">Sales Team</h3>
              <p className="text-sm text-[#E0E0E0]">sales@sasha.tech</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-[#1E3E62] flex items-center justify-center">
              <Headphones className="h-5 w-5 text-[#FF6500]" />
            </div>
            <div>
              <h3 className="font-medium text-[#FF6500]">Support</h3>
              <p className="text-sm text-[#E0E0E0]">support@sasha.tech</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section: Contact Form */}
      <Card className="bg-[#0B192C] text-white shadow-lg border-[#1E3E62]">
        <CardHeader>
          <CardTitle className="text-[#FF6500]">Contact Us</CardTitle>
          <p className="text-sm text-[#E0E0E0]">
            Fill out the form below and we'll get back to you within 24 hours.
          </p>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="first-name" className="text-sm font-medium text-[#E0E0E0]">
                  First Name
                </label>
                <Input id="first-name" className="bg-[#1A1A1A] text-white" />
              </div>
              <div className="space-y-2">
                <label htmlFor="last-name" className="text-sm font-medium text-[#E0E0E0]">
                  Last Name
                </label>
                <Input id="last-name" className="bg-[#1A1A1A] text-white" />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-[#E0E0E0]">
                Email
              </label>
              <Input id="email" type="email" placeholder="robert@example.com" className="bg-[#1A1A1A] text-white" />
            </div>

            <div className="space-y-2">
              <label htmlFor="company" className="text-sm font-medium text-[#E0E0E0]">
                Company
              </label>
              <Input id="company" placeholder="Your company" className="bg-[#1A1A1A] text-white" />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-[#E0E0E0]">
                Message
              </label>
              <Textarea
                id="message"
                placeholder="Tell us about your project and requirements..."
                className="bg-[#1A1A1A] text-white"
              />
            </div>

            <Button className="w-full bg-[#FF6500] hover:bg-[#FF6500]/80 text-black">
              Send Message
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  </div>
</section>
</main>

      {/* Footer */}
      <footer className="border-t border-[#1E3E62] py-12 bg-[#000000] text-white">
  <div className="container px-4 md:px-6">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      <div className="space-y-2 md:space-y-4">
        <div>
          <Image
            src="/SASHA_LOGO.png"
            alt="LOGO"
            width={24}
            height={24}
            className="lg:hidden block mb-1"
          />
          <div className="flex md:items-center gap-2 text-left">
            <Image
              src="/SASHA_LOGO.png"
              alt="LOGO"
              width={24}
              height={24}
              className="lg:block hidden"
            />
            <span className="font-bold text-[#FF6500]">SASHA INNOWORKS</span>
          </div>
        </div>
        <p className="text-sm text-[#E0E0E0]">
          Empowering Automation through AI, Robotics & Vision.
        </p>
      </div>

      <div>
        <h3 className="font-medium mb-4 text-[#1E3E62]">Product</h3>
        <ul className="space-y-2 text-sm">
          {["Features", "Pricing", "Documentation", "API"].map((item, i) => (
            <li key={i}>
              <Link href="#" className="text-[#E0E0E0] hover:text-[#FF6500]">
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="font-medium mb-4 text-[#1E3E62]">Company</h3>
        <ul className="space-y-2 text-sm">
          {["About Us", "Careers", "Blog", "Press"].map((item, i) => (
            <li key={i}>
              <Link href="#" className="text-[#E0E0E0] hover:text-[#FF6500]">
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="font-medium mb-4 text-[#1E3E62]">Legal</h3>
        <ul className="space-y-2 text-sm">
          {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item, i) => (
            <li key={i}>
              <Link href="#" className="text-[#E0E0E0] hover:text-[#FF6500]">
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>

    <div className="mt-12 pt-8 border-t border-[#1E3E62] flex flex-col md:flex-row justify-between items-center gap-4">
      <p className="text-sm text-[#E0E0E0]">
        © {new Date().getFullYear()} SASHA INNOWORKS. All rights reserved.
      </p>
      <div className="flex gap-4">
        {[...Array(3)].map((_, i) => (
          <Link key={i} href="#" className="text-[#E0E0E0] hover:text-[#FF6500]">
            <span className="sr-only">Social</span>
            {/* Insert corresponding SVG icons like before here */}
            <svg className="h-5 w-5" /* SVG props */ />
          </Link>
        ))}
      </div>
    </div>
  </div>
</footer>
</div>
  );
}
