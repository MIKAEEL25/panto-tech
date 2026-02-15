import { useState, useMemo } from 'react';
import type { Station } from './type';

export const useFilter = (stations: Station[]) => {
  const [selectedCity, setSelectedCity] = useState<string>('');

  const cities = useMemo(() => {
    const unique = new Set(stations.map(s => s.city));
    return ['', ...Array.from(unique).sort()];
  }, [stations]);

  const filteredStations = useMemo(() => {
    if (!selectedCity) return stations;
    return stations.filter(s => s.city === selectedCity);
  }, [stations, selectedCity]);

  return { selectedCity, setSelectedCity, cities, filteredStations };
};