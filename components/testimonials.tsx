'use client'

import { Star } from 'lucide-react'

const testimonials = [
  {
    quote: "I was about to fall for a job scam until Morvara flagged it. Saved me from losing money I couldn't afford to lose.",
    author: 'Sarah M.',
    role: 'Student',
    avatar: '👩‍🎓',
  },
  {
    quote: 'Finding legitimate scholarships has been such a pain. Morvara made it so easy to discover opportunities that actually match my profile.',
    author: 'James K.',
    role: 'Recent Graduate',
    avatar: '👨‍🏫',
  },
  {
    quote: 'As a freelancer, I deal with sketchy offers all the time. Having an AI that verifies opportunities has been a game-changer for my peace of mind.',
    author: 'Maria L.',
    role: 'Freelancer',
    avatar: '👩‍💼',
  },
  {
    quote: 'The personalized startup program recommendations have been incredibly valuable. It feels like having a career coach in my pocket.',
    author: 'David T.',
    role: 'Young Professional',
    avatar: '👨‍💻',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative px-4 py-20 sm:px-6 lg:px-8 bg-gradient-to-b from-accent/5 via-transparent to-primary/5">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 sm:mb-16 text-center space-y-4">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Stories from Our Community
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Real people discovering real opportunities while staying protected from fraud.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-border/50 bg-card/50 p-6 sm:p-8 backdrop-blur transition-all hover:border-accent/50 hover:bg-card/80 hover:shadow-lg hover:shadow-primary/10 flex flex-col h-full"
            >
              {/* Stars */}
              <div className="mb-4 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-primary text-primary"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="mb-6 flex-grow text-sm sm:text-base text-muted-foreground leading-relaxed italic">
                &quot;{testimonial.quote}&quot;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-border/30">
                <div className="text-3xl flex-shrink-0">{testimonial.avatar}</div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-foreground truncate">{testimonial.author}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video Testimonial Placeholder */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6">Watch video testimonials from our community members</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="relative h-48 rounded-2xl bg-muted border-2 border-dashed border-border/40 flex items-center justify-center hover:border-primary/40 transition-colors group cursor-pointer"
              >
                <div className="text-center">
                  <div className="text-4xl mb-2 group-hover:scale-110 transition-transform">▶️</div>
                  <p className="text-sm text-muted-foreground">Community Story #{i}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
