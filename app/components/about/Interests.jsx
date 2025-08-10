import { getIconComponent } from './iconUtils'

export default function Interests({ data }) {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Personal Interests</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.map((interest, index) => {
            const IconComponent = getIconComponent(interest.icon);
            return (
              <div key={index} className="bg-gray-50 p-6 rounded-xl">
                {IconComponent && <IconComponent className="w-8 h-8 text-gray-700 mb-4" />}
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{interest.title}</h3>
                <p className="text-gray-600">{interest.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  )
}
