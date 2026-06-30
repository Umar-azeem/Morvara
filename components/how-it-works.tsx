'use client'

import { ArrowRight, CheckCircle } from 'lucide-react'

const steps = [
  {
    number: '01',
    title: 'Share Your Goals',
    description: 'Tell Morvara what you&apos;re looking for—jobs, scholarships, grants, startup programs, or partnerships.',
    icon: CheckCircle,
  },
  {
    number: '02',
    title: 'AI Analyzes & Verifies',
    description: 'Our AI engine scans opportunities, verifies legitimacy, and checks for red flags in real-time.',
    icon: CheckCircle,
  },
  {
    number: '03',
    title: 'Get Personalized Matches',
    description: 'Receive tailored opportunities ranked by fit and impact, with actionable next steps.',
    icon: CheckCircle,
  },
  {
    number: '04',
    title: 'Stay Protected',
    description: 'Continuous monitoring alerts you to scams and suspicious activity across all your opportunities.',
    icon: CheckCircle,
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative px-4 py-20 sm:px-6 lg:px-8 bg-gradient-to-b from-muted/40 via-transparent to-muted/40">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 sm:mb-16 text-center space-y-4">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            How Morvara Works
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Simple, powerful, and designed for your success. Get started in minutes.
          </p>
        </div>

        {/* Desktop Timeline View */}
        <div className="hidden lg:grid gap-8 lg:grid-cols-4 mb-16">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="relative">
                {/* Step Card */}
                <div className="group rounded-2xl border border-border/50 bg-card/50 p-6 sm:p-8 transition-all hover:border-primary/50 hover:bg-card/80 hover:shadow-lg hover:shadow-primary/10">
                  <div className="mb-4 flex items-start justify-between">
                    <div className="inline-flex rounded-lg bg-primary/10 p-3 group-hover:bg-primary/20 group-hover:scale-110 transition-all">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <span className="text-3xl font-bold text-primary/20">{step.number}</span>
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-foreground">{step.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{step.description}</p>
                </div>

                {/* Arrow between steps */}
                {index < steps.length - 1 && (
                  <div className="absolute -right-4 top-1/3 hidden -translate-y-1/2 transform lg:block">
                    <ArrowRight className="h-8 w-8 text-primary/30 animate-pulse" />
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Mobile Vertical Timeline */}
        <div className="lg:hidden mb-16 space-y-6">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="relative">
                <div className="flex gap-4 sm:gap-6">
                  {/* Timeline dot and line */}
                  <div className="flex flex-col items-center">
                    <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-primary text-white font-bold text-lg sm:text-xl flex-shrink-0">
                      {step.number}
                    </div>
                    {index < steps.length - 1 && (
                      <div className="mt-2 w-1 h-20 bg-gradient-to-b from-primary to-primary/20" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="pb-4 sm:pb-6">
                    <div className="rounded-xl border border-border/50 bg-card/50 p-4 sm:p-6 backdrop-blur">
                      <div className="mb-3 inline-flex rounded-lg bg-primary/10 p-2">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="mb-2 text-lg font-semibold text-foreground">{step.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Features Summary */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {[
            { emoji: '⚡', text: 'Real-time Verification' },
            { emoji: '🎯', text: 'Personalized Matches' },
            { emoji: '🛡️', text: 'Fraud Protection' },
            { emoji: '📈', text: 'Track Your Progress' },
          ].map((feature, index) => (
            <div
              key={index}
              className="flex gap-3 items-start p-3 sm:p-4 rounded-lg bg-muted/50 border border-border/30 hover:border-accent/50 transition-colors"
            >
              <span className="text-2xl flex-shrink-0">{feature.emoji}</span>
              <p className="font-medium text-foreground text-sm sm:text-base">{feature.text}</p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5 p-6 sm:p-8 text-center">
          <p className="text-base sm:text-lg text-muted-foreground mb-4">
            Ready to discover genuine opportunities and stay safe online?
          </p>
          <p className="text-xl sm:text-2xl font-bold text-foreground">
            Join our early access waitlist today.
          </p>
        </div>
      </div>
    </section>
  )
}
