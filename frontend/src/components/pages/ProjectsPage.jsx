import React from 'react';
import { Card } from '../ui/card';
import { professionalProjects, academicProjects } from '../../data/mock';
import { useScrollReveal, useMultipleScrollReveal } from '../../hooks/useScrollReveal';

const ProjectsPage = () => {
  const [headerRef, headerVisible] = useScrollReveal();
  const [setProfRef, isProfVisible] = useMultipleScrollReveal(professionalProjects.length);
  const [setAcadRef, isAcadVisible] = useMultipleScrollReveal(academicProjects.length);

  return (
    <main className="pt-24 md:pt-28">
      {/* Professional Projects - No hero banner, starts directly with content */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            ref={headerRef}
            className={`text-3xl md:text-4xl font-bold text-navy-800 mb-10 fade-slide-up ${headerVisible ? 'visible' : ''}`}
          >
            Professional Projects
          </h2>

          <div className="space-y-10">
            {professionalProjects.map((project, index) => (
              <div
                key={project.id}
                ref={setProfRef(index)}
                className={`experience-row stagger-${index + 1} ${isProfVisible(index) ? 'visible' : ''}`}
              >
                <Card className="overflow-hidden shadow-lg card-hover-lift">
                  <div className="grid md:grid-cols-5 gap-0">
                    {/* Left: Image */}
                    <div className={`md:col-span-2 h-56 md:h-auto overflow-hidden image-reveal ${isProfVisible(index) ? 'visible' : ''}`}>
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Right: Content */}
                    <div className={`md:col-span-3 p-6 md:p-8 content-reveal ${isProfVisible(index) ? 'visible' : ''}`}>
                      <h3 className="text-2xl md:text-3xl font-bold text-navy-800 mb-2">
                        {project.name}
                      </h3>
                      <p className="text-lg text-gray-500 italic mb-4">
                        {project.subtitle}
                      </p>
                      <p className="text-gray-600 leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Projects */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-10">
            Academic Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {academicProjects.map((project, index) => (
              <Card
                key={project.id}
                ref={setAcadRef(index)}
                className={`overflow-hidden card-hover-lift card-scale-in stagger-${index + 1} ${isAcadVisible(index) ? 'visible' : ''}`}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-navy-800 mb-1">
                    {project.name} <span className="text-blue-500">({project.tool})</span>
                  </h3>
                  <p className="text-sm text-gray-500 italic mb-3">
                    {project.subtitle}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProjectsPage;
