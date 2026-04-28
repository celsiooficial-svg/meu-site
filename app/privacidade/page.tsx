import { Navigation } from '@/components/navigation'

export const metadata = {
  title: 'CDL - Política de Privacidade',
  description: 'Política de privacidade e proteção de dados do site CDL - Código do Lucro.'
}

export default function PrivacidadePage() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_#111_0%,_#000_100%)]">
      <Navigation />
      
      <div className="container mx-auto px-5 py-12 max-w-3xl">
        <h1 className="text-5xl font-bold text-center text-primary mb-12">
          Política de Privacidade
        </h1>

        <div className="space-y-8">
          {/* Section 1 */}
          <div className="bg-card/50 border border-primary/20 rounded-2xl p-8">
            <p className="text-foreground/85 leading-relaxed text-lg">
              Este site utiliza cookies e serviços de publicidade como o Google AdSense para exibir anúncios.
            </p>
          </div>

          {/* Section 2 */}
          <div className="bg-card/50 border border-primary/20 rounded-2xl p-8">
            <p className="text-foreground/85 leading-relaxed text-lg">
              Coletamos dados anónimos para melhorar a experiência do utilizador.
            </p>
          </div>

          {/* Section 3 */}
          <div className="bg-card/50 border border-primary/20 rounded-2xl p-8">
            <p className="text-foreground/85 leading-relaxed text-lg">
              Não vendemos dados pessoais.
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
