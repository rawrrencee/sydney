<script setup lang="ts">
import { getRelativeGrade } from '@/helpers/helper';
import type { ClimbingLocationRoute } from '@/models/ClimbingLocation';
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/vue';
import { ArrowTopRightOnSquareIcon, ChevronDownIcon, StarIcon } from '@heroicons/vue/20/solid';
import { ref, watch, type Ref } from 'vue';
import RouteBadge from './Badge/RouteBadge.vue';

const props = defineProps({
  routes: Array<ClimbingLocationRoute>
});

const sortOptions = [
  { key: 'number', text: 'Route Number' },
  { key: 'name', text: 'Route Name' },
  { key: 'grade', text: 'Grading' },
  { key: 'rating', text: 'User Rating' },
  { key: 'ascents', text: 'Number of Ascents' }
];
const cloneRoutes = ref(props.routes ? [...props.routes] : []);
const selectedSort: Ref<{ key: string; text: string }> = ref(sortOptions[0]);

watch(
  () => props.routes,
  (routes) => {
    if (selectedSort.value) {
      cloneRoutes.value = getSortedRoutes(selectedSort.value.key);
    } else {
      cloneRoutes.value = routes ? [...routes] : [];
    }
  }
);
watch(selectedSort, (val: { key: string; text: string }) => {
  if (val && props.routes) {
    cloneRoutes.value = getSortedRoutes(val.key);
  }
});

const openInNewWindow = (val: string) => {
  window.open(val);
};
const getSortedRoutes = (key: string) => {
  switch (key) {
    case 'number':
      return [...props.routes!].sort((x, y) => parseInt(x.id) - parseInt(y.id));

    case 'name':
      return [...props.routes!].sort((x, y) => {
        if (x.name < y.name) return -1;
        if (x.name > y.name) return 1;
        return 0;
      });

    case 'grade':
      return [...props.routes!].sort(
        (x, y) => getRelativeGrade(x.grade) - getRelativeGrade(y.grade)
      );

    case 'rating':
      return [...props.routes!].sort(
        (x, y) =>
          parseInt(y.quality === '' ? '0' : y.quality) -
          parseInt(x.quality === '' ? '0' : x.quality)
      );

    case 'ascents':
      return [...props.routes!].sort(
        (x, y) => parseInt(y.ascents.split('- ')?.[1]) - parseInt(x.ascents.split('- ')?.[1])
      );

    default:
      return [];
  }
};
</script>
<template>
  <div class="flex flex-col gap-2">
    <div class="flex flex-row place-items-center justify-between">
      <span class="text-xs text-neutral-400">Sorting by {{ selectedSort.text }}</span>
      <Listbox as="div" class="relative inline-block text-left" v-model="selectedSort">
        <div>
          <ListboxButton
            class="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-indigo-600"
          >
            Sort
            <ChevronDownIcon
              class="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
              aria-hidden="true"
            />
          </ListboxButton>
        </div>

        <transition
          enter-active-class="transition ease-out duration-100"
          enter-from-class="transform opacity-0 scale-95"
          enter-to-class="transform opacity-100 scale-100"
          leave-active-class="transition ease-in duration-75"
          leave-from-class="transform opacity-100 scale-100"
          leave-to-class="transform opacity-0 scale-95"
        >
          <ListboxOptions
            class="absolute right-0 z-10 mt-2 w-40 origin-top-left rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none"
          >
            <div class="py-1">
              <ListboxOption
                v-for="option in sortOptions"
                :key="option.key"
                :value="option"
                :disabled="selectedSort?.key === option?.key"
                v-slot="{ active, disabled }"
              >
                <span
                  :class="[
                    disabled
                      ? 'text-gray-300'
                      : active
                      ? 'bg-indigo-400 text-white'
                      : 'text-gray-900',
                    'block cursor-pointer px-4 py-2 text-sm font-medium'
                  ]"
                  >{{ option.text }}</span
                >
              </ListboxOption>
            </div>
          </ListboxOptions>
        </transition>
      </Listbox>
    </div>
    <div class="flex flex-col gap-4 divide-y">
      <div
        class="flex flex-col gap-2 last:pb-10 [&:not(:first-child)]:pt-4"
        v-for="route of cloneRoutes"
        :key="route.id"
      >
        <div class="flex flex-row items-center gap-2">
          <span class="inline-flex h-7 w-7 items-center justify-center rounded-full bg-gray-500">
            <span class="text-xs font-semibold leading-none text-white">{{ route.id }}</span>
          </span>
          <RouteBadge :grade-int="getRelativeGrade(route.grade)" :grade-string="route.grade" />
          <span class="font-semibold">{{ route.name }}</span>
          <div class="flex items-center">
            <StarIcon
              v-for="rating in [0, 25, 50, 75, 100]"
              :key="rating"
              :class="[
                parseInt(route.quality) > rating ? 'text-yellow-400' : 'text-gray-200',
                'h-3 w-3 flex-shrink-0'
              ]"
              aria-hidden="true"
            />
          </div>
          <div
            class="ml-auto flex cursor-pointer flex-row rounded-md px-2 py-2 hover:bg-neutral-200"
            @click="openInNewWindow(route.url)"
          >
            <ArrowTopRightOnSquareIcon class="h-3 w-3" />
          </div>
        </div>
        <div class="text-xs text-neutral-400">
          {{ route.ascents }}
        </div>
        <div class="text-xs">
          {{ route.description }}
        </div>
      </div>
    </div>
  </div>
</template>
