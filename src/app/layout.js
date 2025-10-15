import './globals.css'
import { Inter } from 'next/font/google'
import Header from '../components/Header'
import Footer from '../components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Marketing Tools Hub - Find the Best Marketing Software',
  description: 'Compare and review the best marketing tools, email platforms, SEO software, CRM systems, and SaaS solutions for your business. Honest reviews, pricing comparisons, and expert recommendations.',
  keywords: 'marketing tools, email marketing, SEO tools, CRM software, ecommerce platforms, landing page builders',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}