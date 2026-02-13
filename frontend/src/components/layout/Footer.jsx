import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Award, FileText, FolderOpen, Sparkles, Heart } from 'lucide-react';
import { footerData } from '../../data/mock';

const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* About Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-navy-800">About</h3>
            <div>
              <p
                className="text-xl font-medium text-navy-700 mb-1"
                style={{ fontFamily: "'Dancing Script', cursive" }}
              >
                {footerData.about.name}
              </p>
              <p className="text-sm text-gray-600">{footerData.about.title}</p>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-navy-800">Quick Links</h3>
            <ul className="space-y-3">
              {footerData.quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="flex items-center text-sm text-gray-600 hover:text-navy-600 transition-colors group"
                  >
                    {link.label === 'Resume' && <FileText size={16} className="mr-2 group-hover:scale-110 transition-transform" />}
                    {link.label === 'Projects' && <FolderOpen size={16} className="mr-2 group-hover:scale-110 transition-transform" />}
                    {link.label === 'Skills' && <Sparkles size={16} className="mr-2 group-hover:scale-110 transition-transform" />}
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-navy-800">Connect</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${footerData.connect.email}`}
                  className="flex items-center text-sm text-gray-600 hover:text-navy-600 transition-colors group"
                >
                  <Mail size={16} className="mr-2 group-hover:scale-110 transition-transform" />
                  {footerData.connect.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${footerData.connect.phone}`}
                  className="flex items-center text-sm text-gray-600 hover:text-navy-600 transition-colors group"
                >
                  <Phone size={16} className="mr-2 group-hover:scale-110 transition-transform" />
                  {footerData.connect.phone}
                </a>
              </li>
              <li>
                <a
                  href={footerData.connect.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-sm text-gray-600 hover:text-navy-600 transition-colors group"
                >
                  <Linkedin size={16} className="mr-2 group-hover:scale-110 transition-transform" />
                  LinkedIn Profile
                </a>
              </li>
              <li>
                <span className="flex items-center text-sm text-gray-600">
                  <MapPin size={16} className="mr-2" />
                  {footerData.connect.location}
                </span>
              </li>
            </ul>
          </div>

          {/* Certifications Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-navy-800">Certifications</h3>
            <ul className="space-y-3">
              {footerData.certifications.map((cert, index) => (
                <li key={index} className="flex items-center text-sm text-gray-600">
                  <Award size={16} className="mr-2 text-navy-500" />
                  {cert}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-500">
              © 2025 Shilpa Agrawal. All Rights Reserved.
            </p>
            <p className="text-sm text-gray-500 flex items-center">
              Crafted with <Heart size={14} className="mx-1 text-blue-500 fill-blue-500" /> and curiosity.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
