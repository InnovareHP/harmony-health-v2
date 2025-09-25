export default function Header() {
  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="/">
          <img
            src="/images/harmony-health-logo.png"
            alt="Harmony Health"
            className="w-40 h-20"
          />
        </a>

        <nav className="space-x-6 text-sm font-medium text-gray-700">
          <a href="/about-us" className="hover:text-green-600">
            About Us
          </a>
          <a href="/our-focus" className="hover:text-green-600">
            Our Focus
          </a>
          <a href="/patient-visitor-guide" className="hover:text-green-600">
            Patient & Visitor Guide
          </a>
          <a href="/treatment-programs" className="hover:text-green-600">
            Treatment & services
          </a>
          <a href="/referrals" className="hover:text-green-600">
            Referral Process
          </a>
          <a href="/contact" className="hover:text-green-600">
            Contact
          </a>
          <a href="/resources" className="hover:text-green-600">
            Resources
          </a>
        </nav>
      </div>
    </header>
  );
}
