import { Navigation } from '@/components/navigation'

export const metadata = {
  title: 'CDL - Termos de Uso',
  description: 'Termos de uso e condições do site CDL - Código do Lucro.'
}

export default function TermosUsoPage() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_#111_0%,_#000_100%)]">
      <Navigation />
      
      <div className="container mx-auto px-5 py-12 max-w-3xl">
        <h1 className="text-5xl font-bold text-center text-primary mb-12">
          Termos de Uso
        </h1>

        <div className="space-y-8">
          {/* Section 1 */}
          <div className="bg-card/50 border border-primary/20 rounded-2xl p-8">
            <p className="text-foreground/85 leading-relaxed text-lg">
              Ao usar este site, concordas com os nossos termos.
            </p>
          </div>

          {/* Section 2 */}
          <div className="bg-card/50 border border-primary/20 rounded-2xl p-8">
            <p className="text-foreground/85 leading-relaxed text-lg">
              O conteúdo é informativo e não garante resultados financeiros.
            </p>
          </div>
        </div>
      </div>

      <footer className="text-center py-8 mt-12 opacity-60 text-sm">
        © 2026 CDL - Código do Lucro
      </footer>
    </div>
  )
}
