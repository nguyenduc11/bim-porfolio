import Link from 'next/link'

export default function CallToAction({ data }) {
  return (
    <div className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">{data.title}</h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-8">{data.description}</p>
        <Link 
          href={data.buttonUrl}
          className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-lg text-base font-medium text-gray-900 bg-white hover:bg-gray-100 transition-colors duration-200"
        >
          {data.buttonText}
        </Link>
      </div>
    </div>
  )
}
