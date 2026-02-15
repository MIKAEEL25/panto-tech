import { useState } from 'react';
import { useStations } from './hooks/useStations';
import { useFilter } from './hooks/useFilter';
import type { Station } from './hooks/type';
import {
  CityFilter,
  Error,
  LoadingSpinner,
  Map,
  StationList,
} from '@/components';

function App() {
  const { stations, loading, error } = useStations();
  const { selectedCity, setSelectedCity, cities, filteredStations } =
    useFilter(stations);
  const [selectedStation, setSelectedStation] = useState<Station | null>(null);

  if (loading) {
    return (
      <div className="w-fit h-fit mx-auto my-50">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="mx-auto p-4">
      <h1 className="text-3xl lg:text-7xl font-bold mb-15 text-emerald-200 text-center drop-shadow-orange-500 drop-shadow-xl">
        German Train Stations
      </h1>
      {error && <Error message={error} />}
      {!error && (
        <>
          <div className="mb-5">
            <CityFilter
              cities={cities}
              selectedCity={selectedCity}
              onCityChange={setSelectedCity}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-1">
              <StationList
                stations={filteredStations}
                onSelectStation={setSelectedStation}
                selectedStationId={selectedStation?.id}
              />
            </div>
            <div className="md:col-span-2">
              <Map
                stations={filteredStations}
                selectedStation={selectedStation}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
