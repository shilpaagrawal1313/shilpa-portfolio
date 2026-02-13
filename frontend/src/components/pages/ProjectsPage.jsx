import React from 'react';
import { Card } from '../ui/card';
import { professionalProjects, academicProjects } from '../../data/mock';
import { useScrollReveal, useMultipleScrollReveal } from '../../hooks/useScrollReveal';

const ProjectsPage = () => {
  const [headerRef, headerVisible] = useScrollReveal();
  const [setProfRef, isProfVisible] = useMultipleScrollReveal(professionalProjects.length);
  const [setAcadRef, isAcadVisible] = useMultipleScrollReveal(academicProjects.length);

  return (
    <main className="pt-20 md:pt-24">
      {/* Header Section */}
      <section className="bg-navy-800 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Project Showcase
          </h1>
          <p className="text-lg text-blue-200 max-w-2xl mx-auto">
            A collection of impactful projects demonstrating expertise in project management, data analytics, and business strategy.
          </p>
        </div>
      </section>

      {/* Professional Projects */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            ref={headerRef}
            className={`text-3xl md:text-4xl font-bold text-navy-800 mb-10 scroll-reveal ${headerVisible ? 'visible' : ''}`}
          >
            Professional Projects
          </h2>

          <div className="space-y-10">
            {professionalProjects.map((project, index) => (
              <div
                key={project.id}
                ref={setProfRef(index)}
                className={`scroll-reveal stagger-${index + 1} ${isProfVisible(index) ? 'visible' : ''}`}
              >
                <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="grid md:grid-cols-5 gap-0">
                    {/* Left: Image */}
                    <div className="md:col-span-2 h-56 md:h-auto">
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Right: Content */}
                    <div className="md:col-span-3 p-6 md:p-8">
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
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-10">
            Academic Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {academicProjects.map((project, index) => (
              <Card
                key={project.id}
                ref={setAcadRef(index)}
                className={`overflow-hidden card-hover scroll-reveal-scale stagger-${index + 1} ${isAcadVisible(index) ? 'visible' : ''}`}
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
