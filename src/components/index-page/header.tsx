import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white/95 backdrop-blur-md border-b border-emerald-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 lg:py-6">
          {/* Logo */}
          <div className="flex items-center space-x-2 lg:space-x-3">
           <img src="/icon/RR_LOGO.jpg" alt="Obedi Home" width={92} height={92} />
            <span className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-emerald-700 via-yellow-500 to-emerald-900 bg-clip-text text-transparent hidden sm:block">
              Rivers Residence
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 lg:space-x-8">
            <a
              href="/"
              className="text-stone-600 hover:text-emerald-700 hover:underline decoration-yellow-400 transition-colors font-medium"
            >
              Home
            </a>
            <a
              href="#ourhome"
              className="text-stone-600 hover:text-emerald-700 hover:underline decoration-yellow-400 transition-colors font-medium"
            >
              Our Home
            </a>
            <a
              href="#mission-vision"
              className="text-stone-600 hover:text-emerald-700 hover:underline decoration-yellow-400 transition-colors font-medium"
            >
              Mission Vision
            </a>
            <a
              href="#contact"
              className="text-stone-600 hover:text-emerald-700 hover:underline decoration-yellow-400 transition-colors font-medium"
            >
              Contact
            </a>
            <a
              href="/volunteer"
              className="text-stone-600 hover:text-emerald-700 hover:underline decoration-yellow-400 transition-colors font-medium"
            >
              Volunteer
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-yellow-100 transition z-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-emerald-700" />
            ) : (
              <Menu className="h-6 w-6 text-emerald-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-emerald-100 py-4 bg-gradient-to-b from-white via-yellow-50 to-emerald-50 z-50">
            <div className="flex flex-col space-y-4">
              <a
                href="/"
                className="text-stone-600 hover:text-yellow-600 font-medium px-4 py-2 transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="#facilities"
                className="text-stone-600 hover:text-yellow-600 font-medium px-4 py-2 transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#mission-vision"
                className="text-stone-600 hover:text-yellow-600 font-medium px-4 py-2 transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                                Mission Vision
              </a>
              <a
                href="#contact"
                className="text-stone-600 hover:text-yellow-600 font-medium px-4 py-2 transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
              <a
                href="/volunteer"
                className="text-stone-600 hover:text-yellow-600 font-medium px-4 py-2 transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                Volunteer
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
