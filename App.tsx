
import React, { useState, useEffect } from 'react';
import { SYLLABUS } from './constants';
import { Module } from './types';
import { ModuleCard } from './components/ModuleCard';
import { ContentViewer } from './components/ContentViewer';
import { CourseGuide } from './components/CourseGuide';
import { Glossary } from './components/Glossary';
import { AIAssistant } from './components/AIAssistant';
import { GraduationCap, Cpu, Terminal, Sparkles } from 'lucide-react';
import { generateHeroImage } from './services/geminiService';

const CS_TOPICS = [
  "Minimalist circuit board trace patterns with glowing blue data streams",
  "Abstract crystalline structure representing data nodes in deep indigo",
  "Subtle holographic grid lines floating over a dark oceanic blue background",
  "Macro view of polished silicon wafer with soft cyan light reflections",
  "Atmospheric rendering of a fiber-optic bundle glowing in midnight blue",
  "Deconstructed neural network synapses with soft ethereal blue light",
  "Clean, modern server rack indicator lights in a dark, out-of-focus corridor",
  "Abstract geometric shapes forming a 3D logic gate structure in navy",
  "Fluid-like data waves pulsing across a dark slate digital canvas",
  "Sophisticated array of satellite signal paths over a dark earth silhouette"
];

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'home' | 'module' | 'guide' | 'glossary'>('home');
  const [activeModule, setActiveModule] = useState<Module | null>(null);
  const [heroBg, setHeroBg] = useState<string | null>(null);
  const [isHeroLoading, setIsHeroLoading] = useState(true);

  useEffect(() => {
    const loadDynamicHero = async () => {
      setIsHeroLoading(true);
      const randomTopic = CS_TOPICS[Math.floor(Math.random() * CS_TOPICS.length)];
      const img = await generateHeroImage(randomTopic);
      if (img) setHeroBg(img);
      setIsHeroLoading(false);
    };
    loadDynamicHero();
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

  const openYoutubeOverview = () => {
    window.open('https://youtu.be/yV55lWvunm0?si=-UPxdSzLm54fT9ga', '_blank');
  };

  const navigateToGuide = () => {
    setCurrentView('guide');
    window.scrollTo(0, 0);
  };

  const navigateToGlossary = () => {
    setCurrentView('glossary');
    window.scrollTo(0, 0);
  };

  const openPythonResources = () => {
    window.open('https://realpython.com/cheatsheets/python/#data-types', '_blank');
  };

  const openSQLResources = () => {
    window.open('https://www.w3schools.com/sql/sql_intro.asp', '_blank');
  };

  // Determine chat context based on view
  const getContextString = () => {
    if (activeModule) return `Module: ${activeModule.title} (${activeModule.id})`;
    if (currentView === 'guide') return "IB CS Course Guide Overview";
    if (currentView === 'glossary') return "Glossary and Terminology";
    return "IB CS 2027 Dashboard";
  };

  const renderCurrentView = () => {
    if (currentView === 'module' && activeModule) {
      return <ContentViewer module={activeModule} onBack={handleBack} />;
    }
    if (currentView === 'guide') {
      return <CourseGuide onBack={handleBack} />;
    }
    if (currentView === 'glossary') {
      return <Glossary onBack={handleBack} />;
    }

    return (
      <div className="min-h-screen">
        {/* Hero Section */}
        <div className="relative bg-[#020617] text-white overflow-hidden min-h-[520px] flex items-center">
          <div 
            className="absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out bg-cover bg-center"
            style={{ 
              backgroundImage: heroBg ? `url(${heroBg})` : 'none',
              opacity: isHeroLoading || !heroBg ? 0 : 0.6
            }}
          />
          <div className="absolute inset-0 z-[1] bg-gradient-to-r from-[#020617] via-[#020617]/80 to-transparent"></div>
          <div className="absolute inset-0 z-[1] bg-gradient-to-b from-transparent via-[#020617]/20 to-[#020617]/40"></div>

          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl text-left py-16">
              <div className="flex items-center mb-6">
                <div className="inline-block px-3 py-1 text-[10px] font-bold tracking-[0.15em] text-blue-400 uppercase bg-blue-900/40 rounded-full border border-blue-600/50">
                  First Assessment 2027
                </div>
                {isHeroLoading && (
                  <div className="ml-4 flex items-center text-[10px] text-blue-400 font-mono italic animate-pulse">
                    <Sparkles className="w-3 h-3 mr-1" />
                    Refreshing graphics...
                  </div>
                )}
              </div>

              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-[1.05] text-white">
                Master the Future of <br/>
                <span className="text-[#60a5fa]">Computer Science</span>
              </h1>

              <p className="text-xl text-slate-300/90 leading-relaxed max-w-2xl mb-12">
                A comprehensive learning platform for the IB Diploma Programme. 
                Full syllabus coverage for the 2027 Assessment.
              </p>

              <div className="flex flex-wrap gap-5">
                <button 
                  onClick={openYoutubeOverview}
                  className="px-10 py-3.5 rounded-lg bg-[#2563eb] hover:bg-blue-500 text-white font-bold shadow-[0_4px_20px_rgba(37,99,235,0.4)] transition-all transform hover:-translate-y-0.5"
                >
                  Overview
                </button>
                <button 
                  onClick={navigateToGuide}
                  className="px-10 py-3.5 rounded-lg bg-[#1e293b] hover:bg-slate-800 text-white font-bold border border-slate-700 transition-all transform hover:-translate-y-0.5"
                >
                  Course Guide
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Syllabus Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="mb-20">
            <div className="flex items-center mb-10">
               <div className="bg-blue-50 p-2.5 rounded-xl mr-5 border border-blue-100">
                 <Cpu className="w-6 h-6 text-blue-600" />
               </div>
               <div>
                 <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Theme A: Concepts</h2>
                 <p className="text-slate-500">Theoretical foundations of computing systems.</p>
               </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {SYLLABUS.themeA.map(module => (
                <ModuleCard key={module.id} module={module} onClick={handleModuleClick} />
              ))}
            </div>
          </div>

          <div className="mb-20">
            <div className="flex items-center mb-10">
               <div className="bg-amber-50 p-2.5 rounded-xl mr-5 border border-amber-100">
                 <Terminal className="w-6 h-6 text-amber-600" />
               </div>
               <div>
                 <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Theme B: Computational Thinking</h2>
                 <p className="text-slate-500">Logic, programming, and algorithmic design.</p>
               </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {SYLLABUS.themeB.map(module => (
                <ModuleCard key={module.id} module={module} onClick={handleModuleClick} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-slate-50 font-inter text-slate-900 flex flex-col">
      {/* Universal Navigation */}
      <nav className="bg-[#101c44] text-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3 cursor-pointer" onClick={handleBack}>
              <GraduationCap className="w-8 h-8 text-blue-300" />
              <span className="font-bold text-xl tracking-tight">IB CS <span className="text-blue-300">2027</span></span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8 text-[13px] font-medium tracking-wide">
              {/* Added the circular styled glossary link if implied by context */}
              <button 
                onClick={navigateToGlossary} 
                className={`transition-all px-4 py-1.5 rounded-full ${currentView === 'glossary' ? 'bg-blue-600/50 text-white' : 'text-slate-300 hover:text-white hover:bg-white/10'}`}
              >
                Glossary
              </button>
              <button onClick={openSQLResources} className="text-slate-300 hover:text-white transition">SQL Database</button>
              <button onClick={openPythonResources} className="text-slate-300 hover:text-white transition">Python Docs</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main View Area */}
      <main className="flex-1">
        {renderCurrentView()}
      </main>

      {/* Universal AI Tutor */}
      <AIAssistant context={getContextString()} />

      {/* Simple Footer */}
      <footer className="bg-slate-950 text-slate-500 py-12 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 text-white mb-4">
            <GraduationCap className="w-6 h-6 text-blue-500" />
            <span className="text-xl font-bold tracking-tight">IB CS 2027 Platform</span>
          </div>
          <p className="text-[10px] uppercase tracking-widest text-slate-600">Educational Resources &copy; 2025</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
