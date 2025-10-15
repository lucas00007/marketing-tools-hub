import ReviewCard from '../../components/ReviewCard';
import { tools } from '../../data/tools';

export default function EmailMarketingPage() {
  const emailTools = tools['email-marketing'];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          📧 Email Marketing Tools
        </h1>
        <p className="text-lg text-gray-600">
          Discover the best email marketing platforms to grow your business and engage your audience.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {emailTools.map((tool) => (
          <ReviewCard 
            key={tool.id} 
            tool={tool} 
            category="email-marketing" 
          />
        ))}
      </div>

      {emailTools.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">More email marketing tools coming soon!</p>
        </div>
      )}
    </div>
  );
}