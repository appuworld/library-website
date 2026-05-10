"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/membership", label: "Membership" },
  { href: "/contact", label: "Contact Us" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [isOpen])

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled ? "bg-white shadow-md" : "bg-white/95 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center shadow-md group-hover:shadow-emerald-200 transition-shadow">
                <span className="text-white font-black text-lg leading-none">A</span>
              </div>
              <div className="leading-tight">
                <span className="text-xl font-black text-emerald-500">Appu</span>
                <span className="text-xl font-black text-emerald-500"> World</span>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 rounded-full text-sm transition-all duration-200 ${
                    pathname === link.href
                      ? "bg-emerald-100 text-emerald-600 font-bold"
                      : "text-slate-700 hover:bg-emerald-50 hover:text-emerald-500 font-semibold"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/membership"
                className="ml-3 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-5 py-2 rounded-full text-sm font-bold shadow-md hover:shadow-emerald-200 hover:scale-105 transition-all duration-200"
              >
                Join Now
              </Link>
            </nav>

            {/* Mobile hamburger */}
            <button
              onClick={() => setIsOpen(true)}
              className="md:hidden p-2 rounded-lg text-slate-700 hover:bg-emerald-50 transition-colors"
              aria-label="Open menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Backdrop */}
      <div
        aria-hidden="true"
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Side drawer — slides in from the right */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={`fixed top-0 right-0 h-full w-72 bg-white z-50 shadow-2xl flex flex-col transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
          <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center">
              <span className="text-white font-black text-base leading-none">A</span>
            </div>
            <div className="leading-tight">
              <span className="text-lg font-black text-emerald-500">Appu</span>
              <span className="text-lg font-black text-emerald-500"> World</span>
            </div>
          </Link>
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
            className="w-9 h-9 rounded-full bg-slate-100 hover:bg-emerald-100 flex items-center justify-center text-slate-600 hover:text-emerald-500 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex-1 overflow-y-auto px-4 py-6 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                pathname === link.href
                  ? "bg-emerald-100 text-emerald-600"
                  : "text-slate-700 hover:bg-emerald-50 hover:text-emerald-500"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA at the bottom */}
        <div className="px-4 py-5 border-t border-slate-100">
          <Link
            href="/membership"
            onClick={() => setIsOpen(false)}
            className="block bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-4 py-3.5 rounded-xl text-sm font-bold text-center shadow-md hover:shadow-emerald-200 transition-shadow"
          >
            Join Now — from ₹499/month
          </Link>
        </div>
      </div>
    </>
  )
}
