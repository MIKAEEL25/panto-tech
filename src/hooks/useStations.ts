import { useEffect, useState } from 'react';
import type { Station } from './type';

const URL =
  'https://gist.githubusercontent.com/neysidev/bbd40032f0f4e167a1e6a8b3e99a490c/raw/train-stations.json';

export const useStations = () => {
  const [stations, setStations] = useState<Station[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStations = async () => {
      try {
        const response = await fetch(URL);
        if (!response.ok) {
          throw new Error('Sorry, Failed To Fetch Locations');
        }
        const data = await response.json();
        setStations(data);
      } catch (error) {
        setError(error instanceof Error ? error.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };
    fetchStations();
  }, []);

  return { stations, loading, error };
};
