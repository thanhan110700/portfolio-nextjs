"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useState } from "react";
import { FaMoon, FaSun, FaGlobe, FaChevronDown } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
type NavigationLink = {
  name: string;
  href: string;
};

type HeaderProps = {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
};

const Header = ({ activeSection, scrollToSection }: HeaderProps) => {
  const { theme, setTheme } = useTheme();
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("EN");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const languages = ["en", "vi"];

  const navigationLinks: NavigationLink[] = [
    { name: "Home", href: "home" },
    { name: "About", href: "about" },
    { name: "Education", href: "education" },
    { name: "Skills", href: "skills" },
    { name: "Experience", href: "experience" },
    { name: "Projects", href: "projects" },
  ];

  const toggleDarkMode = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header
      className={`fixed w-full top-0 z-50 bg-background shadow-lg transition-colors duration-300`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Mobile menu button */}
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <GiHamburgerMenu />
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-start">
            <div className="flex items-center space-x-6">
              {navigationLinks.map((section: NavigationLink) => (
                <button
                  key={section.name}
                  onClick={() => scrollToSection(section.href)}
                  className={`${
                    activeSection === section.href
                      ? "text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400"
                      : "text-gray-600 dark:text-gray-300"
                  } hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300`}
                >
                  {section.name}
                </button>
              ))}
            </div>
          </nav>

          {/* Right side features */}
          <div className="flex items-center space-x-4">
            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="flex items-center space-x-1 px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                aria-label="Language selector"
              >
                <FaGlobe className="h-5 w-5" />
                <span>{currentLanguage}</span>
                <FaChevronDown className="h-4 w-4" />
              </button>

              {isLanguageOpen && (
                <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5">
                  <div className="py-1" role="menu" aria-orientation="vertical">
                    {languages.map((lang) => (
                      <button
                        key={lang}
                        onClick={() => {
                          setCurrentLanguage(lang);
                          setIsLanguageOpen(false);
                        }}
                        className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                        role="menuitem"
                      >
                        {lang}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
              aria-label="Toggle dark mode"
            >
              {theme == "dark" ? (
                <FaSun className="h-5 w-5" />
              ) : (
                <FaMoon className="h-5 w-5" />
              )}
            </button>

            {/* Avatar */}
            <div className="flex items-center">
              <Image
                height={32}
                width={32}
                src="/images/steve.avif"
                alt="User avatar"
                className="h-8 w-8 rounded-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`${isMenuOpen ? "block" : "hidden"} sm:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navigationLinks.map((section) => (
            <button
              key={section.name}
              onClick={() => scrollToSection(section.href)}
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
            >
              {section.name}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
