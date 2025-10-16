import React from 'react'
import { Link } from 'react-router-dom'
import searchImage from "../../assets/search.png"

function Home() {
  const services = [
    { icon: '🔌', name: 'Electrician', description: 'Electrical repairs & installations' },
    { icon: '🔧', name: 'Plumber', description: 'Pipe fixes & installations' },
    { icon: '🎓', name: 'Tutor', description: 'Academic & skill tutoring' },
    { icon: '💻', name: 'IT Support', description: 'Tech issues & setup' },
    { icon: '🎨', name: 'Painter', description: 'Home painting & decor' },
    { icon: '🧹', name: 'Cleaner', description: 'Home & office cleaning' },
    { icon: '🌿', name: 'Gardener', description: 'Lawn & plant care' },
    { icon: '🔒', name: 'Locksmith', description: 'Lock repair & installation' }
  ];

  const stats = [
    { number: '10K+', label: 'Happy Customers' },
    { number: '500+', label: 'Service Providers' },
    { number: '50+', label: 'Cities Covered' },
    { number: '24/7', label: 'Customer Support' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-6 py-20">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            {/* Left Content */}
            <div className="lg:w-1/2 space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                  <span>🌟</span>
                  Trusted by thousands of customers
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Har Service,<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                    Ek Jagah
                  </span>
                </h1>
                <p className="text-xl text-gray-600 max-w-lg">
                  Find and connect with trusted service providers for all your needs. 
                  Quality service guaranteed.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/provider">
                  <button className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2">
                    <span>Find a Service</span>
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </Link>
                <Link to="/register">
                  <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300">
                    Become a Provider
                  </button>
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-gray-900">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:w-1/2 mt-12 lg:mt-0 relative">
              <div className="relative">
                <img
                  src={searchImage}
                  alt="Search illustration"
                  className="w-full max-w-2xl mx-auto transform hover:scale-105 transition-transform duration-500"
                />
                {/* Floating Elements */}
                <div className="absolute -top-4 -left-4 bg-white p-4 rounded-2xl shadow-lg animate-float">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm font-medium">Available Now</span>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-2xl shadow-lg animate-float" style={{ animationDelay: '2s' }}>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">⭐</span>
                    </div>
                    <span className="text-sm font-medium">4.9/5 Rating</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave Background */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-20">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="fill-current text-blue-100"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="fill-current text-blue-100"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="fill-current text-blue-50"></path>
          </svg>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Popular Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover a wide range of professional services tailored to meet your needs
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100 hover:border-blue-200 transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md">
                    {service.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-2">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300">
                View All Services
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get your service done in three simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { step: '1', title: 'Search & Choose', description: 'Find the perfect service provider for your needs', icon: '🔍' },
              { step: '2', title: 'Book & Schedule', description: 'Pick a time that works best for you', icon: '📅' },
              { step: '3', title: 'Get Service Done', description: 'Relax while professionals handle your work', icon: '✅' }
            ].map((item, index) => (
              <div key={index} className="text-center relative">
                <div className="w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center text-2xl mx-auto mb-4">
                  {item.icon}
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {item.step}
                </div>
                <h3 className="font-semibold text-gray-900 text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust us for their service needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/provider">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                Find Service Now
              </button>
            </Link>
            <Link to="/about">
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home