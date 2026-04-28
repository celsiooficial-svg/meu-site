'use client'

export function DailyMotivation() {
  const quotes = [
    "Ninguém vai fazer por ti. Levanta e constrói tua vida.",
    "O sucesso começa quando a desculpa acaba.",
    "Pequenas ações todos os dias criam grandes resultados."
  ]

  return (
    <div className="bg-white/5 border border-primary/25 rounded-xl p-8">
      <h2 className="text-3xl font-bold text-primary mb-8 text-center">
        🔥 Motivação diária
      </h2>
      
      <div className="space-y-6">
        {quotes.map((quote, index) => (
          <div
            key={index}
            className="p-6 bg-primary/10 border-l-4 border-primary rounded-lg hover:bg-primary/15 transition-colors"
          >
            <p className="text-lg text-foreground italic leading-relaxed">
              "{quote}"
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
