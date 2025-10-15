import StarRating from '../../../components/StarRating';
import CTAButton from '../../../components/CTAButton';
import { tools } from '../../../data/tools';

export default function GetResponseReviewPage() {
  const tool = tools['email-marketing'].find(t => t.slug === 'getresponse');

  if (!tool) {
    return <div>Tool not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">{tool.name} Review</h1>
            <StarRating rating={tool.rating} size="lg" />
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-primary-600 mb-2">{tool.pricing}</div>
            <CTAButton href={tool.affiliateLink}>Try {tool.name}</CTAButton>
          </div>
        </div>

        <p className="text-lg text-gray-600 mb-8">{tool.description}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-green-600">✅ Pros</h3>
            <ul className="space-y-2">
              {tool.pros.map((pro, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  {pro}
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4 text-red-600">❌ Cons</h3>
            <ul className="space-y-2">
              {tool.cons.map((con, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  {con}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Key Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {tool.features.map((feature, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg">
                <span className="font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-primary-50 p-6 rounded-lg text-center">
          <h3 className="text-xl font-semibold mb-2">Ready to try {tool.name}?</h3>
          <p className="text-gray-600 mb-4">Start your free trial today and boost your email marketing</p>
          <CTAButton href={tool.affiliateLink} className="text-lg px-8 py-4">
            Get Started with {tool.name}
          </CTAButton>
        </div>
      </div>
    </div>
  );
}