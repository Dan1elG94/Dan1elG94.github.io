import { RxCrosshair2 } from 'react-icons/rx';
import { BsTree } from 'react-icons/bs';
import heroImg from '../images/hero-img.jpg';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative bg-gradient-to-b from-primary-500 to-secondary-900 min-h-screen"
    >
      <div className="hero-pattern"></div>
      <div className="align-element relative flex flex-col min-h-screen lg:justify-around md:pb-8 pt-24 sm:pt-28 md:pt-32 lg:pt-36 z-10">
        <article className="text-gray-50 grid justify-center gap-8 sm:gap-16 sm:justify-start lg:grid-cols-2 lg:gap-0 md:gap-20 sm:pb-16">
          <div className="flex flex-col gap-16 justify-center items-center sm:flex-row sm:justify-start">
            <h1 className="text-gray-100 text-5xl md:text-6xl xl:text-7xl font-medium tracking-wide">
              Hraj Airsoft.
              <br />
              Hraj s nami.
            </h1>
            <div className="flex flex-col gap-4 lg:hidden">
              <a
                href="#events"
                className="btn self-center sm:self-start border-gray-50 hover:bg-primary-600 hover:text-gray-50 my-0 sm:px-8 sm:py-1 sm:text-lg"
              >
                airsoftove akcie
              </a>
              <a
                href="https://www.google.com/maps/place/Airsoft+Chtelnica/@48.5849701,17.613105,15z/data=!4m6!3m5!1s0x476cabf98f4d764b:0x344ac7284b483af!8m2!3d48.5849701!4d17.613105!16s%2Fg%2F11c54mwcfy?entry=ttu"
                target="_blank"
                className="btn self-center sm:self-start border-gray-50 hover:bg-primary-600 hover:text-gray-50 my-0 sm:px-8 sm:py-1 sm:text-lg"
              >
                tu nás nájdeš
              </a>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className=" bg-primary-500 bg-opacity-70 rounded-xl shadow-xl p-6  max-w-xs">
              <RxCrosshair2 className="text-2xl mb-4" />
              <p className="text-base tracking-widest leading-relaxed">
                Airsoftové ihrisko otvorené nováčikom, ale aj skúseným hráčom.
              </p>
            </div>
            <div className="p-6 max-w-xs">
              <BsTree className="text-2xl mb-4" />
              <p className="text-base tracking-wider leading-relaxed max-w-md">
                Unikátne OSB ihrisko na západnom Slovensku. Hráme každý víkend.
              </p>
            </div>
          </div>
        </article>
        <img
          src={heroImg}
          alt=""
          className="hidden relative object-cover object-center-top35 md:block w-full h-screen max-h-[45vh] rounded-md shadow-xl"
        />
      </div>
    </section>
  );
};
export default Hero;
