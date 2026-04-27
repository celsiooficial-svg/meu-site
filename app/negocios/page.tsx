import { Navigation } from '@/components/navigation'
import { TipCard } from '@/components/tip-card'

export const metadata = {
  title: 'CDL - Negócios',
  description: 'Ideias de negócios e oportunidades de renda para criar seu futuro financeiro',
}

const businessIdeas = [
  {
    number: 1,
    title: 'Ideia #1',
    description: 'Venda de produtos digitais (ebooks, cursos simples).',
  },
  {
    number: 2,
    title: 'Ideia #2',
    description: 'Freelancer em design ou edição de vídeo.',
  },
  {
    number: 3,
    title: 'Ideia #3',
    description: 'Criar página de conteúdo no TikTok e monetizar com afiliados.',
  },
  {
    number: 4,
    title: 'Ideia #4',
    description: 'Revender produtos online com lucro.',
  },
]

export default function NegociosPage() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_#111_0%,_#000_100%)]">
      <Navigation />
      
      <main className="container mx-auto px-5 py-12">
        <h1 className="text-5xl font-bold text-center text-primary mb-12 mt-6">
          Ideias de Negócios
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {businessIdeas.map((idea) => (
            <TipCard
              key={idea.number}
              title={idea.title}
              description={idea.description}
            />
          ))}
        </div>
      </main>

      <footer className="text-center py-8 opacity-60 text-sm">
        © 2026 CDL - Código do Lucro
      </footer>
    </div>
  )
}
