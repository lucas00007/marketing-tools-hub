import Link from 'next/link'
import StarRating from './StarRating'

export default function ReviewCard({ review }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 group">
      {/* Image/Logo Area */}
      <div className="h-48 bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center border-b border-gray-100">
        <div className="text-center">
          <span className="text-4xl font-bold text-gray-800">{review.name}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <StarRating rating={review.rating} />
          <span className="text-sm font-semibold text-gray-700">{review.rating}/5</span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-blue-600 transition">
          {review.name}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
          {review.description}
        </p>

        {/* Price & CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <span className="text-sm font-bold text-gray-900">{review.price}</span>
          <Link 
            href={review.href}
            className="text-blue-600 font-semibold hover:text-blue-700 transition inline-flex items-center gap-1"
          >
            Read Review
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}