export default function Location({ data }) {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Location</h2>
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-start gap-4">
            <span dangerouslySetInnerHTML={{ __html: data.icon }} className="w-6 h-6 text-gray-700 mt-1" />
            <div>
              {data.address.map((line, index) => (
                <p key={index} className="text-gray-700">{line}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
