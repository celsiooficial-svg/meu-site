import { MessageCircle } from 'lucide-react'

export function CommunitySection() {
  return (
    <div className="mt-12 max-w-md mx-auto">
      <div className="p-8 bg-white/5 rounded-xl border border-primary/25">
        <h3 className="text-2xl font-bold text-primary mb-4">
          🔥 Comunidade CDL
        </h3>
        <p className="text-foreground mb-6">
          Entra na nossa comunidade para receber dicas, motivação e ideias de negócios diariamente.
        </p>
        <a
          href="https://wa.me/244975179612"
          className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 bg-primary text-primary-foreground font-bold rounded-lg hover:scale-105 transition-transform"
        >
          <MessageCircle className="w-5 h-5" />
          Entrar no WhatsApp
        </a>
      </div>
    </div>
  )
}
