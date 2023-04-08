import type { ClimbingLocation } from '@/models/ClimbingLocation';

export const sissyCrag: ClimbingLocation = {
  id: 'sissy-crag',
  name: 'Sissy Crag',
  subtitle: 'via Bridgeview Cres',
  imageSrc: undefined,
  relativePath: new URL('@/assets/climbing/sissy-crag/index.jpeg', import.meta.url).href,
  areas: [
    {
      id: '3785378964',
      slug: 'main-wall',
      title: 'Main Wall',
      description:
        'This is the main section of the crag where you will find the majority of the problems. There a few other problems if you keep walking but none as good as you what you can find here.',
      imageSrc: new URL('@/assets/climbing/sissy-crag/index.jpeg', import.meta.url).href,
      relativePath: new URL('@/assets/climbing/sissy-crag/index.jpeg', import.meta.url).href,
      routes: []
    },
    {
      id: '6554594046',
      slug: 'penis-cling-sector',
      title: 'Penis Cling Sector',
      description: 'The first large shield feature when entering the cave.',
      imageSrc: new URL('@/assets/climbing/sissy-crag/sissy-crag-1.jpeg', import.meta.url).href,
      relativePath: new URL('@/assets/climbing/sissy-crag/sissy-crag-1.jpeg', import.meta.url).href,
      routes: [
        {
          id: '3',
          grade: 'V0',
          url: 'https://www.thecrag.com/en/climbing/australia/north-shore/route/13106263',
          quality: '43',
          name: 'Graham Fairlyburly',
          ascents: 'Relative popularity (55) - 23 ascents',
          description:
            "Traverse the low ledge rightwards. Move up via a two finger pocket. Not Recommended. Please don't do this problem as the holds are getting too polished on the penis cling. Bill Smith is a much better warmup.",
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '4',
          grade: 'V3',
          url: 'https://www.thecrag.com/en/climbing/australia/north-shore/route/13106317',
          quality: '48',
          name: 'The Pest',
          ascents: 'Relative popularity (53) - 21 ascents',
          description:
            'Sit start rail left of Penis Cling side pull. \nUse sloper with right hand and finsh out left',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '5',
          grade: 'V5',
          url: 'https://www.thecrag.com/en/climbing/australia/north-shore/route/144031353',
          quality: '',
          name: 'Dan-De-Lion',
          ascents: 'Relative popularity (20) - 3 ascents',
          description:
            "Just left of 'Penis Cling' start on the juggy ledge and continues up the slopey arete.",
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '6',
          grade: 'V9',
          url: 'https://www.thecrag.com/en/climbing/australia/north-shore/route/13106371',
          quality: '84',
          name: 'Penis Cling',
          ascents: 'Relative popularity (65) - 41 ascents',
          description:
            "L1, R2, L3, R4, M4 A Classic two move wonder.Knock off a grade for using your heel. Has been done going straight up and not using L3. I'm told that it was also done static by Fred Nicole during a visit at V10'ish?",
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '7',
          grade: 'V7',
          url: 'https://www.thecrag.com/en/climbing/australia/north-shore/route/13106419',
          quality: '74',
          name: 'Penis Cling (Heel Hook)',
          ascents: 'Relative popularity (59) - 29 ascents',
          description: '',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '8',
          grade: 'V9',
          url: 'https://www.thecrag.com/en/climbing/australia/north-shore/route/144032796',
          quality: '',
          name: 'Penis Extension',
          ascents: 'Relative popularity (0) - No  ascents',
          description:
            "Start as for 'Penis Cling' but continue from the jug and finish 4m up on the obvious ramp.",
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '9',
          grade: 'V10',
          url: 'https://www.thecrag.com/en/climbing/australia/north-shore/route/2583273591',
          quality: '60',
          name: 'Penis Cling Low',
          ascents: 'Relative popularity (40) - 9 ascents',
          description:
            'Same as Penis Cling, but starting with right hand on the undercling to the right of the left undercling.\n  Peter',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '10',
          grade: 'V10',
          url: 'https://www.thecrag.com/en/climbing/australia/north-shore/route/2567010528',
          quality: '',
          name: 'The Gatekeepers',
          ascents: 'Relative popularity (0) - 1 ascent',
          description:
            'Named for the people who insist that this be a separate climb from the original because it isn\u2019t a sit start. Exactly the same as Penis Cling, just don\u2019t sit to start. Instead start with your left on the far foot and pull on awkwardly, crossed under with your left hand, and completely locked on your right shoulder.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '11',
          grade: 'V7',
          url: 'https://www.thecrag.com/en/climbing/australia/north-shore/route/13106515',
          quality: '63',
          name: 'Love Making In The Dark',
          ascents: 'Relative popularity (48) - 15 ascents',
          description:
            'Sit start then power your way up the right hand side of the penis cling. Fun.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '12',
          grade: 'V9',
          url: 'https://www.thecrag.com/en/climbing/australia/north-shore/route/13106563',
          quality: '56',
          name: 'Summer Night City',
          ascents: 'Relative popularity (25) - 4 ascents',
          description:
            "Probably impossible to repeat as LeBrenton's exact and undoubtedly desperate sequence been lost into obscurity. It's known to be underglinged all the way to the top using the hardest method known to man and is said to be a Crag Classic.",
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '13',
          grade: 'V9',
          url: 'https://www.thecrag.com/en/climbing/australia/north-shore/route/13106611',
          quality: '67',
          name: 'Summer Night Extension',
          ascents: 'Relative popularity (13) - 2 ascents',
          description: "After the finish of SNC, link into Zac's Highball.",
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '14',
          grade: 'V6',
          url: 'https://www.thecrag.com/en/climbing/australia/north-shore/route/144033186',
          quality: '',
          name: "Zac's Highball",
          ascents: 'Relative popularity (0) - 1 ascent',
          description:
            "Start up just right of 'Summer Night City' and move right through a series of two finger pockets before finishing at an obvious jug above 'The House With No Steps' with a fern stuck in it.",
          imageSrc: undefined,
          relativePath: undefined
        }
      ]
    },
    {
      id: '6554623794',
      slug: 'silent-bob-sector',
      title: 'Silent Bob Sector',
      description: '',
      imageSrc: new URL('@/assets/climbing/sissy-crag/sissy-crag-2.jpeg', import.meta.url).href,
      relativePath: new URL('@/assets/climbing/sissy-crag/sissy-crag-2.jpeg', import.meta.url).href,
      routes: [
        {
          id: '16',
          grade: 'V1',
          url: 'https://www.thecrag.com/en/climbing/australia/north-shore/route/13106659',
          quality: '51',
          name: 'Break To Break',
          ascents: 'Relative popularity (81) - 101 ascents',
          description: 'From the jug in the break right of SNC finish up to the slot.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '17',
          grade: 'V4',
          url: 'https://www.thecrag.com/en/climbing/australia/north-shore/route/13106467',
          quality: '65',
          name: 'The Traverse',
          ascents: 'Relative popularity (71) - 57 ascents',
          description:
            'Start on the far left rail and traverse all the way to the chin-up bar. Finishing with both hands matched.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '18',
          grade: 'V4',
          url: 'https://www.thecrag.com/en/climbing/australia/north-shore/route/13106707',
          quality: '51',
          name: 'Rigid Fist Up Bum',
          ascents: 'Relative popularity (74) - 67 ascents',
          description: '',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '19',
          grade: 'V4',
          url: 'https://www.thecrag.com/en/climbing/australia/north-shore/route/144033945',
          quality: '67',
          name: 'Rigid Fist Up Bum (HH)',
          ascents: 'Relative popularity (56) - 24 ascents',
          description: 'M1, L2, R3, L4, M4 ',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '20',
          grade: 'V5',
          url: 'https://www.thecrag.com/en/climbing/australia/north-shore/route/13106755',
          quality: '48',
          name: 'The House With No Steps',
          ascents: 'Relative popularity (60) - 28 ascents',
          description:
            "M4, R5, L6, L7 'Campus' problem. Hold the finish for a few seconds for the tick.",
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '21',
          grade: 'V7',
          url: 'https://www.thecrag.com/en/climbing/australia/north-shore/route/3334677933',
          quality: '67',
          name: 'High Up Over Yonder',
          ascents: 'Relative popularity (34) - 7 ascents',
          description: 'All the way to the top jug.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '22',
          grade: 'V7',
          url: 'https://www.thecrag.com/en/climbing/australia/north-shore/route/3334717122',
          quality: '',
          name: 'RFUB into HUOY',
          ascents: 'Relative popularity (0) - 1 ascent',
          description: 'Link rigid fist into HUOY by traversing along the ledge.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '23',
          grade: 'V7',
          url: 'https://www.thecrag.com/en/climbing/australia/north-shore/route/3334712370',
          quality: '',
          name: 'Jellyair',
          ascents: 'Relative popularity (0) - 1 ascent',
          description: 'Start as for rigid fist and link directly up into HUOY.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '24',
          grade: 'V10',
          url: 'https://www.thecrag.com/en/climbing/australia/north-shore/route/13106827',
          quality: '47',
          name: 'Bowels Of The Devil',
          ascents: 'Relative popularity (50) - 16 ascents',
          description: 'L0, R3, L4, R5, M5',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '25',
          grade: 'V12',
          url: 'https://www.thecrag.com/en/climbing/australia/north-shore/route/4349460528',
          quality: '',
          name: 'Bowels Of The Devil matched start',
          ascents: 'Relative popularity (0) - No  ascents',
          description:
            'Start matched on the sidepull, make a hard move right into the start position of Bowels. Was thought to be the actual start of Bowels.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '26',
          grade: 'V10',
          url: 'https://www.thecrag.com/en/climbing/australia/north-shore/route/2653247889',
          quality: '',
          name: 'Lucifer\u2019s Entrails',
          ascents: 'Relative popularity (0) - 1 ascent',
          description:
            'Bowels of the Devil finishing up For Sissies. Probably where BotD should have finished.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '27',
          grade: 'V11',
          url: 'https://www.thecrag.com/en/climbing/australia/north-shore/route/2695253787',
          quality: '',
          name: 'Fortuitous',
          ascents: 'Relative popularity (0) - 1 ascent',
          description: 'Start up Bowels of the Devil, finishing up The Solution of 1993.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '28',
          grade: 'V12',
          url: 'https://www.thecrag.com/en/climbing/australia/north-shore/route/2528396634',
          quality: '',
          name: 'Stretch',
          ascents: 'Relative popularity (12) - 2 ascents',
          description:
            'Same handholds as for Bowels of the Devil, but starting with a high right toehook. No dynamic movements or pads to cheat the start, just strict flexibility. Hard to grade.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '29',
          grade: 'V12',
          url: 'https://www.thecrag.com/en/climbing/australia/north-shore/route/2909928261',
          quality: '',
          name: 'Divisive',
          ascents: 'Relative popularity (0) - 1 ascent',
          description: 'Stretch finishing up For Sissies. No pads to cheat the start.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '30',
          grade: 'V10',
          url: 'https://www.thecrag.com/en/climbing/australia/north-shore/route/13106875',
          quality: '74',
          name: 'Silent Bob',
          ascents: 'Relative popularity (55) - 23 ascents',
          description: 'Start on the big hold. Often wet.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '31',
          grade: 'V9',
          url: 'https://www.thecrag.com/en/climbing/australia/north-shore/route/144033420',
          quality: '72',
          name: 'Silent Bob (HH)',
          ascents: 'Relative popularity (41) - 10 ascents',
          description: 'M1, R2, L3, M3, R4, L5, M5',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '32',
          grade: 'V10/11',
          url: 'https://www.thecrag.com/en/climbing/australia/north-shore/route/142122618',
          quality: '83',
          name: 'Silent Bob Extension',
          ascents: 'Relative popularity (12) - 2 ascents',
          description: 'Silent Bob into High Up Over Yonder.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '33',
          grade: 'V10',
          url: 'https://www.thecrag.com/en/climbing/australia/north-shore/route/2528402169',
          quality: '',
          name: 'Silent Bob Low',
          ascents: 'Relative popularity (19) - 3 ascents',
          description:
            'Start with one hand on the round blob in roof 1.5m back from jug and one hand on the jug. Smear hard and climb into Silent Bob.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '34',
          grade: 'V12',
          url: 'https://www.thecrag.com/en/climbing/australia/north-shore/route/6448830318',
          quality: '',
          name: 'Eye of the Beholder',
          ascents: 'Relative popularity (0) - 1 ascent',
          description:
            'Start as for Silent Bob Low, and climb directly out using the micro crimp skipping the whole of the wet rail for hands.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '35',
          grade: 'V5',
          url: 'https://www.thecrag.com/en/climbing/australia/north-shore/route/13106923',
          quality: '43',
          name: 'World War III',
          ascents: 'Relative popularity (58) - 27 ascents',
          description:
            "Traverse leftwards from the sloper next to the chin up bar and finish in the break above the 'Bowels Of The Devil' layaway. Stay below the good holds.",
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '36',
          grade: 'V5',
          url: 'https://www.thecrag.com/en/climbing/australia/north-shore/route/2909923362',
          quality: '48',
          name: 'For Sissies',
          ascents: 'Relative popularity (50) - 16 ascents',
          description:
            'Up Not for Sissies via the undercling. Easy if you\u2019re tall, nails if you\u2019re not.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '37',
          grade: 'V9',
          url: 'https://www.thecrag.com/en/climbing/australia/north-shore/route/144031635',
          quality: '60',
          name: 'Not for Sissies',
          ascents: 'Relative popularity (48) - 15 ascents',
          description:
            'Dyno - Either double or one handed. From the chin up bar (9) hurl yourelf to the obvious flat hold 7ft up. Get a good spot and watch the landing zone. The undercling is out.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '38',
          grade: 'V1',
          url: 'https://www.thecrag.com/en/climbing/australia/north-shore/route/13106971',
          quality: '',
          name: 'Blame 1',
          ascents: 'Relative popularity (63) - 36 ascents',
          description: 'No-foot. From a good slopey hold to the jug.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '39',
          grade: 'V2',
          url: 'https://www.thecrag.com/en/climbing/australia/north-shore/route/13107019',
          quality: '',
          name: 'Blame 2',
          ascents: 'Relative popularity (56) - 24 ascents',
          description: "Same as for 'Blame 1' but using the left hand in the pocket.",
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '40',
          grade: 'V3',
          url: 'https://www.thecrag.com/en/climbing/australia/north-shore/route/13107067',
          quality: '',
          name: 'Blame 3',
          ascents: 'Relative popularity (48) - 15 ascents',
          description:
            "Same as for 'Blame 2' except that the right hand is in the pocket instead of the left.",
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '41',
          grade: 'V4',
          url: 'https://www.thecrag.com/en/climbing/australia/north-shore/route/13107115',
          quality: '52',
          name: 'Souvalaki',
          ascents: 'Relative popularity (60) - 30 ascents',
          description:
            "Same as the 'Blame' trio but you start one hold lower matched on the undercling and can you use your feet.",
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '42',
          grade: 'V9',
          url: 'https://www.thecrag.com/en/climbing/australia/north-shore/route/2653212795',
          quality: '67',
          name: 'The Solution of 1993',
          ascents: 'Relative popularity (20) - 3 ascents',
          description:
            'Start on the pull-up jug and reverse The Problem of 1993. Once you reach the Dentalectomy holds, move up to the top of the seam (on the holds that are off for Dentalectomy) and traverse through the last 2 metres, finishing on the hold above the Dentalectomy slopers and start hold.',
          imageSrc: undefined,
          relativePath: undefined
        }
      ]
    },
    {
      id: '6554651799',
      slug: 'dentalectomy-sector',
      title: 'Dentalectomy Sector',
      description: 'From the slopey wave feature to the small arete feature.',
      imageSrc: new URL('@/assets/climbing/sissy-crag/sissy-crag-3.jpeg', import.meta.url).href,
      relativePath: new URL('@/assets/climbing/sissy-crag/sissy-crag-3.jpeg', import.meta.url).href,
      routes: [
        {
          id: '44',
          grade: 'V9',
          url: 'https://www.thecrag.com/en/climbing/australia/north-shore/route/217015701',
          quality: '72',
          name: 'The Problem of 1993',
          ascents: 'Relative popularity (44) - 12 ascents',
          description:
            'Start as for Dentalectomy and traverse left on pinches and slopers to finish on the chin up bar.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '45',
          grade: 'V6',
          url: 'https://www.thecrag.com/en/climbing/australia/north-shore/route/678793599',
          quality: '68',
          name: 'Dentalectomy Original Finish',
          ascents: 'Relative popularity (62) - 34 ascents',
          description:
            "As for 'Dentalectomy' but traverse left across the whole sloper rail and finish at the next jug.",
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '46',
          grade: 'V4',
          url: 'https://www.thecrag.com/en/climbing/australia/north-shore/route/13107163',
          quality: '62',
          name: 'Dentalectomy',
          ascents: 'Relative popularity (82) - 109 ascents',
          description: 'M1, L2, M2, L3, M3, L4, R5, M5',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '47',
          grade: 'V0',
          url: 'https://www.thecrag.com/en/climbing/australia/north-shore/route/4892171538',
          quality: '52',
          name: 'Bubbles',
          ascents: 'Relative popularity (62) - 34 ascents',
          description: 'Start as for WAIDH but go straight up to jug.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '48',
          grade: 'V2',
          url: 'https://www.thecrag.com/en/climbing/australia/north-shore/route/4892264361',
          quality: '54',
          name: 'Bubbles Sit Start',
          ascents: 'Relative popularity (51) - 18 ascents',
          description: 'Sit start to bubbles on low slopers.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '49',
          grade: 'V0',
          url: 'https://www.thecrag.com/en/climbing/australia/north-shore/route/4892174523',
          quality: '54',
          name: 'I\u2019m Here?',
          ascents: 'Relative popularity (57) - 26 ascents',
          description: 'Same as for WAIDH but finishing on higher rail.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '50',
          grade: 'V2',
          url: 'https://www.thecrag.com/en/climbing/australia/north-shore/route/4892262999',
          quality: '63',
          name: 'I\u2019m Here? Sit Start',
          ascents: 'Relative popularity (44) - 12 ascents',
          description: 'Sit start on slopers low down.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '51',
          grade: 'V0',
          url: 'https://www.thecrag.com/en/climbing/australia/north-shore/route/13107211',
          quality: '48',
          name: 'What Am I Doing Here?',
          ascents: 'Relative popularity (89) - 156 ascents',
          description: 'From the pocket, traverse right for a somewhat fun (but short) warm up.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '52',
          grade: 'V2',
          url: 'https://www.thecrag.com/en/climbing/australia/north-shore/route/4892269092',
          quality: '58',
          name: 'What Am I Doing Here? Sit Start',
          ascents: 'Relative popularity (37) - 8 ascents',
          description: 'Sit Start low down on slopers.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '53',
          grade: 'V4',
          url: 'https://www.thecrag.com/en/climbing/australia/north-shore/route/698940018',
          quality: '50',
          name: 'Wet Willy',
          ascents: 'Relative popularity (37) - 8 ascents',
          description:
            'From the Start jug of WAIDH, drop down onto the slopers and traverse right to the start holds of JOF. Reach up to the slopey pinch and then to the highest obvious finish hold directly above that. Alternatively, finish up JOF, but without an extra gold star for your refrigerator.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '54',
          grade: 'V5',
          url: 'https://www.thecrag.com/en/climbing/australia/north-shore/route/13107259',
          quality: '58',
          name: 'Just One Fix',
          ascents: 'Relative popularity (41) - 10 ascents',
          description:
            'Up the slopey features, past the two finger pocket to finish above the warm up start holds. Plenty of eliminates.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '55',
          grade: 'V2',
          url: 'https://www.thecrag.com/en/climbing/australia/north-shore/route/5280798897',
          quality: '67',
          name: 'Zoom zoom',
          ascents: 'Relative popularity (0) - 1 ascent',
          description:
            'Start on the juggy pocket, traverse across finishing on the starting hold of \u2018What Am I Doing Here\u2019',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '56',
          grade: 'V6',
          url: 'https://www.thecrag.com/en/climbing/australia/north-shore/route/13107307',
          quality: '64',
          name: 'Gladheateher',
          ascents: 'Relative popularity (63) - 34 ascents',
          description: 'From a jug down low, go right and up the short arete.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '57',
          grade: 'V5',
          url: 'https://www.thecrag.com/en/climbing/australia/north-shore/route/13107355',
          quality: '50',
          name: 'Gladheateher variant',
          ascents: 'Relative popularity (43) - 11 ascents',
          description: "Same as for 'Gladheateher' but skip the arete and dyno instead.",
          imageSrc: undefined,
          relativePath: undefined
        }
      ]
    },
    {
      id: '6554659107',
      slug: 'mr-smiley-sector',
      title: 'Mr Smiley Sector',
      description:
        'Horizontal roof section with some classic easier problems and the must-do Mr. Smiley.',
      imageSrc: new URL('@/assets/climbing/sissy-crag/sissy-crag-4.jpeg', import.meta.url).href,
      relativePath: new URL('@/assets/climbing/sissy-crag/sissy-crag-4.jpeg', import.meta.url).href,
      routes: [
        {
          id: '59',
          grade: 'V3',
          url: 'https://www.thecrag.com/en/climbing/australia/north-shore/route/13107403',
          quality: '56',
          name: 'Jerk Off',
          ascents: 'Relative popularity (72) - 59 ascents',
          description:
            "1,2,7,3,4.\nStart on the low jug at the bottom of the little arete, head right through the underclings and into 'Bill Smith'.",
          imageSrc: new URL('@/assets/climbing/sissy-crag/sissy-crag-5.jpeg', import.meta.url).href,
          relativePath: new URL('@/assets/climbing/sissy-crag/sissy-crag-5.jpeg', import.meta.url)
            .href
        },
        {
          id: '60',
          grade: 'V6',
          url: 'https://www.thecrag.com/en/climbing/australia/north-shore/route/13107451',
          quality: '67',
          name: 'Tell Someone Who Cares',
          ascents: 'Relative popularity (45) - 13 ascents',
          description:
            "1,2,3,4\nA variant of 'Jerk Off'. From the underclings, go directly to 'Bill Smith' second to last hold. Easier for the tall.",
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '61',
          grade: 'V2',
          url: 'https://www.thecrag.com/en/climbing/australia/north-shore/route/13107499',
          quality: '50',
          name: "Dry Reachin'",
          ascents: 'Relative popularity (62) - 34 ascents',
          description: '2, 7 (on previous topo)',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '62',
          grade: 'V1',
          url: 'https://www.thecrag.com/en/climbing/australia/north-shore/route/13107547',
          quality: '66',
          name: 'Bill Smith',
          ascents: 'Relative popularity (100) - 299 ascents',
          description: 'M5, R6, M6, R7, L3, R4, M4',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '63',
          grade: 'V8',
          url: 'https://www.thecrag.com/en/climbing/australia/north-shore/route/13107595',
          quality: '67',
          name: 'Buffallo Bill',
          ascents: 'Relative popularity (20) - 3 ascents',
          description:
            "Start as for 'Bill Smith' but from the huge jug (7) Dyno rightwards to the hold left of Mr Smiley's finish (with the little fern poking out)",
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '64',
          grade: 'V1',
          url: 'https://www.thecrag.com/en/climbing/australia/north-shore/route/13107643',
          quality: '61',
          name: 'Blinky Bill',
          ascents: 'Relative popularity (90) - 173 ascents',
          description:
            "From the elliptical hold in the back of the roof, move left into and finish up 'Bill Smith'.",
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '65',
          grade: 'V3',
          url: 'https://www.thecrag.com/en/climbing/australia/north-shore/route/7283560974',
          quality: '67',
          name: '1',
          ascents: 'Relative popularity (24) - 4 ascents',
          description: 'M8 9 7 3 M4',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '66',
          grade: 'V10/11',
          url: 'https://www.thecrag.com/en/climbing/australia/north-shore/route/3508721280',
          quality: '83',
          name: "Bubble O'Bill",
          ascents: 'Relative popularity (0) - 1 ascent',
          description:
            'Start on Elliptical jug of Blinky Bill, move directly out to the slot jug, grab any pocket and go big to the letterbox jug of Mr Smiley to finish as for Mr Smiley. Never done a move quite like this outside so hard to grade. Could be harder?',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '67',
          grade: 'V3',
          url: 'https://www.thecrag.com/en/climbing/australia/north-shore/route/13107691',
          quality: '69',
          name: 'Short Circuit',
          ascents: 'Relative popularity (75) - 71 ascents',
          description:
            "Start as for 'Bill Smith', reverse 'Blinky Bill', make a hard move from the start of Blinky Bill to the large slot in the roof, then move back left into the end of Bill Smith.",
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '68',
          grade: 'V3',
          url: 'https://www.thecrag.com/en/climbing/australia/north-shore/route/987503382',
          quality: '61',
          name: 'Circuit Jerk',
          ascents: 'Relative popularity (44) - 12 ascents',
          description:
            'Link Jerk Off into Short Circuit. A warm up pumper for the longer link ups.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '69',
          grade: 'V8',
          url: 'https://www.thecrag.com/en/climbing/australia/north-shore/route/678797607',
          quality: '78',
          name: 'The Curse',
          ascents: 'Relative popularity (25) - 4 ascents',
          description:
            'Start up Bill Smith, into Mr Smiley, into Foam and finish up Vitamin C or Vitamin X.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '70',
          grade: 'V5',
          url: 'https://www.thecrag.com/en/climbing/australia/north-shore/route/13107739',
          quality: '86',
          name: 'Mr Smiley',
          ascents: 'Relative popularity (91) - 171 ascents',
          description:
            'M1, R2, L3, R4, L5, M5, R6, M6 Start low and left with your right in the 3/4 finger pocket and lunge for the first hold. A classic although the start holds are often wet.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '71',
          grade: 'V7',
          url: 'https://www.thecrag.com/en/climbing/australia/north-shore/route/4254788523',
          quality: '67',
          name: 'Dr Smiley',
          ascents: 'Relative popularity (25) - 4 ascents',
          description: 'Campus Mr Smiley',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '72',
          grade: 'V7',
          url: 'https://www.thecrag.com/en/climbing/australia/north-shore/route/2498203329',
          quality: '56',
          name: 'Mr Smiley into Vitamin C',
          ascents: 'Relative popularity (48) - 15 ascents',
          description: 'Climb Mr Smiley across into Vitamin C or Vitamin X.',
          imageSrc: undefined,
          relativePath: undefined
        }
      ]
    },
    {
      id: '6554880597',
      slug: 'travis-sector',
      title: 'Travis Sector',
      description: 'The first of the orange scooped out sections right of the Mr. Smiley roof.',
      imageSrc: new URL('@/assets/climbing/sissy-crag/sissy-crag-6.jpeg', import.meta.url).href,
      relativePath: new URL('@/assets/climbing/sissy-crag/sissy-crag-6.jpeg', import.meta.url).href,
      routes: [
        {
          id: '74',
          grade: 'V4',
          url: 'https://www.thecrag.com/en/climbing/australia/north-shore/route/13107787',
          quality: '67',
          name: 'Foam',
          ascents: 'Relative popularity (89) - 159 ascents',
          description:
            "Start in the couple of pockets in the roof, explode out for the slope lip, up the prow and then continue on to finish - one of Sissy's highest problems. Classic!",
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '75',
          grade: 'V2',
          url: 'https://www.thecrag.com/en/climbing/australia/north-shore/route/13107835',
          quality: '55',
          name: 'Foam (variant)',
          ascents: 'Relative popularity (63) - 35 ascents',
          description:
            'Start as for Foam, and from slopey lip move left into Mr Smiley and then back right to the jug.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '76',
          grade: 'V6',
          url: 'https://www.thecrag.com/en/climbing/australia/north-shore/route/13107883',
          quality: '67',
          name: 'Millie',
          ascents: 'Relative popularity (58) - 27 ascents',
          description:
            "Link 'Mr Smiley' into Foam - the big jug is out (use 3 finger pocket next to it).",
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '77',
          grade: 'V6',
          url: 'https://www.thecrag.com/en/climbing/australia/north-shore/route/13107979',
          quality: '72',
          name: 'Vitamin C',
          ascents: 'Relative popularity (84) - 120 ascents',
          description: 'M1, R2, M2, R3, M3, R4, M4, R5, M5',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '78',
          grade: 'V5',
          url: 'https://www.thecrag.com/en/climbing/australia/north-shore/route/13107931',
          quality: '69',
          name: 'Vitamin C var',
          ascents: 'Relative popularity (55) - 22 ascents',
          description:
            'As for Vitamin C but go RH to the triangle instead of matching the high rail. No heels.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '79',
          grade: 'V6',
          url: 'https://www.thecrag.com/en/climbing/australia/north-shore/route/13108027',
          quality: '73',
          name: 'Vitamin X',
          ascents: 'Relative popularity (51) - 17 ascents',
          description: 'Same as Vitamin C, but eliminate hold 3.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '80',
          grade: 'V6',
          url: 'https://www.thecrag.com/en/climbing/australia/north-shore/route/13108075',
          quality: '60',
          name: "I've Got My Tie On",
          ascents: 'Relative popularity (49) - 16 ascents',
          description:
            "Just like 'Hands Off My Detonator' except that you start with a heel hook over left.",
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '81',
          grade: 'V8',
          url: 'https://www.thecrag.com/en/climbing/australia/north-shore/route/13108123',
          quality: '86',
          name: 'Hands Off My Detonator',
          ascents: 'Relative popularity (59) - 29 ascents',
          description: 'L6, R7, R8, L9, R10, L4, R5, M5 ',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '82',
          grade: 'V10',
          url: 'https://www.thecrag.com/en/climbing/australia/north-shore/route/144033555',
          quality: '100',
          name: 'Re-Detonated',
          ascents: 'Relative popularity (41) - 10 ascents',
          description:
            "Start from the crimpy underclings (as for 'Spooged') and link into 'Hands Off My Detonator'",
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '83',
          grade: 'V10',
          url: 'https://www.thecrag.com/en/climbing/australia/north-shore/route/678804690',
          quality: '',
          name: 'Detonator Foot Free',
          ascents: 'Relative popularity (0) - 1 ascent',
          description:
            'Hands Off My Detonator. Campussing.\n2 known ascents. Sharik Walker 2nd ascent.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '84',
          grade: 'V11',
          url: 'https://www.thecrag.com/en/climbing/australia/north-shore/route/682535991',
          quality: '72',
          name: 'Sisstamatic',
          ascents: 'Relative popularity (35) - 7 ascents',
          description: 'Start Redetonated, reverse Mr Smiley and finish up Bill Smith.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '85',
          grade: 'V10',
          url: 'https://www.thecrag.com/en/climbing/australia/north-shore/route/13108171',
          quality: '83',
          name: 'Redetonate the Roof Mix',
          ascents: 'Relative popularity (29) - 5 ascents',
          description: 'Low start to Hands Off My Detonator.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '86',
          grade: 'V8',
          url: 'https://www.thecrag.com/en/climbing/australia/north-shore/route/13108225',
          quality: '',
          name: 'Clancy',
          ascents: 'Relative popularity (0) - 1 ascent',
          description: '\nFA: Matt Gugel',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '87',
          grade: 'V7',
          url: 'https://www.thecrag.com/en/climbing/australia/north-shore/route/13108279',
          quality: '81',
          name: 'Travis',
          ascents: 'Relative popularity (74) - 66 ascents',
          description:
            "M11, L12, L10, R4, L13, M13 Another classic. Everyone has their own favourite beta, but good footwork is the key. (Becomes 'Mavis' V8 if both pinches are held before gaining edge 10- 'Contrived' and hard)",
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '88',
          grade: 'V8',
          url: 'https://www.thecrag.com/en/climbing/australia/north-shore/route/13108489',
          quality: '71',
          name: 'Mavis',
          ascents: 'Relative popularity (52) - 19 ascents',
          description:
            "The same as 'Travis' except both slopey pinches must be held before gaining the edge. Contrived but good.",
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '89',
          grade: 'V10',
          url: 'https://www.thecrag.com/en/climbing/australia/north-shore/route/13108327',
          quality: '77',
          name: 'Spooged',
          ascents: 'Relative popularity (50) - 17 ascents',
          description:
            "Sit start to Travis starting from a matched crimpy undercling under the roof (same as for 'Re-Detonated').",
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '90',
          grade: 'V8',
          url: 'https://www.thecrag.com/en/climbing/australia/north-shore/route/3334724979',
          quality: '',
          name: 'Spooged Into Mr. Smiley',
          ascents: 'Relative popularity (0) - 1 ascent',
          description: '',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '91',
          grade: 'V11',
          url: 'https://www.thecrag.com/en/climbing/australia/north-shore/route/672951570',
          quality: '67',
          name: 'Spooge Makes Mr Bill Travis Foam And Smile Backwards',
          ascents: 'Relative popularity (12) - 2 ascents',
          description:
            'Start up Spooged, reverse Foam, reverse Mr Smiley and finish up Bill Smith.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '92',
          grade: 'V8',
          url: 'https://www.thecrag.com/en/climbing/australia/north-shore/route/13108435',
          quality: '67',
          name: 'Buge',
          ascents: 'Relative popularity (29) - 5 ascents',
          description:
            'From the big flat hold just right of Travis Start move to the undercut just left of the Havana Pinch and pop to the sloper just right of the Detonator finish.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '93',
          grade: 'V10',
          url: 'https://www.thecrag.com/en/climbing/australia/north-shore/route/13108381',
          quality: '',
          name: 'Regurgitating Buge with Cheese',
          ascents: 'Relative popularity (0) - 1 ascent',
          description: '\nFA: Sharik Walker',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '94',
          grade: 'V9',
          url: 'https://www.thecrag.com/en/climbing/australia/north-shore/route/681857778',
          quality: '67',
          name: 'Havana Low',
          ascents: 'Relative popularity (29) - 5 ascents',
          description: 'Start as for Spooged and finish up Our Man From Havana.',
          imageSrc: undefined,
          relativePath: undefined
        }
      ]
    },
    {
      id: '6554960937',
      slug: 'the-pillar-sector',
      title: 'The Pillar Sector',
      description: 'The Pillar-like feature at head height separating the scooped out sections.',
      imageSrc: new URL('@/assets/climbing/sissy-crag/sissy-crag-7.jpeg', import.meta.url).href,
      relativePath: new URL('@/assets/climbing/sissy-crag/sissy-crag-7.jpeg', import.meta.url).href,
      routes: [
        {
          id: '96',
          grade: 'V7',
          url: 'https://www.thecrag.com/en/climbing/australia/north-shore/route/13108537',
          quality: '74',
          name: 'Our Man From Havana',
          ascents: 'Relative popularity (77) - 80 ascents',
          description: 'M1, R2, R3, L4, M4',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '97',
          grade: 'V1',
          url: 'https://www.thecrag.com/en/climbing/australia/north-shore/route/13108585',
          quality: '62',
          name: 'The Pillar',
          ascents: 'Relative popularity (94) - 211 ascents',
          description: 'M5, R6, L3, R7, L8, M8',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '98',
          grade: 'V5',
          url: 'https://www.thecrag.com/en/climbing/australia/north-shore/route/13108633',
          quality: '67',
          name: 'The Mind Is A Terrible Thing To Taste',
          ascents: 'Relative popularity (63) - 35 ascents',
          description:
            "A variant of 'The Pillar' but without using feet. Start on the two positive crimps on the lip and then 1,6,3,7,8",
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '99',
          grade: 'V7',
          url: 'https://www.thecrag.com/en/climbing/australia/north-shore/route/13108681',
          quality: '67',
          name: 'Homicidal Fly By',
          ascents: 'Relative popularity (39) - 9 ascents',
          description:
            "Same as 'The Mind Is a Terrible Thing To Taste' but no matching in the break. Foot-Free problem!",
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '100',
          grade: 'V2',
          url: 'https://www.thecrag.com/en/climbing/australia/north-shore/route/13108729',
          quality: '57',
          name: 'Copo Cabana',
          ascents: 'Relative popularity (89) - 161 ascents',
          description: 'Right side of the pillar to a high finish on the pebbly jug. Pretty good.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '101',
          grade: 'V5',
          url: 'https://www.thecrag.com/en/climbing/australia/north-shore/route/13108777',
          quality: '52',
          name: 'Bongo Slap',
          ascents: 'Relative popularity (57) - 25 ascents',
          description: 'No feet problem traversing left to right along the slopey break.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '102',
          grade: 'V7',
          url: 'https://www.thecrag.com/en/climbing/australia/north-shore/route/13108831',
          quality: '67',
          name: 'Stormtrooper',
          ascents: 'Relative popularity (57) - 25 ascents',
          description:
            "Up right of the pillar just avoiding it's juggy flake. Aim for the good pocket. Frustrating!",
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '103',
          grade: 'V7',
          url: 'https://www.thecrag.com/en/climbing/australia/north-shore/route/626021787',
          quality: '67',
          name: 'Rebel Scum',
          ascents: 'Relative popularity (43) - 11 ascents',
          description: 'M9, L10, R11, R12, M12.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '104',
          grade: 'V7',
          url: 'https://www.thecrag.com/en/climbing/australia/north-shore/route/678821181',
          quality: '53',
          name: 'Rebels Cum',
          ascents: 'Relative popularity (41) - 10 ascents',
          description:
            'As for Rebel Scum but don\'t use the right hand undercut. Apparently "easier" than using it......',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '105',
          grade: 'V10',
          url: 'https://www.thecrag.com/en/climbing/australia/north-shore/route/13108885',
          quality: '67',
          name: 'Sista Soulja',
          ascents: 'Relative popularity (33) - 6 ascents',
          description:
            "Start on the ultra slopey sloper just above the lip. Move up to the next slopey rail, then left to the right-leaning slopey rail then straight up. As is the case with sissy, this was FA'd as a no-heel-hook climb. V7-8 if you use your heels.",
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '106',
          grade: 'V8',
          url: 'https://www.thecrag.com/en/climbing/australia/north-shore/route/142121946',
          quality: '',
          name: 'Vietnamese Porn',
          ascents: 'Relative popularity (0) - No  ascents',
          description:
            "Start at the back of the little cave and follow the obvious line of edges to join and finish up 'Sista Soulja'. Heels are in.",
          imageSrc: undefined,
          relativePath: undefined
        }
      ]
    },
    {
      id: '6555952029',
      slug: 'verboten-sector',
      title: 'Verboten Sector',
      description: 'Scooped out orange section right of The Pillar.',
      imageSrc: new URL('@/assets/climbing/sissy-crag/sissy-crag-8.jpeg', import.meta.url).href,
      relativePath: new URL('@/assets/climbing/sissy-crag/sissy-crag-8.jpeg', import.meta.url).href,
      routes: [
        {
          id: '108',
          grade: 'V3',
          url: 'https://www.thecrag.com/en/climbing/australia/north-shore/route/13108933',
          quality: '54',
          name: 'Moustaffa',
          ascents: 'Relative popularity (82) - 106 ascents',
          description: 'M1, R3, M4',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '109',
          grade: 'V3',
          url: 'https://www.thecrag.com/en/climbing/australia/north-shore/route/13108981',
          quality: '64',
          name: 'Verboten',
          ascents: 'Relative popularity (86) - 137 ascents',
          description: 'M1, R2, L3, R4, M4',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '110',
          grade: 'V4',
          url: 'https://www.thecrag.com/en/climbing/australia/north-shore/route/2695020108',
          quality: '64',
          name: 'Granny Verboto',
          ascents: 'Relative popularity (50) - 17 ascents',
          description:
            'Eliminate, but quite fun. Same as Moustaffa but instead of grabbing the ear with your right hand reach a little higher and use a pinch (the ear is off).',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '111',
          grade: 'V6',
          url: 'https://www.thecrag.com/en/climbing/australia/north-shore/route/13109029',
          quality: '61',
          name: 'Liveline',
          ascents: 'Relative popularity (51) - 18 ascents',
          description:
            'Start on the big sloper (1) and gain the tiny sloper edge left of the ear (3) with your right, then make a big move to finish on (4). All other holds are off.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '112',
          grade: 'V5',
          url: 'https://www.thecrag.com/en/climbing/australia/north-shore/route/13109077',
          quality: '65',
          name: 'Go Granny Go',
          ascents: 'Relative popularity (55) - 23 ascents',
          description:
            'Grab the edge with your right hand, the little slope with your left and then the top with your right hand. Watch the superman swing!',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '113',
          grade: 'V4',
          url: 'https://www.thecrag.com/en/climbing/australia/north-shore/route/13109125',
          quality: '46',
          name: 'Go Granny Slow',
          ascents: 'Relative popularity (50) - 17 ascents',
          description:
            'Variant to Go Granny Go - put your feet out over right and spoil all the fun',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '114',
          grade: 'V7',
          url: 'https://www.thecrag.com/en/climbing/australia/north-shore/route/144031974',
          quality: '71',
          name: 'I Do, I Do, I Do, I Do',
          ascents: 'Relative popularity (53) - 19 ascents',
          description:
            'Start in the roof on the two low slopey pinches, out to the good edge (2) and then blast to the shared finish hold (4). Everything else is off limits.',
          imageSrc: undefined,
          relativePath: undefined
        }
      ]
    },
    {
      id: '6556715340',
      slug: 'nuclear-winter-sector',
      title: 'Nuclear Winter Sector',
      description: '',
      imageSrc: new URL('@/assets/climbing/sissy-crag/sissy-crag-9.jpeg', import.meta.url).href,
      relativePath: new URL('@/assets/climbing/sissy-crag/sissy-crag-9.jpeg', import.meta.url).href,
      routes: [
        {
          id: '116',
          grade: 'V7',
          url: 'https://www.thecrag.com/en/climbing/australia/north-shore/route/13109227',
          quality: '58',
          name: 'New World Order',
          ascents: 'Relative popularity (37) - 8 ascents',
          description: '1,3,11,13,4,9 (on the next topo)',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '117',
          grade: 'V6',
          url: 'https://www.thecrag.com/en/climbing/australia/north-shore/route/13109275',
          quality: '83',
          name: 'Pants Off',
          ascents: 'Relative popularity (32) - 6 ascents',
          description:
            "Start off the two thin edges on the right side of the scoop, crimp your way up avoiding any of the holds on 'The Edge Ladder'. (use a tiny right of the triangle edge).",
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '118',
          grade: 'V4',
          url: 'https://www.thecrag.com/en/climbing/australia/north-shore/route/13109323',
          quality: '67',
          name: 'Pants On',
          ascents: 'Relative popularity (32) - 6 ascents',
          description: 'Historical.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '119',
          grade: 'V2 - 4',
          url: 'https://www.thecrag.com/en/climbing/australia/north-shore/route/13109371',
          quality: '69',
          name: 'The Edge Ladder',
          ascents: 'Relative popularity (61) - 32 ascents',
          description:
            'An original classic of Sissy that suffered damage when someone decided to smash off holds 8 and 10 in 2007.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '120',
          grade: 'V4',
          url: 'https://www.thecrag.com/en/climbing/australia/north-shore/route/13109467',
          quality: '67',
          name: 'Hotel California',
          ascents: 'Relative popularity (48) - 15 ascents',
          description: 'Historical.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '121',
          grade: 'V4',
          url: 'https://www.thecrag.com/en/climbing/australia/north-shore/route/13109707',
          quality: '66',
          name: 'Nuclear winter',
          ascents: 'Relative popularity (76) - 78 ascents',
          description: 'L1, R2, R3, L4, R5, M5',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '122',
          grade: 'V3',
          url: 'https://www.thecrag.com/en/climbing/australia/north-shore/route/13109515',
          quality: '52',
          name: 'Nic',
          ascents: 'Relative popularity (60) - 31 ascents',
          description: '6,3,8,9,5\nFrom the big, flat edge, go up using good edge. Very Nice.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '123',
          grade: 'V4',
          url: 'https://www.thecrag.com/en/climbing/australia/north-shore/route/13109419',
          quality: '56',
          name: 'Nicky',
          ascents: 'Relative popularity (47) - 14 ascents',
          description:
            "Start as for 'Nic' and traverse into the start of 'The Edge Ladder' and finish as for The Edge Ladder. Heel hooks are allowed.",
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '124',
          grade: 'V6',
          url: 'https://www.thecrag.com/en/climbing/australia/north-shore/route/13109563',
          quality: '70',
          name: 'Nicole',
          ascents: 'Relative popularity (64) - 38 ascents',
          description:
            "Start on (6) move left to holds (3),(2) and (1) gain the triangle crimp on the Edge Ladder, make a cool move across the scoop to the good edge of 'Verboten' and finish as for 'Verboten'. AS AT 16/1/07 - This problem has been damaged with the triangle hold of the Edge Ladder being smashed off. It has been reclimbed at around V6!!",
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '125',
          grade: 'V4',
          url: 'https://www.thecrag.com/en/climbing/australia/north-shore/route/13109659',
          quality: '63',
          name: 'Time Warp',
          ascents: 'Relative popularity (55) - 22 ascents',
          description: "Link the start of 'Nic' into the end of 'The Edge Ladder'.",
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '126',
          grade: 'V4',
          url: 'https://www.thecrag.com/en/climbing/australia/north-shore/route/13109773',
          quality: '67',
          name: 'All Guns Blazing',
          ascents: 'Relative popularity (70) - 54 ascents',
          description:
            'L6, R7, L8, L9, R10, M10\nFrom big flat edge, use a good right hand hold and do a big move to the top. Get a swing going.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '127',
          grade: 'V6',
          url: 'https://www.thecrag.com/en/climbing/australia/north-shore/route/13109821',
          quality: '83',
          name: 'Heavens Gate',
          ascents: 'Relative popularity (71) - 57 ascents',
          description:
            "M11, R12, L7, R6, M6, R3, L4, R5, M5\nHard first move but it's worth it!\nNot listed in sydney bouldering Guide, but in online guide @ Australian Bouldering.",
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '128',
          grade: 'V7',
          url: 'https://www.thecrag.com/en/climbing/australia/north-shore/route/2695016535',
          quality: '83',
          name: "A Blitzkrieg of Nicole's Gate",
          ascents: 'Relative popularity (25) - 4 ascents',
          description:
            "Link the start of Heaven's Gate/Blitzkrieg into Nicole. Estimated grade, assume it's been done as it's Sissy and everything has been done",
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '129',
          grade: 'V10',
          url: 'https://www.thecrag.com/en/climbing/australia/north-shore/route/13109899',
          quality: '92',
          name: 'Steve Austin',
          ascents: 'Relative popularity (49) - 16 ascents',
          description:
            'Whilst made to look easy by some, this climb can be bicep destroying. Bring out your big guns. ',
          imageSrc: new URL('@/assets/climbing/sissy-crag/sissy-crag-10.jpeg', import.meta.url)
            .href,
          relativePath: new URL('@/assets/climbing/sissy-crag/sissy-crag-10.jpeg', import.meta.url)
            .href
        },
        {
          id: '130',
          grade: 'V8/9',
          url: 'https://www.thecrag.com/en/climbing/australia/north-shore/route/4738377591',
          quality: '50',
          name: 'Steve Austin Variants',
          ascents: 'Relative popularity (20) - 3 ascents',
          description:
            'Any version of Steve Austin that doesn\u2019t involve left hand on the undercling as per FA sequence.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '131',
          grade: 'V10',
          url: 'https://www.thecrag.com/en/climbing/australia/north-shore/route/1247795235',
          quality: '83',
          name: 'Sonic Boom',
          ascents: 'Relative popularity (13) - 2 ascents',
          description: 'Climb Steve Austin then reverse Burst and finish on the jug.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '132',
          grade: 'V7',
          url: 'https://www.thecrag.com/en/climbing/australia/north-shore/route/13109947',
          quality: '72',
          name: 'Rampage',
          ascents: 'Relative popularity (48) - 15 ascents',
          description:
            "From the starting pockets of 'Mike's Five', move left into a set of underclings and straight up to finish on the jug, without using the two finger pocket. Hard.",
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '133',
          grade: 'V5',
          url: 'https://www.thecrag.com/en/climbing/australia/north-shore/route/13109995',
          quality: '69',
          name: "Mike's Five",
          ascents: 'Relative popularity (84) - 121 ascents',
          description: 'M7,L8,R9,L10,R11,L12,M12',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '134',
          grade: 'V6',
          url: 'https://www.thecrag.com/en/climbing/australia/north-shore/route/13110043',
          quality: '60',
          name: 'Depth Charge',
          ascents: 'Relative popularity (67) - 46 ascents',
          description: "'Mike's Five' eliminating the nasty two finger pocket.",
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '135',
          grade: 'V7',
          url: 'https://www.thecrag.com/en/climbing/australia/north-shore/route/13110091',
          quality: '71',
          name: 'Burst',
          ascents: 'Relative popularity (44) - 12 ascents',
          description:
            'R10,L13,R14,L15,M15,L16,M16,L6,M6. The jug in the break is out. Very good sloper traverse. Another to save for a cold day.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '136',
          grade: 'V8',
          url: 'https://www.thecrag.com/en/climbing/australia/north-shore/route/13110139',
          quality: '92',
          name: 'Bursting',
          ascents: 'Relative popularity (25) - 4 ascents',
          description: "Link 'Mike's Five' into 'Burst'. Tough but good. Jug in the break is out.",
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '137',
          grade: 'V10',
          url: 'https://www.thecrag.com/en/climbing/australia/north-shore/route/678829713',
          quality: '',
          name: 'Bursting Footless',
          ascents: 'Relative popularity (0) - No  ascents',
          description: 'Bursting campussing. Yes, thats right. No jug as for usual Bursting rules.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '138',
          grade: 'V7',
          url: 'https://www.thecrag.com/en/climbing/australia/north-shore/route/1247789775',
          quality: '',
          name: 'Reversed',
          ascents: 'Relative popularity (12) - 2 ascents',
          description: 'Climb burst from left to right finishing on the jug.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '139',
          grade: 'V5',
          url: 'https://www.thecrag.com/en/climbing/australia/north-shore/route/13110187',
          quality: '50',
          name: 'John',
          ascents: 'Relative popularity (20) - 3 ascents',
          description:
            'Just right of the pockets on Mikes Five is a long not-so good-hold in a little scoop. Start from this and move up and rightwards through an assortment of bad holds to finish in the break where the vegetation grows.',
          imageSrc: undefined,
          relativePath: undefined
        }
      ]
    },
    {
      id: '6556728402',
      slug: 'too-sexy-sector',
      title: 'Too Sexy Sector',
      description: 'Last section of wall before the plateau drops off.',
      imageSrc: new URL('@/assets/climbing/sissy-crag/sissy-crag-11.jpeg', import.meta.url).href,
      relativePath: new URL('@/assets/climbing/sissy-crag/sissy-crag-11.jpeg', import.meta.url)
        .href,
      routes: [
        {
          id: '141',
          grade: 'V7',
          url: 'https://www.thecrag.com/en/climbing/australia/north-shore/route/3334728441',
          quality: '67',
          name: 'Too Long To Lick Variant',
          ascents: 'Relative popularity (24) - 4 ascents',
          description: 'Traverse left and then to top hold with ferns sticking out.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '142',
          grade: 'V4',
          url: 'https://www.thecrag.com/en/climbing/australia/north-shore/route/13110235',
          quality: '67',
          name: 'Too Long To Lick',
          ascents: 'Relative popularity (59) - 29 ascents',
          description:
            'Start matched on undercut approx 2m right of John and move up to a good jug.\n  Peter',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '143',
          grade: 'V3',
          url: 'https://www.thecrag.com/en/climbing/australia/north-shore/route/13110283',
          quality: '60',
          name: "I'm Too Sexy For My Cat",
          ascents: 'Relative popularity (74) - 67 ascents',
          description:
            'Start matched on the slopey legde 1m or so right of TLTL and move up through the pockets on the right before moving left to the jug on TLTL.',
          imageSrc: new URL('@/assets/climbing/sissy-crag/sissy-crag-12.jpeg', import.meta.url)
            .href,
          relativePath: new URL('@/assets/climbing/sissy-crag/sissy-crag-12.jpeg', import.meta.url)
            .href
        },
        {
          id: '144',
          grade: 'V3',
          url: 'https://www.thecrag.com/en/climbing/australia/north-shore/route/589008756',
          quality: '68',
          name: 'Hookuna Toetata',
          ascents: 'Relative popularity (77) - 82 ascents',
          description:
            'Start with both hands on the prominent cling. Rawr your way backwards. Commit your paw to the toe hook and pull yourself over the lip. Finish off by matching on the top ledge.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '145',
          grade: 'V0',
          url: 'https://www.thecrag.com/en/climbing/australia/north-shore/route/13110331',
          quality: '53',
          name: "I'm Too Sexy By Far",
          ascents: 'Relative popularity (79) - 91 ascents',
          description:
            "Start below 'The Sexy Wall Traverse' and undercling out the roof, straight up through the huge pockets. Can be done footless at V2",
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '146',
          grade: 'V2',
          url: 'https://www.thecrag.com/en/climbing/australia/north-shore/route/13110379',
          quality: '55',
          name: "I'm Too Sexy By Far variant",
          ascents: 'Relative popularity (71) - 58 ascents',
          description: "A no-foot variant of 'I'm too sexy by far'.",
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '147',
          grade: 'V4',
          url: 'https://www.thecrag.com/en/climbing/australia/north-shore/route/13110427',
          quality: '78',
          name: 'The Sexy Wall Traverse',
          ascents: 'Relative popularity (54) - 21 ascents',
          description:
            "Starting on huge pocket jugs on the lip approx 3m right of ITSFMC, traverse the wall rightwards finishing on the holds above Mikes Five. 'Excellent'",
          imageSrc: undefined,
          relativePath: undefined
        }
      ]
    },
    {
      id: '3785368572',
      slug: 'the-next-episode',
      title: 'The Next Episode',
      description:
        "Walk about 50m after the end of the first section of wall to find 'The Next Episode'.",
      imageSrc: new URL('@/assets/climbing/sissy-crag/sissy-crag-13.jpeg', import.meta.url).href,
      relativePath: new URL('@/assets/climbing/sissy-crag/sissy-crag-13.jpeg', import.meta.url)
        .href,
      routes: [
        {
          id: '149',
          grade: 'V6',
          url: 'https://www.thecrag.com/en/climbing/australia/north-shore/route/3741541011',
          quality: '',
          name: 'The Next Episode',
          ascents: 'Relative popularity (12) - 2 ascents',
          description:
            'If you\u2019re ever at Sissy crag and want to climb a new classic that actually tops out then give this one a shot! (We even made the landing nice and flat \ud83d\ude09).',
          imageSrc: undefined,
          relativePath: undefined
        }
      ]
    },
    {
      id: '3785374149',
      slug: 'bat-wing-cave',
      title: 'Bat Wing cave',
      description: 'Walk another 30m along the cliff to find this cave. You better like spiders!',
      imageSrc: new URL('@/assets/climbing/sissy-crag/sissy-crag-14.jpeg', import.meta.url).href,
      relativePath: new URL('@/assets/climbing/sissy-crag/sissy-crag-14.jpeg', import.meta.url)
        .href,
      routes: [
        {
          id: '151',
          grade: 'V3',
          url: 'https://www.thecrag.com/en/climbing/australia/north-shore/route/3437707608',
          quality: '61',
          name: 'Bat Wing',
          ascents: 'Relative popularity (35) - 7 ascents',
          description:
            'Start same for left side but going straight up and then right using huge undercling.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '152',
          grade: 'V5',
          url: 'https://www.thecrag.com/en/climbing/australia/north-shore/route/1135306158',
          quality: '50',
          name: 'Left Side',
          ascents: 'Relative popularity (41) - 10 ascents',
          description:
            'Sit start on the left on the flat ledge. Move right and out the roof via some good holds to finish on the jug rail.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '153',
          grade: 'V6',
          url: 'https://www.thecrag.com/en/climbing/australia/north-shore/route/1135306263',
          quality: '55',
          name: 'Left Side Extension',
          ascents: 'Relative popularity (41) - 10 ascents',
          description:
            'As for Left Side but keep heading right to finish on the jug on the face.\n  Peter',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '154',
          grade: 'V8',
          url: 'https://www.thecrag.com/en/climbing/australia/north-shore/route/13110475',
          quality: '',
          name: 'Pork Platter',
          ascents: 'Relative popularity (12) - 2 ascents',
          description:
            'From the back of the cave, follow crappy holds and head out the roof to a big flake to finish on the jug over the lip.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '155',
          grade: 'V9',
          url: 'https://www.thecrag.com/en/climbing/australia/north-shore/route/13110523',
          quality: '',
          name: 'Pulling Little Boys Off',
          ascents: 'Relative popularity (0) - 1 ascent',
          description:
            'Start with a left hand on the horn in the roof and a right hand pinching the lip above it. Keep going right.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '156',
          grade: 'V5',
          url: 'https://www.thecrag.com/en/climbing/australia/north-shore/route/768155412',
          quality: '',
          name: "Relic from the 90's",
          ascents: 'Relative popularity (12) - 2 ascents',
          description:
            'From the finishing hold of Pork Platter make two nice moves out the roof to the feature, then two tough moves up and to the right, then finish on the obvious jug in the break.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '157',
          grade: '{UK} E1 - 4 6A - C',
          url: 'https://www.thecrag.com/en/climbing/australia/north-shore/route/13110643',
          quality: '83',
          name: 'Slabia Minora',
          ascents: 'Relative popularity (32) - 6 ascents',
          description:
            'Line up right side of slab. Start over ankle breaking rock up faint groove to join edges that increase in size with height.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '158',
          grade: 'V10',
          url: 'https://www.thecrag.com/en/climbing/australia/north-shore/route/144032106',
          quality: '',
          name: 'Buge Re-gurgitated',
          ascents: 'Relative popularity (0) - No  ascents',
          description: 'Link into and finish up Buge.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '159',
          grade: 'V6',
          url: 'https://www.thecrag.com/en/climbing/australia/north-shore/route/144032274',
          quality: '',
          name: 'Unknown',
          ascents: 'Relative popularity (0) - No  ascents',
          description: '1,2,10,11,12',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '160',
          grade: 'V0',
          url: 'https://www.thecrag.com/en/climbing/australia/north-shore/route/144033732',
          quality: '50',
          name: 'Warm Up',
          ascents: 'Relative popularity (25) - 4 ascents',
          description: 'M1, L2, R3, L4, M4',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '161',
          grade: 'V3',
          url: 'https://www.thecrag.com/en/climbing/australia/north-shore/route/144034074',
          quality: '',
          name: 'Funky Mantle',
          ascents: 'Relative popularity (13) - 2 ascents',
          description:
            'Using holds (4) and (9) and a small undercut/sidepull on the back wall, mantle into and sit in the scoop. Probably been done many times before.',
          imageSrc: undefined,
          relativePath: undefined
        }
      ]
    },
    {
      id: '6568134783',
      slug: 'bolted-sport-routes',
      title: 'Bolted Sport Routes',
      description: 'There are a handful of short bolted routes along the first section of cave.',
      imageSrc: undefined,
      relativePath: undefined,
      routes: [
        {
          id: '163',
          grade: '28',
          url: 'https://www.thecrag.com/en/climbing/australia/north-shore/route/13105951',
          quality: '',
          name: 'A',
          ascents: 'Relative popularity (13) - 2 ascents',
          description: '',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '164',
          grade: '26',
          url: 'https://www.thecrag.com/en/climbing/australia/north-shore/route/13105999',
          quality: '',
          name: 'B',
          ascents: 'Relative popularity (0) - No  ascents',
          description: '',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '165',
          grade: '25',
          url: 'https://www.thecrag.com/en/climbing/australia/north-shore/route/13106047',
          quality: '80',
          name: 'C',
          ascents: 'Relative popularity (40) - 10 ascents',
          description:
            'This is the route that starts at V0 "What am I doing here?" - 4 U-Bolts + Anchors.',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '166',
          grade: '23',
          url: 'https://www.thecrag.com/en/climbing/australia/north-shore/route/13106101',
          quality: '',
          name: 'D',
          ascents: 'Relative popularity (0) - No  ascents',
          description: '',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '167',
          grade: '22',
          url: 'https://www.thecrag.com/en/climbing/australia/north-shore/route/13106155',
          quality: '',
          name: 'Vienna',
          ascents: 'Relative popularity (0) - 1 ascent',
          description: '',
          imageSrc: undefined,
          relativePath: undefined
        },
        {
          id: '168',
          grade: '21',
          url: 'https://www.thecrag.com/en/climbing/australia/north-shore/route/13106209',
          quality: '58',
          name: 'E',
          ascents: 'Relative popularity (12) - 2 ascents',
          description: '',
          imageSrc: undefined,
          relativePath: undefined
        }
      ]
    }
  ]
};
