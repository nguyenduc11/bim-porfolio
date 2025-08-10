export default function Education({ data }) {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Education</h2>
        <div className="space-y-6">
          {data.map((edu, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{edu.degree}</h3>
              <p className="text-gray-700 mb-2">{edu.school}</p>
              <p className="text-gray-600">{edu.period}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
