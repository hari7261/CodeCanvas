import React from 'react';
import {
    Sun,
    Moon,
    Download,
    Upload,
    Save,
    ChevronDown,
    Code2,
    FileText,
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
        <div
            className={`flex flex-wrap items-center justify-between p-4 gap-4 ${isDarkMode
                ? 'bg-gray-900 text-white'
                : 'bg-gray-100 text-gray-800'
                } shadow-md`}
        >
            {/* Language Selection Dropdown */}
            <div className="relative">
                <button
                    className="flex items-center p-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    title="Select Language"
                >
                    {language === 'javascript' ? (
                        <Code2 className="w-5 h-5 mr-2" />
                    ) : (
                        <FileText className="w-5 h-5 mr-2" />
                    )}
                    {language === 'javascript' ? 'JavaScript' : 'Markdown'}
                    <ChevronDown className="w-4 h-4 ml-2" />
                </button>
                <div className="absolute mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg border border-gray-200 dark:border-gray-700 z-10 hidden group-hover:block">
                    <button
                        onClick={() => setLanguage('javascript')}
                        className={`w-full text-left p-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${language === 'javascript' && 'bg-blue-500 text-white'
                            }`}
                    >
                        JavaScript
                    </button>
                    <button
                        onClick={() => setLanguage('markdown')}
                        className={`w-full text-left p-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${language === 'markdown' && 'bg-blue-500 text-white'
                            }`}
                    >
                        Markdown
                    </button>
                </div>
            </div>

            {/* Toolbar Actions */}
            <div className="flex flex-wrap items-center gap-4">
                <button
                    onClick={onSave}
                    className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                    title="Save (Ctrl/Cmd + S)"
                >
                    <Save className="w-5 h-5" />
                </button>
                <button
                    onClick={onExport}
                    className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                    title="Export File"
                >
                    <Download className="w-5 h-5" />
                </button>
                <button
                    onClick={onImport}
                    className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                    title="Import File"
                >
                    <Upload className="w-5 h-5" />
                </button>
                <button
                    onClick={toggleTheme}
                    className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                    title="Toggle Theme"
                >
                    {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </button>
            </div>
        </div>
    );
};

export default Toolbar;
