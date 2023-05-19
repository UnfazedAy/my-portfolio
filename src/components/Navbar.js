import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    // Navbar
    <nav className="relative container m-auto p-8 shadow-xl">
      {/* Flex Container */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-bold font-lobster text-2xl md:text-3xl">
            Ayomide Soniyi<span className="text-thickBrownishYellow">•</span>
          </h1>
        </div>

        <div className="md:hidden">
          <button type="button" onClick={toggleMenu}>
            <FontAwesomeIcon
              icon={isOpen ? faTimes : faBars}
              size="xl"
              className="text-white drop-shadow-md hover:text-thickBrownishYellow focus:outline-none"
            />
          </button>
        </div>

        <div className="hidden space-x-6 font-Raleway md:flex">
          <a href="#about" className="hover:text-thickBrownishYellow">
            About
          </a>
          <a href="#project" className="hover:text-thickBrownishYellow">
            Projects
          </a>
          <a href="#resume" className="hover:text-thickBrownishYellow">
            Resume
          </a>
          <a
            href="#contact"
            className="inline-block text-black bg-thickBrownishYellow rounded-full baseline hover:bg-brownishYellow focus:outline-none px-5 drop-shadow-md"
          >
            Contact
          </a>
        </div>
      </div>

      {/* Responsive Menu */}
      {isOpen && (
        <div className="md:hidden mt-4">
          <a href="#about" className="block py-2 hover:text-thickBrownishYellow">
            About
          </a>
          <a href="#project" className="block py-2 hover:text-thickBrownishYellow">
            Projects
          </a>
          <a href="#resume" className="block py-2 hover:text-thickBrownishYellow">
            Resume
          </a>
          <a
            href="#contact"
            className="block py-2 text-center text-black bg-thickBrownishYellow rounded-full baseline hover:bg-brownishYellow focus:outline-none px-5 drop-shadow-md"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}
