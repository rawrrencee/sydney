<script setup lang="ts">
const climbingLocations = [
  {
    name: 'Cape Banks',
    subtitle: 'via Westpac Lifesaver Helicopter Base',
    href: '#',
    current: false,
    imageSrc: new URL('../assets/climbing/cape-banks.png', import.meta.url).href
  },
  {
    name: 'Queens Park',
    subtitle: 'via Victoria Park',
    href: '#',
    current: false,
    imageSrc: new URL('../assets/climbing/cape-banks.png', import.meta.url).href
  },
  {
    name: 'The Frontline, Balkans',
    subtitle: 'via 8 Larra Cres',
    href: '#',
    current: true,
    imageSrc: new URL('../assets/climbing/cape-banks.png', import.meta.url).href
  },
  {
    name: 'Black Cave',
    subtitle: 'via Beatty St',
    href: '#',
    current: false,
    imageSrc: new URL('../assets/climbing/cape-banks.png', import.meta.url).href
  },
  {
    name: 'Sissy Crag',
    subtitle: 'via Bridgeview Cres',
    href: '#',
    current: false,
    imageSrc: new URL('../assets/climbing/cape-banks.png', import.meta.url).href
  },
  {
    name: 'Lindfield Rocks',
    subtitle: 'via Tryon Road Tennis Courts',
    href: '#',
    current: false,
    imageSrc: new URL('../assets/climbing/cape-banks.png', import.meta.url).href
  }
];
</script>

<template>
  <div class="grid grid-cols-2 gap-x-4 gap-y-4 lg:grid-cols-3">
    <div
      v-for="(location, i) of climbingLocations"
      :key="i"
      class="group relative flex flex-col overflow-hidden rounded-lg bg-white shadow-md"
    >
      <div class="aspect-h-4 aspect-w-3 sm:aspect-none h-40 group-hover:opacity-75 sm:h-96">
        <img :src="location.imageSrc" class="h-full w-full object-cover object-center" />
      </div>
      <div class="flex flex-1 flex-col space-y-2 p-4">
        <h3 class="text-sm font-medium text-gray-900">
          <a :href="location.href">
            <span aria-hidden="true" class="absolute inset-0" />
            {{ location.name }}
          </a>
        </h3>
        <p class="text-sm text-gray-500">{{ location.subtitle }}</p>
      </div>
    </div>
  </div>
</template>
