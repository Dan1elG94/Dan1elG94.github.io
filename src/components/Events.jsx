import { useFetchData } from '../fetchData.jsx';
import { IoCalendarOutline } from 'react-icons/io5';
import SectionTitle from './SectionTitle.jsx';
import rules from '../assets/general-rules.pdf';
import eventsCalendarImg from '../images/events-calendar-img.jpg';

const Events = () => {
  const { loading, events } = useFetchData();
  const currDate = new Date();
  const currTime = currDate.getTime();
  const tempEvents = [];
  const currEvents = [];

  if (loading) {
    return <h2>Loading...</h2>;
  }

  events.map((event) => {
    const eventDate = new Date(event.date);
    event.time = eventDate.getTime();
    tempEvents.push({ ...event });
  });

  tempEvents.sort((a, b) => {
    return a.time - b.time;
  });

  tempEvents.map((event) => {
    if (event.time > currTime && currEvents.length < 3) {
      currEvents.push(event);
    }
  });

  return (
    <section
      id="events"
      className="bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 py-6 sm:py-10 lg:py-14"
    >
      <div className="align-element text-gray-900">
        <SectionTitle text="Airsoftové akcie" />
        <a
          href={rules}
          target="_blank"
          className="btn border-primary-600 hover:bg-primary-600 hover:text-gray-50"
        >
          všeobecné pravidlá
        </a>

        <article className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6 mb-10">
          {currEvents.map((event) => {
            return (
              <a
                key={event.id}
                href={event.url}
                target="_blank"
                className="overflow-hidden rounded-lg shadow-md hover:shadow-xl duration-300"
              >
                <img
                  loading="lazy"
                  src={event.imageUrl}
                  alt={event.title}
                  className="opacity-90 hover:opacity-100 hover:scale-105 duration-300"
                />
              </a>
            );
          })}

          <a
            href="https://www.facebook.com/airsoftchtelnica/events"
            target="_blank"
            className="relative lg:col-start-2 overflow-hidden rounded-lg shadow-md hover:shadow-xl duration-300"
          >
            <div className="hover:scale-105 duration-300 opacity-90 hover:opacity-100">
              <img src={eventsCalendarImg} alt="Airsoft Chtelnica" />
              <div className="absolute inset-0 text-gray-50 flex flex-col w-full h-full items-center justify-evenly">
                <IoCalendarOutline className="text-[15vw] min-[430px]:text-6xl sm:text-[7.5vw] lg:text-[5vw] xl:text-6xl" />
                <h5 className="uppercase text-[5vw] min-[430px]:text-xl sm:text-[2.5vw] lg:text-[1.6vw] xl:text-xl font-medium tracking-wider">
                  kalenár airsoftových akcií
                </h5>
              </div>
            </div>
          </a>
        </article>
      </div>
    </section>
  );
};
export default Events;
