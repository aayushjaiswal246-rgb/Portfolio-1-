import React, { useState, useMemo } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { ProjectItem, SiteConfig } from '../types';

interface WorkShowcaseProps {
  config: SiteConfig;
  onSelectProject: (project: ProjectItem) => void;
}

export const WorkShowcase: React.FC<WorkShowcaseProps> = ({ config, onSelectProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = useMemo(() => {
    const cats = new Set<string>();
    config.projects.forEach((p) => {
      // take first term before & if applicable
      cats.add(p.category);
    });
    return ['All', ...Array.from(cats)];
  }, [config.projects]);

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All') return config.projects;
    return config.projects.filter((p) => p.category === selectedCategory);
  }, [config.projects, selectedCategory]);

  return (
    <section id="work" className="py-20 md:py-28 bg-white border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-semibold tracking-wider text-stone-500 uppercase">
              Portfolio
            </span>
            <h2
              id="work-section-title"
              className="mt-2 text-3xl sm:text-4xl font-serif font-medium tracking-tight text-stone-900"
            >
              {config.projectsHeading}
            </h2>
          </div>

          {/* Category Filter Pills */}
          {categories.length > 2 && (
            <div id="work-category-filters" className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  id={`filter-btn-${category.toLowerCase().replace(/\s+/g, '-')}`}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-colors ${
                    selectedCategory === category
                      ? 'bg-stone-900 text-stone-50'
                      : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              id={`project-card-${project.id}`}
              onClick={() => onSelectProject(project)}
              className="group cursor-pointer flex flex-col bg-stone-50 rounded-xl overflow-hidden border border-stone-200 hover:border-stone-400/80 transition-all duration-300"
            >
              {/* Image Container with smooth aspect ratio */}
              <div className="relative aspect-[16/10] overflow-hidden bg-stone-200">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="p-2 rounded-full bg-stone-900/80 text-white backdrop-blur-xs flex items-center justify-center">
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
                <div className="absolute bottom-3 left-3">
                  <span className="px-2.5 py-1 text-xs font-medium bg-stone-900/75 text-stone-100 backdrop-blur-xs rounded-md">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Text Meta */}
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs text-stone-500 mb-2">
                    <span>{project.client}</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="text-xl font-medium font-serif text-stone-900 group-hover:text-stone-700 transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm text-stone-600 leading-relaxed line-clamp-2">
                    {project.summary}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-stone-200 flex items-center justify-between">
                  <span className="text-xs font-medium text-stone-800">
                    Impact: <span className="text-stone-600 font-normal">{project.impact}</span>
                  </span>
                  <span className="text-xs font-semibold text-stone-900 inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                    Read Case Study →
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
