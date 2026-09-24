import { useState } from 'react';
import { Copy, Check, Terminal } from 'lucide-react';

interface CodeSnippetProps {
  code: string;
  language: string;
  caption?: string;
}

export function CodeSnippet({ code, language, caption }: CodeSnippetProps) {
  const [copied, setCopied] = useState(false);

  const copyCode = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-lg border border-borderLine-light dark:border-borderLine-dark bg-canvas-dark text-white overflow-hidden shadow-sm my-4 font-mono text-xs">
      {/* Top Bar */}
      <div className="px-4 py-2.5 bg-surface-dark border-b border-borderLine-dark flex items-center justify-between gap-3 text-ink-secondaryDark">
        <div className="flex items-center gap-2">
          <Terminal className="w-3.5 h-3.5 text-accent-dark" />
          <span className="text-[11px] font-semibold text-white uppercase tracking-wider">
            {language}
          </span>
          {caption && (
            <>
              <span className="text-borderLine-dark">|</span>
              <span className="text-[11px] text-ink-secondaryDark truncate">{caption}</span>
            </>
          )}
        </div>

        <button
          onClick={copyCode}
          aria-label="Copy code snippet to clipboard"
          className="inline-flex items-center gap-1.5 px-2 py-1 rounded text-[10px] text-ink-secondaryDark hover:text-white hover:bg-surface-elevatedDark transition-colors"
        >
          {copied ? (
            <>
              <Check className="w-3 h-3 text-emerald-400" />
              <span className="text-emerald-400">Copied</span>
            </>
          ) : (
            <>
              <Copy className="w-3 h-3" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Code Area with Horizontal Scroll */}
      <div className="p-4 overflow-x-auto text-[12px] leading-relaxed font-mono">
        <pre className="text-zinc-200">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
}
