"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"

interface LoginFormProps {
  onSubmit: () => void
  showPanel: boolean
}

export function LoginForm({ onSubmit, showPanel }: LoginFormProps) {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit()
  }

  return (
    <div className="mt-12 max-w-sm mx-auto">
      <h3 className="text-xl font-semibold text-foreground mb-4">
        Acesso de Membros
      </h3>

      {!showPanel ? (
        <form onSubmit={handleSubmit} className="space-y-3">
          <Input
            type="text"
            placeholder="Usuário"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="bg-white/10 border-primary/30 text-foreground placeholder:text-foreground/50"
          />
          <Input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-white/10 border-primary/30 text-foreground placeholder:text-foreground/50"
          />
          <Button
            type="submit"
            className="w-full bg-primary text-primary-foreground font-bold hover:bg-primary/90"
          >
            Entrar
          </Button>
        </form>
      ) : (
        <div className="p-6 bg-white/5 rounded-xl border border-primary/25 animate-pulse">
          <div className="flex items-center justify-center gap-3">
            <Loader2 className="w-6 h-6 text-primary animate-spin" />
            <h2 className="text-xl font-semibold text-primary">
              A entrar no Discord...
            </h2>
          </div>
        </div>
      )}
    </div>
  )
}
