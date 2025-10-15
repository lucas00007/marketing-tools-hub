import Link from 'next/link'

export default function CTAButton({ 
  href, 
  children, 
  variant = 'primary', 
  external = false,
  size = 'md' 
}) {
  const baseClasses = "inline-flex items-center justify-center font-bold rounded-lg transition-all duration-200"
  
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl",
    secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300",
    success: "bg-green-600 text-white hover:bg-green-700 shadow-lg hover:shadow-xl",
    outline: "border-2 border-blue-600 text-blue-600 hover:bg-blue-50"
  }

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  }

  const className = `${baseClasses} ${variants[variant]} ${sizes[size]}`
  
  if (external) {
    return (
      <a 
        href={href}
        className={className}
        target="_blank"
        rel="nofollow sponsored noopener noreferrer"
      >
        {children}
        <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </a>
    )
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  )
}