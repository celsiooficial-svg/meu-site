'use client'

import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { ArrowLeft } from 'lucide-react'

export default function MotivacaoDiariaPage() {
  const quotes = [
    "Ninguém vai fazer por ti. Levanta e constrói tua vida.",
    "O sucesso começa quando a desculpa acaba.",
    "Pequenas ações todos os dias criam grandes resultados."
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
            🔥 Motivação diária
          </h1>
          
          {/* Quotes List */}
          <div className="space-y-8">
            {quotes.map((quote, index) => (
              <div
                key={index}
                className="bg-white/5 border border-primary/25 rounded-xl p-8 hover:border-primary/50 transition-colors"
              >
                <p className="text-xl text-foreground italic leading-relaxed">
                  "{quote}"
                </p>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 p-8 bg-white/5 border border-primary/25 rounded-xl text-center">
            <h3 className="text-xl font-semibold text-primary mb-4">
              Necessita de mais motivação?
            </h3>
            <p className="text-foreground/75 mb-6">
              Consulte a nossa secção de motivação para frases inspiradoras diárias.
            </p>
            <Link
              href="/motivacao"
              className="inline-block px-8 py-3 bg-primary text-primary-foreground font-bold rounded-lg hover:scale-105 transition-transform"
            >
              Ver mais motivação
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
