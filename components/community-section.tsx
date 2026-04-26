import { MessageCircle } from 'lucide-react'

export function CommunitySection() {
  return (
    <div className="mt-12 max-w-md mx-auto">
      <div className="p-8 bg-white/5 rounded-xl border border-primary/25">
        <h3 className="text-xl font-semibold text-foreground mb-3">
          Junte-se à Comunidade CDL
        </h3>
        <p className="text-foreground/70 text-sm mb-6">
          Conecte-se com nossa comunidade no WhatsApp e receba dicas exclusivas.
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
