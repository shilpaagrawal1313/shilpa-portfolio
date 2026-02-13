import React from 'react';
import { Card } from '../ui/card';
import { GraduationCap, MapPin, Award, BookOpen } from 'lucide-react';
import { education } from '../../data/mock';
import { useMultipleScrollReveal } from '../../hooks/useScrollReveal';

const EducationPage = () => {
  const [setRef, isVisible] = useMultipleScrollReveal(education.length);

  return (
    <main className="pt-20 md:pt-24">
      {/* Header Section */}
      <section className="bg-navy-800 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Education
          </h1>
          <p className="text-lg text-blue-200 max-w-2xl mx-auto">
            A strong foundation in business, technology, and management built through rigorous academic programs.
          </p>
        </div>
      </section>

      {/* Education Cards */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10">
            {education.map((edu, index) => (
              <Card
                key={edu.id}
                ref={setRef(index)}
                className={`p-8 md:p-10 shadow-lg hover:shadow-xl transition-shadow duration-300 scroll-reveal stagger-${index + 1} ${isVisible(index) ? 'visible' : ''}`}
              >
                {/* Degree Title */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-navy-50 rounded-xl">
                    <GraduationCap className="w-8 h-8 text-navy-700" />
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-navy-800">
                      {edu.degree}
                    </h2>
                    <p className="text-lg text-blue-600 font-medium">
                      {edu.field}
                    </p>
                  </div>
                </div>

                {/* University & Details */}
                <div className="ml-0 md:ml-16 space-y-3">
                  <p className="text-lg text-gray-700 font-medium">
                    {edu.university}
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                    <span className="flex items-center">
                      <MapPin size={16} className="mr-1" />
                      {edu.location}
                    </span>
                    <span className="flex items-center">
                      <BookOpen size={16} className="mr-1" />
                      {edu.graduationDate}
                    </span>
                    <span className="flex items-center font-semibold text-navy-600">
                      <Award size={16} className="mr-1" />
                      GPA: {edu.gpa}
                    </span>
                  </div>

                  {/* Relevant Coursework */}
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
                      Relevant Coursework
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course, i) => (
                        <span
                          key={i}
                          className="bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full text-sm"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default EducationPage;
