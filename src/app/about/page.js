export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">About MarketingHub</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-gray-600 mb-6">
            Welcome to MarketingHub, your trusted source for honest and comprehensive marketing tool reviews. 
            We help businesses and marketers find the perfect tools to grow their online presence and achieve their goals.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-gray-600 mb-6">
            Our mission is to provide unbiased, in-depth reviews of marketing tools and software. We test each tool 
            thoroughly and provide honest feedback to help you make informed decisions for your business.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">What We Review</h2>
          <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
            <li>Email marketing platforms</li>
            <li>SEO and keyword research tools</li>
            <li>E-commerce platforms</li>
            <li>Landing page builders</li>
            <li>CRM systems</li>
            <li>Social media management tools</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Review Process</h2>
          <p className="text-gray-600 mb-6">
            Every tool we review goes through a rigorous testing process. We evaluate features, pricing, 
            ease of use, customer support, and overall value. Our team of marketing experts provides 
            real-world insights based on hands-on experience.
          </p>

          <div className="bg-primary-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Have a tool suggestion?</h3>
            <p className="text-gray-600">
              We're always looking for new tools to review. If you have a suggestion or would like us 
              to review a specific marketing tool, please reach out to us.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}