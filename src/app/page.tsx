'use client';
import Image from "next/image";
import { useState } from "react";

// Update project images paths
const projectImages = {
  project1: [
    '/images/civic/1.png',
    '/images/civic/2.png',
    '/images/civic/3.png',
    '/images/civic/4.png',
    '/images/civic/5.png',
    '/images/civic/6.png',
    '/images/civic/7.png',
    '/images/civic/8.png',
    '/images/civic/9.png',
    '/images/civic/10.png',
    '/images/civic/11.png',
  ]
};

export default function Portfolio() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [modalProject, setModalProject] = useState<string | null>(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const openModal = (modalId: string) => {
    setModalProject(modalId);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalProject(null);
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  const showSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    if (modalProject) {
      const maxSlides = projectImages[modalProject as keyof typeof projectImages].length;
      setCurrentSlide((prev) => (prev + 1) % maxSlides);
    }
  };

  const prevSlide = () => {
    if (modalProject) {
      const maxSlides = projectImages[modalProject as keyof typeof projectImages].length;
      setCurrentSlide((prev) => (prev - 1 + maxSlides) % maxSlides);
    }
  };

  const slideStyle = {
    transform: `translateX(-${currentSlide * 100}%)`,
    transition: 'transform 500ms ease-in-out',
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-40 py-4">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-800">Jonnel</h1>
            
            <button onClick={toggleMobileMenu} className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path className={!isMobileMenuOpen ? "block" : "hidden"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                <path className={isMobileMenuOpen ? "block" : "hidden"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6">
              <a href="#home" className="text-gray-600 hover:text-blue-500">Home</a>
              <a href="#skills" className="text-gray-600 hover:text-blue-500">Skills</a>
              <a href="#work" className="text-gray-600 hover:text-blue-500">Work</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-500">Contact</a>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className={`md:hidden mt-4 pb-4 ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
            <a href="#home" className="block text-gray-600 hover:text-blue-500">Home</a>
            <a href="#skills" className="block text-gray-600 hover:text-blue-500">Skills</a>
            <a href="#work" className="block text-gray-600 hover:text-blue-500">Work</a>
            <a href="#contact" className="block text-gray-600 hover:text-blue-500">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            <div className="w-32 h-32 rounded-full overflow-hidden mb-6" data-aos="fade-down">
              {/* <Image 
                src="/profile.jpg" 
                alt="Profile" 
                width={128} 
                height={128} 
                className="w-full h-full object-cover"
              /> */}
            </div>
            <h1 className="text-5xl font-bold text-gray-800 mb-4" data-aos="fade-up">Jonnel Lique</h1>
            <p className="text-xl text-gray-600 mb-8" data-aos="fade-up" data-aos-delay="100">
              Full Stack Developer & UI/UX Designer
            </p>
            <div className="flex gap-4" data-aos="fade-up" data-aos-delay="200">
              <a href="#work" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg">
                View My Work
              </a>
              <a href="#contact" className="border-2 border-gray-800 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-800 hover:text-white">
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12" data-aos="fade-up">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Frontend Card */}
            <div className="bg-gray-50 p-6 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              data-aos="fade-up">
              <h3 className="text-xl font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2">
                Frontend</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">HTML/CSS</span>
                  <svg className="w-6 h-6 text-orange-500 transform transition-transform duration-300 hover:scale-125 hover:rotate-12"
                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">JavaScript</span>
                  <svg className="w-6 h-6 text-yellow-400 transform transition-transform duration-300 hover:scale-125 hover:-rotate-12"
                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Tailwind/Bootstrap</span>
                  <svg className="w-6 h-6 text-teal-500 transform transition-transform duration-300 hover:scale-125 hover:rotate-180"
                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Backend Card */}
            <div className="bg-gray-50 p-6 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              data-aos="fade-up" data-aos-delay="100">
              <h3 className="text-xl font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2">
                Backend</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">PHP/Laravel</span>
                  <svg className="w-6 h-6 text-red-500 transform transition-transform duration-300 hover:scale-125 hover:rotate-45"
                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Node.js</span>
                  <svg className="w-6 h-6 text-green-500 transform transition-transform duration-300 hover:scale-125 hover:-rotate-45"
                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">MySQL</span>
                  <svg className="w-6 h-6 text-blue-500 transform transition-transform duration-300 hover:scale-125 hover:rotate-360"
                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Tools Card */}
            <div className="bg-gray-50 p-6 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              data-aos="fade-up" data-aos-delay="200">
              <h3 className="text-xl font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2">
                Tools & Others</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Git</span>
                  <svg className="w-6 h-6 text-orange-600 transform transition-transform duration-300 hover:scale-125 hover:rotate-12"
                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Docker</span>
                  <svg className="w-6 h-6 text-blue-600 transform transition-transform duration-300 hover:scale-125 hover:-rotate-12"
                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">UI/UX Design</span>
                  <svg className="w-6 h-6 text-pink-500 transform transition-transform duration-300 hover:scale-125 hover:rotate-45"
                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12" data-aos="fade-up">Recent Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div onClick={() => openModal('project1')}
              className="bg-white rounded-xl overflow-hidden shadow-lg cursor-pointer transform transition hover:scale-105"
              data-aos="fade-up">
              <Image src="/images/civic/1.png" alt="Project" width={400} height={300} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">IT Asset Management</h3>
                <p className="text-gray-600">Click to view more details</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 overflow-y-auto slim-scrollbar">
          <div className="min-h-screen px-4 text-center">
            {/* Modal Backdrop - Remove or adjust opacity */}
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500/20"></div>
            </div>

            {/* Modal Content - Add backdrop blur and adjust background opacity */}
            <div className="inline-block w-full max-w-4xl p-6 my-8 text-left align-middle transition-all transform bg-white/90 backdrop-blur-md shadow-xl rounded-2xl max-h-[90vh] overflow-y-auto modal-content">
              {/* Close Button */}
              <button onClick={closeModal}
                className="absolute top-4 right-4 text-gray-600 hover:text-gray-900">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Image Slider */}
              <div className="relative mt-12">
                <div className="overflow-hidden h-64 md:h-96 rounded-lg">
                  <div className="flex" style={slideStyle}>
                    {modalProject && projectImages[modalProject as keyof typeof projectImages]?.map((imagePath, index) => (
                      <div key={index} className="w-full h-full flex-shrink-0 relative">
                        <Image
                          src={imagePath}
                          alt={`Project Image ${index + 1}`}
                          width={800}
                          height={600}
                          className="w-full h-full object-cover"
                          priority={index === currentSlide}
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = '/images/civic/1.png';
                          }}
                          unoptimized
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Slider Controls */}
                <button onClick={prevSlide}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/50 p-2 rounded-full">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button onClick={nextSlide}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/50 p-2 rounded-full">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Project Details */}
              <div className="mt-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">IT Asset Management</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-700">Description</h4>
                    <p className="text-gray-600">
                      A comprehensive system for managing IT assets, tracking inventory, and monitoring equipment lifecycle.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-700 mt-2">My Role</h4>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                        Lead Programmer
                      </span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                        Backend
                      </span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                        Frontend
                      </span>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-700 mt-2">Tools Used</h4>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {['PHP', 'MySQL', 'Bootstrap', 'AJAX', 'DigitalOcean', 'Git'].map((tool) => (
                        <span key={tool} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Get In Touch</h2>
          <div className="max-w-2xl mx-auto">
            <div className="flex flex-col space-y-4">
              <a href="mailto:contact@example.com" className="flex items-center justify-center gap-2 text-gray-600 hover:text-blue-500">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                contact@jonnel.com
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-6 text-center text-gray-600">
        <p>&copy; 2025. All rights reserved.</p>
      </footer>
    </div>
  );
}
