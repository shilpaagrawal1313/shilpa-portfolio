import React from 'react';
import { Linkedin, Download, Mail } from 'lucide-react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { profileData, aboutData, certifications, skills } from '../../data/mock';
import { useScrollReveal, useMultipleScrollReveal } from '../../hooks/useScrollReveal';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${profileData.heroBackground})` }}
      />
      <div className="absolute inset-0 bg-navy-800/80" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 py-20">
        {/* Profile Photo */}
        <div className="mb-8 flex justify-center">
          <div className="w-40 h-40 md:w-48 md:h-48 rounded-2xl overflow-hidden border-4 border-white/30 shadow-2xl">
            <img
              src={profileData.profileImage}
              alt={profileData.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Name */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
          {profileData.name}
        </h1>

        {/* Title */}
        <p className="text-xl md:text-2xl text-blue-200 mb-4 font-medium">
          {profileData.title}
        </p>

        {/* Tagline */}
        <p className="text-base md:text-lg text-white/80 max-w-2xl mx-auto mb-6">
          {profileData.tagline}
        </p>

        {/* LinkedIn */}
        <a
          href={profileData.linkedIn}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center mb-8 text-white/80 hover:text-white transition-colors"
        >
          <Linkedin size={28} className="hover:scale-110 transition-transform" />
        </a>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-navy-800 btn-lift"
            asChild
          >
            <a href={profileData.resumePath} download>
              <Download size={18} className="mr-2" />
              View Resume
            </a>
          </Button>
          <Button
            size="lg"
            className="bg-blue-500 hover:bg-blue-600 text-white btn-lift"
            asChild
          >
            <a href={`mailto:${profileData.email}?subject=Opportunity: Connecting from your portfolio`}>
              <Mail size={18} className="mr-2" />
              Hire Me
            </a>
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

const AboutSection = () => {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`grid md:grid-cols-2 gap-12 lg:gap-16 items-center scroll-reveal ${isVisible ? 'visible' : ''}`}
        >
          {/* Left: Text */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-6">
              About Me
            </h2>
            {aboutData.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-gray-600 leading-relaxed mb-4 text-lg">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Right: Image */}
          <div className="flex justify-center md:justify-end">
            <Card className="overflow-hidden rounded-2xl shadow-xl">
              <img
                src={profileData.aboutImage}
                alt="About Shilpa"
                className="w-full max-w-md h-80 object-cover"
              />
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

const CertificationsSection = () => {
  const [setRef, isVisible] = useMultipleScrollReveal(certifications.length);

  return (
    <section className="py-20 md:py-28 bg-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          Certifications
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <Card
              key={cert.id}
              ref={setRef(index)}
              className={`bg-white/10 backdrop-blur-sm border-white/20 overflow-hidden card-hover scroll-reveal-scale stagger-${index + 1} ${isVisible(index) ? 'visible' : ''}`}
            >
              <div className="h-32 overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-white mb-1">
                  {cert.title}
                </h3>
                <p className="text-blue-200 text-sm mb-1">{cert.issuer}</p>
                <p className="text-white/60 text-xs mb-3">{cert.date}</p>
                <ul className="space-y-1">
                  {cert.bullets.map((bullet, i) => (
                    <li key={i} className="text-white/70 text-sm flex items-start">
                      <span className="text-blue-300 mr-2">•</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

const SkillsSection = () => {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section id="skills" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-navy-800 text-center mb-12">
          Professional Skills
        </h2>

        <div
          ref={ref}
          className={`grid md:grid-cols-2 gap-8 lg:gap-12 scroll-reveal ${isVisible ? 'visible' : ''}`}
        >
          {/* Left: Technical Expertise Card */}
          <Card className="bg-gradient-to-br from-navy-700 to-navy-800 p-8 rounded-2xl text-white">
            <h3 className="text-2xl font-bold mb-6">Technical Expertise</h3>
            <div className="grid grid-cols-3 gap-4">
              {['Python', 'R', 'SQL', 'Tableau', 'Excel', 'Jira'].map((skill) => (
                <div
                  key={skill}
                  className="bg-white/10 rounded-lg p-3 text-center text-sm font-medium"
                >
                  {skill}
                </div>
              ))}
            </div>
          </Card>

          {/* Right: Skill Categories */}
          <div className="space-y-6">
            {Object.values(skills).map((category) => (
              <div key={category.title}>
                <h4 className="text-lg font-semibold text-navy-700 mb-3">
                  {category.title}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <span
                      key={item}
                      className="bg-white border border-gray-200 text-gray-700 px-3 py-1.5 rounded-full text-sm shadow-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const HomePage = () => {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <CertificationsSection />
      <SkillsSection />
    </main>
  );
};

export default HomePage;
