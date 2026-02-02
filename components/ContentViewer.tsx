import React, { useState, useEffect } from 'react';
import { Module } from '../types';
import { ArrowLeft, BookOpen, Terminal } from 'lucide-react';
import { generateHeroImage } from '../services/geminiService';

interface ContentViewerProps {
  module: Module;
  onBack: () => void;
}

export const ContentViewer: React.FC<ContentViewerProps> = ({ module, onBack }) => {
  const [activeSectionId, setActiveSectionId] = useState<string>(module.sections[0]?.id || "");
  const [moduleImage, setModuleImage] = useState<string | null>(null);

  const activeSection = module.sections.find(s => s.id === activeSectionId);

  useEffect(() => {
    // Generate a specific image for this module when it loads
    const fetchImage = async () => {
      const img = await generateHeroImage(`${module.id} ${module.title}`);
      setModuleImage(img);
    };
    fetchImage();
  }, [module]);

  return (
    <div className="flex flex-col h-full bg-slate-50">
      {/* Header for Module with Dynamic Image Background */}
      <div className="relative bg-slate-900 text-white shadow-md">
        <div className="absolute inset-0 z-0 overflow-hidden">
          {moduleImage ? (
            <img
              src={moduleImage}
              alt={module.title}
              className="w-full h-full object-cover opacity-20"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-r from-blue-900 to-slate-900 opacity-50"></div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent"></div>
        </div>

        <div className="relative z-10 p-6 md:p-8">
          <button
            onClick={onBack}
            className="flex items-center text-sm text-blue-200 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Dashboard
          </button>
          <div className="flex flex-col md:flex-row md:items-baseline md:space-x-4">
            <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">{module.id}: {module.title}</h1>
            <span className="text-blue-300 font-semibold mt-2 md:mt-0">Theme {module.theme}</span>
          </div>
          <p className="text-slate-300 mt-3 max-w-3xl">{module.description}</p>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar for Sections */}
        <aside className="w-64 bg-slate-100 border-r border-slate-200 overflow-y-auto hidden md:block">
          <div className="p-4">
            <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Topics</h3>
            <nav className="space-y-1">
              {module.sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSectionId(section.id)}
                  className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors ${activeSectionId === section.id
                      ? 'bg-blue-900 text-white'
                      : 'text-slate-600 hover:bg-slate-200'
                    }`}
                >
                  <span className="opacity-70 mr-2">{section.id}</span>
                  {section.title}
                </button>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto p-6 md:p-10 scroll-smooth">
          {activeSection ? (
            <div className="max-w-4xl mx-auto animate-fadeIn">
              <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
                <BookOpen className="w-6 h-6 mr-3 text-blue-600" />
                {activeSection.id} - {activeSection.title}
              </h2>

              <div
                className="prose prose-slate max-w-none text-slate-700 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: activeSection.content }}
              />

              {activeSection.codeExample && (
                <div className="mt-8 bg-slate-900 rounded-lg overflow-hidden shadow-md">
                  <div className="bg-slate-800 px-4 py-2 flex items-center justify-between border-b border-slate-700">
                    <div className="flex items-center text-slate-300">
                      <Terminal className="w-4 h-4 mr-2" />
                      <span className="text-xs font-mono">example.py</span>
                    </div>
                    <div className="flex space-x-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                      <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                    </div>
                  </div>
                  <div className="p-4 overflow-x-auto">
                    <pre className="text-emerald-300 text-sm font-mono">
                      <code>{activeSection.codeExample}</code>
                    </pre>
                  </div>
                  <div className="bg-slate-950 px-4 py-2 text-xs text-slate-500 text-right">
                    Python 3.11
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="flex items-center justify-center h-full text-slate-400">
              Select a topic to begin learning.
            </div>
          )}
        </main>
      </div>
    </div>
  );
};