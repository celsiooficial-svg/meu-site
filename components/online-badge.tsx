"use client"

import { useEffect, useState } from "react"
import { Users } from "lucide-react"

interface OnlineBadgeProps {
  count: number
}

export function OnlineBadge({ count }: OnlineBadgeProps) {
  const [displayCount, setDisplayCount] = useState(count)

  useEffect(() => {
    // Simulate fluctuating online count
    const interval = setInterval(() => {
      const variation = Math.floor(Math.random() * 21) - 10 // -10 to +10
      setDisplayCount(count + variation)
    }, 3000)

    return () => clearInterval(interval)
  }, [count])

  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/15 border border-emerald-500/40 rounded-full">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
      </span>
      <Users className="w-4 h-4 text-emerald-400" />
      <span className="text-emerald-400 font-bold text-sm">
        +{displayCount} pessoas online agora
      </span>
    </div>
  )
}
