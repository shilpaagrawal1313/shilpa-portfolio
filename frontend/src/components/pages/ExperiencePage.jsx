import React from 'react';
import { Card } from '../ui/card';
import { MapPin, Calendar } from 'lucide-react';
import { workExperience } from '../../data/mock';
import { useMultipleScrollReveal } from '../../hooks/useScrollReveal';

const ExperiencePage = () => {
  const [setRef, isVisible] = useMultipleScrollReveal(workExperience.length);

  return (
    <main className="pt-24 md:pt-28">
      {/* Experience Cards - No hero banner, starts directly with content */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10 md:space-y-12">
            {workExperience.map((experience, index) => (
              <div
                key={experience.id}
                ref={setRef(index)}
                className={`experience-row stagger-${index + 1} ${isVisible(index) ? 'visible' : ''}`}
              >
                <Card className="overflow-hidden shadow-lg card-hover-lift">
                  <div className="grid md:grid-cols-5 gap-0">
                    {/* Left: Image with stagger animation */}
                    <div className={`md:col-span-2 h-56 md:h-auto overflow-hidden image-reveal ${isVisible(index) ? 'visible' : ''}`}>
                      <img
                        src={experience.logo}
                        alt={experience.company}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Right: Content with stagger animation */}
                    <div className={`md:col-span-3 p-6 md:p-8 content-reveal ${isVisible(index) ? 'visible' : ''}`}>
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
