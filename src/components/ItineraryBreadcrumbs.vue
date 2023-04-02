<script setup lang="ts">
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/vue';
import { Bars3Icon, ChevronRightIcon, ChevronUpDownIcon } from '@heroicons/vue/20/solid';
import { ref, watch } from 'vue';

const props = defineProps({
  breadcrumbs: Object
});

const emit = defineEmits(['update:selectedChild']);
const selectedChild = ref(props?.breadcrumbs?.child ?? null);
watch(selectedChild, (val) => {
  emit('update:selectedChild', val);
});
</script>

<template>
  <nav aria-label="Breadcrumb" v-if="breadcrumbs">
    <ol
      role="list"
      class="flex flex-col items-start justify-start gap-2 space-x-0 sm:flex-row sm:gap-0 sm:space-x-1 md:w-fit"
    >
      <li
        v-if="breadcrumbs.itinerary?.sectionTitle"
        class="flex w-full flex-shrink-0 cursor-pointer place-items-center gap-2 rounded-md bg-indigo-50 px-3 py-3 text-sm font-medium text-indigo-600 hover:bg-indigo-100 sm:w-fit sm:px-2 sm:py-1.5 md:pl-2"
        @click="() => $router.replace('/itinerary')"
      >
        <Bars3Icon class="h-3 w-3" @click="() => {}" />
        <a href="/itinerary" @click.prevent="() => {}">{{ breadcrumbs.itinerary.sectionTitle }}</a>
      </li>
      <li class="w-full flex-grow-[1]" v-if="breadcrumbs.itinerary && breadcrumbs.child">
        <div class="flex">
          <span class="pointer-events-none inset-y-0 left-0 hidden items-center sm:flex">
            <ChevronRightIcon class="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
          </span>
          <template v-if="selectedChild && breadcrumbs.itinerary.data?.length > 0">
            <Listbox as="div" class="flex-grow-[1]" v-model="selectedChild">
              <div class="relative items-center">
                <ListboxButton
                  class="flex w-full cursor-default rounded-md bg-neutral-100 py-1.5 pl-2 pr-10 text-left text-sm font-medium text-gray-700 hover:bg-neutral-100 md:bg-neutral-50 md:pr-20"
                >
                  <span class="block truncate">{{ selectedChild.name }}</span>
                  <span
                    class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
                  >
                    <ChevronUpDownIcon class="h-4 w-4 text-gray-400" aria-hidden="true" />
                  </span>
                </ListboxButton>

                <transition
                  enter-active-class="transition ease-in duration-100"
                  enter-from-class="opacity-0"
                  enter-to-class="opacity-100"
                  leave-active-class="transition ease-in duration-100"
                  leave-from-class="opacity-100"
                  leave-to-class="opacity-0"
                >
                  <ListboxOptions
                    class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-sm shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  >
                    <ListboxOption
                      as="template"
                      v-for="children in breadcrumbs.itinerary.data"
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
                          :class="[selected ? 'font-semibold' : 'font-normal', 'block truncate']"
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
            <a href="#" class="ml-4">{{ breadcrumbs.child.name }}</a>
          </template>
        </div>
      </li>
      <li v-if="breadcrumbs.child && breadcrumbs.grandChild">
        <div class="flex items-center">
          <ChevronRightIcon class="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
          <a
            href="#"
            aria-current="page"
            class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
            >{{ breadcrumbs.grandChild?.title }}</a
          >
        </div>
      </li>
    </ol>
  </nav>
</template>
