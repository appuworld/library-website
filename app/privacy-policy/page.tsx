import Link from "next/link"

const sections = [
  {
    title: "Information We Collect",
    content: `When you sign up for Appu World membership or contact us, we collect information including your name, email address, phone number, and delivery address. We also collect information about your child's age to recommend age-appropriate books and toys. Usage data such as browsing patterns within our website may also be collected to improve your experience.`,
  },
  {
    title: "How We Use Your Information",
    content: `We use your information to process memberships, deliver and pick up books and toys, personalise content recommendations, send newsletters and promotional offers (with your consent), respond to customer support enquiries, and improve our services. We do not sell or rent your personal information to third parties.`,
  },
  {
    title: "Children's Privacy",
    content: `Appu World is a service for children, and we take their privacy very seriously. We collect minimal information about children (primarily age range) only to provide age-appropriate content recommendations. We do not collect personal data directly from children. All account management is handled by parents or legal guardians.`,
  },
  {
    title: "Data Security",
    content: `We implement industry-standard security measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction. Your payment information is processed through secure, PCI-DSS compliant payment gateways. We never store sensitive payment details on our servers.`,
  },
  {
    title: "Cookies",
    content: `Our website uses cookies to enhance your browsing experience, remember your preferences, and analyse site traffic. Essential cookies are required for the website to function. Analytics and marketing cookies are optional and can be disabled through your browser settings. By continuing to use our site, you consent to our use of essential cookies.`,
  },
  {
    title: "Third-Party Services",
    content: `We may use trusted third-party services for payment processing, email delivery, analytics, and customer support. These service providers are bound by strict data protection agreements and are only permitted to use your data to provide services on our behalf. We are not responsible for the privacy practices of third-party websites linked from our site.`,
  },
  {
    title: "Your Rights",
    content: `You have the right to access, correct, or delete your personal data at any time. You can request a copy of the personal information we hold about you, ask us to correct inaccurate data, opt out of marketing communications, and request account deletion. To exercise these rights, please contact us at privacy@appuworld.com.`,
  },
  {
    title: "Data Retention",
    content: `We retain your personal information for as long as your account is active or as needed to provide services. Upon account cancellation, we will delete your personal data within 30 days, except where retention is required by law (e.g., financial records for tax purposes, which are retained for 7 years).`,
  },
  {
    title: "Changes to This Policy",
    content: `We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. We will notify you of significant changes via email or a prominent notice on our website. We encourage you to review this policy periodically. Your continued use of our services after changes are posted constitutes your acceptance of the updated policy.`,
  },
  {
    title: "Contact Us",
    content: `If you have any questions, concerns, or requests regarding this Privacy Policy or how we handle your personal data, please contact our Data Protection Officer at privacy@appuworld.com or write to us at: Appu World, 123 Library Lane, Koramangala, Bangalore – 560034, India.`,
  },
]

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-slate-700 to-slate-900 py-16 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl font-black mb-3">Privacy Policy</h1>
          <p className="text-slate-300 text-sm">
            Last updated: May 2026 · Effective date: January 2024
          </p>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          {/* Intro */}
          <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-6 mb-10">
            <p className="text-slate-700 text-sm leading-relaxed">
              At <strong>Appu World</strong>, your privacy is important to us. This Privacy Policy explains how we collect, use, store, and protect your personal information when you use our website, mobile app, or services. By using Appu World, you agree to the practices described in this policy. Please read it carefully.
            </p>
          </div>

          {/* Table of Contents */}
          <div className="border border-slate-200 rounded-2xl p-6 mb-10">
            <h2 className="font-bold text-slate-800 mb-4 text-sm uppercase tracking-wide">Table of Contents</h2>
            <ol className="space-y-2">
              {sections.map((s, i) => (
                <li key={s.title}>
                  <a
                    href={`#section-${i}`}
                    className="text-emerald-500 hover:text-emerald-600 text-sm font-medium transition-colors"
                  >
                    {i + 1}. {s.title}
                  </a>
                </li>
              ))}
            </ol>
          </div>

          {/* Sections */}
          <div className="space-y-10">
            {sections.map((s, i) => (
              <div key={s.title} id={`section-${i}`} className="scroll-mt-24">
                <h2 className="text-xl font-black text-slate-800 mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-emerald-500 text-white text-sm font-black flex items-center justify-center flex-shrink-0">
                    {i + 1}
                  </span>
                  {s.title}
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed pl-11">{s.content}</p>
              </div>
            ))}
          </div>

          {/* Back links */}
          <div className="mt-14 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link href="/" className="text-emerald-500 font-bold text-sm hover:text-emerald-600 flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              Back to Home
            </Link>
            <Link href="/contact" className="bg-emerald-500 text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-emerald-600 transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
