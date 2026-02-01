import React, { useState, useEffect } from 'react';
import { SYLLABUS } from './constants';
import { Module } from './types';
import { ModuleCard } from './components/ModuleCard';
import { ContentViewer } from './components/ContentViewer';
import { CourseGuide } from './components/CourseGuide';
import { generateHeroImage } from './services/geminiService';
import { GraduationCap, Code2, Database, Network, Cpu } from 'lucide-react';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'home' | 'module' | 'guide'>('home');
  const [activeModule, setActiveModule] = useState<Module | null>(null);
  const [heroImage, setHeroImage] = useState<string | null>(null);
  const [isLoadingImage, setIsLoadingImage] = useState(false);

  useEffect(() => {
    // Generate Hero Image on mount for the Home Page
    const fetchImage = async () => {
      if (process.env.API_KEY) {
        setIsLoadingImage(true);
        // Specific prompt for the home page
        const img = await generateHeroImage("Future of Computer Science, Neural Networks, Global Connections");
        setHeroImage(img);
        setIsLoadingImage(false);
      }
    };
    fetchImage();
  }, []);

  const handleModuleClick = (module: Module) => {
    setActiveModule(module);
    setCurrentView('module');
    window.scrollTo(0, 0);
  };

  const handleBack = () => {
    setActiveModule(null);
    setCurrentView('home');
    window.scrollTo(0, 0);
  };

  if (currentView === 'module' && activeModule) {
    return <ContentViewer module={activeModule} onBack={handleBack} />;
  }

  if (currentView === 'guide') {
    return <CourseGuide onBack={handleBack} />;
  }

  return (
    <div className="min-h-screen bg-slate-50 font-inter">
      {/* Navigation Bar */}
      <nav className="bg-blue-900 text-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3 cursor-pointer" onClick={handleBack}>
              <GraduationCap className="w-8 h-8 text-blue-300" />
              <span className="font-bold text-xl tracking-tight">IB CS <span className="text-blue-300">2027</span></span>
            </div>
            <div className="hidden md:flex space-x-8 text-sm font-medium">
              <button onClick={handleBack} className="text-white hover:text-blue-200 transition">Syllabus</button>
              <a 
                href="https://www.ibo.org/new-store" 
                target="_blank" 
                rel="noreferrer"
                className="text-white hover:text-blue-200 transition"
              >
                Resources
              </a>
              <a 
                href="https://realpython.com/cheatsheets/python/#data-types" 
                target="_blank"
                rel="noreferrer" 
                className="text-white hover:text-blue-200 transition"
              >
                Python Docs
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative bg-slate-900 text-white overflow-hidden">
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0">
          {heroImage ? (
             <img 
               src={heroImage} 
               alt="AI Generated Neural Network" 
               className="w-full h-full object-cover opacity-30" 
             />
          ) : (
            // Fallback abstract pattern if API key missing or loading
            <div className="w-full h-full bg-gradient-to-br from-blue-950 via-slate-900 to-slate-950 opacity-100 flex items-center justify-center">
                {isLoadingImage ? (
                    <div className="animate-pulse text-blue-400 text-sm">Generating AI Hero...</div>
                ) : (
                    <div className="grid grid-cols-12 gap-4 opacity-10 w-full h-full p-10 transform -skew-y-12 scale-150">
                        {Array.from({ length: 48 }).map((_, i) => (
                            <div key={i} className="bg-white rounded-full h-2 w-2"></div>
                        ))}
                    </div>
                )}
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8 text-center md:text-left">
          <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-blue-300 uppercase bg-blue-900/50 rounded-full backdrop-blur-sm border border-blue-700">
            First Assessment 2027
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            Master the Future of <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-slate-200">
              Computer Science
            </span>
          </h1>
          <p className="mt-4 max-w-2xl text-xl text-slate-300">
            A comprehensive learning platform for the IB Diploma Programme. 
            Covering everything from System Fundamentals to the new Machine Learning module.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
             <a 
                href="https://www.google.com/search?q=ib+dp+computer+science+syllabus+2027&rlz=1C5OZZY_enUS1140US1141&oq=&gs_lcrp=EgZjaHJvbWUqCQgAECMYJxjqAjIJCAAQIxgnGOoCMgkIARAjGCcY6gIyCQgCECMYJxjqAjIJCAMQIxgnGOoCMgkIBBAjGCcY6gIyCQgFECMYJxjqAjIVCAYQABhCGLQCGOoCGNsFGPAFGJ4GMhUIBxAAGEIYtAIY6gIY2wUY8AUYngbSAQkxMjg3ajBqMTWoAgiwAgHxBfVXDZrrYrL3&sourceid=chrome&ie=UTF-8#fpstate=ive&vld=cid:46697eed,vid:yV55lWvunm0,st:0"
                target="_blank"
                rel="noreferrer"
                className="px-8 py-3 rounded-md bg-blue-600 hover:bg-blue-500 font-bold shadow-lg shadow-blue-900/50 transition-all transform hover:-translate-y-1 inline-block text-center"
             >
                Overview
             </a>
             <button 
                onClick={() => setCurrentView('guide')}
                className="px-8 py-3 rounded-md bg-slate-800 hover:bg-slate-700 font-semibold border border-slate-700 transition-colors inline-block text-center cursor-pointer text-white"
             >
                Course Guide
             </button>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div id="syllabus-start" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Theme A Section */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
             <div className="bg-blue-100 p-2 rounded-lg mr-4">
               <Cpu className="w-6 h-6 text-blue-700" />
             </div>
             <div>
               <h2 className="text-2xl font-bold text-slate-900">Theme A: Concepts</h2>
               <p className="text-slate-500">How computing systems work.</p>
             </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SYLLABUS.themeA.map(module => (
              <ModuleCard key={module.id} module={module} onClick={handleModuleClick} />
            ))}
          </div>
        </div>

        {/* Theme B Section */}
        <div>
          <div className="flex items-center mb-8">
             <div className="bg-amber-100 p-2 rounded-lg mr-4">
               <Code2 className="w-6 h-6 text-amber-700" />
             </div>
             <div>
               <h2 className="text-2xl font-bold text-slate-900">Theme B: Computational Thinking</h2>
               <p className="text-slate-500">How to use computing systems to solve real-world problems.</p>
             </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SYLLABUS.themeB.map(module => (
              <ModuleCard key={module.id} module={module} onClick={handleModuleClick} />
            ))}
          </div>
        </div>

      </div>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
          <div>
            <h3 className="text-white font-bold mb-4">IB CS 2027</h3>
            <p>Empowering students to excel in the new curriculum. Built with React & TypeScript.</p>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">Modules</h3>
            <ul className="space-y-2">
              {[...SYLLABUS.themeA, ...SYLLABUS.themeB].map((module) => (
                <li key={module.id}>
                  <button 
                    onClick={() => handleModuleClick(module)}
                    className="hover:text-blue-300 transition-colors text-left flex items-start"
                  >
                    <span className="text-slate-600 mr-2 text-xs pt-1 min-w-[24px]">{module.id}</span>
                    <span>{module.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                  <a href="https://realpython.com/cheatsheets/python/#data-types" target="_blank" rel="noreferrer" className="hover:text-blue-300">
                    Python Documentation
                  </a>
              </li>
              <li>
                  <a href="https://www.ibo.org/new-store" target="_blank" rel="noreferrer" className="hover:text-blue-300">
                    Subject Guide
                  </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 mt-8 pt-8 border-t border-slate-800 text-center text-xs">
          &copy; 2025 Educational Platform. Not affiliated with the International Baccalaureate Organization.
        </div>
      </footer>
    </div>
  );
};

export default App;