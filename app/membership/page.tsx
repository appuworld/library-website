"use client"

import { useState } from "react"
import Link from "next/link"
import { membershipPlans } from "@/lib/data"

const faqs = [
  {
    q: "How does the membership work?",
    a: "Pick a plan, choose your books and toys from our catalog, and we deliver them to your doorstep. Return them anytime and borrow new ones. It's that simple!",
  },
  {
    q: "Is there a minimum commitment period?",
    a: "No! All our plans are month-to-month. You can cancel anytime without any penalty. Annual plans offer a discount of up to 20%.",
  },
  {
    q: "Are the toys sanitised?",
    a: "Absolutely. Every toy is thoroughly cleaned, sanitised, and quality-checked before being dispatched to the next family.",
  },
  {
    q: "What happens if a book or toy is damaged?",
    a: "We understand accidents happen. Minor wear and tear is covered by us. For significant damage, a replacement fee may apply.",
  },
  {
    q: "Can I upgrade or downgrade my plan?",
    a: "Yes, you can change your plan at any time. Changes take effect from the next billing cycle.",
  },
  {
    q: "Do you deliver across India?",
    a: "We currently serve Bangalore, Mumbai, Chennai, Hyderabad, and Pune with more cities coming soon!",
  },
]

export default function MembershipPage() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly")
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-emerald-700 via-emerald-500 to-green-400 py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <span className="inline-block bg-white/20 border border-white/30 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            Membership Plans
          </span>
          <h1 className="text-4xl sm:text-5xl font-black mb-4">
            Choose the Perfect Plan
          </h1>
          <p className="text-white/80 text-lg max-w-xl mx-auto">
            Unlock unlimited reading and play with a plan designed for every reader in your family — kids, teens, and adults.
          </p>

          {/* Billing toggle */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <span className={`font-semibold text-sm ${billing === "monthly" ? "text-white" : "text-white/60"}`}>Monthly</span>
            <button
              onClick={() => setBilling((b) => (b === "monthly" ? "yearly" : "monthly"))}
              className={`relative w-14 h-7 rounded-full transition-colors duration-300 ${
                billing === "yearly" ? "bg-emerald-400" : "bg-white/30"
              }`}
              aria-label="Toggle billing period"
            >
              <span
                className={`absolute top-1 left-1 w-5 h-5 rounded-full bg-white shadow transition-transform duration-300 ${
                  billing === "yearly" ? "translate-x-7" : "translate-x-0"
                }`}
              />
            </button>
            <span className={`font-semibold text-sm ${billing === "yearly" ? "text-white" : "text-white/60"}`}>
              Yearly
              <span className="ml-2 bg-emerald-400 text-white text-xs px-2 py-0.5 rounded-full">Save 20%</span>
            </span>
          </div>
        </div>
      </section>

      {/* Wavy divider */}
      <div className="overflow-hidden leading-none -mt-1 bg-white">
        <svg viewBox="0 0 1200 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-10 rotate-180">
          <path d="M0,30 C400,60 800,0 1200,30 L1200,60 L0,60 Z" fill="white" />
        </svg>
      </div>

      {/* Plans */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {membershipPlans.map((plan) => {
              const price = billing === "yearly" ? Math.round(plan.yearlyPrice / 12) : plan.price
              return (
                <div
                  key={plan.id}
                  className={`relative rounded-3xl border-2 ${plan.borderColor} p-8 bg-white ${
                    plan.popular ? "shadow-2xl scale-105" : "shadow-md hover:shadow-xl"
                  } transition-all duration-300`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-5 py-1.5 rounded-full text-xs font-bold shadow-md whitespace-nowrap">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${plan.bgLight} mb-5`}>
                    <span className={`text-xs font-bold ${plan.textColor}`}>{plan.tagline}</span>
                  </div>
                  <h3 className="text-2xl font-black text-slate-800 mb-2">{plan.name}</h3>

                  <div className="mb-2">
                    <span className={`text-5xl font-black ${plan.textColor}`}>₹{price}</span>
                    <span className="text-slate-400 text-sm">/month</span>
                  </div>
                  {billing === "yearly" && (
                    <p className="text-xs text-green-600 font-semibold mb-6">
                      Billed ₹{plan.yearlyPrice}/year · Save ₹{plan.price * 12 - plan.yearlyPrice}
                    </p>
                  )}
                  {billing === "monthly" && <div className="mb-6" />}

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((f) => (
                      <li key={f.text} className="flex items-start gap-3 text-sm">
                        <span
                          className={`mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold ${
                            f.included ? "bg-green-100 text-green-600" : "bg-slate-100 text-slate-400"
                          }`}
                        >
                          {f.included ? "✓" : "✕"}
                        </span>
                        <span className={f.included ? "text-slate-700" : "text-slate-400 line-through"}>
                          {f.text}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className={`block text-center py-3.5 rounded-full font-bold text-sm transition-all duration-200 hover:scale-105 ${
                      plan.popular
                        ? "bg-gradient-to-r from-emerald-500 to-emerald-600 text-white shadow-lg hover:shadow-emerald-200"
                        : `bg-gradient-to-r ${plan.colorFrom} ${plan.colorTo} text-white hover:shadow-md`
                    }`}
                  >
                    Get {plan.name}
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Benefits strip */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { icon: "🚚", label: "Free Delivery", desc: "Home delivery & pickup" },
            { icon: "🔄", label: "Easy Returns", desc: "Return anytime, no hassle" },
            { icon: "✅", label: "No Contracts", desc: "Cancel whenever you like" },
            { icon: "🎁", label: "Surprise Gifts", desc: "On Premium plans" },
          ].map((b) => (
            <div key={b.label} className="bg-white rounded-2xl p-5 shadow-sm">
              <div className="text-3xl mb-2">{b.icon}</div>
              <p className="font-bold text-slate-800 text-sm">{b.label}</p>
              <p className="text-slate-500 text-xs mt-1">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block bg-emerald-100 text-emerald-700 px-4 py-1.5 rounded-full text-sm font-bold mb-4">
              FAQ
            </span>
            <h2 className="text-3xl font-black text-slate-800">
              Frequently Asked <span className="text-emerald-500">Questions</span>
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={faq.q} className="border border-slate-200 rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left font-bold text-slate-800 hover:bg-slate-50 transition-colors"
                >
                  <span>{faq.q}</span>
                  <svg
                    className={`w-5 h-5 text-slate-400 transition-transform duration-200 ${openFaq === i ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openFaq === i ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="px-6 pb-5 text-slate-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-emerald-700 to-green-500 text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-black mb-4">Ready to Start the Adventure?</h2>
          <p className="text-white/80 mb-8">
            Join 10,000+ readers — from toddlers to adults — already exploring Appu World.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-emerald-700 px-8 py-4 rounded-full font-black text-base hover:shadow-xl hover:scale-105 transition-all duration-200"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </>
  )
}
