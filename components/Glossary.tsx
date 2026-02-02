
import React, { useState } from 'react';
import { ArrowLeft, Search, BookOpen, Hash, Terminal } from 'lucide-react';

interface GlossaryTerm {
  term: string;
  definition: string;
  category: 'A' | 'B' | 'General';
}

// Fixed type inference error for 'category' union type by casting the array literal to GlossaryTerm[]
const GLOSSARY_TERMS: GlossaryTerm[] = ([
  { term: "Abstraction", definition: "Hiding unnecessary details to focus on the essential features of a problem or system.", category: "B" },
  { term: "Algorithm", definition: "A step-by-step procedure or set of rules to be followed in calculations or other problem-solving operations.", category: "B" },
  { term: "Binary", definition: "A base-2 number system using only the digits 0 and 1.", category: "A" },
  { term: "Decomposition", definition: "Breaking down a complex problem into smaller, more manageable sub-problems.", category: "B" },
  { term: "Encapsulation", definition: "Bundling data and methods that operate on that data into a single unit (class) and restricting access to some of the object's components.", category: "B" },
  { term: "Protocol", definition: "A set of formal rules governing the exchange of information over a network.", category: "A" },
  { term: "SQL", definition: "Structured Query Language, used for managing and manipulating relational databases.", category: "A" },
  { term: "Machine Learning", definition: "A subset of AI that enables systems to learn and improve from experience without being explicitly programmed.", category: "A" },
  { term: "Inheritance", definition: "A mechanism in OOP where a new class (subclass) inherits properties and behaviors from an existing class (superclass).", category: "B" },
  { term: "Polymorphism", definition: "The ability of an object to take on many forms, allowing one interface to be used for a general class of actions.", category: "B" },
  { term: "Primary Key", definition: "A unique identifier for each record in a database table.", category: "A" },
  { term: "Normalisation", definition: "The process of organizing a database to reduce redundancy and improve data integrity.", category: "A" },
  { term: "Heuristic", definition: "A problem-solving approach that employs a practical method not guaranteed to be optimal or perfect, but sufficient for immediate goals.", category: "B" },
  { term: "Recursion", definition: "A programming technique where a function calls itself to solve smaller instances of the same problem.", category: "B" },
  { term: "Complexity", definition: "A measure of the resources (time or space) required by an algorithm as a function of its input size (Big O notation).", category: "B" }
] as GlossaryTerm[]).sort((a, b) => a.term.localeCompare(b.term));

export const Glossary: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const [search, setSearch] = useState("");

  const filteredTerms = GLOSSARY_TERMS.filter(t => 
    t.term.toLowerCase().includes(search.toLowerCase()) || 
    t.definition.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      {/* Header */}
      <div className="bg-[#101c44] text-white p-8 shadow-lg">
        <div className="max-w-5xl mx-auto">
          <button 
            onClick={onBack}
            className="flex items-center text-sm text-blue-300 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Dashboard
          </button>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h1 className="text-4xl font-extrabold tracking-tight">IB CS Glossary</h1>
              <p className="text-slate-400 mt-2">Essential terminology for the 2027 Syllabus.</p>
            </div>
            <div className="relative max-w-md w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
              <input 
                type="text" 
                placeholder="Search terms or definitions..." 
                className="w-full bg-[#1e293b] border border-slate-700 rounded-xl py-3 pl-12 pr-4 text-white placeholder-slate-500 focus:ring-2 focus:ring-blue-500 transition-all outline-none"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 py-12">
        {filteredTerms.length > 0 ? (
          <div className="grid gap-6">
            {filteredTerms.map((term, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow group">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-bold text-[#111827] group-hover:text-blue-600 transition-colors">
                    {term.term}
                  </h3>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                    term.category === 'A' ? 'bg-blue-50 text-blue-600' : 
                    term.category === 'B' ? 'bg-amber-50 text-amber-600' : 'bg-slate-50 text-slate-500'
                  }`}>
                    {term.category === 'General' ? 'General' : `Theme ${term.category}`}
                  </span>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  {term.definition}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-slate-300">
            <BookOpen className="w-12 h-12 text-slate-300 mx-auto mb-4" />
            <p className="text-slate-500 font-medium">No matches found for "{search}"</p>
          </div>
        )}
      </div>

      {/* Quick Links Footer */}
      <div className="bg-slate-100 border-t border-slate-200 py-12">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-center space-x-3 text-slate-600">
            <Terminal className="w-5 h-5 text-blue-600" />
            <span className="text-sm">Programming Terms (Theme B)</span>
          </div>
          <div className="flex items-center space-x-3 text-slate-600">
            <Hash className="w-5 h-5 text-amber-600" />
            <span className="text-sm">Database & Hardware (Theme A)</span>
          </div>
          <div className="flex items-center space-x-3 text-slate-600">
            <BookOpen className="w-5 h-5 text-emerald-600" />
            <span className="text-sm">General Computing Principles</span>
          </div>
        </div>
      </div>
    </div>
  );
};
