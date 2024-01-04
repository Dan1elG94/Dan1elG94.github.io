import logo from '../images/chtelnica-logo.png';

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <section className="bg-gray-50 pb-8 pt-6">
      <div className="align-element text-gray-900">
        <div className="flex flex-col gap-4 md:flex-row md:gap-16 md:items-end md:justify-between">
          <div className="flex flex-col gap-8">
            <img
              src={logo}
              alt="Airsoft Chtelnica"
              className="h-10 w-fit object-contain"
            />
            <div className="text-base">
              <p>OZ AIRSOFT CHTELNICA</p>
              <p>Ulica Karpatská 1316/1, 91701 Trnava</p>
              <p>IČO: 53205839</p>
            </div>
          </div>
          <p className="text-sm text-center mt-8 md:text-base md:m-0 md:text-end">
            &copy; {year} Airsoft Chtelnica. Všetky práva vyhradené.
          </p>
        </div>
      </div>
    </section>
  );
};
export default Footer;
