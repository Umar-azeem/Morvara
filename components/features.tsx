'use client'

import Image from 'next/image'
import { Shield, Zap, Search, CheckCircle, TrendingUp, Users } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Scam Detection',
    description: 'AI-powered analysis to identify phishing, fraud, and impersonation attempts in real-time.',
  },
  {
    icon: Zap,
    title: 'Instant Verification',
    description: 'Cross-check entities against legal registries and trust databases for authenticity.',
  },
  {
    icon: Search,
    title: 'Smart Discovery',
    description: 'Find personalized opportunities matched to your skills, interests, and goals.',
  },
  {
    icon: TrendingUp,
    title: 'Opportunity Matching',
    description: 'Dual-scoring engine for fit and impact. Get the best opportunities for you.',
  },
  {
    icon: CheckCircle,
    title: 'Verified Sources',
    description: 'All opportunities vetted and verified. No spam, no scams, only genuine paths.',
  },
  {
    icon: Users,
    title: 'Your Personal Assistant',
    description: 'AI-powered guidance on next steps and actionable roadmaps to succeed.',
  },
]

export default function Features() {
  return (
    <section id="features" className="relative px-4 py-20 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-primary/5 to-transparent">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center space-y-4">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Powerful Features for Your Success
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Everything you need to navigate opportunities safely and discover what&apos;s right for you.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card/50 p-6 sm:p-8 backdrop-blur transition-all hover:border-accent/50 hover:bg-card/80 hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="relative z-10">
                  <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3 transition-transform group-hover:scale-110 group-hover:bg-primary/20">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-foreground">{feature.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Features Showcase Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
              Advanced AI Technology at Your Service
            </h3>
            <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
              Our proprietary AI engine processes millions of data points to verify opportunities and detect fraudulent schemes. Real-time alerts keep you protected.
            </p>
            <ul className="space-y-4">
              <li className="flex gap-3 items-start">
                <div className="mt-1 flex-shrink-0">
                  <CheckCircle className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">99% Scam Detection Rate</p>
                  <p className="text-sm text-muted-foreground">Industry-leading accuracy in fraud identification</p>
                </div>
              </li>
              <li className="flex gap-3 items-start">
                <div className="mt-1 flex-shrink-0">
                  <CheckCircle className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Instant Verification</p>
                  <p className="text-sm text-muted-foreground">Get real-time insights on any opportunity</p>
                </div>
              </li>
              <li className="flex gap-3 items-start">
                <div className="mt-1 flex-shrink-0">
                  <CheckCircle className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Personalized Recommendations</p>
                  <p className="text-sm text-muted-foreground">AI learns your preferences and goals</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="relative h-80 sm:h-96 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/features-showcase.png"
              alt="Advanced AI Technology"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}
