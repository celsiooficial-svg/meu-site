import type { ReactNode } from "react"

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-white/5 border border-primary/25 rounded-2xl p-6 transition-transform hover:-translate-y-1 hover:border-primary/40">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-foreground/70 text-sm leading-relaxed">{description}</p>
    </div>
  )
}
