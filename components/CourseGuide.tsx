
import React, { useState } from 'react';
import { ArrowLeft, Printer, FileText, Cpu, Network, Database, BrainCircuit, Code, Terminal, Layers, Book, PenTool, CheckCircle, Clock, List, ExternalLink } from 'lucide-react';

interface CourseGuideProps {
  onBack: () => void;
}

export const CourseGuide: React.FC<CourseGuideProps> = ({ onBack }) => {
  const [activeSection, setActiveSection] = useState("intro");

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-slate-100 font-sans print:bg-white text-slate-800">
       {/* Navigation Header - Hidden on Print */}
       <div className="bg-blue-900 text-white p-4 sticky top-0 z-50 shadow-md flex justify-between items-center print:hidden">
         <button 
          onClick={onBack}
          className="flex items-center px-4 py-2 hover:bg-blue-800 rounded-full transition-colors"
         >
           <ArrowLeft className="w-4 h-4 mr-2" />
           Back to App
         </button>
         <h1 className="font-bold text-lg hidden md:block">IB Computer Science Guide (2027)</h1>
         <button 
          onClick={handlePrint}
          className="flex items-center px-4 py-2 bg-blue-700 hover:bg-blue-600 rounded-full transition-colors"
         >
           <Printer className="w-4 h-4 mr-2" />
           Print / Save PDF
         </button>
       </div>

       <div className="flex flex-col md:flex-row max-w-7xl mx-auto mt-6 print:mt-0">
          {/* Sidebar Navigation - Hidden on Print */}
          <div className="w-full md:w-72 flex-shrink-0 p-4 print:hidden">
            <div className="bg-white rounded-lg shadow-sm p-4 sticky top-24 overflow-y-auto max-h-[calc(100vh-8rem)]">
              <h2 className="font-bold text-slate-900 mb-4 px-2 uppercase text-xs tracking-wider text-slate-500">Table of Contents</h2>
              <nav className="space-y-1">
                {GUIDE_DATA.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => {
                      setActiveSection(section.id);
                      document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }}
                    className={`w-full text-left px-3 py-3 rounded-md text-sm font-medium transition-all duration-200 flex items-center ${
                      activeSection === section.id
                        ? 'bg-blue-50 text-blue-700 shadow-sm translate-x-1'
                        : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                    }`}
                  >
                    {section.icon && <span className={`mr-3 ${activeSection === section.id ? 'text-blue-600' : 'text-slate-400'}`}>{section.icon}</span>}
                    {section.title}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 p-4 md:p-8 md:pt-0">
            <div className="bg-white rounded-xl shadow-lg p-8 md:p-16 min-h-screen print:shadow-none print:p-0">
                {/* Document Header */}
                <div className="text-center mb-16 border-b-2 border-slate-100 pb-10">
                    <div className="w-24 h-24 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl print:hidden">
                        <span className="text-white font-serif text-5xl font-bold">ib</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-4 tracking-tight">Computer Science Guide</h1>
                    <div className="flex flex-col items-center justify-center space-y-2">
                        <span className="px-4 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-bold uppercase tracking-wide">First Assessment 2027</span>
                        <span className="text-slate-500 font-medium">Diploma Programme</span>
                        <a 
                            href="https://pbaumgarten.com/docs/ib-compsci-2027/ib-compsci-guide-en-2025.pdf"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center mt-4 text-sm font-medium text-emerald-600 hover:text-emerald-700 transition-colors print:hidden group"
                        >
                            View Full Official Guide
                            <ExternalLink className="w-3 h-3 ml-1.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                        </a>
                    </div>
                </div>

                {/* Content Sections */}
                <div className="space-y-24">
                    {GUIDE_DATA.map((section) => (
                        <section key={section.id} id={section.id} className="scroll-mt-32 relative">
                            <div className="flex items-center mb-8 border-b border-slate-200 pb-4">
                                <span className="bg-blue-50 p-3 rounded-xl text-blue-700 mr-4 print:hidden shadow-sm">
                                  {section.icon}
                                </span>
                                <h2 className="text-3xl font-bold text-slate-900">{section.title}</h2>
                            </div>
                            <div className="text-slate-700 leading-relaxed">
                                {section.content}
                            </div>
                        </section>
                    ))}
                </div>

                <div className="mt-24 pt-10 border-t border-slate-200 text-center text-slate-400 text-xs flex flex-col items-center">
                    <p className="mb-2">&copy; International Baccalaureate Organization 2025.</p>
                    <p>This digital guide is for educational purposes for the IB Diploma Programme Computer Science course.</p>
                </div>
            </div>
          </div>
       </div>
    </div>
  );
};

const SectionHeader = ({ title, children }: { title: string, children?: React.ReactNode }) => (
    <div className="mb-8 p-6 bg-slate-50 rounded-xl border border-slate-100">
        <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center">
            <span className="w-2 h-8 bg-blue-600 rounded-full mr-3"></span>
            {title}
        </h3>
        <div className="pl-5">
            {children}
        </div>
    </div>
);

const BulletList = ({ items }: { items: string[] }) => (
    <ul className="list-none space-y-2">
        {items.map((item, idx) => (
            <li key={idx} className="flex items-start">
                <span className="mr-3 mt-1.5 w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0"></span>
                <span>{item}</span>
            </li>
        ))}
    </ul>
);

const KeyValueList = ({ items }: { items: { label: string, value: string }[] }) => (
    <ul className="space-y-3">
        {items.map((item, idx) => (
            <li key={idx} className="flex flex-col md:flex-row md:items-start p-3 hover:bg-white rounded-lg transition-colors border border-transparent hover:border-slate-200">
                <span className="font-bold text-slate-800 md:w-1/3 mb-1 md:mb-0">{item.label}</span>
                <span className="text-slate-600 md:w-2/3">{item.value}</span>
            </li>
        ))}
    </ul>
);

const GUIDE_DATA = [
  {
    id: "intro",
    title: "Nature of the Subject",
    icon: <Book size={28} />,
    content: (
      <>
        <p className="text-lg text-slate-600 mb-8 leading-8">
          Computer science is the study of computers and computational systems. It covers a range of topics related to the theoretical aspects of computing, including algorithms and software design, and the application of computer science to solve practical problems.
        </p>
        
        <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white p-8 rounded-2xl shadow-lg mb-10">
          <div className="flex items-start">
            <BrainCircuit className="w-10 h-10 text-blue-300 mr-4 flex-shrink-0" />
            <div>
                <h3 className="text-2xl font-bold mb-3">Computational Thinking</h3>
                <blockquote className="text-lg italic text-blue-100 mb-2 border-l-4 border-blue-400 pl-4">
                    "The thought processes involved in formulating a problem and expressing its solution(s) in such a way that a computer—human or machine—can effectively carry out."
                </blockquote>
                <cite className="text-blue-300 text-sm font-medium not-italic">— Wing, 2014</cite>
            </div>
          </div>
        </div>

        <h3 className="text-xl font-bold text-slate-900 mb-6">Key Components of Computational Thinking</h3>
        <div className="grid gap-4 md:grid-cols-2">
            {[
                { title: "Problem Specification", desc: "Clearly defining and understanding the nature of a problem." },
                { title: "Decomposition", desc: "Breaking down a complex problem or system into smaller, more manageable parts." },
                { title: "Pattern Recognition", desc: "Identifying similarities to other problems to make predictions." },
                { title: "Abstraction", desc: "Focusing on essential features and high-level ideas, whilst removing unnecessary detail." },
                { title: "Algorithmic Thinking", desc: "Developing a step-by-step series of instructions for solving a particular problem." },
                { title: "Testing & Evaluation", desc: "Assessing a potential solution against the initial expected goals." }
            ].map((item, i) => (
                <div key={i} className="bg-white border border-slate-200 p-5 rounded-xl hover:shadow-md transition-shadow">
                    <div className="flex items-center mb-2">
                        <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold mr-3">{i + 1}</div>
                        <h4 className="font-bold text-slate-800">{item.title}</h4>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed pl-11">{item.desc}</p>
                </div>
            ))}
        </div>
      </>
    )
  },
  {
    id: "theme-a",
    title: "Theme A: Concepts of Computer Science",
    icon: <Cpu size={28} />,
    content: (
      <div className="space-y-8">
        <p className="text-slate-600">Theme A focuses on the fundamental concepts of computer science that underpin the design and operation of computer systems.</p>

        <SectionHeader title="A1 Computer Fundamentals">
            <KeyValueList items={[
                { label: "A1.1 Hardware & Operation", value: "CPU components (ALU, CU, Registers), Fetch-Decode-Execute cycle, GPU roles, Primary vs Secondary memory." },
                { label: "A1.2 Data Representation", value: "Binary, Hexadecimal, Logic gates (AND, OR, NOT, NAND, NOR, XOR), Truth tables." },
                { label: "A1.3 Operating Systems", value: "Resource management, Scheduling, Interrupts, Control systems." },
                { label: "A1.4 Translation (HL)", value: "Compilers vs Interpreters, Virtual Machines." }
            ]} />
        </SectionHeader>

        <SectionHeader title="A2 Networks">
            <KeyValueList items={[
                { label: "A2.1 Network Fundamentals", value: "LAN, WAN, VPN, Protocols (TCP/IP model layers)." },
                { label: "A2.2 Network Architecture", value: "Topologies (Star, Mesh), Client-server vs Peer-to-peer." },
                { label: "A2.3 Data Transmission", value: "Packet switching, Circuit switching, Wired vs Wireless media." },
                { label: "A2.4 Network Security", value: "Firewalls, Encryption types, Common threats and countermeasures." }
            ]} />
        </SectionHeader>

        <SectionHeader title="A3 Databases">
            <KeyValueList items={[
                { label: "A3.1 Fundamentals", value: "Relational database concepts, Keys (Primary, Foreign, Composite)." },
                { label: "A3.2 Database Design", value: "ERDs, Normalization (1NF, 2NF, 3NF), Data integrity." },
                { label: "A3.3 Database Programming", value: "SQL (DDL, DML), Queries, Updates." },
                { label: "A3.4 Alternative DBs (HL)", value: "Data warehouses, Data mining, Distributed databases." }
            ]} />
        </SectionHeader>

        <SectionHeader title="A4 Machine Learning">
            <KeyValueList items={[
                { label: "A4.1 Fundamentals", value: "Supervised vs Unsupervised learning, Neural Networks, Deep Learning." },
                { label: "A4.2 Data Preprocessing (HL)", value: "Cleaning, Feature selection, Dimensionality reduction." },
                { label: "A4.3 ML Approaches (HL)", value: "Regression, Classification, Clustering, Genetic algorithms." },
                { label: "A4.4 Ethical Considerations", value: "Algorithmic bias, Privacy, Impact on society and employment." }
            ]} />
        </SectionHeader>
      </div>
    )
  },
  {
    id: "theme-b",
    title: "Theme B: Computational Thinking",
    icon: <Terminal size={28} />,
    content: (
      <div className="space-y-8">
        <p className="text-slate-600">Theme B focuses on problem-solving, algorithmic thinking, and the practical application of programming skills.</p>

        <SectionHeader title="B1 Computational Thinking">
            <div className="space-y-4">
                <p><strong>B1.1 Approaches:</strong> Using abstraction, decomposition, and pattern recognition to model problems.</p>
            </div>
        </SectionHeader>

        <SectionHeader title="B2 Programming">
            <div className="grid md:grid-cols-2 gap-6">
                <div>
                    <h4 className="font-bold text-slate-800 mb-2">Fundamentals</h4>
                    <BulletList items={[
                        "Variables & Data types",
                        "String manipulation",
                        "Selection (if/else)",
                        "Iteration (for/while loops)",
                        "Functions & Scope"
                    ]} />
                </div>
                <div>
                    <h4 className="font-bold text-slate-800 mb-2">Algorithms & Files</h4>
                    <BulletList items={[
                        "Linear & Binary Search",
                        "Bubble & Selection Sort",
                        "Big O Notation (Efficiency)",
                        "File Processing (Read/Write)"
                    ]} />
                </div>
            </div>
        </SectionHeader>

        <SectionHeader title="B3 Object-Oriented Programming (OOP)">
            <KeyValueList items={[
                { label: "B3.1 Single Class", value: "Encapsulation, Inheritance, Polymorphism, Instantiation." },
                { label: "B3.2 Multiple Classes (HL)", value: "Composition, Aggregation, Design Patterns, UML Diagrams." }
            ]} />
        </SectionHeader>

        <SectionHeader title="B4 Abstract Data Types (HL Only)">
            <p className="mb-4 text-sm text-slate-500">Advanced data structures for managing complex data.</p>
            <div className="grid grid-cols-2 gap-4">
                {["Linked Lists", "Binary Search Trees (BST)", "Stacks & Queues", "Hash Tables"].map(item => (
                    <div key={item} className="bg-white p-3 rounded border border-slate-200 text-center font-medium text-slate-700 shadow-sm">{item}</div>
                ))}
            </div>
        </SectionHeader>
      </div>
    )
  },
  {
    id: "assessment",
    title: "Assessment Outline",
    icon: <PenTool size={28} />,
    content: (
      <div className="space-y-10">
        <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-bold text-slate-800">Standard Level (SL)</h3>
                    <span className="bg-blue-100 text-blue-800 text-xs font-bold px-2 py-1 rounded">150 Hours</span>
                </div>
                
                <div className="space-y-6">
                    <div>
                        <h4 className="font-bold text-blue-900 border-b border-blue-100 pb-1 mb-2">External Assessment (70%)</h4>
                        <ul className="space-y-3 text-sm">
                            <li className="flex justify-between">
                                <span><strong>Paper 1</strong> (1h 15m)</span>
                                <span className="text-slate-500">35%</span>
                            </li>
                            <p className="text-xs text-slate-500 pl-2 mb-2">Theme A + Case Study (Short response)</p>
                            
                            <li className="flex justify-between">
                                <span><strong>Paper 2</strong> (1h 15m)</span>
                                <span className="text-slate-500">35%</span>
                            </li>
                            <p className="text-xs text-slate-500 pl-2">Theme B (Programming)</p>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-blue-900 border-b border-blue-100 pb-1 mb-2">Internal Assessment (30%)</h4>
                        <p className="text-sm">The Computational Solution (35 hours)</p>
                    </div>
                </div>
            </div>

            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-bold text-slate-800">Higher Level (HL)</h3>
                    <span className="bg-amber-100 text-amber-800 text-xs font-bold px-2 py-1 rounded">240 Hours</span>
                </div>
                
                <div className="space-y-6">
                    <div>
                        <h4 className="font-bold text-blue-900 border-b border-blue-100 pb-1 mb-2">External Assessment (80%)</h4>
                        <ul className="space-y-3 text-sm">
                            <li className="flex justify-between">
                                <span><strong>Paper 1</strong> (2h)</span>
                                <span className="text-slate-500">40%</span>
                            </li>
                            <p className="text-xs text-slate-500 pl-2 mb-2">Theme A + Case Study (Extended response)</p>
                            
                            <li className="flex justify-between">
                                <span><strong>Paper 2</strong> (2h)</span>
                                <span className="text-slate-500">40%</span>
                            </li>
                            <p className="text-xs text-slate-500 pl-2">Theme B + Abstract Data Types</p>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-blue-900 border-b border-blue-100 pb-1 mb-2">Internal Assessment (20%)</h4>
                        <p className="text-sm">The Computational Solution (35 hours)</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
            <div className="flex items-start">
                <List className="text-amber-600 mt-1 mr-4" />
                <div>
                    <h3 className="text-lg font-bold text-amber-900 mb-2">The Case Study</h3>
                    <p className="text-amber-800 text-sm leading-relaxed">
                        A scenario involving current developments or emerging technologies. Published 12 months (May) or 18 months (Nov) in advance. 
                        Includes challenge questions that stimulate required research.
                    </p>
                </div>
            </div>
        </div>
      </div>
    )
  },
  {
    id: "ia",
    title: "Internal Assessment",
    icon: <FileText size={28} />,
    content: (
      <div className="space-y-8">
        <p className="text-lg text-slate-700">
            The <strong>Computational Solution</strong> is a 35-hour project where students identify a problem and develop a software solution for a specified client or user.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
                <h3 className="text-xl font-bold text-slate-900 flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                    Assessment Criteria
                </h3>
                <div className="space-y-4">
                    {[
                        { code: "A", name: "Problem Specification", marks: "4 marks", desc: "Scenario, Success criteria." },
                        { code: "B", name: "Planning", marks: "4 marks", desc: "Decomposition, Timeline (GANTT)." },
                        { code: "C", name: "System Overview", marks: "6 marks", desc: "Design, Algorithms, Testing plan." },
                        { code: "D", name: "Development", marks: "12 marks", desc: "Coding techniques, Functionality, Justification." },
                        { code: "E", name: "Evaluation", marks: "4 marks", desc: "Success criteria met, Improvements." }
                    ].map(crit => (
                        <div key={crit.code} className="flex items-center p-3 bg-white border border-slate-100 rounded-lg shadow-sm">
                            <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-700 mr-4">
                                {crit.code}
                            </div>
                            <div className="flex-1">
                                <div className="flex justify-between">
                                    <span className="font-bold text-slate-800">{crit.name}</span>
                                    <span className="text-xs font-bold bg-slate-200 text-slate-600 px-2 py-0.5 rounded">{crit.marks}</span>
                                </div>
                                <span className="text-xs text-slate-500">{crit.desc}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="space-y-6">
                <h3 className="text-xl font-bold text-slate-900 flex items-center">
                    <Layers className="w-5 h-5 text-purple-600 mr-2" />
                    Submission Requirements
                </h3>
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 space-y-6">
                    <div>
                        <h4 className="font-bold text-slate-800 mb-1">1. Documentation</h4>
                        <p className="text-sm text-slate-600">A single PDF file containing all criteria (A-E). Maximum <strong>2,000 words</strong> (excluding code snippets/charts).</p>
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-800 mb-1">2. Video</h4>
                        <p className="text-sm text-slate-600">A screencast (max <strong>5 minutes</strong>) demonstrating the full functionality of the product and evidence of the testing strategy.</p>
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-800 mb-1">3. Appendices</h4>
                        <p className="text-sm text-slate-600">Full source code and any additional resources used.</p>
                    </div>
                </div>
                
                <div className="flex items-center p-4 bg-blue-50 text-blue-800 rounded-lg border border-blue-100">
                    <Clock className="w-5 h-5 mr-3 flex-shrink-0" />
                    <p className="text-sm font-medium">Recommended Time Allocation: 35 Hours</p>
                </div>
            </div>
        </div>
      </div>
    )
  }
];
