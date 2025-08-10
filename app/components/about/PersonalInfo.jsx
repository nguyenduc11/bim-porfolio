import Image from 'next/image'
import { getIconComponent } from './iconUtils'

export default function PersonalInfo({ data, locationData }) {
  return (
    <section className="py-20 bg-gradient-to-br from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 font-ovo">
            {data.name}
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-600 mb-6">
            {data.title}
          </h2>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          
          {/* Profile Image */}
          <div className="lg:col-span-1">
            <div className="relative w-80 h-80 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-700 rounded-2xl transform rotate-3"></div>
              <div className="relative w-full h-full bg-white p-2 rounded-2xl shadow-xl">
                <Image 
                  src={data.profileImage} 
                  alt={`${data.name} - Profile Picture`}
                  width={300}
                  height={300}
                  className="w-full h-full object-contain rounded-xl"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Information Cards */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* About Summary */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-ovo">
                About Me
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                {data.summary}
              </p>
            </div>

            {/* Contact & Location Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Contact Information */}
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <h4 className="text-xl font-bold text-gray-900 mb-4 font-ovo">
                  Contact Information
                </h4>
                <div className="space-y-4">
                  {data.contacts.map((contact, index) => {
                    const IconComponent = getIconComponent(contact.icon);
                    const isEmail = contact.icon === 'HiMail';
                    const isPhone = contact.icon === 'HiPhone';
                    const href = isEmail ? `mailto:${contact.value}` : isPhone ? `tel:${contact.value.replace(/\s/g, '')}` : '#';
                    
                    return (
                      <a 
                        key={index} 
                        href={href}
                        className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors duration-200 group"
                      >
                        <div className="w-10 h-10 bg-gradient-to-br from-gray-900 to-gray-700 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                          {IconComponent && <IconComponent className="w-5 h-5 text-white" />}
                        </div>
                        <span className="text-gray-700 group-hover:text-gray-900 transition-colors duration-200">
                          {contact.value}
                        </span>
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Location Information */}
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <h4 className="text-xl font-bold text-gray-900 mb-4 font-ovo">
                  Location
                </h4>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-gray-900 to-gray-700 rounded-xl flex items-center justify-center mt-1">
                    {(() => {
                      const IconComponent = getIconComponent(locationData.icon);
                      return IconComponent && <IconComponent className="w-5 h-5 text-white" />;
                    })()}
                  </div>
                  <div className="space-y-1">
                    {locationData.address.map((line, index) => (
                      <p key={index} className="text-gray-700">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            {/* <div className="bg-gradient-to-r from-gray-900 to-gray-700 p-8 rounded-2xl text-white text-center">
              <h4 className="text-2xl font-bold mb-4 font-ovo">
                Let's Work Together
              </h4>
              <p className="text-gray-200 mb-6">
                Ready to bring your BIM projects to the next level? Let's discuss how I can help.
              </p>
              <a 
                href="mailto:nguyenduc11@gmail.com"
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-gray-900 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-200"
              >
                Get In Touch
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  )
}
