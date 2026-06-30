'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { CheckCircle, Mail } from 'lucide-react'

export default function CTA() {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address')
      return
    }

    setIsLoading(true)
    setError('')

    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false)
      setSubmitted(true)
      setEmail('')
    }, 1000)
  }

  return (
    <section id="waitlist" className="relative px-4 py-16 sm:py-24 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 via-background to-accent/5">
      <div className="mx-auto max-w-3xl">
        <div className="rounded-3xl border border-primary/20 bg-card/80 backdrop-blur p-6 sm:p-8 lg:p-12">
          {!submitted ? (
            <>
              <div className="mb-8 sm:mb-10 text-center space-y-4">
                <h2 className="text-balance text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
                  Join the Early Access Waitlist
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
                  Be among the first to experience Morvara when we launch. Get exclusive early-bird benefits and help shape the future of opportunity discovery.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <div className="flex-1 relative">
                      <Mail className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground pointer-events-none" />
                      <input
                        type="email"
                        placeholder="you@example.com"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value)
                          setError('')
                        }}
                        className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-sm sm:text-base"
                      />
                    </div>
                    <Button
                      type="submit"
                      disabled={isLoading}
                      className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground px-6 sm:px-8 py-3"
                    >
                      {isLoading ? 'Joining...' : 'Join Now'}
                    </Button>
                  </div>
                </div>

                {error && (
                  <p className="text-sm text-destructive text-center">{error}</p>
                )}

                <p className="text-xs sm:text-sm text-muted-foreground text-center">
                  We&apos;ll keep you updated on our launch. No spam, ever. Privacy guaranteed.
                </p>
              </form>

              {/* Benefits */}
              <div className="mt-8 sm:mt-10 space-y-4 border-t border-border pt-8 sm:pt-10">
                <p className="text-sm font-semibold text-foreground">✨ Early access members get:</p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {['Priority onboarding', 'Lifetime supporter status', 'Exclusive community access', 'Founding member badge'].map((benefit, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-primary/5 border border-primary/10 hover:border-primary/30 transition-colors">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                      <span className="text-sm text-foreground font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <div className="py-12 sm:py-16 text-center space-y-6">
              <div className="mb-4 flex justify-center">
                <div className="relative">
                  <CheckCircle className="h-20 w-20 text-accent animate-pulse" />
                </div>
              </div>
              <div>
                <h3 className="mb-2 text-2xl sm:text-3xl font-bold text-foreground">
                  Welcome to Morvara!
                </h3>
                <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
                  Thank you for joining our waitlist. We&apos;ll be in touch soon with exclusive launch updates, early access details, and special founder benefits.
                </p>
              </div>
              <Button
                onClick={() => {
                  setSubmitted(false)
                  setEmail('')
                }}
                variant="outline"
                className="border-border hover:bg-muted w-full sm:w-auto"
              >
                Join with Another Email
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
