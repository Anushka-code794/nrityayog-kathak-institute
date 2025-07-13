import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="bg-background/95 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
              {/* Logo space */}
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Contact
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('home')}
                className="text-left text-foreground hover:text-primary transition-colors font-medium"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-left text-foreground hover:text-primary transition-colors font-medium"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('gallery')}
                className="text-left text-foreground hover:text-primary transition-colors font-medium"
              >
                Gallery
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-left text-foreground hover:text-primary transition-colors font-medium"
              >
                Contact
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}