import SectionTitle from './SectionTitle';
import rentImg from '../images/rent-img.jpg';

const Features = () => {
  return (
    <section id="features" className="relative bg-gray-50">
      <div className="hero-pattern invert"></div>

      <div className="align-element relative py-6 sm:py-10 lg:py-14 z-10">
        <SectionTitle text="Požičanie výstroje" className="z-10" />
        <div className="text-gray-900 mt-5 z-10 grid md:grid-cols-2 gap-8 overflow-hidden bg-gray-50 rounded-lg shadow-xl mb-10">
          <img
            src={rentImg}
            alt="airsoft gun"
            className="w-full max-h-60 object-cover lg:max-h-80"
          />
          <div className="p-5 flex flex-col items-center md:justify-center">
            <p className="text-lg tracking-wider font-medium sm:text-xl xl:text-2xl xl:font-normal">
              Zavolaj nám a všetko dohodneme
            </p>
            <a
              href="tel:+421911253820"
              className="btn flex justify-center border-primary-600 hover:bg-primary-600 hover:text-gray-50 md:mb-0"
            >
              volať
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Features;
