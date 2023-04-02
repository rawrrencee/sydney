export const climbingLocations = [
  {
    id: 'cape-banks',
    name: 'Cape Banks',
    subtitle: 'via Westpac Lifesaver Helicopter Base',
    relativePath: new URL('@/assets/climbing/cape-banks/index.jpeg', import.meta.url).href,
    imageSrc: null,
    details: [
      {
        id: 'big-straight-wall',
        title: 'Big Straight Wall'
      }
    ]
  },
  {
    id: 'queens-park',
    name: 'Queens Park',
    subtitle: 'via Victoria Park',
    relativePath: new URL('@/assets/climbing/queens-park/index.jpeg', import.meta.url).href,
    imageSrc: null
  },
  {
    id: 'frontline',
    name: 'The Frontline, Balkans',
    subtitle: 'via 8 Larra Cres',
    relativePath: new URL('@/assets/climbing/frontline/index.jpeg', import.meta.url).href,
    imageSrc: null
  },
  {
    id: 'black-cave',
    name: 'Black Cave',
    subtitle: 'via Beatty St',
    relativePath: new URL('@/assets/climbing/black-cave/index.jpeg', import.meta.url).href,
    imageSrc: null
  },
  {
    id: 'sissy-crag',
    name: 'Sissy Crag',
    subtitle: 'via Bridgeview Cres',
    relativePath: new URL('@/assets/climbing/sissy-crag/index.jpeg', import.meta.url).href,
    imageSrc: null
  },
  {
    id: 'lindfield-rocks',
    name: 'Lindfield Rocks',
    subtitle: 'via Tryon Road Tennis Courts',
    relativePath: new URL('@/assets/climbing/lindfield-rocks/index.jpeg', import.meta.url).href,
    imageSrc: null
  }
];

export const itineraryList = [
  {
    id: 'climbing',
    sectionTitle: '🧗🏻 Climbing',
    data: climbingLocations
  },
  {
    id: 'food',
    sectionTitle: '🍖 Food',
    data: []
  }
];
