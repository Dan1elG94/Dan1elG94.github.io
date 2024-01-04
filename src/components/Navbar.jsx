import { useGlobalContext } from '../context';
import logo from '../images/chtelnica-logo.png';
import SocialLinks from './SocialLinks';
import { FaBars } from 'react-icons/fa';
import { GrClose } from 'react-icons/gr';

const Navbar = () => {
  const { isMenuOpen, openMenu, closeMenu } = useGlobalContext();

  return (
    <header className="fixed top-0 left-0 w-screen bg-gray-50 px-5 py-3 lg:px-10 lg:py-4 xl:px-16 flex justify-between items-center shadow-lg z-50">
      <img
        src={logo}
        alt="Airsoft Chtelnica"
        className="w-fit h-8 object-contain lg:h-10"
      />
      <nav className="hidden lg:flex uppercase tracking-wide text-gray-900 text-xl gap-8">
        <a
          href="#events"
          className="relative nav-link hover:scale-105 duration-300"
        >
          Airsoftové akcie
        </a>
        <a
          href="#features"
          className="relative nav-link hover:scale-105 duration-300"
        >
          Požičovňa
        </a>
        <a
          href="#contact"
          className="relative nav-link hover:scale-105 duration-300"
        >
          Kontakt
        </a>
      </nav>
      <div className="hidden lg:flex">
        <SocialLinks />
      </div>
      <div className="block lg:hidden">
        {isMenuOpen ? (
          <GrClose
            className="text-2xl text-gray-900 hover:cursor-pointer"
            onClick={closeMenu}
          />
        ) : (
          <FaBars
            className="text-2xl text-gray-900 hover:cursor-pointer"
            onClick={openMenu}
          />
        )}
      </div>
    </header>
  );
};
export default Navbar;
