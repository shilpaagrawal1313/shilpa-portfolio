import React from 'react';
import { Card } from '../ui/card';
import { MapPin, Calendar } from 'lucide-react';
import { workExperience } from '../../data/mock';
import { useMultipleScrollReveal } from '../../hooks/useScrollReveal';

const ExperiencePage = () => {
  const [setRef, isVisible] = useMultipleScrollReveal(workExperience.length);

  return (
    <main className="pt-20 md:pt-24">
      {/* Header Section */}
      <section className="bg-navy-800 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Work Experience
          </h1>
          <p className="text-lg text-blue-200 max-w-2xl mx-auto">
            A journey of continuous growth through diverse roles in project management, business analysis, and technology.
          </p>
        </div>
      </section>

      {/* Experience Cards */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12 md:space-y-16">
            {workExperience.map((experience, index) => (
              <div
                key={experience.id}
                ref={setRef(index)}
                className={`scroll-reveal stagger-${index + 1} ${isVisible(index) ? 'visible' : ''}`}
              >
                <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="grid md:grid-cols-5 gap-0">
                    {/* Left: Image */}
                    <div className="md:col-span-2 h-56 md:h-auto">
                      <img
                        src={experience.logo}
                        alt={experience.company}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Right: Content */}
                    <div className="md:col-span-3 p-6 md:p-8">
                      <h2 className="text-2xl md:text-3xl font-bold text-navy-800 mb-2">
                        {experience.role}
                      </h2>
                      <p className="text-lg text-gray-600 italic mb-2">
                        {experience.company}
                      </p>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
                        <span className="flex items-center">
                          <MapPin size={16} className="mr-1" />
                          {experience.location}
                        </span>
                        <span className="flex items-center">
                          <Calendar size={16} className="mr-1" />
                          {experience.dates}
                        </span>
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        {experience.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ExperiencePage;
