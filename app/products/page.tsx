"use client"

import { useState, useMemo, useEffect, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import ProductCard from "@/components/ProductCard"
import { books, toys } from "@/lib/data"

const allProducts = [...books, ...toys]

const bookSubs = ["All", "Picture Books", "Learning", "Adventure", "Stories", "Young Adult", "Fiction", "Non Fiction", "Self Help", "Biography", "Mystery"]
const toySubs = ["All", "Educational", "Creative", "Role Play", "Outdoor"]

function ProductsContent() {
  const searchParams = useSearchParams()

  const [category, setCategory] = useState<"all" | "books" | "toys">("all")
  const [subCategory, setSubCategory] = useState("All")
  const [search, setSearch] = useState("")

  useEffect(() => {
    const cat = searchParams.get("category")
    setCategory(cat === "books" ? "books" : cat === "toys" ? "toys" : "all")
    setSubCategory(searchParams.get("sub") ?? "All")
  }, [searchParams])

  const subCategories = category === "books" ? bookSubs : category === "toys" ? toySubs : []

  const filtered = useMemo(() => {
    let list = category === "books" ? books : category === "toys" ? toys : allProducts
    if (subCategory !== "All" && category !== "all") {
      list = list.filter((p) => p.category === subCategory)
    }
    if (search.trim()) {
      const q = search.toLowerCase()
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          (p.author ?? "").toLowerCase().includes(q)
      )
    }
    return list
  }, [category, subCategory, search])

  const handleCategoryChange = (cat: "all" | "books" | "toys") => {
    setCategory(cat)
    setSubCategory("All")
  }

  return (
    <>
      {/* Page header */}
      <section className="bg-gradient-to-br from-emerald-700 via-emerald-500 to-green-400 py-16 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <span className="inline-block bg-white/20 border border-white/30 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            Our Collection
          </span>
          <h1 className="text-4xl sm:text-5xl font-black mb-4">Borrow Books &amp; Toys for All Ages</h1>
          <p className="text-white/80 text-lg">
            8,000+ hand-curated books to borrow — kids to adults — plus 1,000+ toys available on rent.
          </p>
        </div>
      </section>

      {/* Wavy divider */}
      <div className="overflow-hidden leading-none -mt-1">
        <svg viewBox="0 0 1200 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-10">
          <path d="M0,30 C400,60 800,0 1200,30 L1200,60 L0,60 Z" fill="white" />
        </svg>
      </div>

      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search */}
          <div className="max-w-md mx-auto mb-8">
            <div className="relative">
              <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search books, toys, authors..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:border-emerald-300 text-slate-700 placeholder:text-slate-400"
              />
            </div>
          </div>

          {/* Category tabs */}
          <div className="flex justify-center gap-3 mb-6">
            {(["all", "books", "toys"] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-200 capitalize ${
                  category === cat
                    ? "bg-emerald-500 text-white shadow-md"
                    : "bg-slate-100 text-slate-600 hover:bg-emerald-50 hover:text-emerald-500"
                }`}
              >
                {cat === "all" ? "All Products" : cat === "books" ? "Books" : "Toys & Games"}
              </button>
            ))}
          </div>

          {/* Sub-category pills */}
          {subCategories.length > 0 && (
            <div className="flex flex-wrap justify-center gap-2 mb-10">
              {subCategories.map((sub) => (
                <button
                  key={sub}
                  onClick={() => setSubCategory(sub)}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                    subCategory === sub
                      ? "bg-emerald-500 text-white"
                      : "bg-slate-100 text-slate-600 hover:bg-emerald-50 hover:text-emerald-600"
                  }`}
                >
                  {sub}
                </button>
              ))}
            </div>
          )}

          {/* Results count */}
          <p className="text-slate-500 text-sm mb-6">
            Showing <span className="font-bold text-slate-700">{filtered.length}</span> {filtered.length === 1 ? "result" : "results"}
          </p>

          {/* Grid */}
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-slate-700 mb-2">No results found</h3>
              <p className="text-slate-500">Try a different search term or category.</p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-slate-500">Loading...</div>}>
      <ProductsContent />
    </Suspense>
  )
}
