export default function Footer() {
    return (
      <footer className="bg-gradient-to-r from-emerald-700 to-emerald-600 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col items-center justify-center text-center space-y-4">

          {/* Logo */}
          <img
            src="/icon/RR_LOGO.jpg"
            alt="Rivers Residence Logo"
            className="h-14 w-auto rounded-md shadow-md"
          />

          {/* Text */}
          <p className="text-sm">
            © {new Date().getFullYear()}{" "}
            <span className="text-yellow-300 font-semibold">Rivers Residence</span>.
            All rights reserved.
          </p>


        </div>
      </footer>
    );
  }
