import Image from "next/image"
import Link from "next/link"
import type { Product } from "@/lib/data"

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <span key={star} className={`text-sm ${star <= rating ? "text-yellow-400" : "text-gray-200"}`}>
          ★
        </span>
      ))}
    </div>
  )
}

const badgeColors: Record<string, string> = {
  Bestseller: "bg-emerald-600 text-white",
  Classic: "bg-emerald-700 text-white",
  "Award Winner": "bg-emerald-500 text-white",
  "Must Read": "bg-green-600 text-white",
  Heritage: "bg-emerald-800 text-white",
  Educational: "bg-green-500 text-white",
  "Brain Booster": "bg-emerald-600 text-white",
  Popular: "bg-emerald-400 text-white",
  STEM: "bg-green-700 text-white",
  Premium: "bg-emerald-700 text-white",
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col">
      {/* Image container */}
      <div className="relative h-52 overflow-hidden bg-slate-100">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {product.badge && (
          <span
            className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-bold ${
              badgeColors[product.badge] ?? "bg-emerald-500 text-white"
            }`}
          >
            {product.badge}
          </span>
        )}
        <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-slate-600 px-2.5 py-1 rounded-full text-xs font-semibold">
          {product.category}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        <h3 className="font-bold text-slate-800 text-base leading-snug mb-1 group-hover:text-emerald-500 transition-colors line-clamp-2 min-h-[2.625rem]">
          {product.name}
        </h3>
        <p className="text-slate-500 text-xs mb-1 min-h-[1rem]">
          {product.author ? `by ${product.author}` : ""}
        </p>
        <p className="text-slate-500 text-xs mb-3">Ages: {product.ageRange}</p>

        <div className="flex items-center gap-2 mb-4">
          <StarRating rating={product.rating} />
          <span className="text-xs text-slate-400">({product.reviews.toLocaleString()})</span>
        </div>

        <div className="flex items-center justify-between mt-auto">
          <div>
            <span className="text-xl font-black text-emerald-500">₹{product.price}</span>
            <span className="text-slate-400 text-xs ml-1">/ month</span>
          </div>
          <Link
            href="/membership"
            className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-bold hover:shadow-md hover:scale-105 transition-all duration-200"
          >
            Borrow
          </Link>
        </div>
      </div>
    </div>
  )
}
