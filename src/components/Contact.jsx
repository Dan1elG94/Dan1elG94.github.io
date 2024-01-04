import { FiPhoneCall, FiMail } from 'react-icons/fi';
import { GrLocation } from 'react-icons/gr';
import SocialLinks from './SocialLinks';
import SectionTitle from './SectionTitle';

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 py-6 sm:py-10 lg:py-14"
    >
      <div className="align-element text-gray-900">
        <SectionTitle text="Kontakt" />

        <article className="">
          <div className="grid gap-12 my-5 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col gap-2 text-lg">
              <div className="flex flex-row gap-4 items-center">
                <FiPhoneCall className="text-gray-900 text-2xl" />
                <a
                  href="tel:+421911253820"
                  className="hover:scale-105 duration-300"
                >
                  +421 911 253 820
                </a>
              </div>
              <div className="flex flex-row gap-4 items-center">
                <FiMail className="text-gray-900 text-2xl" />
                <a
                  href="mailto:bucko.mat@gmail.com"
                  className="hover:scale-105 duration-300"
                >
                  bucko.mat@gmail.com
                </a>
              </div>
              <div className="flex flex-row gap-4 items-center">
                <GrLocation className="text-gray-900 text-2xl" />
                <a
                  href="https://www.google.com/maps/place/Airsoft+Chtelnica/@48.5849701,17.613105,15z/data=!4m6!3m5!1s0x476cabf98f4d764b:0x344ac7284b483af!8m2!3d48.5849701!4d17.613105!16s%2Fg%2F11c54mwcfy?entry=ttu"
                  target="_blank"
                  className="hover:scale-105 duration-300"
                >
                  GPS: 48.584872 / 17.613110
                </a>
              </div>
            </div>

            <div className="sm:row-start-2 sm:col-start-1 sm:col-end-3 lg:row-start-1 lg:col-start-2 lg:self-center">
              <SocialLinks />
            </div>

            <div className="flex flex-col justify-self-center text-center text-lg gap-2 sm:text-right sm:justify-self-end">
              <a href="#home" className="hover:scale-105 duration-300">
                Domov
              </a>
              <a href="#events" className="hover:scale-105 duration-300">
                Airsoftové akcie
              </a>
              <a href="#features" className="hover:scale-105 duration-300">
                Požičovňa
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};
export default Contact;
