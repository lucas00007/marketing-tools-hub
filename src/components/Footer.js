import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* About */}
          <div>
            <h4 className="text-lg font-bold mb-4">Marketing Tools Hub</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your trusted guide to finding the best marketing software and SaaS tools for your business.
            </p>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-bold mb-4">Categories</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/email-marketing" className="text-gray-400 text-sm hover:text-white transition">
                  Email Marketing
                </Link>
              </li>
              <li>
                <Link href="/seo-tools" className="text-gray-400 text-sm hover:text-white transition">
                  SEO Tools
                </Link>
              </li>
              <li>
                <Link href="/ecommerce" className="text-gray-400 text-sm hover:text-white transition">
                  Ecommerce
                </Link>
              </li>
              <li>
                <Link href="/landing-pages" className="text-gray-400 text-sm hover:text-white transition">
                  Landing Pages
                </Link>
              </li>
              <li>
                <Link href="/crm" className="text-gray-400 text-sm hover:text-white transition">
                  CRM Software
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-bold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 text-sm hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 text-sm hover:text-white transition">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/disclosure" className="text-gray-400 text-sm hover:text-white transition">
                  Affiliate Disclosure
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-400 text-sm hover:text-white transition">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-4">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4">
              Get weekly tool reviews and exclusive deals
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 rounded-lg text-gray-900 text-sm focus:ring-2 focus:ring-blue-500"
              />
              <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Marketing Tools Hub. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            <Link href="/disclosure" className="hover:text-gray-400">
              Affiliate Disclosure
            </Link>
            {' · '}
            <Link href="/privacy" className="hover:text-gray-400">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}