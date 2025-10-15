import CategoryCard from '../components/CategoryCard'
import ReviewCard from '../components/ReviewCard'
import CTAButton from '../components/CTAButton'

export default function Home() {
  const categories = [
    {
      name: 'Email Marketing',
      icon: '📧',
      description: 'Compare the best email marketing platforms for newsletters and automation',
      href: '/email-marketing',
      toolCount: 15
    },
    {
      name: 'SEO Tools',
      icon: '🔍',
      description: 'Find the best SEO software to rank higher and drive more traffic',
      href: '/seo-tools',
      toolCount: 12
    },
    {
      name: 'Ecommerce Platforms',
      icon: '🛒',
      description: 'Build and grow your online store with the right ecommerce platform',
      href: '/ecommerce',
      toolCount: 10
    },
    {
      name: 'Landing Page Builders',
      icon: '🎨',
      description: 'Create high-converting landing pages without coding',
      href: '/landing-pages',
      toolCount: 8
    },
    {
      name: 'CRM Software',
      icon: '💼',
      description: 'Manage customer relationships and sales pipelines effectively',
      href: '/crm',
      toolCount: 10
    },
  ]

  const featuredReviews = [
    {
      name: 'Semrush',
      rating: 4.8,
      description: 'Complete SEO toolkit with keyword research, competitor analysis, and site audits',
      href: '/reviews/semrush',
      price: 'From $129.95/mo'
    },
    {
      name: 'GetResponse',
      rating: 4.5,
      description: 'All-in-one email marketing platform with automation and landing pages',
      href: '/reviews/getresponse',
      price: 'From $15/mo'
    },
    {
      name: 'Shopify',
      rating: 4.7,
      description: 'Leading ecommerce platform trusted by over 1 million online stores',
      href: '/reviews/shopify',
      price: 'From $29/mo'
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 text-white py-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            Find the Perfect<br />
            <span className="text-blue-200">Marketing Tools</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-10 text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Compare reviews, pricing, and features of the best marketing software. Make informed decisions for your business.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-10">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for tools (e.g., email marketing, SEO)..."
                className="w-full px-6 py-4 rounded-xl text-gray-900 text-lg shadow-2xl focus:ring-4 focus:ring-blue-300"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-blue-700">
                Search
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex justify-center gap-3 flex-wrap">
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium hover:bg-white/30 transition cursor-pointer">
              📧 Email Marketing
            </span>
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium hover:bg-white/30 transition cursor-pointer">
              🔍 SEO Tools
            </span>
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium hover:bg-white/30 transition cursor-pointer">
              🛒 Ecommerce
            </span>
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium hover:bg-white/30 transition cursor-pointer">
              💼 CRM
            </span>
          </div>
        </div>
      </section>

      {/* Popular Categories */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Explore by Category
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Browse marketing tools organized by their primary function
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <CategoryCard key={category.name} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Reviews */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Top Rated Tools
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              In-depth reviews of the most popular marketing software
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredReviews.map((review) => (
              <ReviewCard key={review.name} review={review} />
            ))}
          </div>

          <div className="text-center mt-12">
            <CTAButton href="/reviews" variant="outline" size="lg">
              View All Reviews
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">100+</div>
              <div className="text-blue-100">Tools Reviewed</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">50K+</div>
              <div className="text-blue-100">Monthly Readers</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">4.8★</div>
              <div className="text-blue-100">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-blue-600 text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Get Weekly Tool Reviews & Deals
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join 10,000+ marketers getting our newsletter with tool reviews, comparisons, and exclusive deals
          </p>
          
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-xl text-gray-900 text-lg shadow-xl focus:ring-4 focus:ring-purple-300"
            />
            <button className="bg-white text-purple-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition shadow-xl">
              Subscribe Free
            </button>
          </form>

          <p className="text-sm text-blue-100 mt-4">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </section>
    </>
  )
}