<script setup lang="ts">
import { itineraryList } from '@/constants/itinerary';
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
  TransitionRoot
} from '@headlessui/vue';
import { ChevronRightIcon, ChevronUpDownIcon } from '@heroicons/vue/20/solid';
import { computed, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import ItineraryCollapse from './ItineraryCollapse.vue';

const selectedChild = ref();
const route = useRoute();
const breadCrumbs = computed(() => {
  const itinerary = itineraryList.find((i) => i.id === route.query?.section);
  const child = itinerary?.data?.find((d) => d.id === route.query?.child);
  const grandChild = child?.details?.find((d) => d.id === route.query?.grandchild);

  return {
    itinerary,
    ...(child && { child }),
    ...(grandChild && { grandChild })
  };
});

onMounted(() => {
  if (
    breadCrumbs.value.itinerary &&
    breadCrumbs.value.itinerary.data?.length > 0 &&
    breadCrumbs.value.child
  ) {
    selectedChild.value =
      breadCrumbs.value.itinerary.data.find((d) => d.id === breadCrumbs.value.child?.id) ?? null;
  }
});
</script>

<template>
  <div class="rounded-lg bg-neutral-50 p-2 shadow-lg transition-[height]">
    <TransitionRoot
      enter="transition duration-300 ease-in-out"
      enter-from="transform scale-95 opacity-0"
      enter-to="transform scale-100 opacity-100"
      leave="transition duration-300 ease-in-out"
      leave-from="transform scale-100 opacity-100"
      leave-to="transform scale-95 opacity-0"
      class="flex flex-col gap-2"
      :show="!$route.query?.section"
    >
      <template v-if="!$route.query?.section">
        <template v-for="itinerary of itineraryList" :key="itinerary.id">
          <ItineraryCollapse :itinerary="itinerary" />
        </template>
      </template>
    </TransitionRoot>

    <TransitionRoot
      enter="transition duration-300 ease-in-out"
      enter-from="transform scale-95 opacity-0"
      enter-to="transform scale-100 opacity-100"
      leave="transition duration-300 ease-in-out"
      leave-from="transform scale-100 opacity-100"
      leave-to="transform scale-95 opacity-0"
      class="flex flex-col gap-2"
      :show="!!$route.query?.section"
    >
      <template v-if="!!$route.query?.section">
        <div class="w-full p-2">
          <nav aria-label="Breadcrumb" v-if="breadCrumbs">
            <ol role="list" class="flex items-center space-x-4">
              <li v-if="breadCrumbs.itinerary?.sectionTitle">
                <a
                  href="/itinerary"
                  class="text-sm font-medium text-gray-500 hover:text-gray-700"
                  @click.prevent="() => $router.push('/itinerary')"
                  >{{ breadCrumbs.itinerary.sectionTitle }}</a
                >
              </li>
              <li v-if="breadCrumbs.itinerary && breadCrumbs.child">
                <div class="flex items-center">
                  <span class="pointer-events-none inset-y-0 left-0 flex items-center pl-2">
                    <ChevronRightIcon
                      class="h-5 w-5 flex-shrink-0 text-gray-400"
                      aria-hidden="true"
                    />
                  </span>
                  <template v-if="selectedChild && breadCrumbs.itinerary.data?.length > 0">
                    <Listbox as="div" v-model="selectedChild">
                      <div class="relative items-center">
                        <ListboxButton
                          class="relative w-full cursor-default rounded-md py-1.5 pl-3 pr-10 text-left text-sm font-medium text-gray-700 hover:bg-neutral-100"
                        >
                          <span class="block truncate">{{ selectedChild.name }}</span>
                          <span
                            class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
                          >
                            <ChevronUpDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                          </span>
                        </ListboxButton>

                        <transition
                          leave-active-class="transition ease-in duration-100"
                          leave-from-class="opacity-100"
                          leave-to-class="opacity-0"
                        >
                          <ListboxOptions
                            class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-xs shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                          >
                            <ListboxOption
                              as="template"
                              v-for="children in breadCrumbs.itinerary.data"
                              :key="children.id"
                              :value="children"
                              v-slot="{ active, selected }"
                            >
                              <li
                                :class="[
                                  active ? 'bg-indigo-400 text-white' : 'text-gray-900',
                                  'relative cursor-default select-none py-2 pl-3 pr-9 text-left'
                                ]"
                              >
                                <span
                                  :class="[
                                    selected ? 'font-semibold' : 'font-normal',
                                    'block truncate'
                                  ]"
                                  >{{ children.name }}</span
                                >
                              </li>
                            </ListboxOption>
                          </ListboxOptions>
                        </transition>
                      </div>
                    </Listbox>
                  </template>
                  <template v-else>
                    <a href="#" class="ml-4">{{ breadCrumbs.child.name }}</a>
                  </template>
                </div>
              </li>
              <li v-if="breadCrumbs.child && breadCrumbs.grandChild">
                <div class="flex items-center">
                  <ChevronRightIcon
                    class="h-5 w-5 flex-shrink-0 text-gray-400"
                    aria-hidden="true"
                  />
                  <a
                    href="#"
                    aria-current="page"
                    class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                    >{{ breadCrumbs.grandChild?.title }}</a
                  >
                </div>
              </li>
            </ol>
          </nav>
        </div>
      </template>
    </TransitionRoot>
  </div>
</template>
