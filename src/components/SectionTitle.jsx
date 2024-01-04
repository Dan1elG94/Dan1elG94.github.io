import treesImg from '../images/trees-dark.png';

const SectionTitle = ({ text }) => {
  return (
    <div>
      <h2 className="text-3xl text-gray-700 tracking-wide pb-2 font-medium sm:text-4xl sm:pb-3 lg:text-5xl">
        {text}
      </h2>
      <div className="relative w-full h-0.5 bg-primary-400 ">
        <img
          src={treesImg}
          alt="trees"
          className="absolute w-20 h-auto right-0 bottom-0 sm:w-28 hidden sm:block"
        />
      </div>
    </div>
  );
};
export default SectionTitle;
