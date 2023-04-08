<script setup lang="ts">
import type { ClimbingLocationRoute } from '@/models/ClimbingLocation';
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/vue';
import { ArrowRightOnRectangleIcon, ChevronDownIcon, StarIcon } from '@heroicons/vue/20/solid';
import { ref, watch, type Ref } from 'vue';

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

watch(selectedSort, (val: { key: string; text: string }) => {
  if (val && props.routes) {
    switch (val.key) {
      case 'number':
        cloneRoutes.value = [...props.routes!].sort((x, y) => parseInt(x.id) - parseInt(y.id));
        break;
      case 'name':
        cloneRoutes.value = [...props.routes!].sort((x, y) => {
          if (x.name < y.name) return -1;
          if (x.name > y.name) return 1;
          return 0;
        });
        break;
      case 'grade':
        cloneRoutes.value = [...props.routes!].sort(
          (x, y) => parseInt(x.grade.substring(1)) - parseInt(y.grade.substring(1))
        );
        break;
      case 'rating':
        cloneRoutes.value = [...props.routes!].sort(
          (x, y) => parseInt(y.quality) - parseInt(x.quality)
        );
        break;
      case 'ascents':
        cloneRoutes.value = [...props.routes!].sort(
          (x, y) => parseInt(x.ascents.substring(27, 29)) - parseInt(y.ascents.substring(27, 29))
        );
        break;
      default:
        break;
    }
  }
});

const openInNewWindow = (val: string) => {
  window.open(val);
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
                v-slot="{ active, disabled }"
                :disabled="selectedSort?.key === option?.key"
              >
                <span
                  :class="[
                    disabled
                      ? 'text-gray-300'
                      : active
                      ? 'bg-indigo-400 text-white'
                      : 'text-gray-900',
                    'block cursor-pointer px-4 py-2 text-sm font-medium text-gray-900'
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
          <span class="inline-flex h-5 w-5 items-center justify-center rounded-full bg-gray-500">
            <span class="text-xs font-medium leading-none text-white">{{ route.id }}</span>
          </span>
          <span
            class="inline-flex items-center rounded-md px-1.5 py-0.5 text-xs font-medium"
            :class="[
              parseInt(route.grade.substring(1)) <= 3 && 'bg-emerald-100 text-emerald-800',
              parseInt(route.grade.substring(1)) > 3 &&
                parseInt(route.grade.substring(1)) <= 5 &&
                'bg-sky-100 text-sky-800',
              parseInt(route.grade.substring(1)) > 5 &&
                parseInt(route.grade.substring(1)) <= 8 &&
                'bg-orange-100 text-orange-800',
              parseInt(route.grade.substring(1)) > 8 && 'bg-red-100 text-red-800'
            ]"
            >{{ route.grade }}</span
          >
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
            <ArrowRightOnRectangleIcon class="h-3 w-3" />
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