export type ThemeType = 'A' | 'B';

export interface Section {
  id: string;
  title: string;
  content: string; // Markdown-like text
  codeExample?: string; // Python code
}

export interface Module {
  id: string; // e.g., "A1", "A2"
  title: string;
  description: string;
  theme: ThemeType;
  iconName: string;
  sections: Section[];
}

export interface SyllabusData {
  themeA: Module[];
  themeB: Module[];
}