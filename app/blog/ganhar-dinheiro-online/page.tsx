'use client'

import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { ArrowLeft } from 'lucide-react'

export default function GanharDinheiroOnlinePage() {
  const methods = [
    {
      icon: '🤝',
      title: 'Marketing de afiliados',
      description: 'Promove produtos de terceiros e ganha comissão por cada venda.'
    },
    {
      icon: '📹',
      title: 'Criação de conteúdo',
      description: 'YouTube, TikTok, Instagram - monetiza o teu conteúdo e audiência.'
    },
    {
      icon: '💼',
      title: 'Freelancer',
      description: 'Oferece serviços como design, programação, escrita ou consultoria.'
    },
    {
      icon: '📝',
      title: 'Blog monetizado com AdSense',
      description: 'Cria um blog, atrai visitantes e ganha através de anúncios.'
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
            Como ganhar dinheiro online
          </h1>
          
          <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
            Existem várias formas de ganhar dinheiro na internet:
          </p>

          {/* Methods Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {methods.map((method, index) => (
              <div
                key={index}
                className="bg-white/5 border border-primary/25 rounded-xl p-6 hover:border-primary/50 transition-colors"
              >
                <div className="text-4xl mb-4">
                  {method.icon}
                </div>
                <h2 className="text-xl font-bold text-primary mb-3">
                  {method.title}
                </h2>
                <p className="text-foreground/75 leading-relaxed">
                  {method.description}
                </p>
              </div>
            ))}
          </div>

          {/* Key Message */}
          <div className="bg-primary/10 border border-primary/40 rounded-xl p-8 mb-12">
            <p className="text-xl font-semibold text-primary text-center">
              O segredo não é escolher, é começar.
            </p>
          </div>

          {/* CTA Section */}
          <div className="p-8 bg-white/5 border border-primary/25 rounded-xl text-center">
            <h3 className="text-xl font-semibold text-primary mb-4">
              Pronto para começar a ganhar?
            </h3>
            <p className="text-foreground/75 mb-6">
              Descobre mais estratégias e dicas na nossa comunidade.
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
