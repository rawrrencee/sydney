import type { ClimbingLocation } from './ClimbingLocation';

export interface Itinerary {
  id: string;
  sectionTitle: string;
  data: ClimbingLocation[];
}
