import type { Station } from "@/hooks/type";

export interface StationListProps {
  stations: Station[];
  onSelectStation: (station: Station) => void;
  selectedStationId?: string | number;
}
