// Improved Editor Component
import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { markdown } from '@codemirror/lang-markdown';
import { EditorView } from '@codemirror/view';
import { oneDark } from '@codemirror/theme-one-dark';

interface EditorProps {
    value: string;
    onChange: (value: string) => void;
    language: 'javascript' | 'markdown';
    isDarkMode: boolean;
}

const Editor: React.FC<EditorProps> = ({ value, onChange, language, isDarkMode }) => {
    const extensions = [
        EditorView.lineWrapping,
        language === 'javascript' ? javascript() : markdown(),
    ];

    if (isDarkMode) {
        extensions.push(oneDark);
    }

    return (
        <CodeMirror
            value={value}
            height="100%"
            extensions={extensions}
            onChange={onChange}
            theme={isDarkMode ? 'dark' : 'light'}
            className="h-full text-base border-t border-gray-300 dark:border-gray-700"
        />
    );
};

export default Editor;


