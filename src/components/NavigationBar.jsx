import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX, faBars } from '@fortawesome/free-solid-svg-icons';

const NavigationBar = ({ scrollToSection, site }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('');

  // Detect current page on mount
  useEffect(() => {
    setCurrentPage(window.location.pathname);
  }, []);

  const dropdownOpenClasses =
    'absolute h-screen sm:h-auto left-0 sm:left-auto top-10 sm:top-auto bg-[#201DCE99] backdrop-blur-[5px] bg-opacity-60 text-white font-semibold text-3xl sm:text-base leading-10';

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigationClick = (sectionId) => {
    if (currentPage === '/') {
      // If on the homepage, scroll to section
      scrollToSection(sectionId);
    } else {
      // If not on homepage, navigate to section with hash
      window.location.href = `/#${sectionId}`;
    }
    handleMenuClick(); // Close the menu if it's open
  };

  return (
    <nav
      className={`fixed flex justify-between lg:justify-around items-center px-5
    w-full max-w-[100vw]
    transition-all duration-500 ease-in-out
    ${isMenuOpen ? 'bg-[#201DCE99] sm:bg-white' : 'bg-white'}  h-10 z-30`}
    >
      <a
        className={`text-xl font-bold cursor-pointer
      ${isMenuOpen ? 'text-white sm:text-[#6070ff]' : 'text-[#6070ff]'}
      `}
        onClick={() => {
          handleNavigationClick('introductionRef');
        }}
      >
        DVLoper-z
      </a>
      <div>
        <span
          className={`sm:hidden ${isMenuOpen ? 'text-white' : 'text-[#6070ff]'}
        transition-all duration-500 ease-in-out`}
          onClick={handleMenuClick}
        >
          <FontAwesomeIcon icon={isMenuOpen ? faX : faBars} />
        </span>
      </div>
      <ul
        className={`
      ${isMenuOpen ? dropdownOpenClasses : 'hidden'}
      flex flex-col sm:flex-row
      w-screen sm:w-auto
      sm:relative sm:flex p-5 sm:p-0 sm:bg-white
      gap-5 sm:font-medium sm:text-[#344563]`}
      >
        <li>
          <a
            className="cursor-pointer"
            onClick={() => {
              handleNavigationClick('portfolioRef');
            }}
          >
            Portfolio
          </a>
        </li>
        <li>
          <a
            className="cursor-pointer"
            onClick={() => {
              handleNavigationClick('aboutRef');
            }}
          >
            About
          </a>
        </li>
        <li>
          <a
            className="cursor-pointer"
            onClick={() => {
              handleNavigationClick('contactRef');
            }}
          >
            Contact
          </a>
        </li>
        <li>
          <a className="cursor-pointer" href="/blog">
            Blog
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
