export default function DisclosurePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Affiliate Disclosure</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-gray-600 mb-6">
            MarketingHub is committed to transparency and honesty in all our reviews and recommendations.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Affiliate Relationships</h2>
          <p className="text-gray-600 mb-6">
            Some of the links on this website are affiliate links, which means we may earn a commission 
            if you click on the link and make a purchase. This comes at no additional cost to you and 
            helps us maintain this website and continue providing valuable content.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Promise</h2>
          <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
            <li>We only recommend tools we have personally tested and believe in</li>
            <li>Our reviews are honest and unbiased, regardless of affiliate relationships</li>
            <li>We clearly mark affiliate links where applicable</li>
            <li>We never let affiliate commissions influence our recommendations</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Review Independence</h2>
          <p className="text-gray-600 mb-6">
            Our editorial content is not influenced by affiliate relationships. We maintain strict 
            editorial independence and our reviews reflect our genuine opinions based on thorough 
            testing and evaluation.
          </p>

          <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2 text-yellow-800">Important Note</h3>
            <p className="text-yellow-700">
              By using our affiliate links, you're supporting our work and helping us continue to 
              provide free, high-quality reviews and content. Thank you for your support!
            </p>
          </div>

          <p className="text-sm text-gray-500 mt-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
}