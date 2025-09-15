import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const navLinks = [
    { href: '#hero', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#blog', label: 'Blog' },
    { href: '#who', label: 'Who We Are' },
    { href: '#example-projects', label: 'Projects' },
  ];

  const handleNavLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-white/80 backdrop-blur-md shadow-sm py-2" : "bg-transparent py-4"
      )}
    >
      <div className="max-container flex justify-between items-center">
        <a href="#" className="flex items-center">
          <img src="/LTAIT-Logo_plain.png" alt="Let's Talk AI Tools Logo" className="h-8 w-auto" />
        </a>
        <nav className="hidden md:flex space-x-1">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </nav>
        <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <SheetTrigger asChild>
            <button className="md:hidden p-2 text-charcoal rounded-md hover:bg-white/20 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] bg-white/95 backdrop-blur-md">
            <nav className="flex flex-col space-y-4 mt-8">
              {navLinks.map((link) => (
                <SheetClose asChild key={link.href}>
                  <a 
                    href={link.href} 
                    className="text-lg font-medium text-charcoal hover:text-hot-pink transition-colors py-2 border-b border-gray-100 last:border-b-0"
                    onClick={handleNavLinkClick}
                  >
                    {link.label}
                  </a>
                </SheetClose>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Navigation;
