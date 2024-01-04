import { useGlobalContext } from '../context';
import SocialLinks from './SocialLinks';

const MobileMenu = () => {
  const { isMenuOpen, closeMenu } = useGlobalContext();

  return (
    <section
      className={
        isMenuOpen
          ? 'block fixed top-0 left-0 z-20 w-screen h-screen bg-gray-50'
          : 'hidden'
      }
    >
      <nav className="mt-16 align-element flex flex-col gap-4 items-center py-8 text-gray-900 text-xl uppercase tracking-wide">
        <a href="#home" onClick={closeMenu}>
          Domov
        </a>
        <a href="#events" onClick={closeMenu}>
          Airsoftové akcie
        </a>
        <a href="#features" onClick={closeMenu}>
          Požičovňa
        </a>
        <a href="#contact" onClick={closeMenu}>
          Kontakt
        </a>
      </nav>
      <div className="mt-16">
        <SocialLinks />
      </div>
    </section>
  );
};
export default MobileMenu;
