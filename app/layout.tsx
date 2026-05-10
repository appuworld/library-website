import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-nunito",
});

export const metadata: Metadata = {
  title: "Appu World — Books & Toys for Every Child",
  description:
    "Appu World is a magical children's library offering 5,000+ books and 1,000+ educational toys. Memberships starting at ₹499/month. Spark your child's imagination today!",
  keywords: "children's library, kids books, educational toys, book rental, toy library, Appu World",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={nunito.variable}>
      <body className="font-sans antialiased bg-white text-slate-800">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
