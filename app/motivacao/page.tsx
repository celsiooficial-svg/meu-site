import { Navigation } from '@/components/navigation'

const motivationalQuotes = [
  {
    id: 1,
    emoji: '💪',
    title: 'Frase #1',
    quote: 'Disciplina vence motivação todos os dias.'
  },
  {
    id: 2,
    emoji: '💰',
    title: 'Frase #2',
    quote: 'Se fosse fácil, todo mundo já seria rico.'
  },
  {
    id: 3,
    emoji: '🚀',
    title: 'Frase #3',
    quote: 'O teu futuro depende do que tu fazes hoje.'
  },
  {
    id: 4,
    emoji: '🔥',
    title: 'Frase #4',
    quote: 'Começa mesmo sem estar pronto.'
  }
]

export const metadata = {
  title: 'CDL - Motivação',
  description: 'Motivação diária para impulsionar seu crescimento financeiro e pessoal.'
}

export default function MotivacaoPage() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_#111_0%,_#000_100%)]">
      <Navigation />
      
      <div className="container mx-auto px-5 py-12">
        <h1 className="text-5xl font-bold text-center text-primary mb-12">
          Motivação Diária
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
          {motivationalQuotes.map((quote) => (
            <div
              key={quote.id}
              className="bg-card/50 border border-primary/20 rounded-2xl p-6 transition-all duration-300 hover:translate-y-[-5px] hover:border-primary/60"
            >
              <h3 className="text-lg font-semibold text-primary mb-4">
                {quote.emoji} {quote.title}
              </h3>
              <p className="text-foreground/90 leading-relaxed">
                {quote.quote}
              </p>
            </div>
          ))}
        </div>
      </div>

      <footer className="text-center py-8 mt-12 opacity-60 text-sm">
        © 2026 CDL - Código do Lucro
      </footer>
    </div>
  )
}
