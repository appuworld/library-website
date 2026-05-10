import Link from "next/link"
import AnimateOnScroll from "@/components/AnimateOnScroll"

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/membership", label: "Membership" },
  { href: "/contact", label: "Contact Us" },
  { href: "/privacy-policy", label: "Privacy Policy" },
]

const bookCategories = [
  { href: "/products?category=books&sub=Picture Books", label: "Picture Books" },
  { href: "/products?category=books&sub=Young Adult", label: "Young Adult" },
  { href: "/products?category=books&sub=Fiction", label: "Fiction" },
  { href: "/products?category=books&sub=Non Fiction", label: "Non-Fiction" },
  { href: "/products?category=books&sub=Self Help", label: "Self Help" },
  { href: "/products?category=books&sub=Mystery", label: "Mystery & Thriller" },
  { href: "/products?category=books&sub=Biography", label: "Biography" },
]

const toyCategories = [
  { href: "/products?category=toys&sub=Educational", label: "Educational Toys" },
  { href: "/products?category=toys&sub=Creative", label: "Creative Toys" },
  { href: "/products?category=toys&sub=Role Play", label: "Role Play" },
  { href: "/products?category=toys&sub=Outdoor", label: "Outdoor Toys" },
]

function FacebookIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

function YoutubeIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M22.54 6.42a2.78 2.78 0 00-1.94-1.96C18.88 4 12 4 12 4s-6.88 0-8.6.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.4 19.54C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 001.94-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58z" />
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <AnimateOnScroll direction="up" delay={0} threshold={0.05}>
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center">
                  <span className="text-white font-black text-lg">A</span>
                </div>
                <div>
                  <span className="text-xl font-black text-emerald-400">Appu</span>
                  <span className="text-xl font-black text-emerald-400"> World</span>
                </div>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed mb-5">
                A library for every reader — from picture books for toddlers to bestselling novels for adults. Borrow books and toys for all ages.
              </p>
              <div className="flex gap-3">
                {[
                  { icon: <FacebookIcon />, label: "Facebook", href: "#" },
                  { icon: <InstagramIcon />, label: "Instagram", href: "#" },
                  { icon: <YoutubeIcon />, label: "YouTube", href: "#" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="w-9 h-9 rounded-full bg-slate-800 hover:bg-emerald-500 flex items-center justify-center text-slate-400 hover:text-white transition-all duration-200"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </AnimateOnScroll>

          {/* Quick Links */}
          <AnimateOnScroll direction="up" delay={80} threshold={0.05}>
            <div>
              <h3 className="text-white font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {quickLinks.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-sm text-slate-400 hover:text-emerald-400 transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>

          {/* Categories */}
          <AnimateOnScroll direction="up" delay={160} threshold={0.05}>
            <div>
              <h3 className="text-white font-bold mb-4">Books</h3>
              <ul className="space-y-2 mb-6">
                {bookCategories.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="text-sm text-slate-400 hover:text-emerald-400 transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <h3 className="text-white font-bold mb-4">Toys</h3>
              <ul className="space-y-2">
                {toyCategories.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="text-sm text-slate-400 hover:text-emerald-400 transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>

          {/* Contact */}
          <AnimateOnScroll direction="up" delay={240} threshold={0.05}>
            <div>
              <h3 className="text-white font-bold mb-4">Contact Us</h3>
              <div className="space-y-3 text-sm text-slate-400">
                <div className="flex gap-2">
                  <svg className="w-4 h-4 mt-0.5 text-emerald-400 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>123 Library Lane, Gachibowli, Hyderabad – 500081</span>
                </div>
                <div className="flex gap-2">
                  <svg className="w-4 h-4 mt-0.5 text-emerald-400 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href="tel:+918001234567" className="hover:text-emerald-400 transition-colors">+91 800 123 4567</a>
                </div>
                <div className="flex gap-2">
                  <svg className="w-4 h-4 mt-0.5 text-emerald-400 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:hello@appuworld.com" className="hover:text-emerald-400 transition-colors">hello@appuworld.com</a>
                </div>
                <div className="flex gap-2">
                  <svg className="w-4 h-4 mt-0.5 text-emerald-400 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Mon–Sat: 9 AM – 8 PM<br />Sunday: 10 AM – 6 PM</span>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-500">
          <span>© {new Date().getFullYear()} Appu World. All rights reserved.</span>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="hover:text-emerald-400 transition-colors">Privacy Policy</Link>
            <Link href="/contact" className="hover:text-emerald-400 transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
