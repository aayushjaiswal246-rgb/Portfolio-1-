import React, { useEffect } from 'react';
import { X, Check, ArrowRight } from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onInquire: (title: string) => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onInquire,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      id="project-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-stone-950/60 backdrop-blur-xs animate-in fade-in"
      onClick={onClose}
    >
      <div
        id="project-modal-dialog"
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-stone-200 shadow-xl flex flex-col"
      >
        {/* Modal Header Bar with Image */}
        <div className="relative aspect-[16/9] w-full bg-stone-100 overflow-hidden">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <button
            id="close-project-modal-btn"
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-stone-900/80 text-white hover:bg-stone-900 transition-colors"
            aria-label="Close case study modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <div className="flex items-center gap-3 text-xs text-stone-500 mb-2">
              <span className="px-2 py-0.5 bg-stone-100 font-medium rounded-sm text-stone-700">
                {project.category}
              </span>
              <span>Client: {project.client}</span>
              <span>Year: {project.year}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-serif font-medium text-stone-900">
              {project.title}
            </h3>
          </div>

          <div className="p-4 bg-stone-50 rounded-xl border border-stone-200/90 text-sm">
            <span className="text-xs font-semibold text-stone-800 uppercase tracking-wider block mb-1">
              Measurable Outcome & Impact
            </span>
            <p className="text-stone-700 font-medium">{project.impact}</p>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-stone-800">
              Project Context & Approach
            </h4>
            <p className="text-sm text-stone-600 leading-relaxed">
              {project.fullDescription}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-stone-800 mb-3">
              Delivered Work
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {project.deliverables.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-stone-700">
                  <Check className="w-3.5 h-3.5 text-stone-900 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-stone-500">
              Want a similar experience built for your brand?
            </span>
            <button
              onClick={() => {
                onClose();
                onInquire(project.title);
              }}
              className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold tracking-wide text-stone-50 bg-stone-900 hover:bg-stone-800 rounded-full flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <span>Inquire about this project style</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
