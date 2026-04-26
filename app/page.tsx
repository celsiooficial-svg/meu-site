'use client'

import { Wallet, Rocket, BarChart3 } from 'lucide-react'
import { Navigation } from '@/components/navigation'
import { FeatureCard } from '@/components/feature-card'
import { OnlineBadge } from '@/components/online-badge'
import { SocialLinks } from '@/components/social-links'
import { CommunitySection } from '@/components/community-section'

export default function CDLLandingPage() {

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_#111_0%,_#000_100%)]">
      <Navigation />
      <div className="container mx-auto px-5 py-12 text-center">
        {/* Logo */}
        <h1 className="text-5xl md:text-6xl font-bold tracking-widest text-primary mb-2">
          CDL
        </h1>
        <p className="text-foreground/85 text-lg mb-6">Código Do Lucro</p>

        {/* Online Badge */}
        <OnlineBadge count={200} />

        {/* Feature Cards */}
        <div className="mt-10 grid gap-4 md:grid-cols-3 max-w-4xl mx-auto">
          <FeatureCard
            icon={<Wallet className="w-8 h-8 text-primary" />}
            title="Comunidade CDL"
            description="Um espaço para crescimento, foco e mentalidade financeira forte."
          />
          <FeatureCard
            icon={<Rocket className="w-8 h-8 text-primary" />}
            title="Evolução"
            description="Aprenda, melhore e construa o seu futuro passo a passo."
          />
          <FeatureCard
            icon={<BarChart3 className="w-8 h-8 text-primary" />}
            title="Oportunidades"
            description="Ideias e estratégias para desenvolvimento financeiro responsável."
          />
        </div>

        {/* Founder Button */}
        <a
          href="https://wa.me/244975179612"
          className="inline-flex items-center gap-2 mt-10 px-7 py-4 bg-primary text-primary-foreground font-bold rounded-xl text-lg shadow-lg hover:scale-105 transition-transform"
        >
          <span className="text-xl">🔥</span>
          FUNDADOR : CELSIO AO
        </a>

        {/* Social Links */}
        <SocialLinks />

        {/* Community Section */}
        <CommunitySection />

        {/* Footer */}
        <footer className="mt-16 text-foreground/60 text-sm">
          © 2026 CDL - Código Do Lucro | Fundador: Celsio AO
        </footer>
      </div>
    </div>
  )
}
