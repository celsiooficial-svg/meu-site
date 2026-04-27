'use client'

import { Navigation } from '@/components/navigation'

const categories = [
  { icon: '💰', name: 'Dinheiro' },
  { icon: '🔥', name: 'Motivação' },
  { icon: '🧠', name: 'Mentalidade' },
  { icon: '📈', name: 'Sucesso' },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_#111_0%,_#000_100%)]">
      <Navigation />

      <div className="container mx-auto px-5 py-12">
        {/* Welcome Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">
            Bem-vindo ao Código do Lucro 💰
          </h1>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            O teu portal de motivação, disciplina e estratégias para ganhar dinheiro e mudar de vida.
          </p>
        </div>

        {/* Daily Phrase Section */}
        <div className="mb-16 max-w-3xl mx-auto">
          <div className="bg-white/5 border border-primary/25 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-primary mb-4">🔥 Frase do dia</h2>
            <p className="text-lg text-foreground italic">
              "Disciplina vence talento quando talento não tem disciplina."
            </p>
          </div>
        </div>

        {/* Categories Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">📚 Categorias</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {categories.map((category, index) => (
              <div
                key={index}
                className="bg-white/5 border border-primary/25 rounded-xl p-6 text-center hover:border-primary/50 transition-all duration-300 hover:translate-y-[-5px]"
              >
                <div className="text-4xl mb-3">{category.icon}</div>
                <p className="text-foreground font-semibold">{category.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">🚀 Começa aqui</h2>
          <p className="text-lg text-foreground/80 mb-8">
            Explora artigos que podem mudar a tua forma de pensar e agir.
          </p>
          <a
            href="#"
            className="inline-block px-8 py-4 bg-primary text-primary-foreground font-bold rounded-lg hover:scale-105 transition-transform duration-300 shadow-lg"
          >
            Explorar Artigos
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 text-center text-foreground/60 pb-8 text-sm">
        © 2026 CDL - Código do Lucro | Fundador: Celsio AO
      </footer>
    </div>
  )
}
