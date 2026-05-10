import Link from "next/link"
import Image from "next/image"
import HeroCarousel from "@/components/HeroCarousel"
import TestimonialsCarousel from "@/components/TestimonialsCarousel"
import ProductCard from "@/components/ProductCard"
import AnimateOnScroll from "@/components/AnimateOnScroll"
import { books, toys, membershipPlans } from "@/lib/data"

const stats = [
  { value: "8,000+", label: "Books Available", color: "text-emerald-600" },
  { value: "1,000+", label: "Toys & Games", color: "text-emerald-500" },
  { value: "10,000+", label: "Happy Members", color: "text-emerald-400" },
  { value: "50+", label: "Genres & Categories", color: "text-green-600" },
]

const collections = [
  {
    href: "/products?category=books&sub=Picture Books",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&q=80",
    alt: "Children's Books",
    label: "Children's Section",
    heading: "Kids' Books",
    sub: "Picture books, learning & stories — ages 0–12",
    cta: "Browse Kids' Books",
    gradient: "from-emerald-900/80 via-emerald-800/40 to-transparent",
    accent: "text-emerald-300",
  },
  {
    href: "/products?category=books&sub=Young Adult",
    image: "https://images.unsplash.com/photo-1524578271613-d550eacf6090?w=800&q=80",
    alt: "Teen & Adult Books",
    label: "Teen & Adult",
    heading: "Adult Books",
    sub: "Fiction, non-fiction, self-help, mysteries & more",
    cta: "Browse Adult Books",
    gradient: "from-emerald-900/80 via-emerald-800/40 to-transparent",
    accent: "text-emerald-300",
  },
  {
    href: "/products?category=toys",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    alt: "Toys & Games",
    label: "Toy Library",
    heading: "Toys & Games",
    sub: "Educational & creative play — ages 0–14",
    cta: "Browse Toys",
    gradient: "from-emerald-900/80 via-emerald-700/40 to-transparent",
    accent: "text-emerald-300",
  },
]

const whyUs = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    title: "Expert Curated",
    description: "Every book and toy is hand-picked by experts — from child development specialists to literary curators — for readers of all ages.",
    bg: "bg-emerald-100",
    iconColor: "text-emerald-500",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "Safe & Certified",
    description: "All toys meet BIS safety standards. Books are quality-checked and kept in excellent condition for every member.",
    bg: "bg-emerald-100",
    iconColor: "text-emerald-500",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
    title: "Free Delivery",
    description: "Free home delivery and pickup on all membership plans. No hidden charges, no hassle.",
    bg: "bg-emerald-100",
    iconColor: "text-emerald-500",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
    title: "Affordable Plans",
    description: "Memberships from just ₹499/month for the whole family. Save up to 20% with annual plans.",
    bg: "bg-emerald-100",
    iconColor: "text-emerald-500",
  },
]

const ageGroups = [
  { label: "0–5 years", desc: "Picture books, nursery rhymes & early learning", color: "bg-emerald-50 border-emerald-200 text-emerald-600", href: "/products?category=books&sub=Picture Books" },
  { label: "6–12 years", desc: "Adventure stories, science, comics & more", color: "bg-emerald-50 border-emerald-300 text-emerald-700", href: "/products?category=books&sub=Learning" },
  { label: "13–17 years", desc: "Young adult fiction, fantasy & mystery", color: "bg-emerald-50 border-emerald-200 text-emerald-600", href: "/products?category=books&sub=Young Adult" },
  { label: "18+ years", desc: "Bestsellers, classics, self-help & more", color: "bg-emerald-50 border-emerald-300 text-emerald-700", href: "/products?category=books&sub=Fiction" },
]

export default function HomePage() {
  const featuredBooks = [...books.filter((b) => b.id <= 8).slice(0, 2), ...books.filter((b) => b.id >= 17).slice(0, 2)]
  const featuredToys = toys.slice(0, 4)
  const adultBooks = books.filter((b) => b.id >= 17).slice(0, 4)

  return (
    <>
      {/* Hero */}
      <HeroCarousel />

      {/* Stats bar */}
      <section className="bg-white py-10 border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((s, i) => (
            <AnimateOnScroll key={s.label} direction="up" delay={i * 80}>
              <div className="group">
                <div className={`text-3xl md:text-4xl font-black ${s.color}`}>{s.value}</div>
                <div className="text-slate-500 text-sm font-medium mt-1">{s.label}</div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </section>

      {/* Age-group quick picks */}
      <section className="py-12 bg-slate-50 border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-4">
          <AnimateOnScroll direction="up" className="text-center mb-8">
            <h2 className="text-2xl font-black text-slate-800">
              Find Books for <span className="text-emerald-500">Every Age</span>
            </h2>
          </AnimateOnScroll>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {ageGroups.map((ag, i) => (
              <AnimateOnScroll key={ag.label} direction="up" delay={i * 70} className="h-full">
                <Link
                  href={ag.href}
                  className={`h-full flex flex-col items-center justify-center border-2 rounded-2xl p-5 text-center hover:shadow-md transition-all duration-200 hover:-translate-y-1 ${ag.color}`}
                >
                  <div className="font-black text-lg mb-1.5">{ag.label}</div>
                  <div className="text-xs opacity-80 leading-snug">{ag.desc}</div>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Collections */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll direction="up" className="text-center mb-12">
            <span className="inline-block bg-emerald-100 text-emerald-700 px-4 py-1.5 rounded-full text-sm font-bold mb-4">
              Our Collections
            </span>
            <h2 className="text-4xl font-black text-slate-800 mb-4">
              Explore What We <span className="text-emerald-500">Offer</span>
            </h2>
          </AnimateOnScroll>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {collections.map((col, i) => (
              <AnimateOnScroll key={col.heading} direction="up" delay={i * 100}>
                <Link href={col.href} className="group relative h-64 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 block">
                  <Image src={col.image} alt={col.alt} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className={`absolute inset-0 bg-gradient-to-t ${col.gradient}`} />
                  <div className="absolute bottom-0 left-0 p-6">
                    <span className={`${col.accent} text-xs font-bold uppercase tracking-widest block mb-1`}>{col.label}</span>
                    <h3 className="text-2xl font-black text-white mb-1">{col.heading}</h3>
                    <p className="text-white/80 text-xs mb-3">{col.sub}</p>
                    <span className="inline-flex items-center gap-1 text-white font-semibold text-sm group-hover:gap-2 transition-all">
                      {col.cta}
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                  </div>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Books — mixed ages */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll direction="up" className="flex items-end justify-between mb-10">
            <div>
              <span className="inline-block bg-emerald-100 text-emerald-700 px-4 py-1.5 rounded-full text-sm font-bold mb-3">
                Staff Picks
              </span>
              <h2 className="text-3xl font-black text-slate-800">
                Featured <span className="text-emerald-500">Books</span>
              </h2>
              <p className="text-slate-500 text-sm mt-1">Hand-picked across all ages & genres</p>
            </div>
            <Link href="/products?category=books" className="text-emerald-500 font-bold text-sm hover:text-emerald-600 flex items-center gap-1">
              View All
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredBooks.map((book, i) => (
              <AnimateOnScroll key={book.id} direction="up" delay={i * 80}>
                <ProductCard product={book} />
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Adult Reading Corner */}
      <section className="py-16 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll direction="up" className="flex items-end justify-between mb-10">
            <div>
              <span className="inline-block bg-emerald-100 text-emerald-700 px-4 py-1.5 rounded-full text-sm font-bold mb-3">
                Adult Reading Corner
              </span>
              <h2 className="text-3xl font-black text-slate-800">
                Books for <span className="text-emerald-600">Grown-Up Readers</span>
              </h2>
              <p className="text-slate-500 text-sm mt-1">Bestsellers, classics, thrillers & more</p>
            </div>
            <Link href="/products?category=books&sub=Fiction" className="text-emerald-500 font-bold text-sm hover:text-emerald-600 flex items-center gap-1">
              View All
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {adultBooks.map((book, i) => (
              <AnimateOnScroll key={book.id} direction="up" delay={i * 80}>
                <ProductCard product={book} />
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Toys */}
      <section className="py-16 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll direction="up" className="flex items-end justify-between mb-10">
            <div>
              <span className="inline-block bg-emerald-100 text-emerald-600 px-4 py-1.5 rounded-full text-sm font-bold mb-3">
                Learn Through Play
              </span>
              <h2 className="text-3xl font-black text-slate-800">
                Featured <span className="text-emerald-500">Toys</span>
              </h2>
            </div>
            <Link href="/products?category=toys" className="text-emerald-500 font-bold text-sm hover:text-emerald-600 flex items-center gap-1">
              View All
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredToys.map((toy, i) => (
              <AnimateOnScroll key={toy.id} direction="up" delay={i * 80}>
                <ProductCard product={toy} />
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll direction="up" className="text-center mb-14">
            <span className="inline-block bg-green-100 text-green-600 px-4 py-1.5 rounded-full text-sm font-bold mb-4">
              Why Appu World
            </span>
            <h2 className="text-4xl font-black text-slate-800 mb-4">
              The Smarter Way to <span className="text-green-500">Read & Play</span>
            </h2>
            <p className="text-slate-500 text-lg max-w-xl mx-auto">
              We&apos;re more than a library — we&apos;re a reading companion for your entire family.
            </p>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyUs.map((item, i) => (
              <AnimateOnScroll key={item.title} direction="up" delay={i * 100}>
                <div className="text-center group">
                  <div className={`w-16 h-16 ${item.bg} ${item.iconColor} rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300`}>
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-slate-800 text-lg mb-2">{item.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.description}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsCarousel />

      {/* Membership CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll direction="up" className="text-center mb-14">
            <span className="inline-block bg-emerald-100 text-emerald-700 px-4 py-1.5 rounded-full text-sm font-bold mb-4">
              Membership Plans
            </span>
            <h2 className="text-4xl font-black text-slate-800 mb-4">
              Simple Plans for Every <span className="text-emerald-500">Reader</span>
            </h2>
            <p className="text-slate-500 text-lg max-w-xl mx-auto">
              One membership covers the whole family — kids&apos; books, adult titles, and toys.
            </p>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {membershipPlans.map((plan, i) => (
              <AnimateOnScroll key={plan.id} direction="up" delay={i * 100}>
                <div
                  className={`relative rounded-3xl p-8 border-2 ${plan.borderColor} ${plan.popular ? "shadow-2xl scale-105" : "shadow-md"} bg-white transition-all duration-300 hover:shadow-xl`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-5 py-1.5 rounded-full text-xs font-bold shadow-md">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className={`inline-flex items-center px-3 py-1 rounded-full ${plan.bgLight} mb-5`}>
                    <span className={`text-xs font-bold ${plan.textColor}`}>{plan.tagline}</span>
                  </div>
                  <h3 className="text-xl font-black text-slate-800 mb-1">{plan.name}</h3>
                  <div className="flex items-end gap-1 mb-6">
                    <span className={`text-4xl font-black ${plan.textColor}`}>₹{plan.price}</span>
                    <span className="text-slate-400 text-sm mb-1">/month</span>
                  </div>
                  <ul className="space-y-2.5 mb-8">
                    {plan.features.slice(0, 5).map((f) => (
                      <li key={f.text} className="flex items-center gap-2.5 text-sm">
                        <span className={f.included ? "text-green-500" : "text-slate-300"}>
                          {f.included ? "✓" : "✕"}
                        </span>
                        <span className={f.included ? "text-slate-700" : "text-slate-400"}>{f.text}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/membership"
                    className={`block text-center py-3 rounded-full font-bold text-sm transition-all duration-200 ${
                      plan.popular
                        ? "bg-gradient-to-r from-emerald-500 to-emerald-600 text-white hover:shadow-lg hover:scale-105"
                        : `bg-gradient-to-r ${plan.colorFrom} ${plan.colorTo} text-white hover:shadow-md hover:scale-105`
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
          <AnimateOnScroll direction="up" delay={350} className="text-center mt-8">
            <Link href="/membership" className="text-emerald-500 font-bold hover:text-emerald-600 text-sm">
              Compare all plan features →
            </Link>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  )
}
