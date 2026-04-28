'use client'

import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { ArrowLeft } from 'lucide-react'

export default function HabitosFinanceirosPage() {
  const habits = [
    {
      number: 1,
      title: 'Acordar cedo',
      description: 'Pessoas de sucesso aproveitam melhor o dia.'
    },
    {
      number: 2,
      title: 'Aprender todos os dias',
      description: 'O conhecimento é o ativo mais poderoso.'
    },
    {
      number: 3,
      title: 'Evitar distrações',
      description: 'Foco gera resultados.'
    },
    {
      number: 4,
      title: 'Poupar dinheiro',
      description: 'Não é quanto ganhas, é quanto guardas.'
    },
    {
      number: 5,
      title: 'Executar ideias',
      description: 'Ideias sem ação não valem nada.'
    }
  ]

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_#111_0%,_#000_100%)]">
      <Navigation />
      
      <div className="container mx-auto px-5 py-12 max-w-3xl">
        {/* Back Button */}
        <Link href="/blog" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8">
          <ArrowLeft size={20} />
          Voltar ao Blog
        </Link>

        {/* Article Header */}
        <article className="text-foreground">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 text-balance">
            5 hábitos que podem mudar a tua vida financeira
          </h1>
          
          <p className="text-lg text-foreground/80 mb-12 leading-relaxed">
            Se queres melhorar a tua vida financeira, precisas mudar os teus hábitos primeiro.
          </p>

          {/* Habits List */}
          <div className="space-y-8">
            {habits.map((habit) => (
              <div
                key={habit.number}
                className="bg-white/5 border border-primary/25 rounded-xl p-8 hover:border-primary/50 transition-colors"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-lg flex items-center justify-center font-bold text-lg">
                    {habit.number}
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-primary mb-3">
                      {habit.title}
                    </h2>
                    <p className="text-foreground/75 text-lg leading-relaxed">
                      {habit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 p-8 bg-white/5 border border-primary/25 rounded-xl text-center">
            <h3 className="text-xl font-semibold text-primary mb-4">
              Pronto para começar?
            </h3>
            <p className="text-foreground/75 mb-6">
              Explora mais artigos e estratégias na nossa comunidade.
            </p>
            <Link
              href="/blog"
              className="inline-block px-8 py-3 bg-primary text-primary-foreground font-bold rounded-lg hover:scale-105 transition-transform"
            >
              Ver mais artigos
            </Link>
          </div>
        </article>
      </div>

      {/* Footer */}
      <footer className="text-center py-8 text-foreground/50 text-sm mt-16 border-t border-white/10">
        © 2026 CDL - Código do Lucro
      </footer>
    </div>
  )
}
