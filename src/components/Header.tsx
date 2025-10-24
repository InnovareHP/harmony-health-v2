"use client";
import { Menu, X } from "lucide-react"; // or use any icon library
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-[#c3dac6] shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="/">
          <img
            src="/images/harmony-health-logo.png"
            alt="Harmony Health"
            className="w-40 h-20"
          />
        </a>

        {/* Burger Icon */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium text-gray-700">
          <NavLinks />
        </nav>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4">
          <nav className="flex flex-col space-y-3 text-sm font-medium text-gray-700">
            <NavLinks />
          </nav>
        </div>
      )}
    </header>
  );
}

function NavLinks() {
  return (
    <>
      <a href="/our-focus" className="hover:text-primary">
        Our Focus
      </a>

      <a href="/patient-visitor-guide" className="hover:text-primary">
        Patient & Visitor Guide
      </a>
      <a href="/treatment-programs" className="hover:text-primary">
        Treatment & services
      </a>
      <a href="/referrals" className="hover:text-primary">
        Referral Process
      </a>
      <a href="/about-us" className="hover:text-primary">
        About Us
      </a>
      <a href="/contact" className="hover:text-primary">
        Contact
      </a>
      <a href="/resources" className="hover:text-primary">
        Resources
      </a>
      <div className="flex items-center gap-2">
        Main Local:
        <a
          href="tel:+18175293170"
          className="hover:text-primary text-primary-foreground"
        >
          +1 817 529 3170
        </a>
      </div>
    </>
  );
}
