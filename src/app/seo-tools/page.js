import ReviewCard from '../../components/ReviewCard';
import { tools } from '../../data/tools';

export default function SEOToolsPage() {
  const seoTools = tools['seo-tools'];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          🔍 SEO Tools
        </h1>
        <p className="text-lg text-gray-600">
          Boost your search rankings with these powerful SEO and keyword research tools.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {seoTools.map((tool) => (
          <ReviewCard 
            key={tool.id} 
            tool={tool} 
            category="seo-tools" 
          />
        ))}
      </div>
    </div>
  );
}