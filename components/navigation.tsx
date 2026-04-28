'use client'

import Link from 'next/link'

export function Navigation() {
  return (
    <header className="sticky top-0 z-50 bg-black/85 border-b border-primary/10">
      <div className="container mx-auto px-5 py-4 flex justify-between items-center">
        <Link href="/" className="text-primary font-bold text-lg">
          💰 CDL
        </Link>
        <nav className="flex gap-6">
          <Link href="/" className="text-foreground hover:text-primary transition-colors">
            Início
          </Link>
          <Link href="/blog" className="text-foreground hover:text-primary transition-colors">
            Blog
          </Link>
          <Link href="/dicas" className="text-foreground hover:text-primary transition-colors">
            Dicas
          </Link>
          <Link href="/motivacao" className="text-foreground hover:text-primary transition-colors">
            Motivação
          </Link>
          <Link href="/negocios" className="text-foreground hover:text-primary transition-colors">
            Negócios
          </Link>
        </nav>
      </div>
    </header>
  )
}
