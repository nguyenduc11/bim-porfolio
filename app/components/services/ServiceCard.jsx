export default function ServiceCard({ service }) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300">
      <div className="w-12 h-12 text-gray-700 mb-6" dangerouslySetInnerHTML={{ __html: service.icon }} />
      <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
      <p className="text-gray-600 mb-6">{service.description}</p>
      <ul className="space-y-3">
        {service.features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <svg className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
