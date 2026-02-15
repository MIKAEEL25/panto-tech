import type { CityFilterProps } from "./types";

const CityFilter = ({ cities, selectedCity, onCityChange }: CityFilterProps) => {
  return (
    <select
      value={selectedCity}
      onChange={(e) => onCityChange(e.target.value)}
      className="border rounded-xl p-4 w-full md:w-64 bg-violet-950"
    >
      <option>All Cities</option>
      {cities.filter(c => c !== '').map((city) => (
        <option key={city} value={city}>
          {city}
        </option>
      ))}
    </select>
  );
};

export default CityFilter;