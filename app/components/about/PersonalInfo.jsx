import Image from 'next/image'
import { getIconComponent } from './iconUtils'

export default function PersonalInfo({ data }) {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <div className="relative w-64 h-64 mx-auto">
              <Image 
                src={data.profileImage} 
                alt="Profile" 
                fill
                className="object-cover rounded-xl"
              />
            </div>
          </div>
          <div className="md:col-span-2">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{data.name}</h1>
            <h2 className="text-2xl text-gray-700 mb-6">{data.title}</h2>
            <p className="text-gray-600 mb-6">{data.summary}</p>
            <div className="flex flex-wrap gap-4">
              {data.contacts.map((contact, index) => {
                const IconComponent = getIconComponent(contact.icon);
                return (
                  <div key={index} className="flex items-center gap-2">
                    {IconComponent && <IconComponent className="w-5 h-5 text-gray-700" />}
                    <span className="text-gray-700">{contact.value}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
