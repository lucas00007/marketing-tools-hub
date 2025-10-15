import Link from 'next/link'

export default function CategoryCard({ category }) {
  return (
    <Link 
      href={category.href}
      className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300 group border border-gray-100"
    >
      <div className="text-5xl mb-4">{category.icon}</div>
      <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-blue-600 transition">
        {category.name}
      </h3>
      <p className="text-gray-600 text-sm mb-4 leading-relaxed">
        {category.description}
      </p>
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-500 font-medium">
          {category.toolCount} tools
        </span>
        <span className="text-blue-600 font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
          Explore
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </Link>
  )
}