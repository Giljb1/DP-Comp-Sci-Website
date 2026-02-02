
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
      className="bg-white border border-slate-200 rounded-xl p-8 cursor-pointer transition-all duration-300 hover:shadow-xl hover:border-blue-400 group h-full flex flex-col"
    >
      <div className="flex items-start justify-between mb-8">
        <span className={`px-3 py-1 rounded-full text-[11px] font-bold tracking-tight ${
          module.theme === 'A' 
            ? 'bg-blue-50 text-blue-700 border border-blue-100' 
            : 'bg-amber-50 text-amber-700 border border-amber-100'
        }`}>
          Theme {module.theme}: {module.id}
        </span>
        <IconComponent className="w-6 h-6 text-slate-400 group-hover:text-blue-600 transition-colors" />
      </div>
      <h3 className="text-xl font-bold text-[#111827] mb-4 group-hover:text-blue-900 leading-tight">
        {module.title}
      </h3>
      <p className="text-[#6b7280] text-[15px] leading-relaxed line-clamp-4">
        {module.description}
      </p>
    </div>
  );
};
