'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowRight, CheckCircle } from 'lucide-react'

export default function Hero() {
  const handleScrollToWaitlist = () => {
    const element = document.getElementById('waitlist')
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative overflow-hidden px-4 py-16 sm:py-24 lg:py-32 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="flex flex-col justify-center space-y-6 sm:space-y-8">
            <div className="space-y-4 sm:space-y-6">
              <div className="inline-block">
                <span className="rounded-full bg-accent/10 px-4 py-2 text-xs sm:text-sm font-medium text-accent">
                  ✨ Launching Soon
                </span>
              </div>
              <h1 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
                AI-Powered Trust &{' '}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Opportunity Intelligence
                </span>
              </h1>
              <p className="text-balance text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl">
                Stop scams. Discover genuine opportunities. Morvara helps you detect scams, verify online opportunities, and discover personalized jobs, scholarships, grants, startup programs, and more—all powered by AI.
              </p>
            </div>

            {/* Benefits */}
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start sm:items-center gap-3 sm:gap-4">
                <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5 sm:mt-0" />
                <span className="text-sm sm:text-base font-medium text-foreground">Real-time scam detection & verification</span>
              </div>
              <div className="flex items-start sm:items-center gap-3 sm:gap-4">
                <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5 sm:mt-0" />
                <span className="text-sm sm:text-base font-medium text-foreground">Personalized opportunity discovery</span>
              </div>
              <div className="flex items-start sm:items-center gap-3 sm:gap-4">
                <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5 sm:mt-0" />
                <span className="text-sm sm:text-base font-medium text-foreground">Jobs, scholarships, grants, startups & more</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-3 sm:gap-4 pt-2 sm:pt-4">
              <Button
                onClick={handleScrollToWaitlist}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto py-3 sm:py-6 text-base sm:text-lg"
              >
                Join the Early Access Waitlist
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-border hover:bg-muted w-full sm:w-auto py-3 sm:py-6 text-base sm:text-lg"
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Right - Hero Image */}
          <div className="relative h-64 sm:h-96 lg:h-full min-h-64 sm:min-h-96">
            <Image
              src="/hero-morvara.png"
              alt="Morvara - AI Trust and Opportunity Intelligence"
              fill
              className="object-cover rounded-2xl"
              priority
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-primary/10 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}
