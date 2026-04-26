interface TipCardProps {
  number: number
  title: string
  description: string
}

export function TipCard({ number, title, description }: TipCardProps) {
  return (
    <div className="bg-card hover:border-primary border border-primary/20 rounded-2xl p-5 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
      <h3 className="text-lg font-bold text-primary mb-3">Dica #{number}</h3>
      <p className="text-foreground/80 leading-relaxed mb-4">{description}</p>
      <button className="px-4 py-2 bg-primary text-primary-foreground font-bold rounded-lg text-sm hover:scale-105 transition-transform">
        Ler mais
      </button>
    </div>
  )
}
