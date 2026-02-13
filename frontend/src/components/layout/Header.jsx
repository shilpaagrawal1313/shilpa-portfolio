import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '../ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  // Check if we're on the home page (which has dark hero)
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Work Experience', path: '/experience' },
    { name: 'Projects', path: '/projects' },
    { name: 'Education', path: '/education' },
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  // Determine header styling based on page and scroll position
  // On home page: transparent when at top, white when scrolled
  // On inner pages: always white background with dark text
  const showWhiteHeader = !isHomePage || isScrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        showWhiteHeader
          ? 'bg-white/95 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            to="/"
            className={`font-script text-2xl md:text-3xl transition-colors duration-300 ${
              showWhiteHeader ? 'text-navy-800' : 'text-white'
            }`}
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
            Shilpa Agrawal
          </Link>

          {/* Desktop Navigation - Increased spacing with gap-x-8 md:gap-x-10 */}
          <nav className="hidden md:flex items-center gap-x-8 lg:gap-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative text-sm font-medium transition-colors duration-300 py-2 whitespace-nowrap ${
                  showWhiteHeader
                    ? 'text-gray-700 hover:text-navy-700'
                    : 'text-white/90 hover:text-white'
                } ${
                  isActive(link.path)
                    ? 'after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-current'
                    : ''
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className={`md:hidden ${
              showWhiteHeader ? 'text-gray-700' : 'text-white'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation - Increased spacing with gap-y-3 */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="bg-white shadow-lg px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                isActive(link.path)
                  ? 'bg-navy-50 text-navy-700 border-l-4 border-navy-600'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
