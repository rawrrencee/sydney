<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel, TransitionRoot } from '@headlessui/vue';
import { ChevronRightIcon } from '@heroicons/vue/20/solid';
import { onMounted, ref, watch } from 'vue';
import GridItem from './GridItem.vue';

const props = defineProps({
  itinerary: Object
});
const isExpanded = ref(false);
const getStorageKey = (key: string) => `itinerary__${key}`;

onMounted(() => {
  isExpanded.value =
    localStorage.getItem(getStorageKey(props.itinerary?.id)) === 'true' ? true : false;
});

watch(isExpanded, (val) => {
  localStorage.setItem(getStorageKey(props.itinerary?.id), val ? 'true' : 'false');
});
</script>

<template>
  <Disclosure v-motion :initial="{ opacity: 0 }" :enter="{ opacity: 1 }" v-if="itinerary" as="div">
    <DisclosureButton as="template">
      <div
        class="flex w-full justify-between rounded-lg bg-indigo-100 px-4 py-3 text-left text-sm font-medium text-indigo-900 hover:bg-indigo-200 hover:text-indigo-600 focus:outline-none focus-visible:ring focus-visible:ring-indigo-500 focus-visible:ring-opacity-75"
        @click="() => (isExpanded = !isExpanded)"
      >
        <span>{{ itinerary?.sectionTitle }}</span>
        <ChevronRightIcon
          class="h-5 w-5 transform text-indigo-500"
          :class="isExpanded && 'rotate-90 transform'"
        />
      </div>
    </DisclosureButton>
    <TransitionRoot
      enter="transition duration-300 ease-out"
      enter-from="transform scale-95 opacity-0"
      enter-to="transform scale-100 opacity-100"
      leave="transition duration-100 ease-out"
      leave-from="transform scale-100 opacity-100"
      leave-to="transform scale-95 opacity-0"
      :show="isExpanded"
    >
      <DisclosurePanel static>
        <div
          v-if="itinerary?.data?.length > 0"
          class="grid grid-cols-1 gap-x-4 gap-y-4 pt-4 md:grid-cols-2 lg:grid-cols-3"
          :class="true && 'mb-4'"
        >
          <template v-for="(location, i) of itinerary?.data" :key="i">
            <GridItem
              :image-src="location.imageSrc ?? location.relativePath"
              :href="`${$route.path}?section=${itinerary?.id}&child=${location.id}`"
              :on-click="
                () => {
                  itinerary?.id &&
                    location.id &&
                    $router.replace({
                      path: $route.path,
                      query: { section: itinerary?.id, child: location.id }
                    });
                }
              "
              :title="location.name"
              :subtitle="location.subtitle"
            />
          </template>
        </div>
        <template v-else>
          <span class="px-2 py-2">WIP</span>
        </template>
      </DisclosurePanel>
    </TransitionRoot>
  </Disclosure>
</template>
