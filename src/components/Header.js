'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const categories = [
    { name: 'Email Marketing', href: '/email-marketing' },
    { name: 'SEO Tools', href: '/seo-tools' },
    { name: 'Ecommerce', href: '/ecommerce' },
    { name: 'Landing Pages', href: '/landing-pages' },
    { name: 'CRM', href: '/crm' },
  ]

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-blue-600 hover:text-blue-700">
              Marketing Tools Hub
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:space-x-6">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={category.href}
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition"
              >
                {category.name}
              </Link>
            ))}
            <Link
              href="/about"
              className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition"
            >
              About
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 p-2"
            >
              {mobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 border-t mt-2 pt-2">
            <div className="space-y-1">
              {categories.map((category) => (
                <Link
                  key={category.name}
                  href={category.href}
                  className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {category.name}
                </Link>
              ))}
              <Link
                href="/about"
                className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}