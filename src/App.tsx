
// Improved App Component
import { useState, useEffect, useCallback } from 'react';
import Editor from './components/Editor';
import Toolbar from './components/Toolbar';

function App() {
  const [content, setContent] = useState('// Start coding here...');
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved ? JSON.parse(saved) : window.matchMedia('(prefers-color-scheme: dark)').matches;
  });
  const [language, setLanguage] = useState<'javascript' | 'markdown'>('javascript');

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  const handleSave = useCallback(() => {
    localStorage.setItem('editorContent', content);
  }, [content]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 's') {
        e.preventDefault();
        handleSave();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [content, handleSave]);

  const handleExport = useCallback(() => {
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `document.${language === 'javascript' ? 'js' : 'md'}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, [content, language]);

  const handleImport = useCallback(() => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.js,.md,.txt';
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const content = e.target?.result as string;
          setContent(content);
        };
        reader.readAsText(file);
      }
    };
    input.click();
  }, []);

  return (
    <div className={`h-screen flex flex-col ${isDarkMode ? 'dark' : ''}`}>
      <Toolbar
        isDarkMode={isDarkMode}
        toggleTheme={() => setIsDarkMode(!isDarkMode)}
        language={language}
        setLanguage={setLanguage}
        onSave={handleSave}
        onExport={handleExport}
        onImport={handleImport}
      />
      <div className="flex-1 overflow-hidden">
        <Editor
          value={content}
          onChange={setContent}
          language={language}
          isDarkMode={isDarkMode}
        />
      </div>
    </div>
  );
}

export default App;