"use client"

import { useState } from "react"

export default function NewsletterForm() {
  const [email, setEmail] = useState("")
  const [done, setDone] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) setDone(true)
  }

  if (done) {
    return (
      <p className="text-white font-bold text-lg">
        You&apos;re subscribed! Thank you.
      </p>
    )
  }

  return (
    <form className="flex flex-col sm:flex-row gap-3" onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Your email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="flex-1 px-5 py-3.5 rounded-full text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-white/50 font-medium"
      />
      <button
        type="submit"
        className="bg-white text-emerald-500 px-7 py-3.5 rounded-full font-bold hover:shadow-lg hover:scale-105 transition-all duration-200 shrink-0"
      >
        Subscribe
      </button>
    </form>
  )
}
