'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const Header = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      // Check if we're at the bottom of the page
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50) {
        setActiveSection('contact');
        return;
      }

      const sections = [
        { id: 'hero', name: 'Home' },
        { id: 'projects', name: 'Projects' },
        { id: 'about', name: 'About' },
        { id: 'contact', name: 'Contact' },
      ];

      let currentSection = 'hero';
      
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if section is in viewport (top within 100px of viewport top)
          if (rect.top <= 100) {
            currentSection = section.id;
          }
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 p-0.5 border-white/15 rounded-full bg-white/10 backdrop-blur">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection(item.id);
            }}
            className="nav-item relative px-4 py-1.5 rounded-full text-sm font-medium transition-colors"
            style={{
              color: activeSection === item.id ? '#1F2937' : '#FFFFFF', 
            }}
          >
            {activeSection === item.id && (
              <motion.div
                layoutId="active-nav-pill"
                className="absolute inset-0 bg-white rounded-full -z-10"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
            {item.label}
          </a>
        ))}
      </nav>
    </div>
  );
};

