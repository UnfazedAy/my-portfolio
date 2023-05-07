export default function Navbar() {
  return (
    // Navbar
    <nav className="relative container mx-auto p-6">
      {/* Flex Container */}
      <div className="flex items-center justify-between">
        <div className="pt-2">
          <h1 className="font-bold font-lobster text-2xl md:text-3xl">
            Ayomide Soniyi<span className="text-thickBrownishYellow text-4xl md:text-5xl">.</span>
          </h1>
        </div>
        <div className="hidden space-x-6 font-Raleway md:flex">
          <a href="#about" className="hover:text-thickBrownishYellow">
            About
          </a>
          <a href="#project" className="hover:text-thickBrownishYellow">
            Project
          </a>
          <a href="#resume" className="hover:text-thickBrownishYellow">
            Resume
          </a>
          <a
            href="#contact"
            className="inline-block text-white bg-thickBrownishYellow rounded-full baseline hover:bg-brownishYellow focus:outline-none px-5 drop-shadow-md"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
