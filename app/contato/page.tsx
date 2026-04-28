import { Navigation } from '@/components/navigation'

export const metadata = {
  title: 'CDL - Contato',
  description: 'Contacte-nos para parcerias, dúvidas ou sugestões sobre o site CDL - Código do Lucro.'
}

export default function ContatoPage() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_#111_0%,_#000_100%)]">
      <Navigation />
      
      <div className="container mx-auto px-5 py-12 max-w-3xl">
        <h1 className="text-5xl font-bold text-center text-primary mb-12">
          Contato
        </h1>

        <div className="space-y-8">
          {/* Email Section */}
          <div className="bg-card/50 border border-primary/20 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-primary mb-4">Email</h2>
            <a 
              href="mailto:celsiooficial@gmail.com"
              className="text-lg text-foreground/85 hover:text-primary transition-colors break-all"
            >
              celsiooficial@gmail.com
            </a>
          </div>

          {/* Message Section */}
          <div className="bg-card/50 border border-primary/20 rounded-2xl p-8">
            <p className="text-foreground/85 leading-relaxed text-lg">
              Para parcerias ou dúvidas, entra em contacto.
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
