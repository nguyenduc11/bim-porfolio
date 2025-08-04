import React from 'react'

const Services = () => {
  const services = [
    {
      title: "BIM Modeling & Documentation",
      description: "Expert creation of detailed 3D structural models using Autodesk Revit, including comprehensive documentation and drawing production.",
      features: [
        "Structural BIM Models",
        "Construction Documentation",
        "Shop Drawings",
        "As-Built Documentation"
      ]
    },
    {
      title: "Dynamo Scripting",
      description: "Development of custom automation scripts for Revit using Dynamo, optimizing workflows and increasing productivity.",
      features: [
        "Process Automation",
        "Custom Workflows",
        "Data Management",
        "Parameter Control"
      ]
    },
    {
      title: "Clash Detection & Coordination",
      description: "Comprehensive clash detection and resolution using Navisworks, ensuring seamless integration between structural and MEP systems.",
      features: [
        "3D Coordination",
        "Clash Resolution",
        "Issue Tracking",
        "Coordination Reports"
      ]
    },
    {
      title: "BIM Project Management",
      description: "End-to-end BIM project management, from setup to delivery, ensuring compliance with BIM standards and client requirements.",
      features: [
        "BIM Execution Plans",
        "Standards Implementation",
        "Team Coordination",
        "Quality Control"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-ovo font-bold text-gray-900 mb-4">Professional Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Specialized BIM solutions for structural engineering and construction projects, 
            leveraging advanced technology to deliver precise and efficient results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              <h3 className="text-xl font-ovo font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6">
                {service.description}
              </p>
              <div className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <h3 className="text-2xl font-ovo font-bold text-gray-900 mb-4">
            Ready to Elevate Your BIM Project?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's collaborate to bring efficiency and precision to your construction projects 
            through advanced BIM solutions and expertise.
          </p>
          <button className="px-8 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-200">
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  )
}

export default Services
