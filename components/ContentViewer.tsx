
import React, { useState } from 'react';
import { Module } from '../types';
import { ArrowLeft, Book, Terminal } from 'lucide-react';

interface ContentViewerProps {
  module: Module;
  onBack: () => void;
}

export const ContentViewer: React.FC<ContentViewerProps> = ({ module, onBack }) => {
  const [activeSectionId, setActiveSectionId] = useState<string>(module.sections[0]?.id || "");

  const activeSection = module.sections.find(s => s.id === activeSectionId);

  const renderContent = (content: string) => {
    return content.split('\n').map((line, index) => {
      // Main Objective Header pattern: A2.2.1 or B2.1.1 ...
      const headerMatch = line.match(/^([AB]\d+\.\d+\.\d+)\s+(.+)$/);
      if (headerMatch) {
        return (
          <div key={index} className="mt-8 mb-4">
            <h3 className="text-[18px] font-bold text-[#111827] leading-tight">
              {headerMatch[1]} {headerMatch[2]}
            </h3>
          </div>
        );
      }

      // Sub-point pattern: 1. Topologies: content
      const subPointMatch = line.match(/^(\d+\.\s+[^:]+:)\s*(.*)$/);
      if (subPointMatch) {
        return (
          <div key={index} className="ml-5 mb-6 flex items-start text-[15px] leading-relaxed">
            <span className="font-bold text-[#2563eb] mr-2 shrink-0">{subPointMatch[1]}</span>
            <span className="text-[#4b5563] font-normal">{subPointMatch[2]}</span>
          </div>
        );
      }

      // Numbered items without direct label or multi-line wraps
      const listMatch = line.match(/^(\d+\.\s+)(.+)$/);
      if (listMatch) {
        return (
          <div key={index} className="ml-5 mb-6 flex items-start text-[15px] leading-relaxed">
            <span className="font-bold text-[#2563eb] mr-2 shrink-0">{listMatch[1]}</span>
            <span className="text-[#4b5563] font-normal">{listMatch[2]}</span>
          </div>
        );
      }

      // Generic text/indented text (continuation of previous points)
      if (!line.trim()) return <div key={index} className="h-6"></div>;

      return (
        <p key={index} className="text-[#4b5563] text-[15px] leading-relaxed mb-6 ml-14">
          {line}
        </p>
      );
    });
  };

  return (
    <div className="flex flex-col h-full bg-[#f8fafc]">
      {/* Navigation Header */}
      <div className="bg-[#1e3a8a] text-white p-6 md:p-8 shadow-sm print:hidden">
        <button 
          onClick={onBack}
          className="flex items-center text-sm text-blue-200 hover:text-white mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Dashboard
        </button>
        <div className="flex flex-col md:flex-row md:items-baseline md:space-x-4">
          <h1 className="text-3xl font-bold text-white">{module.id}: {module.title}</h1>
          <span className="text-blue-300 font-semibold mt-1">Theme {module.theme}</span>
        </div>
        <p className="text-slate-300 mt-2 max-w-3xl">{module.description}</p>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar - Matching image exactly with #eff3f6 background */}
        <aside className="w-[280px] bg-[#eff3f6] border-r border-slate-200 overflow-y-auto hidden md:block">
          <div className="p-4 pt-6">
            <h3 className="text-[11px] font-bold text-[#94a3b8] uppercase tracking-[0.15em] mb-4 px-3">Topics</h3>
            <nav className="space-y-1">
              {module.sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSectionId(section.id)}
                  className={`w-full text-left px-3 py-3 rounded-md text-[13px] font-medium transition-all ${
                    activeSectionId === section.id
                      ? 'bg-[#1e3a8a] text-white shadow-md'
                      : 'text-[#64748b] hover:bg-[#e2e8f0]'
                  }`}
                >
                  {section.id} {section.title}
                </button>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main Content Area - White page with exact padding and iconography */}
        <main className="flex-1 overflow-y-auto p-8 md:p-14 bg-white">
          {activeSection ? (
            <div className="max-w-[900px] mx-auto">
              {/* Header section with book icon */}
              <div className="flex items-center text-[#111827] mb-12 border-b border-slate-50 pb-4">
                <Book className="w-6 h-6 text-[#2563eb] mr-4" />
                <h2 className="text-[24px] font-bold tracking-tight">
                  {activeSection.id} - {activeSection.title}
                </h2>
              </div>
              
              <div className="content-render antialiased">
                {renderContent(activeSection.content)}
              </div>

              {activeSection.codeExample && (
                <div className="mt-20 bg-[#0f172a] rounded-2xl overflow-hidden shadow-2xl border border-slate-800">
                  <div className="bg-[#1e293b] px-5 py-3 flex items-center justify-between border-b border-slate-700">
                    <div className="flex items-center text-slate-400">
                      <Terminal className="w-4 h-4 mr-2" />
                      <span className="text-[11px] font-mono font-bold uppercase tracking-widest">Technical Implementation</span>
                    </div>
                  </div>
                  <div className="p-6 overflow-x-auto">
                    <pre className="text-emerald-400 text-[14px] font-mono leading-relaxed">
                      <code>{activeSection.codeExample}</code>
                    </pre>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-slate-400 space-y-4">
               <Book className="w-12 h-12 opacity-20" />
               <p className="font-medium">Select a topic from the sidebar to start reading.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};
