import { useState } from 'react';
import { Image as ImageIcon, X, ZoomIn } from 'lucide-react';
import { ProjectScreenshot } from '@/types/project';

interface ProjectGalleryProps {
  screenshots?: ProjectScreenshot[];
  projectSlug: string;
}

export function ProjectGallery({ screenshots, projectSlug }: ProjectGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<ProjectScreenshot | null>(null);

  if (!screenshots || screenshots.length === 0) {
    return (
      <div className="rounded-lg border border-dashed border-borderLine-light dark:border-borderLine-dark bg-surface-elevatedLight/30 dark:bg-surface-elevatedDark/30 p-8 text-center space-y-3 font-mono text-xs text-ink-muted dark:text-ink-mutedDark">
        <ImageIcon className="w-8 h-8 mx-auto text-ink-secondary dark:text-ink-secondaryDark opacity-60" />
        <div>
          <span className="font-semibold text-ink-primary dark:text-ink-primaryDark">
            Artifact Registry
          </span>
          <p className="mt-1 text-ink-secondary dark:text-ink-secondaryDark">
            No interface captures registered yet. Visual artifacts will be stored in{' '}
            <code className="px-1.5 py-0.5 rounded bg-surface-elevatedLight dark:bg-surface-elevatedDark text-accent dark:text-accent-dark">
              public/projects/{projectSlug}/
            </code>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {screenshots.map((shot, idx) => (
          <div
            key={idx}
            className="group rounded-lg border border-borderLine-light dark:border-borderLine-dark bg-surface-light dark:bg-surface-dark overflow-hidden shadow-sm"
          >
            {/* Image Preview Container */}
            <div className="relative aspect-[16/10] bg-canvas-light/60 dark:bg-canvas-dark/60 overflow-hidden cursor-pointer">
              <img
                src={shot.url}
                alt={shot.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                onClick={() => setSelectedImage(shot)}
              />
              <button
                onClick={() => setSelectedImage(shot)}
                aria-label={`Enlarge image: ${shot.caption}`}
                className="absolute bottom-3 right-3 p-2 rounded-md bg-canvas-dark/80 text-white opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
            </div>

            {/* Caption Bar */}
            <div className="p-3.5 border-t border-borderLine-subtleLight dark:border-borderLine-subtleDark font-mono text-xs text-ink-secondary dark:text-ink-secondaryDark flex items-center justify-between">
              <span className="text-[11px] leading-snug">{shot.caption}</span>
              <span className="text-[10px] text-ink-muted dark:text-ink-mutedDark shrink-0 pl-2">
                0{idx + 1}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightweight Accessible Modal / Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm animate-in fade-in duration-150"
          onClick={() => setSelectedImage(null)}
          onKeyDown={(e) => {
            if (e.key === 'Escape') setSelectedImage(null);
          }}
          tabIndex={0}
          role="dialog"
          aria-modal="true"
          aria-label={selectedImage.caption}
        >
          <div
            className="relative max-w-5xl w-full rounded-lg bg-surface-dark border border-borderLine-dark overflow-hidden p-2"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-3 py-2 border-b border-borderLine-dark font-mono text-xs text-white">
              <span>{selectedImage.caption}</span>
              <button
                onClick={() => setSelectedImage(null)}
                aria-label="Close image preview"
                className="p-1 hover:text-accent-dark transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-2">
              <img
                src={selectedImage.url}
                alt={selectedImage.alt}
                className="w-full h-auto max-h-[80vh] object-contain rounded"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
