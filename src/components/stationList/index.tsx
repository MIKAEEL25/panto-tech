import type { StationListProps } from './types';

const StationList: React.FC<StationListProps> = ({
  stations,
  onSelectStation,
  selectedStationId,
}) => {
  return (
    <div className="border rounded-xl bg-red-200 p-4 h-100 overflow-y-auto scrollbar">
      {stations.length === 0 ? (
        <p className="text-black sm:text-2xl">No station selected, Please select a location!</p>
      ) : (
        <ul className="space-y-3">
          {stations.map((station) => (
            <li
              key={station.id}
              className={`p-4 border-4 border-black bg-blue-700 rounded-2xl cursor-pointer hover:bg-blue-950 transition 
                ${selectedStationId === station.id ? 'bg-violet-950' : ''}`}
              onClick={() => onSelectStation(station)}
            >
              <div className="font-medium">{station.name}</div>
              <div className="text-sm text-red-500">{station.city}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default StationList;
