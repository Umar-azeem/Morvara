import Image from 'next/image'
import { CheckCircle, Users, Target, Zap } from 'lucide-react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Button } from '@/components/ui/button'

export const metadata = {
  title: 'About Morvara - Our Mission & Vision',
  description: 'Learn about Morvara&apos;s mission to eliminate fraud and help millions discover genuine opportunities.',
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-background to-background">
      <Header />

      {/* Hero Section */}
      <section className="relative px-4 py-16 sm:py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center space-y-6">
            <div className="inline-block">
              <span className="rounded-full bg-accent/10 px-4 py-2 text-sm font-medium text-accent">
                Our Story
              </span>
            </div>
            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Empowering Millions to{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Find Genuine Opportunities
              </span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground leading-relaxed">
              At Morvara, we believe everyone deserves access to safe, verified opportunities. Our mission is to eliminate fraud and unlock potential for students, professionals, and entrepreneurs worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 bg-primary/5">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Our Mission</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To eliminate fraud and empower millions of young professionals, students, and job seekers by providing AI-powered trust intelligence and verified opportunity discovery.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Our Vision</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  A world where everyone has equal access to genuine opportunities, can navigate the digital landscape safely, and achieve their career and life goals without fear of fraud.
                </p>
              </div>
            </div>
            <div className="relative h-96 sm:h-full min-h-96 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/about-mission.png"
                alt="Our Mission - Diverse professionals collaborating"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do at Morvara
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Target,
                title: 'Trust',
                description: 'We build trustworthy AI systems that protect users from fraud and deception.',
              },
              {
                icon: Users,
                title: 'Inclusion',
                description: 'Equal opportunities for everyone, regardless of background or geography.',
              },
              {
                icon: Zap,
                title: 'Innovation',
                description: 'Cutting-edge AI to stay ahead of fraud and serve users better.',
              },
              {
                icon: CheckCircle,
                title: 'Integrity',
                description: 'Honest, transparent practices in everything we do.',
              },
            ].map((value, index) => {
              const Icon = value.icon
              return (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card/50 p-8 backdrop-blur hover:border-accent/50 hover:bg-card/80 transition-all"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="relative z-10 space-y-3">
                    <div className="inline-flex rounded-lg bg-primary/10 p-3 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">By The Numbers</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The scale of our impact in protecting users
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '500K+', label: 'Early Waitlist Members' },
              { number: '99%', label: 'Scam Detection Rate' },
              { number: '150+', label: 'Countries Served' },
              { number: '1M+', label: 'Opportunities Verified' },
            ].map((stat, index) => (
              <div key={index} className="text-center space-y-2">
                <p className="text-4xl sm:text-5xl font-bold text-primary">{stat.number}</p>
                <p className="text-muted-foreground text-base sm:text-lg">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 sm:h-full min-h-96 rounded-2xl overflow-hidden shadow-lg order-2 lg:order-1">
              <Image
                src="/security-shield.png"
                alt="Security Protection"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Why Choose Morvara?</h2>
              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <div className="mt-1 flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-lg">AI-Powered Protection</p>
                    <p className="text-muted-foreground">Machine learning models trained on millions of verified cases</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="mt-1 flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-lg">Personalized Discovery</p>
                    <p className="text-muted-foreground">Opportunities matched to your unique skills and goals</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="mt-1 flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-lg">Privacy First</p>
                    <p className="text-muted-foreground">Your data is encrypted and never sold to third parties</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="mt-1 flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-lg">24/7 Support</p>
                    <p className="text-muted-foreground">Expert team ready to help you at any time</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 bg-primary/5">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Built by Experts</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our team combines expertise in AI, cybersecurity, and career development
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { role: 'CEO & Founder', expertise: 'AI & Fraud Detection' },
              { role: 'CTO', expertise: 'Machine Learning' },
              { role: 'Head of Security', expertise: 'Cybersecurity Expert' },
              { role: 'VP Product', expertise: 'Career Technology' },
              { role: 'Head of Data', expertise: 'Data Science' },
              { role: 'Community Lead', expertise: 'User Experience' },
            ].map((member, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card/50 p-8 backdrop-blur hover:border-accent/50 hover:bg-card/80 transition-all text-center"
              >
                <div className="space-y-2">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent mx-auto mb-4" />
                  <p className="font-semibold text-foreground text-lg">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.expertise}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Ready to Discover Your Next Opportunity?
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Join thousands of students, professionals, and job seekers who are already part of the Morvara community. Get early access and start discovering verified opportunities today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto"
            >
              Join the Waitlist
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-border hover:bg-muted w-full sm:w-auto"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
