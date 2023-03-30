<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel, TransitionRoot } from '@headlessui/vue';
import { ChevronUpIcon } from '@heroicons/vue/20/solid';

const climbingLocations = [
  {
    name: 'Cape Banks',
    subtitle: 'via Westpac Lifesaver Helicopter Base',
    href: '#',
    current: false,
    imageSrc:
      'https://raw.githubusercontent.com/rawrrencee/sydney/main/src/assets/climbing/cape-banks.png'
  },
  {
    name: 'Queens Park',
    subtitle: 'via Victoria Park',
    href: '#',
    current: false,
    imageSrc:
      'https://raw.githubusercontent.com/rawrrencee/sydney/main/src/assets/climbing/queens-park.png'
  },
  {
    name: 'The Frontline, Balkans',
    subtitle: 'via 8 Larra Cres',
    href: '#',
    current: true,
    imageSrc:
      'https://raw.githubusercontent.com/rawrrencee/sydney/main/src/assets/climbing/frontline.png'
  },
  {
    name: 'Black Cave',
    subtitle: 'via Beatty St',
    href: '#',
    current: false,
    imageSrc:
      'https://raw.githubusercontent.com/rawrrencee/sydney/main/src/assets/climbing/black-cave.png'
  },
  {
    name: 'Sissy Crag',
    subtitle: 'via Bridgeview Cres',
    href: '#',
    current: false,
    imageSrc:
      'https://raw.githubusercontent.com/rawrrencee/sydney/main/src/assets/climbing/sissy-crag.png'
  },
  {
    name: 'Lindfield Rocks',
    subtitle: 'via Tryon Road Tennis Courts',
    href: '#',
    current: false,
    imageSrc:
      'https://raw.githubusercontent.com/rawrrencee/sydney/main/src/assets/climbing/lindfield-rocks.png'
  }
];
</script>

<template>
  <div class="flex flex-col gap-2 rounded-lg bg-neutral-50 p-2 shadow-lg">
    <Disclosure as="div">
      <DisclosureButton
        class="flex w-full justify-between rounded-lg bg-indigo-100 px-4 py-2 text-left text-sm font-medium text-indigo-900 hover:bg-indigo-200 hover:text-indigo-600 focus:outline-none focus-visible:ring focus-visible:ring-indigo-500 focus-visible:ring-opacity-75"
      >
        <span>🧗🏻 Climbing</span>
        <ChevronUpIcon class="h-5 w-5 text-indigo-500 ui-open:rotate-90 ui-open:transform" />
      </DisclosureButton>
      <TransitionRoot
        enter="transition duration-300 ease-out"
        enter-from="transform scale-95 opacity-0"
        enter-to="transform scale-100 opacity-100"
        leave="transition duration-100 ease-out"
        leave-from="transform scale-100 opacity-100"
        leave-to="transform scale-95 opacity-0"
      >
        <DisclosurePanel>
          <div class="mb-4 flex flex-col rounded-lg">
            <div
              class="grid grid-cols-1 gap-x-4 gap-y-4 px-2 pt-4 md:grid-cols-2 md:px-4 lg:grid-cols-3"
            >
              <div
                v-for="(location, i) of climbingLocations"
                :key="i"
                class="group relative flex flex-col overflow-hidden rounded-lg bg-white shadow-md"
              >
                <div
                  class="aspect-h-4 aspect-w-3 sm:aspect-none max-h-72 group-hover:opacity-75 sm:h-96"
                >
                  <img :src="location.imageSrc" class="h-full w-full object-cover object-center" />
                </div>
                <div class="flex flex-1 flex-col space-y-2 p-4">
                  <h3 class="text-sm font-medium text-neutral-900">
                    <a :href="location.href">
                      <span aria-hidden="true" class="absolute inset-0" />
                      {{ location.name }}
                    </a>
                  </h3>
                  <p class="text-sm text-neutral-500">{{ location.subtitle }}</p>
                </div>
              </div>
            </div>
          </div>
        </DisclosurePanel>
      </TransitionRoot>
    </Disclosure>
    <Disclosure as="div">
      <DisclosureButton
        class="flex w-full justify-between rounded-lg bg-indigo-100 px-4 py-2 text-left text-sm font-medium text-indigo-900 hover:bg-indigo-200 hover:text-indigo-600 focus:outline-none focus-visible:ring focus-visible:ring-indigo-500 focus-visible:ring-opacity-75"
      >
        <span>🍖 Food</span>
        <ChevronUpIcon class="h-5 w-5 text-indigo-500 ui-open:rotate-90 ui-open:transform" />
      </DisclosureButton>
      <TransitionRoot
        enter="transition duration-300 ease-out"
        enter-from="transform scale-95 opacity-0"
        enter-to="transform scale-100 opacity-100"
        leave="transition duration-100 ease-out"
        leave-from="transform scale-100 opacity-100"
        leave-to="transform scale-95 opacity-0"
      >
        <DisclosurePanel> <div class="px-2 py-2">WIP</div> </DisclosurePanel>
      </TransitionRoot>
    </Disclosure>
  </div>
</template>
