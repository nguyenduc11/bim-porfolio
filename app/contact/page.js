import Navbar from "../components/Navbar";
import { HiMail, HiPhone, HiLocationMarker, HiPaperAirplane } from 'react-icons/hi';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  const contactInfo = [
    {
      icon: HiMail,
      title: "Email",
      value: "nguyenduc11@gmail.com",
      link: "mailto:nguyenduc11@gmail.com"
    },
    {
      icon: HiPhone,
      title: "Phone", 
      value: "+84 987 764 370",
      link: "tel:+84987764370"
    },
    {
      icon: HiLocationMarker,
      title: "Location",
      value: "Hoang Mai District, Hanoi, Vietnam",
      link: "#"
    }
  ];

  const socialLinks = [
    { icon: FaGithub, name: "GitHub", url: "#" },
    { icon: FaLinkedin, name: "LinkedIn", url: "#" },
    { icon: FaWhatsapp, name: "WhatsApp", url: "#" }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-6xl">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-gray-600 font-ovo text-lg mb-4 tracking-wide uppercase">
            Get In Touch
          </p>
          <h2 className="font-ovo text-gray-900 text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Contact Me
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            I&apos;m always interested in new opportunities and exciting projects. 
            Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Contact Information */}
          <div>
            <h3 className="font-ovo text-gray-900 text-2xl md:text-3xl font-bold mb-8">
              Let&apos;s Connect
            </h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div key={index} className="flex items-center group">
                    <div className="w-12 h-12 bg-gradient-to-br from-gray-900 to-gray-700 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm font-medium uppercase tracking-wide">
                        {info.title}
                      </p>
                      <a 
                        href={info.link} 
                        className="font-ovo text-gray-900 text-lg font-semibold hover:text-gray-700 transition-colors duration-200"
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-ovo text-gray-900 text-xl font-bold mb-4">
                Follow Me
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.url}
                      className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center hover:bg-gray-200 hover:scale-110 transition-all duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                    >
                      <IconComponent className="w-6 h-6 text-gray-600" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="font-ovo text-gray-900 text-2xl font-bold mb-6">
              Send Message
            </h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    First Name
                  </label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-200"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Last Name
                  </label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-200"
                    placeholder="Your last name"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Email Address
                </label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-200"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Subject
                </label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-200"
                  placeholder="What's this about?"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Message
                </label>
                <textarea 
                  rows="2"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Tell me about your project or just say hello!"
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full group relative inline-flex items-center justify-center px-8 py-4 font-medium text-white transition-all duration-300 bg-gradient-to-r from-gray-900 to-gray-700 rounded-xl hover:from-gray-800 hover:to-gray-600 hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-4 focus:ring-gray-300 focus:ring-opacity-50"
              >
                <span className="relative z-10 font-ovo flex items-center gap-2">
                  Send Message
                  <HiPaperAirplane className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <Contact />
    </>
  );
}
