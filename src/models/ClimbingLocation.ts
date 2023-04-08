export interface ClimbingLocation {
  id: string;
  name: string;
  subtitle: string;
  imageSrc: string | undefined;
  relativePath: string | undefined;
  areas: ClimbingArea[];
}

interface ClimbingArea {
  id: string;
  slug: string;
  title: string;
  description: string;
  imageSrc: string | undefined;
  relativePath: string | undefined;
  routes: ClimbingLocationRoute[];
}

interface ClimbingLocationRoute {
  id: string;
  grade: string;
  url: string;
  quality: string;
  name: string;
  ascents: string;
  description: string;
  imageSrc: string | undefined;
  relativePath: string | undefined;
}
