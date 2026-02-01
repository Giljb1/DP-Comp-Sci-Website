import React from 'react';
import { Module } from '../types';
import * as Icons from 'lucide-react';

interface ModuleCardProps {
  module: Module;
  onClick: (module: Module) => void;
}

export const ModuleCard: React.FC<ModuleCardProps> = ({ module, onClick }) => {
  // Dynamic icon rendering
  const IconComponent = (Icons as any)[module.iconName] || Icons.Box;

  return (
    <div 
      onClick={() => onClick(module)}
      className="bg-white border border-slate-200 rounded-lg p-6 cursor-pointer transition-all duration-300 hover:shadow-lg hover:border-blue-500 group"
    >
      <div className="flex items-center justify-between mb-4">
        <span className={`px-3 py-1 rounded-full text-xs font-bold ${module.theme === 'A' ? 'bg-blue-100 text-blue-800' : 'bg-amber-100 text-amber-800'}`}>
          Theme {module.theme}: {module.id}
        </span>
        <IconComponent className="w-6 h-6 text-slate-400 group-hover:text-blue-600 transition-colors" />
      </div>
      <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-blue-900">{module.title}</h3>
      <p className="text-sm text-slate-500 line-clamp-3">{module.description}</p>
    </div>
  );
};