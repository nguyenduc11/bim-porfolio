import Navbar from "../components/Navbar";
import Image from "next/image";
import { assets, workData } from "../../assets/assets";

const Portfolio = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-gray-600 font-ovo text-lg mb-4 tracking-wide uppercase">
            My Work
          </p>
          <h2 className="font-ovo text-gray-900 text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Portfolio
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Here are some of my recent projects that showcase my skills in web development, 
            design, and problem-solving. Each project represents a unique challenge and solution.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12">
          {workData.map((project, index) => (
            <div 
              key={index} 
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Project Image */}
              <div className="relative h-64 md:h-80 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                <Image 
                  src={project.bgImage} 
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110" 
                  alt={project.title}
                />
              </div>

              {/* Project Content */}
              <div className="p-6 md:p-8">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 text-sm font-medium text-blue-600 bg-blue-50 rounded-full mb-3">
                    {project.description}
                  </span>
                  <h3 className="font-ovo text-gray-900 text-xl md:text-2xl font-bold mb-3 group-hover:text-gray-700 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-base leading-relaxed mb-6">
                    A comprehensive project showcasing modern web development practices, 
                    responsive design, and user-centered approach to create engaging digital experiences.
                  </p>
                </div>

                {/* Project Links */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <button className="group/btn inline-flex items-center justify-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all duration-200 hover:shadow-lg">
                    <span className="font-ovo">View Project</span>
                    <svg className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </button>
                  <button className="group/btn inline-flex items-center justify-center px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 hover:shadow-md transition-all duration-200">
                    <span className="font-ovo">View Code</span>
                    <svg className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 md:p-12">
            <h3 className="font-ovo text-gray-900 text-2xl md:text-3xl font-bold mb-4">
              Interested in Working Together?
            </h3>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              I&apos;m always excited to take on new challenges and create amazing digital experiences. 
              Let&apos;s discuss your project and bring your ideas to life.
            </p>
            <button className="group relative inline-flex items-center justify-center px-8 py-4 font-medium text-white transition-all duration-300 bg-gradient-to-r from-gray-900 to-gray-700 rounded-xl hover:from-gray-800 hover:to-gray-600 hover:shadow-xl hover:scale-105">
              <span className="relative z-10 font-ovo flex items-center gap-2">
                Start a Project
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function PortfolioPage() {
  return (
    <>
      <Navbar />
      <Portfolio />
    </>
  );
}
