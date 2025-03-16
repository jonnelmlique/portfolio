'use client';
import Image from "next/image";
import { useState, useEffect } from "react";

//images paths
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
  ],
  project2: [
    '/images/Medlinkup/1.png',
    '/images/Medlinkup/2.png',
    '/images/Medlinkup/3.png',
    '/images/Medlinkup/4.png',
    '/images/Medlinkup/5.png',
    '/images/Medlinkup/6.png',
    '/images/Medlinkup/7.png'
  ],
  project3: [
    '/images/StellerGrades/1.png',
    '/images/StellerGrades/2.png',
    '/images/StellerGrades/3.png'

  ]
};

// projectImages object
const projectLinks = {
  project1: {
    github: 'https://github.com/jonnelmlique',
    live: 'https://civicmerchassets.com'
  },
  project2: {
    github: 'https://github.com/jonnelmlique/MedLinkup',
    live: 'github.com/jonnelmlique'
  },
  project3: {
    github: 'https://github.com/jonnelmlique/StellarGrades',
    live: 'https://jonnelmlique.github.io/StellarGrades/index.html'
  }
};

export default function Portfolio() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [modalProject, setModalProject] = useState<string | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

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

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight * 100}`;
      setScrollProgress(parseFloat(scroll));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-gradient-to-br from-slate-50 to-slate-100 min-h-screen relative">
      {/* Decorative background elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-96 h-96 bg-indigo-100 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-96 h-96 bg-pink-100 rounded-full blur-3xl opacity-30"></div>
      </div>

      {/* Navigation - Updated with backdrop blur and indicator */}
      <nav className="fixed w-full bg-white/60 backdrop-blur-md z-40 py-4 border-b border-slate-200/50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-slate-800">Jonnel</h1>
            
            <button onClick={toggleMobileMenu} className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-200">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path className={!isMobileMenuOpen ? "block" : "hidden"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                <path className={isMobileMenuOpen ? "block" : "hidden"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6">
              <a href="#home" className="text-slate-600 hover:text-indigo-500">Home</a>
              <a href="#skills" className="text-slate-600 hover:text-indigo-500">Skills</a>
              <a href="#work" className="text-slate-600 hover:text-indigo-500">Work</a>
              <a href="#contact" className="text-slate-600 hover:text-indigo-500">Contact</a>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className={`md:hidden mt-4 pb-4 ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
            <a href="#home" className="block text-slate-600 hover:text-indigo-500">Home</a>
            <a href="#skills" className="block text-slate-600 hover:text-indigo-500">Skills</a>
            <a href="#work" className="block text-slate-600 hover:text-indigo-500">Work</a>
            <a href="#contact" className="block text-slate-600 hover:text-indigo-500">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section - Updated with geometric pattern */}
      <section id="home" className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 pattern-grid opacity-5"></div>
        <div className="container mx-auto px-4 relative">
          <div className="flex flex-col items-center text-center">
            <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-white shadow-xl" data-aos="fade-down">
              {/* { <Image 
                src="/profile.jpg" 
                alt="Profile" 
                width={128} 
                height={128} 
                className="w-full h-full object-cover"
              /> } */}
            </div>
            <h1 className="text-5xl font-bold text-slate-800 mb-4" data-aos="fade-up">Jonnel Lique</h1>
            <p className="text-xl text-slate-600 mb-8" data-aos="fade-up" data-aos-delay="100">
              Full Stack Developer & UI/UX Designer
            </p>
            <div className="flex gap-4" data-aos="fade-up" data-aos-delay="200">
              <a href="#work" className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-lg">
                View My Work
              </a>
              <a href="#contact" className="border-2 border-slate-800 text-slate-800 px-6 py-3 rounded-lg hover:bg-slate-800 hover:text-white">
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section - Updated cards with glass effect */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-slate-800 mb-12" data-aos="fade-up">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-pink-500">
              Skills & Expertise
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Frontend Card */}
            <div className="bg-white/40 backdrop-blur-sm p-6 rounded-xl border border-white/20 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
              data-aos="fade-up">
              <h3 className="text-xl font-bold text-slate-800 mb-4 border-b border-slate-200 pb-2">
                Frontend</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-slate-700">HTML/CSS</span>
                  <svg className="w-6 h-6 text-orange-500 transform transition-transform duration-300 hover:scale-125 hover:rotate-12"
                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-700">JavaScript</span>
                  <svg className="w-6 h-6 text-yellow-400 transform transition-transform duration-300 hover:scale-125 hover:-rotate-12"
                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-700">Tailwind/Bootstrap</span>
                  <svg className="w-6 h-6 text-teal-500 transform transition-transform duration-300 hover:scale-125 hover:rotate-180"
                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                </div>
                
              </div>
            </div>

            {/* Backend Card */}
            <div className="bg-white/40 backdrop-blur-sm p-6 rounded-xl border border-white/20 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
              data-aos="fade-up" data-aos-delay="100">
              <h3 className="text-xl font-bold text-slate-800 mb-4 border-b border-slate-200 pb-2">
                Backend</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-slate-700">PHP/Laravel</span>
                  <svg className="w-6 h-6 text-red-500 transform transition-transform duration-300 hover:scale-125 hover:rotate-45"
                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-700">Node.js</span>
                  <svg className="w-6 h-6 text-green-500 transform transition-transform duration-300 hover:scale-125 hover:-rotate-45"
                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-700">MySQL</span>
                  <svg className="w-6 h-6 text-blue-500 transform transition-transform duration-300 hover:scale-125 hover:rotate-360"
                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Tools Card */}
            <div className="bg-white/40 backdrop-blur-sm p-6 rounded-xl border border-white/20 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
              data-aos="fade-up" data-aos-delay="200">
              <h3 className="text-xl font-bold text-slate-800 mb-4 border-b border-slate-200 pb-2">
                Tools & Others</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-slate-700">Git</span>
                  <svg className="w-6 h-6 text-orange-600 transform transition-transform duration-300 hover:scale-125 hover:rotate-12"
                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-700">Docker</span>
                  <svg className="w-6 h-6 text-blue-600 transform transition-transform duration-300 hover:scale-125 hover:-rotate-12"
                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-700">UI/UX Design</span>
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

      {/* Work Section - Updated project cards */}
      <section id="work" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-slate-800 mb-12" data-aos="fade-up">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-pink-500">
              Recent Work
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div onClick={() => openModal('project1')}
              className="group bg-white/40 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-300"
              data-aos="fade-up">
              <div className="relative overflow-hidden">
                <Image src="/images/civic/1.png" alt="Project" width={400} height={300} 
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-sm">Click to view details</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-2">IT Asset Management</h3>
                <p className="text-slate-600">A comprehensive system for managing IT assets</p>
              </div>
            </div>
            <div onClick={() => openModal('project2')}
              className="group bg-white/40 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-300"
              data-aos="fade-up" data-aos-delay="100">
              <div className="relative overflow-hidden">
                <Image src="/images/Medlinkup/1.png" alt="Project" width={400} height={300} 
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-sm">Click to view details</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-2">Medlinkup</h3>
                <p className="text-slate-600">A comprehensive platform designed to streamline medical inventory, sales, and order management.</p>
              </div>
            </div>
            <div onClick={() => openModal('project3')}
              className="group bg-white/40 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-300"
              data-aos="fade-up" data-aos-delay="200">
              <div className="relative overflow-hidden">
                <Image src="/images/StellerGrades/1.png" alt="Project" width={400} height={300} 
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-sm">Click to view details</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-2">Steller Grades</h3>
                <p className="text-slate-600">The ultimate platform for effortlessly calculating your Grade Weighted Average (GWA).</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-slate-900/30 backdrop-blur-sm z-50 overflow-y-auto slim-scrollbar">
          <div className="min-h-screen px-4 text-center">
            {/* Modal Backdrop - Remove or adjust opacity */}
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-slate-500/20"></div>
            </div>

            {/* Modal Content - Add backdrop blur and adjust background opacity */}
            <div className="inline-block w-full max-w-4xl p-6 my-8 text-left align-middle transition-all transform bg-white/90 backdrop-blur-md shadow-xl rounded-2xl max-h-[90vh] overflow-y-auto modal-content">
              {/* Close Button */}
              <button onClick={closeModal}
                className="absolute top-4 right-4 text-slate-600 hover:text-slate-900">
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
                <div className="flex justify-between items-start gap-4 mb-6">
                  <h3 className="text-2xl font-bold text-slate-800">
                    {modalProject === 'project1' ? 'IT Asset Management' : 
                     modalProject === 'project2' ? 'Medlinkup' : 'Stellar Grades'}
                  </h3>
                  <div className="flex gap-3">
                    {modalProject && (
                      <>
                        <a
                          href={projectLinks[modalProject as keyof typeof projectLinks].github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors duration-200"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                          </svg>
                          GitHub
                        </a>
                        <a
                          href={projectLinks[modalProject as keyof typeof projectLinks].live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors duration-200"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                          Visit Site
                        </a>
                      </>
                    )}
                  </div>
                </div>
                
                {/* Rest of the project details */}
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-slate-700">Description</h4>
                    <p className="text-slate-600">
                      {modalProject === 'project1' 
                        ? 'A comprehensive system for managing IT assets, tracking inventory, and monitoring equipment lifecycle.'
                        : modalProject === 'project2'
                        ? 'A comprehensive platform designed to streamline medical inventory, sales, and order management.'
                        : 'Stellar Grades, the ultimate platform for effortlessly calculating your Grade Weighted Average (GWA).'}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-slate-700 mt-2">My Role</h4>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">
                        Lead Programmer
                      </span>
                      <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">
                        Backend
                      </span>
                      <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">
                        Frontend
                      </span>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-slate-700 mt-2">Tools Used</h4>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {modalProject === 'project1' 
                        ? ['PHP', 'MySQL', 'Bootstrap', 'AJAX', 'DigitalOcean', 'Git'].map((tool) => (
                            <span key={tool} className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">
                              {tool}
                            </span>
                          ))
                        : modalProject === 'project2'
                        ? ['PHP', 'MySQL', 'Bootstrap', 'DigitalOcean', 'Git'].map((tool) => (
                            <span key={tool} className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">
                              {tool}
                            </span>
                          ))
                        : ['Javascript', 'Bootstrap', 'HTML', 'CSS', 'Git', 'Github.io'].map((tool) => (
                            <span key={tool} className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">
                              {tool}
                            </span>
                          ))
                      }
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Contact Section - Updated with gradient text */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">Get In Touch</h2>
          <div className="max-w-2xl mx-auto">
            <div className="flex flex-col space-y-4">
              <a href="mailto:contact@example.com" className="flex items-center justify-center gap-2 text-slate-600 hover:text-indigo-500">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                contact@jonnel.com
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-6 text-center text-slate-600">
        <p>&copy; 2025. All rights reserved.</p>
      </footer>

      {/* Add a scroll progress indicator */}
      <div className="fixed top-0 left-0 w-full h-1 bg-slate-200 z-50">
        <div className="h-full bg-gradient-to-r from-indigo-500 to-pink-500" 
          style={{ width: `${scrollProgress}%` }}></div>
      </div>
    </div>
  );
}
