'use client'

import Link from 'next/link'
import { Shield, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border/50 bg-gradient-to-b from-card/30 to-background px-4 py-12 sm:py-16 lg:py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Main Footer Content */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-12 sm:mb-16">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Shield className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold text-foreground">Morvara</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Your AI-powered trust and opportunity intelligence platform. Discover genuine opportunities, detect scams, and build your future safely.
            </p>
            <div className="pt-2 space-y-2">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>hello@morvara.ai</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>United States</span>
              </div>
            </div>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Product</h4>
            <ul className="space-y-2">
              <li>
                <a href="/#features" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="/#how-it-works" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="/#testimonials" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  User Stories
                </a>
              </li>
              <li>
                <a href="/#waitlist" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Early Access
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Blog & Resources
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Press Kit
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Social */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Legal & Social</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
            <div className="pt-4 space-y-2">
              <p className="text-xs font-semibold text-muted-foreground">Follow Us</p>
              <div className="flex gap-4">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium">
                  Twitter
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium">
                  LinkedIn
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium">
                  Discord
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mb-12 sm:mb-16 rounded-2xl border border-border/50 bg-primary/5 p-6 sm:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">Stay Updated</h3>
              <p className="text-sm text-muted-foreground">Get the latest news on scam alerts, new opportunities, and Morvara updates.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
              />
              <button className="px-4 py-2 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground font-medium text-sm transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border/50 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs sm:text-sm text-muted-foreground text-center sm:text-left">
              © {currentYear} Morvara. All rights reserved. | Made with ❤️ for students, professionals & job seekers.
            </p>
            <div className="flex gap-4 sm:gap-6">
              <a href="#" className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors font-medium">
                Status
              </a>
              <a href="#" className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors font-medium">
                Support
              </a>
              <a href="#" className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors font-medium">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
