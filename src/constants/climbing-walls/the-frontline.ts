import type { ClimbingLocation } from '@/models/ClimbingLocation';

export const theFrontline: ClimbingLocation = {
  id: 'the-frontline',
  name: 'The Frontline, Balkans',
  subtitle: 'via 8 Larra Cres',
  url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-frontline',
  description:
    'The Frontline was the first area discovered and developed in the Balkans.  It is the biggest area with about 150 individual problems ranging from V0- to V13.  There are excellent problems of all grades and styles.\nThese cliffs and boulders are generally west and south-facing and receive plenty of afternoon sun so they are perfect for cold winter afternoons and hot summer mornings.  In summer they can get very hot.  The rock is fast drying and clean but beware of the crimps, some have broken with "interesting" consequences.  Learn to pull gently and evenly on the holds and tread very carefully.\n',
  approach:
    'Referring to the location map park 50m into Larra Cr. just off Mill Dr. North Rocks next to the Bush-Fire Brigade trailer.  Walk down the chained-off driveway, saying hello to all the local barking dogs, and turn left when you hit the grass at the bottom.  About 30m along there is a well worn path down the hill with a small creek on your right, follow this path for about 50m.  When you hit the cliff-line turn left and scramble down wherever you please, this is the Frontline area (left side).\nAlternatively, from the Trenches, go down the hill, cross the creek and then back up the hill.  Make sure you stick to the established paths!\n',
  imageSrc:
    'https://github.com/rawrrencee/sydney/blob/main/src/assets/climbing/frontline/index.jpeg?raw=true',
  relativePath: new URL('@/assets/climbing/frontline/index.jpeg', import.meta.url).href,
  areas: [
    {
      id: '15272011',
      slug: 'the-far-side',
      title: 'The Far Side',
      description:
        'This part of the Frontline is on the northern side of the small creek that runs parallel to the track. Although home only to a few problems, it certainly offers variety and some pretty good bouldering too.\n',
      approach:
        'On the way down to the Frontline turn right instead of left once down the rocky face meeting the adjacent track.\n',
      url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-frontline/area/15272011',
      imageSrc:
        'https://github.com/rawrrencee/sydney/blob/main/src/assets/climbing/frontline/the-far-side-1.jpeg?raw=true',
      relativePath: new URL('@/assets/climbing/frontline/the-far-side-1.jpeg', import.meta.url)
        .href,
      routes: [
        {
          id: '1',
          grade: 'V5',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-frontline/route/6193547631',
          quality: '',
          name: 'World trip',
          ascents: 'Relative popularity (0) - 1 ascent',
          description:
            "Start matched under roof. Work your way up the left face, traverse along the lip to finish as for 'the bright side var'.",
          imageSrc:
            'https://github.com/rawrrencee/sydney/blob/main/src/assets/climbing/frontline/the-far-side-2.jpeg?raw=true',
          relativePath: new URL('@/assets/climbing/frontline/the-far-side-2.jpeg', import.meta.url)
            .href
        },
        {
          id: '2',
          grade: 'V5',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-frontline/route/17667349',
          quality: '57',
          name: 'The Low Side',
          ascents: 'Relative popularity (99) - 152 ascents',
          description:
            'Start at the back of the cave on the obvious chalked holds. Move out the left side of the roof and continue up the front face via slopey holds (keeping right of the cluster of big jugs).',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '3',
          grade: 'V3',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-frontline/route/5094479421',
          quality: '50',
          name: 'The Jug Side',
          ascents: 'Relative popularity (59) - 20 ascents',
          description:
            "'The Low Side' variant where the cluster of big jugs to the left are in. Start in the back of the cave on the obvious chalked holds just like the other climbs.",
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '4',
          grade: 'V5',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-frontline/route/17667397',
          quality: '60',
          name: 'The Bright Side',
          ascents: 'Relative popularity (99) - 152 ascents',
          description:
            'Start in the back of the cave same as The Low Side but pop out the right side of the roof and up the slopey ramp.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '5',
          grade: 'V3',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-frontline/route/5455150236',
          quality: '56',
          name: 'The Foot Side',
          ascents: 'Relative popularity (45) - 10 ascents',
          description:
            "Start in the back left of the cave, following 'The Bright Side' out the right side of the roof, then exit as early as possible from 'The Bright Side' with a high right foot.",
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '6',
          grade: 'V4',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-frontline/route/17667445',
          quality: '59',
          name: 'The Bright Side Var',
          ascents: 'Relative popularity (82) - 66 ascents',
          description:
            'When you reach the slopey lip on the bright side, move right to the big knob and mantle through the scoop.\n  Alex Stokes',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '7',
          grade: 'V4',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-frontline/route/4216907013',
          quality: '63',
          name: 'The Bright Side Var Var',
          ascents: 'Relative popularity (47) - 11 ascents',
          description: 'Keep going right.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '8',
          grade: 'V2/3',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-frontline/route/5424024798',
          quality: '',
          name: 'Back Crack',
          ascents: 'Relative popularity (27) - 4 ascents',
          description:
            "Sit start with hands in lowest 'jug' in the crack and move up via the mega jug, topping out through the high scoop.",
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '9',
          grade: 'V1',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-frontline/route/17667493',
          quality: '57',
          name: 'The Upside',
          ascents: 'Relative popularity (100) - 163 ascents',
          description:
            'Sit start on hidden double undercling jug in roof and up cool scoops to top out above.',
          imageSrc:
            'https://github.com/rawrrencee/sydney/blob/main/src/assets/climbing/frontline/the-far-side-3.jpeg?raw=true',
          relativePath: new URL('@/assets/climbing/frontline/the-far-side-3.jpeg', import.meta.url)
            .href
        },
        {
          id: '10',
          grade: 'V0 R',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-frontline/route/17667541',
          quality: '59',
          name: 'The DownSide',
          ascents: 'Relative popularity (94) - 123 ascents',
          description: 'Up water runnels.  Gorgeous.',
          imageSrc:
            'https://github.com/rawrrencee/sydney/blob/main/src/assets/climbing/frontline/the-far-side-4.jpeg?raw=true',
          relativePath: new URL('@/assets/climbing/frontline/the-far-side-4.jpeg', import.meta.url)
            .href
        },
        {
          id: '11',
          grade: 'V0',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-frontline/route/17667589',
          quality: '53',
          name: 'Sighed',
          ascents: 'Relative popularity (91) - 101 ascents',
          description: '',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '12',
          grade: 'V5',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-frontline/route/17667637',
          quality: '65',
          name: 'Lichen or Not',
          ascents: 'Relative popularity (97) - 142 ascents',
          description:
            'Sit start at small tree on left of cave, traverse right and finish up Hollow Mountain Dreaming.\n  Mauricio Chino',
          imageSrc:
            'https://github.com/rawrrencee/sydney/blob/main/src/assets/climbing/frontline/the-far-side-5.jpeg?raw=true',
          relativePath: new URL('@/assets/climbing/frontline/the-far-side-5.jpeg', import.meta.url)
            .href
        },
        {
          id: '13',
          grade: 'V7',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-frontline/route/17667685',
          quality: '74',
          name: 'Hollow Mountain Dreaming',
          ascents: 'Relative popularity (92) - 110 ascents',
          description:
            'Start on good hold on the left side of the corner and head left out the roof.\nThe separate boulder at the base of the start is not in for hands or feet.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '14',
          grade: 'V10',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-frontline/route/1813886790',
          quality: '',
          name: 'Ultimate Surrender',
          ascents: 'Relative popularity (28) - 4 ascents',
          description:
            "A real wrestle. Starting on the obvious jug at the end of the rail, reverse Hollow mountain dreaming and finish up '7th Day Ascentist'.",
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '15',
          grade: 'V8',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-frontline/route/17667733',
          quality: '70',
          name: '7th Day Ascentist',
          ascents: 'Relative popularity (83) - 70 ascents',
          description:
            'Sit start 1m right of Hollow Mountain Dreaming and go out right side of roof not using any holds of Hollow Mountain Dreaming for hands but ok for feet..',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '16',
          grade: 'V7',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-frontline/route/2675619030',
          quality: '58',
          name: 'Sunday Dentist',
          ascents: 'Relative popularity (22) - 3 ascents',
          description:
            "'7th Day Ascentist' variant, the same up till the slopey rail then all of Hollow Mountain Dreaming is off for hands and feet and instead of going up the crimps you go straight to the roof. Top out is the same as '7th Day Ascentist'. Maybe V8? Needs some repeats.",
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '17',
          grade: '',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-frontline/route/2128173009',
          quality: '',
          name: 'CLOSED Project',
          ascents: 'Relative popularity (0) - No  ascents',
          description:
            'Traverse from The Bright Side through the slopers, all the way around into Ultimate Surrender. 80+ moves, sport grade incoming...',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '18',
          grade: 'V4',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-frontline/route/17667781',
          quality: '45',
          name: 'The Right Side',
          ascents: 'Relative popularity (75) - 44 ascents',
          description: 'Up the flake to the top and mantle away.',
          imageSrc:
            'https://github.com/rawrrencee/sydney/blob/main/src/assets/climbing/frontline/the-far-side-6.jpeg?raw=true',
          relativePath: new URL('@/assets/climbing/frontline/the-far-side-6.jpeg', import.meta.url)
            .href
        },
        {
          id: '19',
          grade: 'V3',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-frontline/route/17667829',
          quality: '50',
          name: 'The right side (eliminate)',
          ascents: 'Relative popularity (51) - 13 ascents',
          description: 'Eliminate all intermediate holds.Go straight from start to top jug.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '20',
          grade: 'V1',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-frontline/route/17667883',
          quality: '48',
          name: 'The Far Side',
          ascents: 'Relative popularity (62) - 23 ascents',
          description: 'Stretch up and right and mantle away.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '21',
          grade: 'V1',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-frontline/route/1355966328',
          quality: '46',
          name: 'Alpha',
          ascents: 'Relative popularity (81) - 61 ascents',
          description: 'Start on small crimpy bulge and crimp, small edges lead to top out.',
          imageSrc:
            'https://github.com/rawrrencee/sydney/blob/main/src/assets/climbing/frontline/the-far-side-7.jpeg?raw=true',
          relativePath: new URL('@/assets/climbing/frontline/the-far-side-7.jpeg', import.meta.url)
            .href
        },
        {
          id: '22',
          grade: 'V3',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-frontline/route/1355966445',
          quality: '47',
          name: 'Bravo',
          ascents: 'Relative popularity (93) - 112 ascents',
          description: 'Sit start using slanted slopey crack, head left and up to top out Alpha.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '23',
          grade: 'V1',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-frontline/route/1355966556',
          quality: '43',
          name: 'Charlie',
          ascents: 'Relative popularity (86) - 80 ascents',
          description: 'Sit start the same as for Bravo, head right and straight up to top out.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '24',
          grade: 'V1',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-frontline/route/1355966667',
          quality: '48',
          name: 'Delta',
          ascents: 'Relative popularity (87) - 81 ascents',
          description: 'Start on juggy bulge, straight up to slopey top out.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '25',
          grade: 'V1',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-frontline/route/1355966778',
          quality: '46',
          name: 'Echo',
          ascents: 'Relative popularity (83) - 68 ascents',
          description: 'Start on the good edge, straight up to top out on the arete.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '26',
          grade: 'V0',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-frontline/route/1355966889',
          quality: '48',
          name: 'Foxtrot',
          ascents: 'Relative popularity (76) - 47 ascents',
          description: 'Start on the cup jug, blast straight up to top out',
          imageSrc:
            'https://github.com/rawrrencee/sydney/blob/main/src/assets/climbing/frontline/the-far-side-8.jpeg?raw=true',
          relativePath: new URL('@/assets/climbing/frontline/the-far-side-8.jpeg', import.meta.url)
            .href
        },
        {
          id: '27',
          grade: 'V2',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-frontline/route/1355967006',
          quality: '53',
          name: 'Golf',
          ascents: 'Relative popularity (76) - 47 ascents',
          description:
            'Sit start on the low jug on the right side of the nose shaped arete, gently head left to top out Foxtrot.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '28',
          grade: 'V3',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-frontline/route/1355967117',
          quality: '48',
          name: 'Hotel',
          ascents: 'Relative popularity (77) - 50 ascents',
          description:
            'Sit start the same as for Golf, head up the bulging nose shaped arete to top out.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '29',
          grade: 'V2',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-frontline/route/1355967228',
          quality: '50',
          name: 'India',
          ascents: 'Relative popularity (65) - 27 ascents',
          description: 'Start on the side pull edge, straight up to top out.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '30',
          grade: 'V3',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-frontline/route/1355967339',
          quality: '53',
          name: 'Juliet',
          ascents: 'Relative popularity (70) - 35 ascents',
          description: 'Start on the juggy slot, big moves up the overhang, top out over bulge.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '31',
          grade: 'V2',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-frontline/route/1355967450',
          quality: '50',
          name: 'Kilo',
          ascents: 'Relative popularity (74) - 42 ascents',
          description: 'Start on the two good crimps, straight up to top out.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '32',
          grade: 'V1',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-frontline/route/1355973048',
          quality: '',
          name: 'Lima',
          ascents: 'Relative popularity (72) - 39 ascents',
          description: 'Start on two jugs, up and right to top out next to The Low Side.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '33',
          grade: 'V3',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-frontline/route/4812405963',
          quality: '50',
          name: 'L2F',
          ascents: 'Relative popularity (74) - 42 ascents',
          description:
            'Traverse left from start holds of Lima to exit out Foxtrot.\nStaying low and avoiding the lip.',
          imageSrc: undefined,
          relativePath: undefined
        }
      ]
    },
    {
      id: '15271891',
      slug: 'frontline-left-hand-side',
      title: 'Frontline Left Hand Side',
      description:
        "This area has some very pleasant moderate wall problems and of course the first crack, 'Revelations'.\n",
      approach:
        "On the way down the track this is the first area you'll get to (unless you skipped it by taking an early left, in which case you are now at the The Main Wall).\n",
      url: 'https://www.thecrag.com/en/climbing/australia/north-west/frontline-left-hand-side',
      imageSrc:
        'https://github.com/rawrrencee/sydney/blob/main/src/assets/climbing/frontline/frontline-left-hand-side-1.jpeg?raw=true',
      relativePath: new URL(
        '@/assets/climbing/frontline/frontline-left-hand-side-1.jpeg',
        import.meta.url
      ).href,
      routes: [
        {
          id: '1',
          grade: 'V2',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/frontline-left-hand-side/route/3503049867',
          quality: '62',
          name: 'Toniglandyl',
          ascents: 'Relative popularity (55) - 30 ascents',
          description: 'Left to right traverse using whatever you find on the way.',
          imageSrc:
            'https://github.com/rawrrencee/sydney/blob/main/src/assets/climbing/frontline/frontline-left-hand-side-2.jpeg?raw=true',
          relativePath: new URL(
            '@/assets/climbing/frontline/frontline-left-hand-side-2.jpeg',
            import.meta.url
          ).href
        },
        {
          id: '2',
          grade: 'V0',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/frontline-left-hand-side/route/17662393',
          quality: '50',
          name: 'Frontrow',
          ascents: 'Relative popularity (99) - 440 ascents',
          description: 'Up over bulge on big holds.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '3',
          grade: 'V0',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/frontline-left-hand-side/route/17662441',
          quality: '51',
          name: 'Bangers',
          ascents: 'Relative popularity (100) - 469 ascents',
          description: 'Straight up knobs just left of the tree branch on top.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '4',
          grade: 'V1',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/frontline-left-hand-side/route/5049743721',
          quality: '',
          name: 'Bangers Sit Start',
          ascents: 'Relative popularity (62) - 45 ascents',
          description: '',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '5',
          grade: 'V0-',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/frontline-left-hand-side/route/17662489',
          quality: '51',
          name: 'M.A.S.H.',
          ascents: 'Relative popularity (99) - 459 ascents',
          description:
            'Start in the bottom of the little flared crack and go up diagonally left under tree branch.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '6',
          grade: 'V3',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/frontline-left-hand-side/route/17662537',
          quality: '54',
          name: 'Tanks a Lot',
          ascents: 'Relative popularity (88) - 223 ascents',
          description:
            'Start on 2f pocket and rounded crimp then straight up over the sloping bulge. Rightmost climb before the corner.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '7',
          grade: 'V1',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/frontline-left-hand-side/route/966232290',
          quality: '49',
          name: 'Dirty Crack Habits',
          ascents: 'Relative popularity (76) - 106 ascents',
          description:
            'Go up through dirty crack (with a handjam/fingerjam). Only a crack addict would be desperate enough to boogie down on ths before Revelations',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '8',
          grade: 'V0',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/frontline-left-hand-side/route/17662585',
          quality: '54',
          name: 'Point of View',
          ascents: 'Relative popularity (100) - 480 ascents',
          description: 'Up layaway arete.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '9',
          grade: 'VB-',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/frontline-left-hand-side/route/2610755823',
          quality: '48',
          name: 'That Looks Nice',
          ascents: 'Relative popularity (55) - 30 ascents',
          description: 'It is nice',
          imageSrc:
            'https://github.com/rawrrencee/sydney/blob/main/src/assets/climbing/frontline/frontline-left-hand-side-3.jpeg?raw=true',
          relativePath: new URL(
            '@/assets/climbing/frontline/frontline-left-hand-side-3.jpeg',
            import.meta.url
          ).href
        },
        {
          id: '10',
          grade: 'V1 R',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/frontline-left-hand-side/route/17662633',
          quality: '54',
          name: 'Choppers',
          ascents: 'Relative popularity (98) - 433 ascents',
          description: "Start 1m right of 'Point of View' and go straight up.",
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '11',
          grade: 'V1',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/frontline-left-hand-side/route/17662681',
          quality: '50',
          name: 'Choppers II',
          ascents: 'Relative popularity (95) - 359 ascents',
          description: 'Climb left of the flake',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '12',
          grade: 'V1',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/frontline-left-hand-side/route/144078414',
          quality: '51',
          name: 'A?',
          ascents: 'Relative popularity (89) - 247 ascents',
          description: 'Follow the flake through the rooflet. Cave is out. Watch the topout',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '13',
          grade: 'V0',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/frontline-left-hand-side/route/17662777',
          quality: '46',
          name: 'B?',
          ascents: 'Relative popularity (78) - 126 ascents',
          description: 'Up the slab below the cave',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '14',
          grade: 'V2',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/frontline-left-hand-side/route/17662825',
          quality: '52',
          name: 'Meltdown',
          ascents: 'Relative popularity (53) - 26 ascents',
          description: 'Crawl in behind the tree then up overhanging face.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '15',
          grade: 'V3 R',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/frontline-left-hand-side/route/17662873',
          quality: '66',
          name: 'Milo on the Rocks',
          ascents: 'Relative popularity (64) - 50 ascents',
          description:
            'Start on broken horizontal ledge (ie. not the boulder) and stay on the left of the crack.',
          imageSrc:
            'https://github.com/rawrrencee/sydney/blob/main/src/assets/climbing/frontline/frontline-left-hand-side-4.jpeg?raw=true',
          relativePath: new URL(
            '@/assets/climbing/frontline/frontline-left-hand-side-1.jpeg',
            import.meta.url
          ).href
        },
        {
          id: '16',
          grade: 'V3 R',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/frontline-left-hand-side/route/17662921',
          quality: '60',
          name: 'Revelations',
          ascents: 'Relative popularity (76) - 109 ascents',
          description: 'THE fist jam crack.  Avoid using any of the face holds for some added fun.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '17',
          grade: 'V0-',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/frontline-left-hand-side/route/17662969',
          quality: '',
          name: '?',
          ascents: 'Relative popularity (51) - 23 ascents',
          description: 'Mantle up the slab',
          imageSrc:
            'https://github.com/rawrrencee/sydney/blob/main/src/assets/climbing/frontline/frontline-left-hand-side-5.jpeg?raw=true',
          relativePath: new URL(
            '@/assets/climbing/frontline/frontline-left-hand-side-5.jpeg',
            import.meta.url
          ).href
        },
        {
          id: '18',
          grade: 'V5',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/frontline-left-hand-side/route/17663029',
          quality: '50',
          name: 'Wholegrain Mustard Gas',
          ascents: 'Relative popularity (69) - 70 ascents',
          description:
            'Up the slightly overhung arete. Finishes at the top of Underground Movement.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '19',
          grade: 'V3',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/frontline-left-hand-side/route/17663077',
          quality: '69',
          name: 'Underground Movement',
          ascents: 'Relative popularity (91) - 268 ascents',
          description: 'Start on crimps, then go left to the pocket and jump to the top.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '20',
          grade: 'V8',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/frontline-left-hand-side/route/2258945208',
          quality: '67',
          name: 'Rogue Beetle',
          ascents: 'Relative popularity (30) - 6 ascents',
          description: "Sit start as for 'C.O.A.T', trav left and into Underground Movement.",
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '21',
          grade: 'V10',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/frontline-left-hand-side/route/17663125',
          quality: '63',
          name: 'C.O.A.T',
          ascents: 'Relative popularity (50) - 21 ascents',
          description:
            'Sit start on slopey crimp. Move straight up via sharp LH crimp to top on slopers.',
          imageSrc: undefined,
          relativePath: undefined
        }
      ]
    },
    {
      id: '15271915',
      slug: 'the-corridor-boulders',
      title: 'The Corridor Boulders',
      description: 'Three boulders with some fun climbing. Dries very quickly.\n',
      approach: '',
      url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-corridor-boulders',
      imageSrc:
        'https://github.com/rawrrencee/sydney/blob/main/src/assets/climbing/frontline/the-corridor-boulders-1.jpeg?raw=true',
      relativePath: new URL(
        '@/assets/climbing/frontline/the-corridor-boulders-1.jpeg',
        import.meta.url
      ).href,
      routes: [
        {
          id: '1',
          grade: 'V1',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-corridor-boulders/route/17663173',
          quality: '50',
          name: 'Sherman Tank',
          ascents: 'Relative popularity (74) - 100 ascents',
          description: 'Easily up the layaway arete.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '2',
          grade: 'V3',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-corridor-boulders/route/110802066',
          quality: '55',
          name: 'V3??',
          ascents: 'Relative popularity (60) - 43 ascents',
          description:
            'Find shallow mono above head height 1m R of "Sherman Tank". Up using this with R hand. Sherman Tank is off.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '3',
          grade: 'V0',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-corridor-boulders/route/17663221',
          quality: '45',
          name: 'A?',
          ascents: 'Relative popularity (74) - 100 ascents',
          description:
            'Up the middle of the eastern rock, from the middle. Up through some slabby crimps',
          imageSrc:
            'https://github.com/rawrrencee/sydney/blob/main/src/assets/climbing/frontline/the-corridor-boulders-2.jpeg?raw=true',
          relativePath: new URL(
            '@/assets/climbing/frontline/the-corridor-boulders-2.jpeg',
            import.meta.url
          ).href
        },
        {
          id: '4',
          grade: 'V2',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-corridor-boulders/route/17663269',
          quality: '49',
          name: 'B?',
          ascents: 'Relative popularity (76) - 116 ascents',
          description: 'Left of yellow streak and up overhung boulder',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '5',
          grade: 'V1',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-corridor-boulders/route/17663317',
          quality: '52',
          name: 'Bomb Shelter',
          ascents: 'Relative popularity (82) - 165 ascents',
          description: 'Right of yellow streak and up overhung boulder',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '6',
          grade: 'V2 R',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-corridor-boulders/route/17663365',
          quality: '47',
          name: 'You Go Slopia',
          ascents: 'Relative popularity (70) - 82 ascents',
          description: 'Right slabby arete of western side. Usually pretty sandy. Bad fall',
          imageSrc:
            'https://github.com/rawrrencee/sydney/blob/main/src/assets/climbing/frontline/the-corridor-boulders-3.jpeg?raw=true',
          relativePath: new URL(
            '@/assets/climbing/frontline/the-corridor-boulders-3.jpeg',
            import.meta.url
          ).href
        },
        {
          id: '7',
          grade: 'V4',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-corridor-boulders/route/17663413',
          quality: '52',
          name: 'You Go Squeeze',
          ascents: 'Relative popularity (51) - 25 ascents',
          description:
            'Up the crimps between You Go Slow and You Go Slopia without using any holds on the arete or the big edges out left.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '8',
          grade: 'V1',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-corridor-boulders/route/17663461',
          quality: '54',
          name: 'You Go Slow',
          ascents: 'Relative popularity (85) - 198 ascents',
          description: 'Mantle on the slopers and then balance to the top.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '9',
          grade: 'V2',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-corridor-boulders/route/17663509',
          quality: '44',
          name: 'C?',
          ascents: 'Relative popularity (64) - 54 ascents',
          description: 'Left of You Go Slow, up the crimps',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '10',
          grade: 'V4',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-corridor-boulders/route/17663557',
          quality: '50',
          name: 'D?',
          ascents: 'Relative popularity (42) - 14 ascents',
          description: '',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '11',
          grade: 'V4',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-corridor-boulders/route/17663605',
          quality: '50',
          name: 'Problem 8',
          ascents: 'Relative popularity (41) - 13 ascents',
          description: "Left of 'C?', up the streak of lichen.",
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '12',
          grade: 'V5',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-corridor-boulders/route/17663653',
          quality: '72',
          name: 'The Pincer Movement',
          ascents: 'Relative popularity (100) - 520 ascents',
          description: 'Sit start, pinch, squeeze and wiggle your way up the knife edge arete.',
          imageSrc:
            'https://github.com/rawrrencee/sydney/blob/main/src/assets/climbing/frontline/the-corridor-boulders-4.jpeg?raw=true',
          relativePath: new URL(
            '@/assets/climbing/frontline/the-corridor-boulders-4.jpeg',
            import.meta.url
          ).href
        },
        {
          id: '13',
          grade: 'V12',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-corridor-boulders/route/144077664',
          quality: '67',
          name: 'The Corridor',
          ascents: 'Relative popularity (0) - 1 ascent',
          description: 'Desperate rounded sidepull climbing in the alley up the face.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '14',
          grade: 'V3',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-corridor-boulders/route/17663755',
          quality: '51',
          name: 'Missile Silo',
          ascents: 'Relative popularity (73) - 98 ascents',
          description: 'One hard move on small crimps.',
          imageSrc:
            'https://github.com/rawrrencee/sydney/blob/main/src/assets/climbing/frontline/the-corridor-boulders-5.jpeg?raw=true',
          relativePath: new URL(
            '@/assets/climbing/frontline/the-corridor-boulders-5.jpeg',
            import.meta.url
          ).href
        },
        {
          id: '15',
          grade: 'V4',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-corridor-boulders/route/17663803',
          quality: '46',
          name: 'Just L of Missile Silo',
          ascents: 'Relative popularity (61) - 44 ascents',
          description: '',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '16',
          grade: 'V6',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-corridor-boulders/route/17663851',
          quality: '56',
          name: 'The Corridor of Uncertainty',
          ascents: 'Relative popularity (51) - 23 ascents',
          description:
            'Start from the obvious left hand sidepull and work your way rightward using the slopey crimps to finish up Missile Silo. Better avoid it when wet. ',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '17',
          grade: 'V0',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-corridor-boulders/route/17663899',
          quality: '50',
          name: 'E?',
          ascents: 'Relative popularity (63) - 50 ascents',
          description:
            'Go up from above the low white scoop. Westernmost face of The Corridor Boulders.',
          imageSrc:
            'https://github.com/rawrrencee/sydney/blob/main/src/assets/climbing/frontline/the-corridor-boulders-6.jpeg?raw=true',
          relativePath: new URL(
            '@/assets/climbing/frontline/the-corridor-boulders-6.jpeg',
            import.meta.url
          ).href
        },
        {
          id: '18',
          grade: 'V0',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-corridor-boulders/route/17663947',
          quality: '44',
          name: 'F?',
          ascents: 'Relative popularity (60) - 43 ascents',
          description:
            'Directly to the right of the tree. Westernmost face of The Corridor Boulders.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '19',
          grade: 'V3',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-corridor-boulders/route/17663995',
          quality: '54',
          name: 'G?',
          ascents: 'Relative popularity (66) - 62 ascents',
          description: '',
          imageSrc:
            'https://github.com/rawrrencee/sydney/blob/main/src/assets/climbing/frontline/the-corridor-boulders-7.jpeg?raw=true',
          relativePath: new URL(
            '@/assets/climbing/frontline/the-corridor-boulders-7.jpeg',
            import.meta.url
          ).href
        },
        {
          id: '20',
          grade: 'V9',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-corridor-boulders/route/5086749105',
          quality: '67',
          name: 'Right Metal Sleeve',
          ascents: 'Relative popularity (0) - 1 ascent',
          description:
            'Full Metal Jacket Original but exit out right via a small left hand crimp and another right sidepull. Jug bulge is out for hands and feet.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '21',
          grade: 'V5',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-corridor-boulders/route/17664043',
          quality: '66',
          name: 'Full Metal Jacket',
          ascents: 'Relative popularity (77) - 118 ascents',
          description: 'Sit start from the lowest sidepulls, powerfully up the overhanging arete.',
          imageSrc:
            'https://github.com/rawrrencee/sydney/blob/main/src/assets/climbing/frontline/the-corridor-boulders-8.jpeg?raw=true',
          relativePath: new URL(
            '@/assets/climbing/frontline/the-corridor-boulders-8.jpeg',
            import.meta.url
          ).href
        },
        {
          id: '22',
          grade: 'V8',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-corridor-boulders/route/17664091',
          quality: '78',
          name: 'Full Metal Jacket (Original)',
          ascents: 'Relative popularity (71) - 81 ascents',
          description:
            "Start with hands on the lowest side-pulls (the right hand is below the lower horizontal seam right at the bottom of the vertical seam where it tapers off) and don't skip any!",
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '23',
          grade: 'V5',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-corridor-boulders/route/144079143',
          quality: '67',
          name: 'Half Metal Jacket',
          ascents: 'Relative popularity (50) - 22 ascents',
          description:
            'Rounded bulge catching the sidepulls then lunge to the knob with your left.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '24',
          grade: 'V5',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-corridor-boulders/route/144077292',
          quality: '67',
          name: 'Quarter Metal Jacket',
          ascents: 'Relative popularity (42) - 13 ascents',
          description:
            'Rounded bulge catching the sidepulls then lunge to the knob with your right.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '25',
          grade: 'V4',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-corridor-boulders/route/17664139',
          quality: '62',
          name: 'The Bilge',
          ascents: 'Relative popularity (92) - 300 ascents',
          description: 'Start on flake then pocket and up to slot and mantle over.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '26',
          grade: 'V2',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-corridor-boulders/route/5091795423',
          quality: '65',
          name: 'Bobby Bilge',
          ascents: 'Relative popularity (56) - 34 ascents',
          description:
            'Start on flake to the jug right side of the cavity, big push to the crimp up and to the right, top out like Full Metal Jacket',
          imageSrc: undefined,
          relativePath: undefined
        }
      ]
    },
    {
      id: '15271939',
      slug: 'the-eastern-bloc',
      title: 'The Eastern Bloc',
      description:
        'This medium sized boulder sitting in front of The Main Wall definitely has some little goodies. It is almost never wet.\n',
      approach: 'Mid way through the Frontline just after the corridor boulders.\n',
      url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-eastern-bloc',
      imageSrc:
        'https://github.com/rawrrencee/sydney/blob/main/src/assets/climbing/frontline/the-eastern-bloc-1.jpeg?raw=true',
      relativePath: new URL('@/assets/climbing/frontline/the-eastern-bloc-1.jpeg', import.meta.url)
        .href,
      routes: [
        {
          id: '1',
          grade: 'V1',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-eastern-bloc/route/17664187',
          quality: '67',
          name: 'Eastern Bloc Arete',
          ascents: 'Relative popularity (100) - 732 ascents',
          description:
            'Up the overhanging arete on jugs and slopers. Perhaps the best V1 of the Frontline!',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '2',
          grade: 'V3',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-eastern-bloc/route/110803479',
          quality: '63',
          name: 'Eastern Block Impossible',
          ascents: 'Relative popularity (58) - 47 ascents',
          description: 'Start up Eastern Bloc Arete, finish up Mission Impossible.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '3',
          grade: 'V3',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-eastern-bloc/route/17664235',
          quality: '60',
          name: 'Border Patrol',
          ascents: 'Relative popularity (46) - 20 ascents',
          description: 'Trav the whole bloc & finish up Eastern Bloc Arete.',
          imageSrc:
            'https://github.com/rawrrencee/sydney/blob/main/src/assets/climbing/frontline/the-eastern-bloc-2.jpeg?raw=true',
          relativePath: new URL(
            '@/assets/climbing/frontline/the-eastern-bloc-2.jpeg',
            import.meta.url
          ).href
        },
        {
          id: '4',
          grade: 'V6 R',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-eastern-bloc/route/17664289',
          quality: '54',
          name: 'Blame Us Scots',
          ascents: 'Relative popularity (48) - 23 ascents',
          description:
            'From break to slopers on top and over without any of the holds on Eastern Bloc Arete or Mission Impossible.',
          imageSrc:
            'https://github.com/rawrrencee/sydney/blob/main/src/assets/climbing/frontline/the-eastern-bloc-3.jpeg?raw=true',
          relativePath: new URL(
            '@/assets/climbing/frontline/the-eastern-bloc-3.jpeg',
            import.meta.url
          ).href
        },
        {
          id: '5',
          grade: 'V3 R',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-eastern-bloc/route/17664337',
          quality: '62',
          name: 'Mission Impossible',
          ascents: 'Relative popularity (86) - 287 ascents',
          description:
            "Up the crack finishing left.  Quite a sting in its tail unless you're tall.",
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '6',
          grade: 'V3',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-eastern-bloc/route/2491003023',
          quality: '65',
          name: "It ain't no Omaha Beach",
          ascents: 'Relative popularity (73) - 123 ascents',
          description:
            'Start up Mission Impossible, traverse the rising break and finish up left side of Eastern Bloc Arete for an exciting top out.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '7',
          grade: 'V3',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-eastern-bloc/route/17664385',
          quality: '57',
          name: 'Coffee Anann',
          ascents: 'Relative popularity (65) - 71 ascents',
          description:
            'Quality moves from pocket to little pocket up right then delicately up and over.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '8',
          grade: 'V5',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-eastern-bloc/route/17664433',
          quality: '67',
          name: 'Coffee Crew',
          ascents: 'Relative popularity (49) - 23 ascents',
          description: 'Links sit-start Crewcut into Coffee Anann.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '9',
          grade: 'V1',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-eastern-bloc/route/17664487',
          quality: '53',
          name: 'Crewcut',
          ascents: 'Relative popularity (87) - 309 ascents',
          description: 'Start on pocket and then go up left and top out around ramp.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '10',
          grade: 'V4',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-eastern-bloc/route/17664535',
          quality: '54',
          name: 'Crewcut Sit Start',
          ascents: 'Relative popularity (61) - 54 ascents',
          description:
            'Sit start on right side of arete then up to pocket to join the rest of the problem. Worth Doing',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '11',
          grade: 'V7',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-eastern-bloc/route/17664583',
          quality: '54',
          name: 'Swiss Cheese Mind',
          ascents: 'Relative popularity (28) - 6 ascents',
          description: 'Link the Crewcut sit-start into Dog Tags. Desperate and crimpy.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '12',
          grade: 'V5',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-eastern-bloc/route/17664631',
          quality: '50',
          name: 'Dog Tags',
          ascents: 'Relative popularity (60) - 51 ascents',
          description:
            'Not quite a sit start but close.  Up the left side of the rounded arete on crimps.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '13',
          grade: 'V3',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-eastern-bloc/route/17664679',
          quality: '48',
          name: 'Double Agent',
          ascents: 'Relative popularity (63) - 62 ascents',
          description: 'Layaways up the middle of the face',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '14',
          grade: 'V4',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-eastern-bloc/route/2729889189',
          quality: '61',
          name: 'Heaps Whatdoyamean',
          ascents: 'Relative popularity (50) - 26 ascents',
          description:
            "Starting with two crimps in between 'A' and Double Agent, with foot in small hole at the bottom of the rock, crimp up to finish and walk out.",
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '15',
          grade: 'V4',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-eastern-bloc/route/17664727',
          quality: '50',
          name: 'A',
          ascents: 'Relative popularity (54) - 35 ascents',
          description: 'A truly low start - in the good pocket barely off the ground. Straight up.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '16',
          grade: 'V5',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-eastern-bloc/route/17664775',
          quality: '65',
          name: 'Berlin Blockade',
          ascents: 'Relative popularity (96) - 561 ascents',
          description: 'Sit start at the small cave. Move right and up to top.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '17',
          grade: 'V6',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-eastern-bloc/route/17664823',
          quality: '56',
          name: 'A Tonic for the Troops',
          ascents: 'Relative popularity (56) - 39 ascents',
          description:
            'Link the start of Berlin Blockade into Double Agent with a low traverse, avoiding the good holds on Berlin Blockade. Fun.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '18',
          grade: 'V3',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-eastern-bloc/route/17664871',
          quality: '51',
          name: 'B',
          ascents: 'Relative popularity (65) - 72 ascents',
          description: 'Same start as Berlin Blockade, but move left and up.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '19',
          grade: 'V3',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-eastern-bloc/route/17664919',
          quality: '68',
          name: 'Violent Crumble',
          ascents: 'Relative popularity (86) - 287 ascents',
          description:
            'Just down the hill below the main boulder of The Eastern Bloc. Start at the back of the cave, head out following the biggest jugs you can find to a mantle.  Careful of the cracked footer on the left.',
          imageSrc:
            'https://github.com/rawrrencee/sydney/blob/main/src/assets/climbing/frontline/the-eastern-bloc-4.jpeg?raw=true',
          relativePath: new URL(
            '@/assets/climbing/frontline/the-eastern-bloc-4.jpeg',
            import.meta.url
          ).href
        },
        {
          id: '20',
          grade: 'V9',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-eastern-bloc/route/17664967',
          quality: '67',
          name: 'Dynamite',
          ascents: 'Relative popularity (28) - 6 ascents',
          description:
            'Out sharp pockets in the roof to desperate mantle keeping hands left of Violent Crumble.  Watch out for exploding holds\u2026',
          imageSrc: undefined,
          relativePath: undefined
        }
      ]
    },
    {
      id: '15271987',
      slug: 'the-main-wall',
      title: 'The Main Wall',
      description:
        'This is the very impressive overhanging bulging wall, with a cave undercutting its right hand side. It is up to 6m high, and is home to some intimidating and essential Frontline Classics.\n',
      approach: '',
      url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-frontline/area/15271987',
      imageSrc:
        'https://github.com/rawrrencee/sydney/blob/main/src/assets/climbing/frontline/the-main-wall-1.jpeg?raw=true',
      relativePath: new URL('@/assets/climbing/frontline/the-main-wall-1.jpeg', import.meta.url)
        .href,
      routes: [
        {
          id: '1',
          grade: 'V2',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-frontline/route/17666233',
          quality: '',
          name: "'A'",
          ascents: 'Relative popularity (32) - 6 ascents',
          description:
            'Directly up starting from the crimps just to the right of the small boulder.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '2',
          grade: 'V3',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-frontline/route/17666281',
          quality: '',
          name: "'B'",
          ascents: 'Relative popularity (32) - 6 ascents',
          description: 'Up from the edges.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '3',
          grade: 'V6',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-frontline/route/17666329',
          quality: '67',
          name: 'Toe to Toe L/H Variant',
          ascents: 'Relative popularity (13) - 2 ascents',
          description: '',
          imageSrc:
            'https://github.com/rawrrencee/sydney/blob/main/src/assets/climbing/frontline/the-main-wall-2.jpeg?raw=true',
          relativePath: new URL('@/assets/climbing/frontline/the-main-wall-2.jpeg', import.meta.url)
            .href
        },
        {
          id: '4',
          grade: 'V4 R',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-frontline/route/17666377',
          quality: '63',
          name: 'Toe to Toe',
          ascents: 'Relative popularity (73) - 53 ascents',
          description:
            'Start with your left hand in the high pocket.  Reach a good rail and do some funky footwork then straight up left of the scoop.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '5',
          grade: 'V8 R',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-frontline/route/17666425',
          quality: '75',
          name: "Ben's Extension to Toe to Toe",
          ascents: 'Relative popularity (36) - 7 ascents',
          description:
            "Sit start with your left hand in the lowest pocket and crank up right to the slot and then back left to join 'Toe to Toe'.  For the tall!",
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '6',
          grade: 'V10 R',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-frontline/route/17666473',
          quality: '',
          name: 'Woolly Jumper',
          ascents: 'Relative popularity (29) - 5 ascents',
          description: 'Paste your feet on and dyno to slot then up through scoop.',
          imageSrc:
            'https://github.com/rawrrencee/sydney/blob/main/src/assets/climbing/frontline/the-main-wall-3.jpeg?raw=true',
          relativePath: new URL('@/assets/climbing/frontline/the-main-wall-3.jpeg', import.meta.url)
            .href
        },
        {
          id: '7',
          grade: 'V9/10',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-frontline/route/144077076',
          quality: '',
          name: 'Woolly Crimper',
          ascents: 'Relative popularity (0) - 1 ascent',
          description: "'Woolly Jumper' via the sharp crimp statically.",
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '8',
          grade: 'V6 R',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-frontline/route/17666521',
          quality: '83',
          name: 'Milo and Kofi',
          ascents: 'Relative popularity (85) - 111 ascents',
          description:
            "Off break through crimps and pinch then jump to sidepull up right and delicately to top.  Sit start has been done but it's not worth it.",
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '9',
          grade: 'V7',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-frontline/route/17666569',
          quality: '50',
          name: 'Eating Sheep',
          ascents: 'Relative popularity (13) - 2 ascents',
          description: "Link 'Milo and Kofi' into Woolly Jumper via a mid level traverse.",
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '10',
          grade: 'V6',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-frontline/route/17666617',
          quality: '64',
          name: 'A2 is Not a Tank',
          ascents: 'Relative popularity (86) - 115 ascents',
          description:
            "Jump from one break to the next and traverse left as far as you like.  The grade is the number of inches you are under 6'7' times by 2/3.",
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '11',
          grade: 'V12',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-frontline/route/144077940',
          quality: '',
          name: 'Daoism',
          ascents: 'Relative popularity (0) - 1 ascent',
          description:
            'Stand start in the break. Tough move through rounded pinch/layaway dish to slot then up slab. Given V10 by James.',
          imageSrc:
            'https://github.com/rawrrencee/sydney/blob/main/src/assets/climbing/frontline/the-main-wall-4.jpeg?raw=true',
          relativePath: new URL('@/assets/climbing/frontline/the-main-wall-4.jpeg', import.meta.url)
            .href
        },
        {
          id: '12',
          grade: 'V13',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-frontline/route/752002047',
          quality: '',
          name: 'Substance of Everything',
          ascents: 'Relative popularity (0) - No  ascents',
          description: 'Sit start to Daoism.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '13',
          grade: 'V10 R',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-frontline/route/17666773',
          quality: '81',
          name: 'American Siege',
          ascents: 'Relative popularity (52) - 18 ascents',
          description: 'Tough move up to sidepull, then to mono and "better" holds, then up slab.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '14',
          grade: 'V11',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-frontline/route/549926193',
          quality: '',
          name: 'Siege From Down Under',
          ascents: 'Relative popularity (0) - No  ascents',
          description: '\nFA: Tom Farrell, 2007',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '15',
          grade: 'V7 R',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-frontline/route/17666677',
          quality: '76',
          name: 'Paratroopin',
          ascents: 'Relative popularity (100) - 255 ascents',
          description: 'Traverse right out lip of cave to tough mantle then finish up easy slab.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '16',
          grade: 'V10',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-frontline/route/549910440',
          quality: '',
          name: 'Phone Lock',
          ascents: 'Relative popularity (0) - 1 ascent',
          description: 'Sit start into Paratroopin.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '17',
          grade: 'V10',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-frontline/route/3713571348',
          quality: '',
          name: 'Hurtsagovernor',
          ascents: 'Relative popularity (0) - No  ascents',
          description:
            "Start as for Paratroopin and keep traversing right into 'Pockets of the highlander'.",
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '18',
          grade: 'V8',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-frontline/route/459140067',
          quality: '83',
          name: "Paratroopin' Plus",
          ascents: 'Relative popularity (21) - 3 ascents',
          description:
            "'Paratroopin' traversing the lip to finish up 'Pockets of Resistance'. About half a grade harder than Paratroopin.",
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '19',
          grade: 'V2',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-frontline/route/17666725',
          quality: '49',
          name: 'The Pendulum',
          ascents: 'Relative popularity (73) - 57 ascents',
          description: 'Traverse either way along the start pump of Paratroopin.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '20',
          grade: 'V8',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-frontline/route/459139188',
          quality: '83',
          name: 'Pocketrooping',
          ascents: 'Relative popularity (38) - 8 ascents',
          description: "'Pockets of Resistance' traversing left to finish up Paratroopin.",
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '21',
          grade: 'V11',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-frontline/route/518451036',
          quality: '',
          name: 'Energy Into Love',
          ascents: 'Relative popularity (0) - No  ascents',
          description: "Link up. 'Pockets of Resistance' into 'American Siege'.",
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '22',
          grade: 'V7 R',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-frontline/route/17666821',
          quality: '84',
          name: 'Pockets of Resistance',
          ascents: 'Relative popularity (75) - 61 ascents',
          description:
            'Start matched in the back pocket, across the roof, pull the lip and up the difficult slab.',
          imageSrc:
            'https://github.com/rawrrencee/sydney/blob/main/src/assets/climbing/frontline/the-main-wall-5.jpeg?raw=true',
          relativePath: new URL('@/assets/climbing/frontline/the-main-wall-5.jpeg', import.meta.url)
            .href
        },
        {
          id: '23',
          grade: 'V9',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-frontline/route/142291881',
          quality: '50',
          name: 'Pockets of the highlander',
          ascents: 'Relative popularity (33) - 6 ascents',
          description:
            "Start from 'Pockets of Resistance' and traverse right to finish up Highlander.",
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '24',
          grade: 'V3',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-frontline/route/17666869',
          quality: '46',
          name: 'Highlander',
          ascents: 'Relative popularity (45) - 12 ascents',
          description: 'Up the flared seam.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '25',
          grade: 'V4 R',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-frontline/route/17666917',
          quality: '56',
          name: 'Friendly Fire',
          ascents: 'Relative popularity (40) - 9 ascents',
          description: 'Mantle into the bottom of corridor then delicately straight up.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '26',
          grade: 'V2',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-frontline/route/17666965',
          quality: '50',
          name: "'C'",
          ascents: 'Relative popularity (46) - 13 ascents',
          description: 'Start by mantling the good edges and up.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '27',
          grade: 'V0-',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-frontline/route/17667013',
          quality: '48',
          name: "'D'",
          ascents: 'Relative popularity (57) - 23 ascents',
          description: 'Straight up the wall left of the corner.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '28',
          grade: 'V1',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-frontline/route/17667061',
          quality: '',
          name: "'E'",
          ascents: 'Relative popularity (56) - 22 ascents',
          description: 'Layback all the way up the corner.',
          imageSrc:
            'https://github.com/rawrrencee/sydney/blob/main/src/assets/climbing/frontline/the-main-wall-6.jpeg?raw=true',
          relativePath: new URL('@/assets/climbing/frontline/the-main-wall-6.jpeg', import.meta.url)
            .href
        },
        {
          id: '29',
          grade: 'V1',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-frontline/route/17667109',
          quality: '54',
          name: 'War Paint',
          ascents: 'Relative popularity (57) - 23 ascents',
          description: 'Smear your way up this.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '30',
          grade: 'V1',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-frontline/route/17667157',
          quality: '44',
          name: 'Foot Soldier',
          ascents: 'Relative popularity (56) - 22 ascents',
          description:
            'Tip toe up short right and then left trending staircases with nothing touching the rock but your feet.',
          imageSrc:
            'https://github.com/rawrrencee/sydney/blob/main/src/assets/climbing/frontline/the-main-wall-7.jpeg?raw=true',
          relativePath: new URL('@/assets/climbing/frontline/the-main-wall-7.jpeg', import.meta.url)
            .href
        },
        {
          id: '31',
          grade: 'V0',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-frontline/route/17667205',
          quality: '45',
          name: "'F'",
          ascents: 'Relative popularity (53) - 19 ascents',
          description: 'Straight up the middle of the bulge on the right side of the slab.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '32',
          grade: 'V1',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-frontline/route/17667253',
          quality: '47',
          name: "'G'",
          ascents: 'Relative popularity (53) - 19 ascents',
          description: 'Up from the couple of good, small holds.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '33',
          grade: 'V5',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-frontline/route/17667301',
          quality: '',
          name: "Bushman's Hankie",
          ascents: 'Relative popularity (39) - 8 ascents',
          description: 'Straight up from directly outside of the down-climb gully.',
          imageSrc: undefined,
          relativePath: undefined
        }
      ]
    },
    {
      id: '15271963',
      slug: 'front-and-centre',
      title: 'Front and Centre',
      description:
        "More classic problems, the most popular being 'Sloper-Dan Milosevic' and 'Diplomatic Immunity'. Starting to get polished.\n",
      approach: '',
      url: 'https://www.thecrag.com/en/climbing/australia/north-west/front-and-centre',
      imageSrc:
        'https://github.com/rawrrencee/sydney/blob/main/src/assets/climbing/frontline/front-and-centre-1.jpeg?raw=true',
      relativePath: new URL('@/assets/climbing/frontline/front-and-centre-1.jpeg', import.meta.url)
        .href,
      routes: [
        {
          id: '1',
          grade: 'V4/5',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/front-and-centre/route/3356819418',
          quality: '',
          name: 'Rakija',
          ascents: 'Relative popularity (0) - 1 ascent',
          description:
            'Probably gonna need some after this. Start right of burnt tree, past the obvious break. Probably easier for the tall.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '2',
          grade: 'V5',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/front-and-centre/route/3460534251',
          quality: '83',
          name: 'Pink Panther',
          ascents: 'Relative popularity (22) - 4 ascents',
          description:
            'Can you reach the diamond? Another spicy highball! Straight up from below the flake. Crimp ledge to the left is out.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '3',
          grade: 'V3',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/front-and-centre/route/3356808618',
          quality: '62',
          name: 'Burek dance',
          ascents: 'Relative popularity (35) - 9 ascents',
          description:
            'One for me one for you. Tic taccy finger warmup. Probably avoid the cracked jug.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '4',
          grade: 'V2',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/front-and-centre/route/17665015',
          quality: '',
          name: 'A?',
          ascents: 'Relative popularity (42) - 15 ascents',
          description: 'Start low and go straight up.',
          imageSrc:
            'https://github.com/rawrrencee/sydney/blob/main/src/assets/climbing/frontline/front-and-centre-2.jpeg?raw=true',
          relativePath: new URL(
            '@/assets/climbing/frontline/front-and-centre-2.jpeg',
            import.meta.url
          ).href
        },
        {
          id: '5',
          grade: 'V0-',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/front-and-centre/route/17665063',
          quality: '',
          name: 'B?',
          ascents: 'Relative popularity (57) - 42 ascents',
          description: 'Straight up the slab next to the arete.',
          imageSrc:
            'https://github.com/rawrrencee/sydney/blob/main/src/assets/climbing/frontline/front-and-centre-3.jpeg?raw=true',
          relativePath: new URL(
            '@/assets/climbing/frontline/front-and-centre-3.jpeg',
            import.meta.url
          ).href
        },
        {
          id: '6',
          grade: 'V1',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/front-and-centre/route/17665111',
          quality: '44',
          name: 'C?',
          ascents: 'Relative popularity (57) - 41 ascents',
          description: 'Up the sloping slab.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '7',
          grade: 'V1',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/front-and-centre/route/17665159',
          quality: '44',
          name: 'D?',
          ascents: 'Relative popularity (61) - 53 ascents',
          description: 'Start on the two pockets and straight up the slab.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '8',
          grade: 'V4',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/front-and-centre/route/17665207',
          quality: '60',
          name: 'Leap of Faith',
          ascents: 'Relative popularity (68) - 81 ascents',
          description:
            'Hallelujah, I believe... undercling the big feature, then praise the lord and grab the good edge above.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '9',
          grade: 'V2',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/front-and-centre/route/17665255',
          quality: '44',
          name: 'E?',
          ascents: 'Relative popularity (48) - 22 ascents',
          description: 'Start on the sloping undercuts and up to the ledge.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '10',
          grade: 'V3',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/front-and-centre/route/17665303',
          quality: '48',
          name: 'F',
          ascents: 'Relative popularity (58) - 44 ascents',
          description: 'Slab right behind Ali Baba. Stand start off crimp rail, head straight up.',
          imageSrc:
            'https://github.com/rawrrencee/sydney/blob/main/src/assets/climbing/frontline/front-and-centre-4.jpeg?raw=true',
          relativePath: new URL(
            '@/assets/climbing/frontline/front-and-centre-4.jpeg',
            import.meta.url
          ).href
        },
        {
          id: '11',
          grade: 'V1',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/front-and-centre/route/17665351',
          quality: '43',
          name: 'G?',
          ascents: 'Relative popularity (57) - 42 ascents',
          description: 'Straight up the middle of the slab from the crimp rail.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '12',
          grade: 'V0',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/front-and-centre/route/17665399',
          quality: '',
          name: 'Sneakers',
          ascents: 'Relative popularity (56) - 39 ascents',
          description: 'Single move to the top of the boulder.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '13',
          grade: 'V3 R',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/front-and-centre/route/17665447',
          quality: '55',
          name: 'Pump Action',
          ascents: 'Relative popularity (57) - 40 ascents',
          description:
            'Start in the big pocket and dyno to top of arete to jug.  Then carefully up ramp.',
          imageSrc:
            'https://github.com/rawrrencee/sydney/blob/main/src/assets/climbing/frontline/front-and-centre-5.jpeg?raw=true',
          relativePath: new URL(
            '@/assets/climbing/frontline/front-and-centre-5.jpeg',
            import.meta.url
          ).href
        },
        {
          id: '14',
          grade: 'V8',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/front-and-centre/route/650366064',
          quality: '58',
          name: 'Ali Baba and the Forty Thieves',
          ascents: 'Relative popularity (31) - 7 ascents',
          description:
            'Start El Kooko and dyno up left around the corner to the starting jug of Pump Action. Finish as for Pump Action.',
          imageSrc:
            'https://github.com/rawrrencee/sydney/blob/main/src/assets/climbing/frontline/front-and-centre-6.jpeg?raw=true',
          relativePath: new URL(
            '@/assets/climbing/frontline/front-and-centre-6.jpeg',
            import.meta.url
          ).href
        },
        {
          id: '15',
          grade: 'V9 R',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/front-and-centre/route/17665495',
          quality: '62',
          name: 'El Kooko',
          ascents: 'Relative popularity (52) - 28 ascents',
          description:
            "Start low 'matched' on the flake down below the roof. Gain the juggy ledge and lunge to starting pockets of Ascension Day, finishing up and left as for Ascension Day. Knock it down a grade if you exit via jugs.",
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '16',
          grade: 'V6 R',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/front-and-centre/route/17665543',
          quality: '44',
          name: 'Ascension Day',
          ascents: 'Relative popularity (39) - 12 ascents',
          description:
            'Start on pockets (use a cheat stone if you have to) then tough around bulge skipping the jugs out right.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '17',
          grade: 'V5',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/front-and-centre/route/17665693',
          quality: '86',
          name: 'Sloper-Dan Milosevic',
          ascents: 'Relative popularity (100) - 676 ascents',
          description:
            'Sit start low and move through beautiful slopers to roof and finish up jugs.  The best problem in the Balkans?',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '18',
          grade: 'V7',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/front-and-centre/route/17665591',
          quality: '79',
          name: 'Sloper Dan Low',
          ascents: 'Relative popularity (68) - 83 ascents',
          description:
            "Start as for El Kooko 'matched' on the flake below the roof and move right to finish up 'Sloper-Dan Milosevic'.",
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '19',
          grade: 'V7',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/front-and-centre/route/3852415071',
          quality: '',
          name: 'Lieutenant Dan',
          ascents: 'Relative popularity (0) - 1 ascent',
          description:
            "'Sloper Dan Low' eliminate. Climb 'Sloper Dan Low' up to the crimp before the top rail then go direct to the horn.",
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '20',
          grade: 'V8',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/front-and-centre/route/526019574',
          quality: '78',
          name: 'Boogie Knights (Original)',
          ascents: 'Relative popularity (44) - 17 ascents',
          description:
            "The original problem, hardly done anymore. Link the start of  'Sloper-Dan Milosevic' into 'Ascension Day', exiting to the left of the horn. (Jugs are off).",
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '21',
          grade: 'V7',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/front-and-centre/route/17665741',
          quality: '76',
          name: 'Boogie Knights',
          ascents: 'Relative popularity (90) - 344 ascents',
          description:
            "As 'Boogie Knights (Original)', but exiting right of the horn via jugs as on 'Sloper-Dan Milosevic'. Significantly easier finish than the original.",
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '22',
          grade: 'V9',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/front-and-centre/route/3015785184',
          quality: '67',
          name: 'Bea Fia',
          ascents: 'Relative popularity (0) - 1 ascent',
          description:
            'Start = as for El Kooko. Traverse right staying (very) low and finish up Snakebite.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '23',
          grade: 'V9',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/front-and-centre/route/17665639',
          quality: '69',
          name: 'Low Down Boogie (Original)',
          ascents: 'Relative popularity (44) - 17 ascents',
          description: "'Boogie Knights' starting as for El Kooko, topping as per Ascension Day.",
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '24',
          grade: 'V8',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/front-and-centre/route/679349124',
          quality: '78',
          name: 'Low Down Boogie',
          ascents: 'Relative popularity (64) - 64 ascents',
          description: '"Low Down Boogie (Eliminate)" with the \'Sloper-Dan Milosevic\' finish.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '25',
          grade: 'V7',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/front-and-centre/route/1247435406',
          quality: '',
          name: 'Super Size Me',
          ascents: 'Relative popularity (0) - 1 ascent',
          description:
            "Start 'matched' on the low start below the jug rail of El Kooko as for Sloper Dan Low. Climb across this problem all staying low all the way into and then up Shell Shocked.",
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '26',
          grade: 'V5',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/front-and-centre/route/1247430573',
          quality: '',
          name: 'Fast Food',
          ascents: 'Relative popularity (0) - No  ascents',
          description:
            "Sit start as for 'Sloper-Dan Milosevic' climb across into the start of Shell Shocked and finish as for that problem.",
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '27',
          grade: 'V4 R',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/front-and-centre/route/17665801',
          quality: '56',
          name: 'Shell Shocked',
          ascents: 'Relative popularity (49) - 24 ascents',
          description:
            "Up the concavity just right of 'Sloper-Dan Milosevic'. Mantle into left undercling then all the way to the rail then over. More sustained and committing than it looks.",
          imageSrc:
            'https://github.com/rawrrencee/sydney/blob/main/src/assets/climbing/frontline/front-and-centre-7.jpeg?raw=true',
          relativePath: new URL(
            '@/assets/climbing/frontline/front-and-centre-7.jpeg',
            import.meta.url
          ).href
        },
        {
          id: '28',
          grade: 'V4 R',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/front-and-centre/route/144076740',
          quality: '',
          name: 'Shell Shocked (sit start)',
          ascents: 'Relative popularity (18) - 3 ascents',
          description: 'Not worth the extra effort!',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '29',
          grade: 'V11',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/front-and-centre/route/616473150',
          quality: '',
          name: 'They call me Brock Landers',
          ascents: 'Relative popularity (11) - 2 ascents',
          description:
            'Sit start below Akhtar on the obvious slot and climb only the low lip left into El Kooko.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '30',
          grade: 'V10',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/front-and-centre/route/641916216',
          quality: '',
          name: 'Chest Rockwell',
          ascents: 'Relative popularity (29) - 6 ascents',
          description:
            'Sit start below Akhtar on the obvious slot and climb only the low lip left into Boogie Knights original finish. Knock a grade off for the variant finish.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '31',
          grade: 'V8',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/front-and-centre/route/679372509',
          quality: '',
          name: 'Chest Rockwell-Sloper-Dan',
          ascents: 'Relative popularity (18) - 3 ascents',
          description: "'Chest Rockwell' lip traverse with 'Sloper-Dan Milosevic' finish.",
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '32',
          grade: 'V9',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/front-and-centre/route/679444488',
          quality: '',
          name: 'Captain Courageous Left',
          ascents: 'Relative popularity (0) - 1 ascent',
          description:
            "Start 'Sloper-Dan Milosevic' and climb to jugs just left of tree, up to crimps & dead point to slopey rail to finish out left. Probably a grade easier if you move a bit left into undercling & climb as for Shell Shocked.",
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '33',
          grade: 'V9',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/front-and-centre/route/679444626',
          quality: '',
          name: 'Captain Courageous Right',
          ascents: 'Relative popularity (0) - 1 ascent',
          description: 'Start as for Chest Rockwell & finish with Captain Courageous Left.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '34',
          grade: 'V5',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/front-and-centre/route/144078066',
          quality: '52',
          name: 'Akhtar',
          ascents: 'Relative popularity (42) - 15 ascents',
          description:
            'You have to go really fast for this one, like the Pakistani bowler! Stand start and mantle to left crimp and leap to top, then over.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '35',
          grade: 'V6',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/front-and-centre/route/144078693',
          quality: '',
          name: 'Shoaib Akhtar',
          ascents: 'Relative popularity (0) - 1 ascent',
          description: 'Not worth the extra effort!',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '36',
          grade: 'V4',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/front-and-centre/route/17665897',
          quality: '58',
          name: 'Snakebite',
          ascents: 'Relative popularity (70) - 96 ascents',
          description:
            'Pinch the plate, paste your feet and reach around bulge to crimp to join I10.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '37',
          grade: 'V3',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/front-and-centre/route/17665945',
          quality: '48',
          name: "Johnny Dawes' Problem",
          ascents: 'Relative popularity (50) - 26 ascents',
          description: 'Jump start to jug then over.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '38',
          grade: 'V2',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/front-and-centre/route/17665993',
          quality: '63',
          name: 'Diplomatic Solution',
          ascents: 'Relative popularity (91) - 381 ascents',
          description: 'Sit start at the arete with butt on the ground and hands on the shelf.',
          imageSrc:
            'https://github.com/rawrrencee/sydney/blob/main/src/assets/climbing/frontline/front-and-centre-8.jpeg?raw=true',
          relativePath: new URL(
            '@/assets/climbing/frontline/front-and-centre-8.jpeg',
            import.meta.url
          ).href
        },
        {
          id: '39',
          grade: 'V5',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/front-and-centre/route/17666041',
          quality: '47',
          name: 'I Am Twelve',
          ascents: 'Relative popularity (34) - 9 ascents',
          description: '',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '40',
          grade: 'V11',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/front-and-centre/route/423048363',
          quality: '67',
          name: 'Dumbo The Flying Elephant',
          ascents: 'Relative popularity (28) - 6 ascents',
          description: 'Dyno from the start of Diplomatic Immunity to the top of I Am Twelve.',
          imageSrc:
            'https://github.com/rawrrencee/sydney/blob/main/src/assets/climbing/frontline/front-and-centre-9.jpeg?raw=true',
          relativePath: new URL(
            '@/assets/climbing/frontline/front-and-centre-9.jpeg',
            import.meta.url
          ).href
        },
        {
          id: '41',
          grade: 'V4',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/front-and-centre/route/17666089',
          quality: '73',
          name: 'Diplomatic Immunity',
          ascents: 'Relative popularity (82) - 209 ascents',
          description:
            'Sit start low in the chalked break on jugs then into the vertical seam, contort yourself (unless short) then up and slightly left to top out.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '42',
          grade: 'V6',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/front-and-centre/route/17666137',
          quality: '63',
          name: 'Flubdub',
          ascents: 'Relative popularity (46) - 19 ascents',
          description:
            'Start as of The Invisible Gerka (obvious break), big move left into the pocket, then up and over via jugs. Goodluck shorties!',
          imageSrc:
            'https://github.com/rawrrencee/sydney/blob/main/src/assets/climbing/frontline/front-and-centre-10.jpeg?raw=true',
          relativePath: new URL(
            '@/assets/climbing/frontline/front-and-centre-10.jpeg',
            import.meta.url
          ).href
        },
        {
          id: '43',
          grade: 'V6',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/front-and-centre/route/679450002',
          quality: '',
          name: "Neil's V6",
          ascents: 'Relative popularity (0) - 1 ascent',
          description:
            'Start as for Flubdub and The Invisible Gerka. Head straight up in between the 2 problems via some micro crimps. "V6" from Neil... Big pinch of salt...',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '44',
          grade: 'V8',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/front-and-centre/route/17666185',
          quality: '67',
          name: 'The Invisible Gerka',
          ascents: 'Relative popularity (36) - 10 ascents',
          description:
            'Start on the obvious break, move right up through the line of micros to the large pocket and finish with top out.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '45',
          grade: 'V10',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/front-and-centre/route/1251129087',
          quality: '',
          name: 'The War Gherkin',
          ascents: 'Relative popularity (0) - 1 ascent',
          description:
            'Start up Diplomatic Immunity and traverse right through slopey break to finish up The Invisible Gerka, some where between hard V8 and V9/10',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '46',
          grade: 'V8',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/front-and-centre/route/5222026155',
          quality: '50',
          name: 'The Invisible Gerka (Direct)',
          ascents: 'Relative popularity (0) - 1 ascent',
          description:
            'Eliminate on The Invisible Gerka, skipping the large pocket and direct up through the crimps. (Can be easier or harder, depends on your finger strength)',
          imageSrc: undefined,
          relativePath: undefined
        }
      ]
    },
    {
      id: '15272035',
      slug: 'frontline-right-hand-side',
      title: 'Frontline Right Hand Side',
      description:
        "The Bouldering in this area is a bit of a mixed bag - some crap and some classics such as 'Armistice Day'. Lots of styles, some little roofs, some dirty slabs and a few scary ones too!\n",
      approach: '',
      url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-frontline/area/15272035',
      imageSrc:
        'https://github.com/rawrrencee/sydney/blob/main/src/assets/climbing/frontline/frontline-right-hand-side-1.jpeg?raw=true',
      relativePath: new URL(
        '@/assets/climbing/frontline/frontline-right-hand-side-1.jpeg',
        import.meta.url
      ).href,
      routes: [
        {
          id: '1',
          grade: 'V2',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-frontline/route/17667931',
          quality: '',
          name: 'A?',
          ascents: 'Relative popularity (36) - 6 ascents',
          description: 'Up the bulging slab.',
          imageSrc:
            'https://github.com/rawrrencee/sydney/blob/main/src/assets/climbing/frontline/frontline-right-hand-side-1.jpeg?raw=true',
          relativePath: new URL(
            '@/assets/climbing/frontline/frontline-right-hand-side-1.jpeg',
            import.meta.url
          ).href
        },
        {
          id: '2',
          grade: 'V3',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-frontline/route/17667979',
          quality: '55',
          name: 'Hot Milo',
          ascents: 'Relative popularity (62) - 21 ascents',
          description: 'Lunge start then over bulge with no footholds.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '3',
          grade: 'V3',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-frontline/route/17668027',
          quality: '50',
          name: 'Gaudy',
          ascents: 'Relative popularity (50) - 12 ascents',
          description: 'Stand start on break, big move up to the pocket then easily up.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '4',
          grade: 'V3',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-frontline/route/17668075',
          quality: '50',
          name: 'B?',
          ascents: 'Relative popularity (39) - 7 ascents',
          description: 'Start just left of the arete and go up, using the arete higher up.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '6',
          grade: 'V2',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-frontline/route/17668123',
          quality: '50',
          name: 'Eden Gardens',
          ascents: 'Relative popularity (33) - 5 ascents',
          description: 'Start in the low slot, then up.',
          imageSrc:
            'https://github.com/rawrrencee/sydney/blob/main/src/assets/climbing/frontline/frontline-right-hand-side-2.jpeg?raw=true',
          relativePath: new URL(
            '@/assets/climbing/frontline/frontline-right-hand-side-2.jpeg',
            import.meta.url
          ).href
        },
        {
          id: '7',
          grade: 'V1',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-frontline/route/17668171',
          quality: '',
          name: 'C?',
          ascents: 'Relative popularity (33) - 5 ascents',
          description: 'Up the flake.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '8',
          grade: 'V5 R',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-frontline/route/2788822395',
          quality: '67',
          name: 'Armistice Night',
          ascents: 'Relative popularity (14) - 2 ascents',
          description: 'Same start as Armistice Day but exit left of the roof instead of right.',
          imageSrc:
            'https://github.com/rawrrencee/sydney/blob/main/src/assets/climbing/frontline/frontline-right-hand-side-3.jpeg?raw=true',
          relativePath: new URL(
            '@/assets/climbing/frontline/frontline-right-hand-side-3.jpeg',
            import.meta.url
          ).href
        },
        {
          id: '9',
          grade: 'V5 R',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-frontline/route/17668219',
          quality: '72',
          name: 'Armistice Day',
          ascents: 'Relative popularity (84) - 69 ascents',
          description: 'Up orange face on loose crimps to join K6.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '10',
          grade: 'V4',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-frontline/route/17668267',
          quality: '53',
          name: 'Amnesty',
          ascents: 'Relative popularity (77) - 49 ascents',
          description: 'Up the arete with the awful landing. High but the crux is down low.',
          imageSrc:
            'https://github.com/rawrrencee/sydney/blob/main/src/assets/climbing/frontline/frontline-right-hand-side-4.jpeg?raw=true',
          relativePath: new URL(
            '@/assets/climbing/frontline/frontline-right-hand-side-4.jpeg',
            import.meta.url
          ).href
        },
        {
          id: '11',
          grade: 'V2',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-frontline/route/17668315',
          quality: '50',
          name: 'D?',
          ascents: 'Relative popularity (33) - 5 ascents',
          description: 'Directly up the middle of this wall.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '12',
          grade: 'V1',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-frontline/route/17668363',
          quality: '',
          name: 'Ping Pong',
          ascents: 'Relative popularity (28) - 4 ascents',
          description: 'Up the corner.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '13',
          grade: 'V6',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-frontline/route/17668411',
          quality: '68',
          name: 'Who Killed The Kennedys',
          ascents: 'Relative popularity (100) - 157 ascents',
          description: 'Sit start, out the middle of the roof finishing left over the rounded lip.',
          imageSrc:
            'https://github.com/rawrrencee/sydney/blob/main/src/assets/climbing/frontline/frontline-right-hand-side-5.jpeg?raw=true',
          relativePath: new URL(
            '@/assets/climbing/frontline/frontline-right-hand-side-5.jpeg',
            import.meta.url
          ).href
        },
        {
          id: '14',
          grade: 'V6',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-frontline/route/17668459',
          quality: '66',
          name: 'Little Jon Jon',
          ascents: 'Relative popularity (80) - 55 ascents',
          description: 'Start up M2 but go left around bulge, watch your back.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '15',
          grade: 'V11',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-frontline/route/17668507',
          quality: '50',
          name: 'The Vineyard',
          ascents: 'Relative popularity (33) - 5 ascents',
          description: 'Levitate off the underclings to the jug.  No crash-pad cheating now!',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '16',
          grade: 'V7',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-frontline/route/1031264421',
          quality: '68',
          name: 'Boabie Dinosaur',
          ascents: 'Relative popularity (68) - 31 ascents',
          description:
            'Start as for Little Buddha and then make your way through The Vineyard jug rail, then head under the lip to link up and finish out Little Jon Jon.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '17',
          grade: 'V5',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-frontline/route/17668555',
          quality: '63',
          name: 'Little Buddah LH variant',
          ascents: 'Relative popularity (74) - 41 ascents',
          description:
            'A fun variant. Start as Little Buddha but cross rh to slot left out to the vineyard arete then cross over rh & top out as for The Vineyard.\n  Mauricio Chino',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '18',
          grade: 'V5',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-frontline/route/17668609',
          quality: '64',
          name: 'Little Buddha',
          ascents: 'Relative popularity (100) - 158 ascents',
          description: 'Hug your way up this overhanging block.',
          imageSrc:
            'https://github.com/rawrrencee/sydney/blob/main/src/assets/climbing/frontline/frontline-right-hand-side-6.jpeg?raw=true',
          relativePath: new URL(
            '@/assets/climbing/frontline/frontline-right-hand-side-6.jpeg',
            import.meta.url
          ).href
        },
        {
          id: '19',
          grade: 'V6',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-frontline/route/17668657',
          quality: '',
          name: 'Wrist action',
          ascents: 'Relative popularity (28) - 4 ascents',
          description: 'Right of Little Buddha sit start on blocky side pull & undercling.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '21',
          grade: 'V1',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-frontline/route/17668717',
          quality: '',
          name: 'E?',
          ascents: 'Relative popularity (33) - 5 ascents',
          description: 'Up the left side of this face.',
          imageSrc:
            'https://github.com/rawrrencee/sydney/blob/main/src/assets/climbing/frontline/frontline-right-hand-side-7.jpeg?raw=true',
          relativePath: new URL(
            '@/assets/climbing/frontline/frontline-right-hand-side-7.jpeg',
            import.meta.url
          ).href
        },
        {
          id: '22',
          grade: 'V1',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-frontline/route/17668765',
          quality: '50',
          name: 'F?',
          ascents: 'Relative popularity (33) - 5 ascents',
          description: 'Up the centre of the face.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '23',
          grade: 'V1',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-frontline/route/17668813',
          quality: '',
          name: 'G?',
          ascents: 'Relative popularity (28) - 4 ascents',
          description: 'Up just to the left of the cave.',
          imageSrc: undefined,
          relativePath: undefined
        }
      ]
    },
    {
      id: '15272083',
      slug: 'montenegro-wall',
      title: 'Montenegro Wall',
      description:
        "Jurassic Park Slab on the left of the main track. Don't let it fool you into thinking it's not worthy. Have a go on one of Sydney's best V2's - 'Opposition In Exile'.\n",
      approach: '',
      url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-frontline/area/15272083',
      imageSrc:
        'https://github.com/rawrrencee/sydney/blob/main/src/assets/climbing/frontline/montenegro-wall-1.jpeg?raw=true',
      relativePath: new URL('@/assets/climbing/frontline/montenegro-wall-1.jpeg', import.meta.url)
        .href,
      routes: [
        {
          id: '1',
          grade: 'V0',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-frontline/route/17669389',
          quality: '',
          name: 'Spuz',
          ascents: 'Relative popularity (64) - 25 ascents',
          description:
            "A town in Montenegro but this is what you'll do if you fail on this one.  Easy fun mantle.",
          imageSrc:
            'https://github.com/rawrrencee/sydney/blob/main/src/assets/climbing/frontline/montenegro-wall-1.jpeg?raw=true',
          relativePath: new URL(
            '@/assets/climbing/frontline/montenegro-wall-1.jpeg',
            import.meta.url
          ).href
        },
        {
          id: '2',
          grade: 'V1',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-frontline/route/17669437',
          quality: '53',
          name: 'Out On A Lim',
          ascents: 'Relative popularity (95) - 119 ascents',
          description:
            'A river in Montenegro, mantle over little roof without getting your feet wet.',
          imageSrc:
            'https://github.com/rawrrencee/sydney/blob/main/src/assets/climbing/frontline/montenegro-wall-2.jpeg?raw=true',
          relativePath: new URL(
            '@/assets/climbing/frontline/montenegro-wall-2.jpeg',
            import.meta.url
          ).href
        },
        {
          id: '3',
          grade: 'V2',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-frontline/route/17669485',
          quality: '78',
          name: 'Opposition In Exile',
          ascents: 'Relative popularity (100) - 154 ascents',
          description:
            'Start with a left hand press on the sloped feature around waist height and head up via some beautiful holds to a fun topout.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '4',
          grade: 'V4 R',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-frontline/route/17669533',
          quality: '67',
          name: 'Peace',
          ascents: 'Relative popularity (41) - 8 ascents',
          description: "It helps to be 6'4' for this one!  Up good holds to scary finish.",
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '5',
          grade: 'V3 R',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-frontline/route/17669581',
          quality: '',
          name: 'Peace Plus',
          ascents: 'Relative popularity (28) - 4 ascents',
          description: 'From undercling to layaway to good hold and easier top.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '6',
          grade: 'V3',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-frontline/route/17669629',
          quality: '61',
          name: 'Black Mountain',
          ascents: 'Relative popularity (41) - 8 ascents',
          description: 'Up vertical seam underneath tree branches.',
          imageSrc: undefined,
          relativePath: undefined
        }
      ]
    },
    {
      id: '15272059',
      slug: 'the-pee-boulder',
      title: 'The Pee Boulder',
      description:
        "The large boulder opposite of 'Montenegro Wall'. Its backside has some fun problems, although the can be pretty short.\n",
      approach: '',
      url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-frontline/area/15272059',
      imageSrc:
        'https://github.com/rawrrencee/sydney/blob/main/src/assets/climbing/frontline/the-pee-boulder-1.jpeg?raw=true',
      relativePath: new URL('@/assets/climbing/frontline/the-pee-boulder-1.jpeg', import.meta.url)
        .href,
      routes: [
        {
          id: '1',
          grade: 'V5',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-frontline/route/17668861',
          quality: '63',
          name: 'Omemsahi Bart',
          ascents: 'Relative popularity (61) - 22 ascents',
          description:
            'Start up Here Comes The Hercules then traverse the wall from right to left on the lovely rounded holds below the lip.',
          imageSrc:
            'https://github.com/rawrrencee/sydney/blob/main/src/assets/climbing/frontline/the-pee-boulder-2.jpeg?raw=true',
          relativePath: new URL(
            '@/assets/climbing/frontline/the-pee-boulder-2.jpeg',
            import.meta.url
          ).href
        },
        {
          id: '2',
          grade: 'V4',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-frontline/route/17668909',
          quality: '53',
          name: 'Here Comes The Hercules',
          ascents: 'Relative popularity (77) - 50 ascents',
          description: 'Up to breaks then long throw to one of the three knobs and tough mantle.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '3',
          grade: 'V4',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-frontline/route/17668957',
          quality: '46',
          name: "Rob's Mantle",
          ascents: 'Relative popularity (49) - 12 ascents',
          description: 'Slap to crimps and then long move to rounded hold and press it out.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '4',
          grade: 'V5',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-frontline/route/17669005',
          quality: '69',
          name: 'Macedomeia',
          ascents: 'Relative popularity (72) - 39 ascents',
          description: 'Slap to rounded hold then jug and then long move to rounded dome and over.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '5',
          grade: 'V5',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-frontline/route/17669053',
          quality: '53',
          name: 'Here Comes The Submarine',
          ascents: 'Relative popularity (39) - 7 ascents',
          description:
            'Up left a little to small undercling then mantle to big rounded knob and over.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '6',
          grade: 'V2',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-frontline/route/17669101',
          quality: '57',
          name: 'A?',
          ascents: 'Relative popularity (46) - 10 ascents',
          description: 'Start low on good edge and sidepull.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '7',
          grade: 'V1',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-frontline/route/17669149',
          quality: '50',
          name: 'B?',
          ascents: 'Relative popularity (28) - 4 ascents',
          description: 'Start on low break, good luck with all the vegetation.',
          imageSrc:
            'https://github.com/rawrrencee/sydney/blob/main/src/assets/climbing/frontline/the-pee-boulder-3.jpeg?raw=true',
          relativePath: new URL(
            '@/assets/climbing/frontline/the-pee-boulder-3.jpeg',
            import.meta.url
          ).href
        },
        {
          id: '8',
          grade: 'V5',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-frontline/route/17669197',
          quality: '60',
          name: 'Battle of the Skivvies',
          ascents: 'Relative popularity (78) - 53 ascents',
          description: "From undercling stay left of 'Battle of the Shirts'.",
          imageSrc:
            'https://github.com/rawrrencee/sydney/blob/main/src/assets/climbing/frontline/the-pee-boulder-4.jpeg?raw=true',
          relativePath: new URL(
            '@/assets/climbing/frontline/the-pee-boulder-4.jpeg',
            import.meta.url
          ).href
        },
        {
          id: '9',
          grade: 'V4 R',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-frontline/route/17669245',
          quality: '68',
          name: 'Battle of the Shirts',
          ascents: 'Relative popularity (100) - 160 ascents',
          description: "Climb the left side of the'fish' arete using anything to a tricky top.",
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '10',
          grade: 'V6',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-frontline/route/17669293',
          quality: '67',
          name: 'Battle of the Shorts',
          ascents: 'Relative popularity (93) - 113 ascents',
          description: "Eliminate for 'Battle of the Shirts'.",
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '11',
          grade: 'V7',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-frontline/route/17669341',
          quality: '56',
          name: 'Battle of the Bonds',
          ascents: 'Relative popularity (57) - 17 ascents',
          description:
            "Sit start as for all other routes that begin in the cave. Around roof on slopers, then up the arete, staying right of 'Battle of the Shirts' and 'Battle of the Shorts'.",
          imageSrc: undefined,
          relativePath: undefined
        }
      ]
    },
    {
      id: '15272107',
      slug: 'area-q',
      title: 'Area Q',
      description:
        'The large boulder with routes up to 5m, encompassing some of the hardest and steepest problems.\n',
      approach:
        "Keep heading South following the obvious track. Area Q is after the Pee Boulder and Montenegro Wall. There's one more boulder if you keep going which is Roadside.\n",
      url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-frontline/area/15272107',
      imageSrc:
        'https://github.com/rawrrencee/sydney/blob/main/src/assets/climbing/frontline/area-q-1.jpeg?raw=true',
      relativePath: new URL('@/assets/climbing/frontline/area-q-1.jpeg', import.meta.url).href,
      routes: [
        {
          id: '1',
          grade: 'V0-',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-frontline/route/17669677',
          quality: '',
          name: 'Almost A Case Of Trenchfoot',
          ascents: 'Relative popularity (40) - 8 ascents',
          description: 'Up the crack.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '2',
          grade: 'V1',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-frontline/route/17669725',
          quality: '',
          name: 'Gangrene',
          ascents: 'Relative popularity (31) - 5 ascents',
          description: 'Straight up the face.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '3',
          grade: 'V0-',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-frontline/route/17669773',
          quality: '',
          name: 'A?',
          ascents: 'Relative popularity (34) - 6 ascents',
          description: 'Up the jugs.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '4',
          grade: 'V2',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-frontline/route/17669821',
          quality: '100',
          name: 'B?',
          ascents: 'Relative popularity (31) - 5 ascents',
          description: 'Dirty line straight up.',
          imageSrc:
            'https://github.com/rawrrencee/sydney/blob/main/src/assets/climbing/frontline/area-q-2.jpeg?raw=true',
          relativePath: new URL('@/assets/climbing/frontline/area-q-2.jpeg', import.meta.url).href
        },
        {
          id: '5',
          grade: 'V1',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-frontline/route/17669869',
          quality: '',
          name: 'C?',
          ascents: 'Relative popularity (27) - 4 ascents',
          description: "Up through the vegetation if that's what you really want to do.",
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '6',
          grade: 'V1',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-frontline/route/17669917',
          quality: '',
          name: 'D?',
          ascents: 'Relative popularity (42) - 9 ascents',
          description: 'Straight up some good holds.',
          imageSrc:
            'https://github.com/rawrrencee/sydney/blob/main/src/assets/climbing/frontline/area-q-3.jpeg?raw=true',
          relativePath: new URL('@/assets/climbing/frontline/area-q-3.jpeg', import.meta.url).href
        },
        {
          id: '7',
          grade: 'V2',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-frontline/route/17669965',
          quality: '49',
          name: 'National Pride',
          ascents: 'Relative popularity (81) - 68 ascents',
          description: 'Start just right of the tree. Straight up.',
          imageSrc:
            'https://github.com/rawrrencee/sydney/blob/main/src/assets/climbing/frontline/area-q-4.jpeg?raw=true',
          relativePath: new URL('@/assets/climbing/frontline/area-q-4.jpeg', import.meta.url).href
        },
        {
          id: '8',
          grade: 'V1',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-frontline/route/707478342',
          quality: '54',
          name: '7',
          ascents: 'Relative popularity (93) - 133 ascents',
          description:
            "Sit start up jugs to the left of Lay Down Your Arms,\nThen up Lay Down Your Arms above it's difficulties.",
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '9',
          grade: 'V3',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-frontline/route/17670013',
          quality: '65',
          name: 'Lay Down Your Arms',
          ascents: 'Relative popularity (100) - 187 ascents',
          description:
            "Sit start on lowest jug (same as for 'l'Homme Obu'), then up left to juggy break then straight up.",
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '10',
          grade: 'V5',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-frontline/route/17670061',
          quality: '69',
          name: 'Arms Race',
          ascents: 'Relative popularity (96) - 151 ascents',
          description:
            "Sit start on lowest jug (same as for 'L'Homme Obu'), reach the juggy break and head up and right through scoop.",
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '11',
          grade: 'V8',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-frontline/route/719440110',
          quality: '83',
          name: 'Killer arms',
          ascents: 'Relative popularity (27) - 4 ascents',
          description:
            'Start as for Mann Killer but skip the crimp out right and punch straight up to the edge and finish up Arms Race.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '12',
          grade: 'V9',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-frontline/route/3105182979',
          quality: '67',
          name: 'Pneuma',
          ascents: 'Relative popularity (51) - 14 ascents',
          description:
            "Climb up 'Arms Race' till the break before big move right to small crimp. Cross to finger jug to finish as for 'L'Homme Obu Left'.",
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '13',
          grade: 'V7',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-frontline/route/17670109',
          quality: '55',
          name: 'Mann Killer',
          ascents: 'Relative popularity (76) - 53 ascents',
          description:
            "Sit start on lowest jug (same as for 'L'Homme Obu'). Skip the good hold on the left and instead us the triangle crimp for the RH and the glued crimp for the LH. After the break, finish up 'Lay Down Your Arms'.",
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '14',
          grade: 'V7',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-frontline/route/3946513452',
          quality: '67',
          name: 'Misdirection',
          ascents: 'Relative popularity (22) - 3 ascents',
          description:
            'Start as Mann Killer move up through the triangle pinch out right then the glued on crimp bumping up to the jug, then finish up through Arms Race.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '15',
          grade: 'V8',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-frontline/route/3946797399',
          quality: '50',
          name: 'Mann-Explaining',
          ascents: 'Relative popularity (14) - 2 ascents',
          description:
            "Sit start on lowest jug (same as for 'L'Homme Obu'). hit the triangle pinch skip the glued crimp on your way to the good edge then finish up Arms Race through the scoop.",
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '16',
          grade: 'V8',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-frontline/route/17670157',
          quality: '73',
          name: 'If The Shoe Fits',
          ascents: 'Relative popularity (93) - 129 ascents',
          description:
            "Sit start on the lowest jug (same as for 'l'Homme Obu'). Go right to sloper then straight up to the triangle shaped crimp, lunge to break and traverse across, finishing up 'Business as Usual'.",
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '17',
          grade: 'V10',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-frontline/route/679500651',
          quality: '73',
          name: 'Rocket Man Left',
          ascents: 'Relative popularity (55) - 17 ascents',
          description: 'As for Rocket Man but right hand big move and top out left.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '18',
          grade: 'V10',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-frontline/route/17670205',
          quality: '88',
          name: 'Rocket Man',
          ascents: 'Relative popularity (94) - 134 ascents',
          description:
            "'L'Homme Obu' standing start from the big break on If The Shoe Fits. Power out to the LH pocket and finish up Rocket Pants.",
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '19',
          grade: 'V3',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-frontline/route/17670253',
          quality: '53',
          name: 'Rocket Pants',
          ascents: 'Relative popularity (60) - 22 ascents',
          description:
            "Jump to the LH pocket on 'L'Homme Obu'/'Rocket Man' and mantle around the bulge.",
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '20',
          grade: 'V11',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-frontline/route/679497852',
          quality: '88',
          name: "L'homme Obu Left",
          ascents: 'Relative popularity (45) - 10 ascents',
          description: "As for 'L'homme Obu' but big move right hand. Top out to the left.",
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '21',
          grade: 'V11',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-frontline/route/17670301',
          quality: '99',
          name: "L'homme Obu",
          ascents: 'Relative popularity (72) - 42 ascents',
          description:
            "'Rocket Man' sit start.  Start up If The Shoe Fits and finish up Rocket Man.",
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '22',
          grade: 'V3',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-frontline/route/17670349',
          quality: '53',
          name: 'If The Glove Fits',
          ascents: 'Relative popularity (55) - 17 ascents',
          description: 'From crimps around bulge to improving holds and over.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '23',
          grade: 'V9',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-frontline/route/17670397',
          quality: '67',
          name: 'Low Rider',
          ascents: 'Relative popularity (38) - 7 ascents',
          description:
            'Sit start for super reach/dyno around bulge and finish up If The Glove Fits.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '24',
          grade: 'V3 R',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-frontline/route/17670445',
          quality: '52',
          name: 'Business as Usual',
          ascents: 'Relative popularity (81) - 69 ascents',
          description: 'Hard first move to lovely rounded holds and scary top-out.',
          imageSrc:
            'https://github.com/rawrrencee/sydney/blob/main/src/assets/climbing/frontline/area-q-5.jpeg?raw=true',
          relativePath: new URL('@/assets/climbing/frontline/area-q-5.jpeg', import.meta.url).href
        },
        {
          id: '25',
          grade: 'V3',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-frontline/route/17670493',
          quality: '50',
          name: 'E?',
          ascents: 'Relative popularity (34) - 6 ascents',
          description: 'Start on decent holds then up and right.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '26',
          grade: 'V9',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-frontline/route/17670541',
          quality: '',
          name: 'If The Thong Fits',
          ascents: 'Relative popularity (14) - 2 ascents',
          description:
            "Variant of 'If The Shoe Fits' eliminating the low, sloping overlap where you'd put your right hand.",
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '27',
          grade: 'V0+',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-frontline/route/454795323',
          quality: '50',
          name: 'Q Traverse',
          ascents: 'Relative popularity (27) - 4 ascents',
          description:
            'An easy traverse line. Start matched on the ledge directly behind the tree and work your way right on the lower ledges to finish on the small hold where Arms Race and Mann Killer meet. Keep that left heel hooked as much as possible',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '28',
          grade: 'V10',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-frontline/route/3337898169',
          quality: '67',
          name: 'Benchmark',
          ascents: 'Relative popularity (14) - 2 ascents',
          description: "Start as of 'Killer Arms' (v8) and finish up as for 'Pneuma' (v9).",
          imageSrc: undefined,
          relativePath: undefined
        }
      ]
    },
    {
      id: '15272131',
      slug: 'roadside',
      title: 'Roadside',
      description:
        "This medium sized boulder sitting right at the end of frontline very close to the road, hence the name. You can hear cars zooming by while you're topping out on some easy climbs\n",
      approach: 'Keep walking past Area Q and you can see it from there. Just a few more steps.\n',
      url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-frontline/area/15272131',
      imageSrc:
        'https://github.com/rawrrencee/sydney/blob/main/src/assets/climbing/frontline/roadside-1.jpeg?raw=true',
      relativePath: new URL('@/assets/climbing/frontline/roadside-1.jpeg', import.meta.url).href,
      routes: [
        {
          id: '2',
          grade: 'V1',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-frontline/route/17670589',
          quality: '48',
          name: "'Rithmetic",
          ascents: 'Relative popularity (59) - 21 ascents',
          description: 'Sit start off the lip of the little cave.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '3',
          grade: 'V0',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-frontline/route/17670637',
          quality: '',
          name: 'A?',
          ascents: 'Relative popularity (51) - 14 ascents',
          description: 'Stand start at the blunt arete on opposing slopey sidepulls.',
          imageSrc:
            'https://github.com/rawrrencee/sydney/blob/main/src/assets/climbing/frontline/roadside-2.jpeg?raw=true',
          relativePath: new URL('@/assets/climbing/frontline/roadside-2.jpeg', import.meta.url).href
        },
        {
          id: '4',
          grade: 'V2',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-frontline/route/17670685',
          quality: '',
          name: 'B?',
          ascents: 'Relative popularity (21) - 3 ascents',
          description: 'Straight up from the top of the tiny cave.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '5',
          grade: 'V1',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-frontline/route/17670733',
          quality: '',
          name: 'C?',
          ascents: 'Relative popularity (53) - 15 ascents',
          description: 'Start from the lower break and head straight up to top out.',
          imageSrc:
            'https://github.com/rawrrencee/sydney/blob/main/src/assets/climbing/frontline/roadside-3.jpeg?raw=true',
          relativePath: new URL('@/assets/climbing/frontline/roadside-3.jpeg', import.meta.url).href
        },
        {
          id: '6',
          grade: 'V2',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-frontline/route/17670781',
          quality: '',
          name: 'D?',
          ascents: 'Relative popularity (43) - 9 ascents',
          description: 'Start in the even-lower break and out over the little roof.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '7',
          grade: 'V0',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-frontline/route/17670829',
          quality: '',
          name: 'E?',
          ascents: 'Relative popularity (51) - 14 ascents',
          description: 'From an approximately head-high jug, up to the protruding rock and over.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '8',
          grade: 'V0-',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-frontline/route/17670877',
          quality: '',
          name: 'F?',
          ascents: 'Relative popularity (47) - 11 ascents',
          description: 'Start on the big ledge and go up over the prow.',
          imageSrc:
            'https://github.com/rawrrencee/sydney/blob/main/src/assets/climbing/frontline/roadside-4.jpeg?raw=true',
          relativePath: new URL('@/assets/climbing/frontline/roadside-4.jpeg', import.meta.url).href
        },
        {
          id: '9',
          grade: 'V1',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-frontline/route/17670925',
          quality: '',
          name: 'G?',
          ascents: 'Relative popularity (35) - 6 ascents',
          description: 'Straight up the wall.',
          imageSrc:
            'https://github.com/rawrrencee/sydney/blob/main/src/assets/climbing/frontline/roadside-5.jpeg?raw=true',
          relativePath: new URL('@/assets/climbing/frontline/roadside-5.jpeg', import.meta.url).href
        },
        {
          id: '10',
          grade: 'V7',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-frontline/route/17670973',
          quality: '',
          name: 'The Beach',
          ascents: 'Relative popularity (14) - 2 ascents',
          description: 'Double undercling start, around bulge to crimps then bust to jugs.',
          imageSrc:
            'https://github.com/rawrrencee/sydney/blob/main/src/assets/climbing/frontline/roadside-6.jpeg?raw=true',
          relativePath: new URL('@/assets/climbing/frontline/roadside-6.jpeg', import.meta.url).href
        },
        {
          id: '11',
          grade: 'V3',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-frontline/route/17671021',
          quality: '64',
          name: "She'll Be Left",
          ascents: 'Relative popularity (64) - 27 ascents',
          description: 'Finish straight up.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '12',
          grade: 'V2',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-frontline/route/17671069',
          quality: '53',
          name: "She'll Be Right",
          ascents: 'Relative popularity (63) - 25 ascents',
          description: 'Finish right.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '13',
          grade: 'V0',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-frontline/route/17671117',
          quality: '49',
          name: 'H?',
          ascents: 'Relative popularity (89) - 98 ascents',
          description: 'Start low and left of the arete, up through the nice holds.',
          imageSrc:
            'https://github.com/rawrrencee/sydney/blob/main/src/assets/climbing/frontline/roadside-7.jpeg?raw=true',
          relativePath: new URL('@/assets/climbing/frontline/roadside-7.jpeg', import.meta.url).href
        },
        {
          id: '14',
          grade: 'V2',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-frontline/route/17671165',
          quality: '62',
          name: 'Have A Proper Gander',
          ascents: 'Relative popularity (100) - 174 ascents',
          description:
            "You'd better scope out the top of this one first!  Up horizontal breaks to lovely rounded holds on top.",
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '15',
          grade: 'V1',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-frontline/route/2446205508',
          quality: '59',
          name: 'NRMA traverse',
          ascents: 'Relative popularity (84) - 76 ascents',
          description:
            "Start on the far right side triangle shaped jug near the burnt tree stump and traverse all the rails and jugs to the left linking with boulder 'H?'.",
          imageSrc:
            'https://github.com/rawrrencee/sydney/blob/main/src/assets/climbing/frontline/roadside-8.jpeg?raw=true',
          relativePath: new URL('@/assets/climbing/frontline/roadside-8.jpeg', import.meta.url).href
        },
        {
          id: '16',
          grade: 'V2',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-frontline/route/17671213',
          quality: '50',
          name: 'Sandbar',
          ascents: 'Relative popularity (72) - 42 ascents',
          description: 'Straight up the wall and top out over the slightly overhanging boulder.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '17',
          grade: 'V3 R',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-frontline/route/17671261',
          quality: '54',
          name: 'Crossfire',
          ascents: 'Relative popularity (69) - 34 ascents',
          description:
            "Don't get crossed up on this one.  Long first moves to a tough mantle next to the boulder.",
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '18',
          grade: 'V3',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-frontline/route/17671309',
          quality: '',
          name: 'Ewe',
          ascents: 'Relative popularity (35) - 6 ascents',
          description: 'Up from the jug to a tricky mantle.',
          imageSrc:
            'https://github.com/rawrrencee/sydney/blob/main/src/assets/climbing/frontline/roadside-9.jpeg?raw=true',
          relativePath: new URL('@/assets/climbing/frontline/roadside-9.jpeg', import.meta.url).href
        },
        {
          id: '19',
          grade: 'V1',
          url: 'https://www.thecrag.com/en/climbing/australia/north-west/the-frontline/route/17671357',
          quality: '',
          name: 'U2',
          ascents: 'Relative popularity (41) - 8 ascents',
          description: 'Up over the nose.',
          imageSrc: undefined,
          relativePath: undefined
        }
      ]
    }
  ]
};
