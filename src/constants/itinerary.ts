import type { ClimbingLocation } from '@/models/ClimbingLocation';
import type { Itinerary } from '@/models/Itinerary';
import { blackCave } from './climbing-walls/black-cave';
import { capeBanks } from './climbing-walls/cape-banks';
import { lindfieldRocks } from './climbing-walls/lindfield-rocks';
import { queensPark } from './climbing-walls/queens-park';
import { sissyCrag } from './climbing-walls/sissy-crag';
import { theFrontline } from './climbing-walls/the-frontline';

export const climbingLocations: ClimbingLocation[] = [
  { ...capeBanks },
  { ...queensPark },
  { ...theFrontline },
  { ...blackCave },
  { ...sissyCrag },
  { ...lindfieldRocks }
];

export const itineraryList: Itinerary[] = [
  {
    id: 'climbing',
    sectionTitle: '🧗🏻 Climbing Locations',
    data: climbingLocations
  }
];
