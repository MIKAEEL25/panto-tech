import type { Station } from "@/hooks/type";

export interface MapProps {
  stations: Station[];
  selectedStation: Station | null;
  onMarkerClick?: (station: Station) => void;
}
