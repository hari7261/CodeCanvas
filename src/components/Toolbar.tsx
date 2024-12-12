// Improved Toolbar Component
import React from 'react';
import {
    Sun,
    Moon,
    Download,
    Upload,
    Code2,
    FileText,
    Save
} from 'lucide-react';

interface ToolbarProps {
    isDarkMode: boolean;
    toggleTheme: () => void;
    language: 'javascript' | 'markdown';
    setLanguage: (lang: 'javascript' | 'markdown') => void;
    onSave: () => void;
    onExport: () => void;
    onImport: () => void;
}

const Toolbar: React.FC<ToolbarProps> = ({
    isDarkMode,
    toggleTheme,
    language,
    setLanguage,
    onSave,
    onExport,
    onImport,
}) => {
    return (
        <div className={`flex items-center justify-between p-4 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-800'} shadow-md`}>
            <div className="flex items-center space-x-4">
                <button
                    onClick={() => setLanguage('javascript')}
                    className={`p-2 rounded-md transition-all ${language === 'javascript' ? 'bg-blue-500 text-white' : 'hover:bg-gray-200 dark:hover:bg-gray-700'}`}
                    title="JavaScript Mode"
                >
                    <Code2 className="w-5 h-5" />
                </button>
                <button
                    onClick={() => setLanguage('markdown')}
                    className={`p-2 rounded-md transition-all ${language === 'markdown' ? 'bg-blue-500 text-white' : 'hover:bg-gray-200 dark:hover:bg-gray-700'}`}
                    title="Markdown Mode"
                >
                    <FileText className="w-5 h-5" />
                </button>
            </div>

            <div className="flex items-center space-x-4">
                <button
                    onClick={onSave}
                    className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-all"
                    title="Save (Ctrl/Cmd + S)"
                >
                    <Save className="w-5 h-5" />
                </button>
                <button
                    onClick={onExport}
                    className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-all"
                    title="Export File"
                >
                    <Download className="w-5 h-5" />
                </button>
                <button
                    onClick={onImport}
                    className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-all"
                    title="Import File"
                >
                    <Upload className="w-5 h-5" />
                </button>
                <button
                    onClick={toggleTheme}
                    className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-all"
                    title="Toggle Theme"
                >
                    {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </button>
            </div>
        </div>
    );
};

export default Toolbar;