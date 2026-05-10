"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { heroSlides } from "@/lib/data"

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % heroSlides.length)
  }, [])

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  }, [])

  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [next, isPaused])

  return (
    <section
      className="relative h-[92vh] min-h-[560px] max-h-[800px] overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides */}
      {heroSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
          {/* Gradient overlay */}
          <div className={`absolute inset-0 bg-gradient-to-r ${slide.gradient}`} />

          {/* Content */}
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full">
              <div
                className={`max-w-2xl transition-all duration-700 ${
                  index === current ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
              >
                <span className="inline-block bg-white/20 backdrop-blur-sm text-white border border-white/30 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                  Book & Toy Library for All Ages
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-4 drop-shadow-lg">
                  {slide.title}
                </h1>
                <p className="text-lg sm:text-xl text-white/90 font-semibold mb-3 drop-shadow">
                  {slide.subtitle}
                </p>
                <p className="text-base text-white/80 mb-8 max-w-lg leading-relaxed">
                  {slide.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href={slide.ctaHref}
                    className="inline-flex items-center justify-center bg-white text-emerald-600 px-7 py-3.5 rounded-full font-bold text-base shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
                  >
                    {slide.cta}
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                  <Link
                    href={slide.secondaryCtaHref}
                    className="inline-flex items-center justify-center border-2 border-white/70 text-white px-7 py-3.5 rounded-full font-bold text-base hover:bg-white/10 hover:border-white transition-all duration-200"
                  >
                    {slide.secondaryCta}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Decorative floating shapes */}
      <div className="absolute top-16 right-24 w-16 h-16 rounded-full bg-white/10 animate-float pointer-events-none z-20 hidden lg:block" />
      <div className="absolute bottom-24 right-36 w-10 h-10 rounded-full bg-white/10 animate-float-delayed pointer-events-none z-20 hidden lg:block" />
      <div className="absolute top-32 right-64 w-6 h-6 rounded-full bg-yellow-300/30 animate-star-spin pointer-events-none z-20 hidden lg:block" />

      {/* Prev / Next arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white flex items-center justify-center hover:bg-white/40 transition-all duration-200"
        aria-label="Previous slide"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white flex items-center justify-center hover:bg-white/40 transition-all duration-200"
        aria-label="Next slide"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`transition-all duration-300 rounded-full ${
              index === current ? "w-8 h-3 bg-white" : "w-3 h-3 bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
