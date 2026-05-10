"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { testimonials } from "@/lib/data"

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <span key={star} className={star <= rating ? "text-yellow-400" : "text-gray-200"}>
          ★
        </span>
      ))}
    </div>
  )
}

export default function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }, [])

  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(next, 4500)
    return () => clearInterval(timer)
  }, [next, isPaused])

  const getIndex = (offset: number) =>
    (current + offset + testimonials.length) % testimonials.length

  return (
    <section
      className="relative py-20 bg-gradient-to-br from-emerald-50 via-white to-green-50 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Decorative stars */}
      <div className="absolute pointer-events-none select-none text-emerald-200 text-6xl font-bold left-8 top-8 animate-star-spin hidden lg:block">✦</div>
      <div className="absolute pointer-events-none select-none text-emerald-200 text-4xl right-12 bottom-12 animate-float hidden lg:block">✧</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-emerald-100 text-emerald-600 px-4 py-1.5 rounded-full text-sm font-bold mb-4">
            Happy Families
          </span>
          <h2 className="text-4xl font-black text-slate-800 mb-4">
            What Parents Are <span className="text-emerald-500">Saying</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Thousands of families trust Appu World to nurture their children&apos;s love for reading and learning.
          </p>
        </div>

        {/* Cards */}
        <div className="relative">
          {/* Desktop: show 3 */}
          <div className="hidden lg:grid grid-cols-3 gap-6">
            {[-1, 0, 1].map((offset) => {
              const t = testimonials[getIndex(offset)]
              const isCenter = offset === 0
              return (
                <div
                  key={t.id}
                  className={`bg-white rounded-3xl p-7 shadow-lg transition-all duration-500 ${
                    isCenter
                      ? "scale-105 shadow-xl border-2 border-emerald-100"
                      : "scale-95 opacity-70"
                  }`}
                >
                  <StarRating rating={t.rating} />
                  <p className="text-slate-600 mt-4 mb-6 leading-relaxed text-sm">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-emerald-200">
                      <Image src={t.avatar} alt={t.name} fill className="object-cover" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-800 text-sm">{t.name}</p>
                      <p className="text-slate-500 text-xs">{t.role} · {t.location}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Mobile / tablet: single card */}
          <div className="lg:hidden">
            {(() => {
              const t = testimonials[current]
              return (
                <div className="bg-white rounded-3xl p-7 shadow-xl border-2 border-emerald-100 max-w-lg mx-auto">
                  <StarRating rating={t.rating} />
                  <p className="text-slate-600 mt-4 mb-6 leading-relaxed">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-emerald-200">
                      <Image src={t.avatar} alt={t.name} fill className="object-cover" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-800">{t.name}</p>
                      <p className="text-slate-500 text-sm">{t.role} · {t.location}</p>
                    </div>
                  </div>
                </div>
              )
            })()}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`transition-all duration-300 rounded-full ${
                i === current ? "w-6 h-2.5 bg-emerald-500" : "w-2.5 h-2.5 bg-emerald-200 hover:bg-emerald-300"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
