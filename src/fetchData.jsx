import { createClient } from 'contentful';
import { useEffect, useState } from 'react';

const client = createClient({
  space: 'xktnpm54e7po',
  environment: 'master',
  accessToken: import.meta.env.VITE_ACCESS_TOKEN,
});

export const useFetchData = () => {
  const [loading, setLoadnig] = useState(true);
  const [events, setEvents] = useState([]);

  const getEvents = async () => {
    try {
      const response = await client.getEntries({
        content_type: 'chtelnicaEvents',
      });
      const events = response.items.map((item) => {
        const { date, image, title, url } = item.fields;
        const imageUrl = image?.fields?.file?.url;
        const id = item.sys.id;
        return {
          date,
          title,
          url,
          imageUrl,
          id,
        };
      });

      setEvents(events);
      setLoadnig(false);
    } catch (error) {
      console.log(error);
      setLoadnig(false);
    }
  };

  useEffect(() => {
    getEvents();
  }, []);

  return { loading, events };
};
