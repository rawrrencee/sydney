<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel, TransitionRoot } from '@headlessui/vue';
import { ChevronUpIcon } from '@heroicons/vue/20/solid';
import { useRouter } from 'vue-router';

defineProps({
  itinerary: Object
});
const router = useRouter();
</script>

<template>
  <Disclosure
    v-motion
    :initial="{ opacity: 0 }"
    :enter="{ opacity: 1 }"
    v-if="itinerary"
    as="div"
    v-slot="{ open }"
  >
    <DisclosureButton
      class="flex w-full justify-between rounded-lg bg-indigo-100 px-4 py-3 text-left text-sm font-medium text-indigo-900 hover:bg-indigo-200 hover:text-indigo-600 focus:outline-none focus-visible:ring focus-visible:ring-indigo-500 focus-visible:ring-opacity-75"
    >
      <span>{{ itinerary?.sectionTitle }}</span>
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
        <div
          v-if="itinerary?.data?.length > 0"
          class="grid grid-cols-1 gap-x-4 gap-y-4 px-2 pt-4 md:grid-cols-2 md:px-4 lg:grid-cols-3"
          :class="open && 'mb-4'"
        >
          <div
            v-for="(location, i) of itinerary?.data"
            :key="i"
            class="group relative flex flex-col overflow-hidden rounded-lg bg-white shadow-md"
          >
            <div
              class="aspect-h-4 aspect-w-3 sm:aspect-none max-h-72 group-hover:opacity-75 sm:h-96"
            >
              <img
                :src="location.imageSrc ?? location.relativePath"
                class="h-full w-full object-cover object-center"
              />
            </div>
            <div class="flex flex-1 flex-col space-y-2 p-4">
              <h3 class="text-sm font-medium text-neutral-900">
                <a
                  :href="`${$route.path}?section=${itinerary?.id}&child=${location.id}`"
                  @click.prevent="
                    itinerary?.id &&
                      location.id &&
                      router.replace({
                        path: $route.path,
                        query: { section: itinerary?.id, child: location.id }
                      })
                  "
                >
                  <span aria-hidden="true" class="absolute inset-0" />
                  {{ location.name }}
                </a>
              </h3>
              <p class="text-sm text-neutral-500">{{ location.subtitle }}</p>
            </div>
          </div>
        </div>
        <template v-else>
          <span class="px-2 py-2">WIP</span>
        </template>
      </DisclosurePanel>
    </TransitionRoot>
  </Disclosure>
</template>
