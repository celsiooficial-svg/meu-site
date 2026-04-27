'use client'

import { Navigation } from '@/components/navigation'
import { TipCard } from '@/components/tip-card'

export default function DicasPage() {
  const tips = [
    {
      number: 1,
      title: 'Venda Serviços Digitais',
      description: 'Comece vendendo serviços simples online como edição de vídeo ou design básico.'
    },
    {
      number: 2,
      title: 'Aprenda Habilidades Digitais',
      description: 'Aprenda uma habilidade digital (marketing, edição, programação ou copywriting).'
    },
    {
      number: 3,
      title: 'Use Redes Sociais',
      description: 'Use redes sociais para divulgar qualquer serviço ou produto que você vender.'
    },
    {
      number: 4,
      title: 'Construa Disciplina',
      description: 'Não espere motivação, construa disciplina diária mesmo sem vontade.'
    },
    {
      number: 5,
      title: 'Reinvista seus Ganhos',
      description: 'Reinvista seus primeiros ganhos em aprendizado e ferramentas.'
    },
    {
      number: 6,
      title: 'Foco em Uma Fonte',
      description: 'Foque em uma única fonte de renda até começar a gerar dinheiro consistente.'
    }
  ]

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_#111_0%,_#000_100%)]">
      <Navigation />

      <main className="container mx-auto px-5 py-12">
        <h1 className="text-center text-4xl md:text-5xl font-bold text-primary mb-12">
          💡 Dicas Para Ganhar Dinheiro
        </h1>

        {/* Tips Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {tips.map((tip) => (
            <TipCard
              key={tip.number}
              number={tip.number}
              title={tip.title}
              description={tip.description}
            />
          ))}
        </div>

        {/* Ads Placeholder */}
        <div className="my-12 p-6 text-center bg-card/50 rounded-xl border border-primary/10">
          <p className="text-foreground/60">
            🔥 Espaço para anúncio (AdSense vai entrar aqui depois)
          </p>
        </div>

        {/* Footer */}
        <footer className="mt-16 text-center text-foreground/60 text-sm border-t border-primary/10 pt-8">
          © 2026 CDL - Código Do Lucro
        </footer>
      </main>
    </div>
  )
}
