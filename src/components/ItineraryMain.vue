<script setup lang="ts">
import { itineraryList } from '@/constants/itinerary';
import { unqiueAreaGradeCounts } from '@/helpers/helper';
import type { ClimbingLocation } from '@/models/ClimbingLocation';
import {
Disclosure,
DisclosureButton,
Listbox,
ListboxButton,
ListboxOption,
ListboxOptions,
Tab,
TabGroup,
TabList,
TabPanel,
TabPanels,
TransitionRoot
} from '@headlessui/vue';
import { ChevronUpDownIcon } from '@heroicons/vue/20/solid';
import { Image, ImagePreviewGroup } from 'ant-design-vue';
import { computed, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import RouteBadgeIterator from './Badge/RouteBadgeIterator.vue';
import AnimatedCat from './CssElements/AnimatedCat.vue';
import CuteAnimalPens from './CssElements/CuteAnimalPens.vue';
import GridItem from './GridItem.vue';
import ItineraryBreadcrumbs from './ItineraryBreadcrumbs.vue';
import ItineraryCollapse from './ItineraryCollapse.vue';
import ItineraryContainer from './ItineraryContainer.vue';
import ItineraryRoutes from './ItineraryRoutes.vue';
import ItinerarySlideover from './ItinerarySlideover.vue';

const route = useRoute();
const router = useRouter();
const breadcrumbs = computed(() => {
  const itinerary = itineraryList.find((i) => i.id === route.query?.section);
  const child = itinerary?.data?.find((d) => d.id === route.query?.child);
  const grandchild = child?.areas?.find((d) => d.slug === route.query?.grandchild);

  return {
    itinerary,
    ...(child && { child }),
    ...(grandchild && { grandchild })
  };
});
const grandchildImagePaths = computed(() => {
  const routeImagePaths = breadcrumbs?.value?.grandchild?.routes
    .filter((r) => !!r.imageSrc)
    .map((r) => r.imageSrc!);
  if (breadcrumbs?.value?.grandchild?.imageSrc) {
    return [breadcrumbs?.value?.grandchild?.imageSrc].concat(routeImagePaths!);
  } else {
    return routeImagePaths;
  }
});

const selectedChild = ref(breadcrumbs.value?.child ?? null);
const selectedGrandchild = ref(breadcrumbs.value?.grandchild ?? null);
const showSlideover = ref(!!breadcrumbs.value?.grandchild);
const grandchildTabs = ref([
  { key: 'routes', text: 'Routes', current: true },
  { key: 'areaDetails', text: 'Area Details', current: false }
]);

const onSelectedChildChanged = (val: any) => {
  if (val?.id !== breadcrumbs.value.child?.id) {
    router.replace({
      query: { section: breadcrumbs.value.itinerary?.id, child: val?.id }
    });
  }
};
const onUpdateShowSlideover = (val: boolean) => {
  showSlideover.value = val;
  if (!showSlideover.value) {
    setTimeout(() => {
      router.replace({
        query: { section: breadcrumbs?.value?.itinerary?.id, child: selectedChild?.value?.id }
      });
    }, 200);
  }
};
const openInNewWindow = (url: string | undefined) => {
  if (url) window.open(url);
};

watch(breadcrumbs, () => {
  if (
    breadcrumbs.value.itinerary &&
    breadcrumbs.value.itinerary.data?.length > 0 &&
    breadcrumbs.value.child
  ) {
    selectedChild.value =
      breadcrumbs.value.itinerary.data.find(
        (d: ClimbingLocation) => d.id === breadcrumbs.value.child?.id
      ) ?? null;
    showSlideover.value = !!breadcrumbs.value?.grandchild;
  }

  if (
    breadcrumbs.value.itinerary &&
    breadcrumbs.value.itinerary.data?.length > 0 &&
    breadcrumbs.value.child &&
    breadcrumbs.value.grandchild
  ) {
    selectedGrandchild.value =
      breadcrumbs.value.child?.areas.find((a) => a.slug === breadcrumbs.value.grandchild?.slug) ??
      null;
  }
});

watch(selectedGrandchild, (val) => {
  if (val?.slug && val?.slug !== breadcrumbs.value.grandchild?.slug) {
    router.replace({
      query: {
        section: breadcrumbs.value.itinerary?.id,
        child: breadcrumbs.value.child?.id,
        grandchild: val.slug
      }
    });
  }
});
</script>

<template>
  <div class="flex flex-col gap-2">
    <div class="rounded-lg bg-neutral-50 p-2 shadow-lg">
      <ItineraryContainer v-if="!$route.query?.section" :should-show="!$route.query?.section">
        <template v-if="!$route.query?.section">
          <template v-for="itinerary of itineraryList" :key="itinerary.id">
            <ItineraryCollapse :itinerary="itinerary" />
          </template>
        </template>
      </ItineraryContainer>
      <ItineraryContainer v-if="!!$route.query?.section" :should-show="!!$route.query?.section">
        <template v-if="!!$route.query?.section">
          <ItineraryBreadcrumbs
            @update:selected-child="onSelectedChildChanged"
            :breadcrumbs="breadcrumbs"
          />

          <div class="flex flex-col text-xs">
            <div class="flex flex-col gap-4 px-1 py-2 text-left sm:p-4">
              <div v-for="(sectionName, i) in ['Description', 'Approach']" :key="i">
                <Disclosure v-slot="{ open }">
                  <span class="text-neutral-400">{{ sectionName }}</span>
                  <DisclosureButton
                    as="div"
                    class="cursor-pointer whitespace-pre-wrap text-left text-neutral-900"
                    :class="[!open && 'line-clamp-2']"
                  >
                    <span>{{
                      sectionName === 'Description'
                        ? breadcrumbs?.child?.description
                        : breadcrumbs?.child?.approach
                    }}</span>
                  </DisclosureButton>
                </Disclosure>
              </div>
            </div>
          </div>
        </template>
      </ItineraryContainer>
      <ItineraryContainer
        v-if="!!$route.query?.child && breadcrumbs?.child?.areas"
        :should-show="!!$route.query?.child"
      >
        <div
          v-if="breadcrumbs.child.areas.length > 0"
          class="grid grid-cols-1 gap-x-4 gap-y-4 pt-2 md:grid-cols-2 lg:grid-cols-3"
        >
          <template v-for="area of breadcrumbs?.child?.areas" :key="area.id">
            <GridItem
              :title="area.title"
              :subtitle="area.description"
              :image-src="area.imageSrc || area.relativePath"
              :on-click="
                () => {
                  showSlideover = true;
                  $router.replace({
                    path: $route.path,
                    query: {
                      section: breadcrumbs?.itinerary?.id,
                      child: selectedChild?.id,
                      grandchild: area.slug
                    }
                  });
                }
              "
            >
              <template #footer>
                <div class="flex flex-row flex-wrap justify-center gap-2">
                  <RouteBadgeIterator :grade-counts="unqiueAreaGradeCounts(area.routes)" />
                </div>
              </template>
            </GridItem>
          </template>
        </div>
      </ItineraryContainer>
    </div>
  </div>
  <ItinerarySlideover
    :show-slideover="showSlideover"
    @update:show-slideover="onUpdateShowSlideover"
  >
    <template #header>
      <Listbox as="div" class="flex-grow-[1]" v-model="selectedGrandchild">
        <div class="relative items-center">
          <ListboxButton
            class="flex w-full cursor-pointer rounded-md bg-neutral-100 py-2 pl-2 pr-10 text-left text-sm font-medium text-gray-700 hover:bg-neutral-200 sm:py-1.5 md:bg-neutral-50 md:pr-20"
          >
            <span class="block truncate">{{ selectedGrandchild?.title }}</span>
            <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
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
              class="absolute z-30 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-sm shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            >
              <ListboxOption
                as="template"
                v-for="children in breadcrumbs.child?.areas"
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
                  <span :class="[selected ? 'font-semibold' : 'font-normal', 'block truncate']">{{
                    children.title
                  }}</span>
                </li>
              </ListboxOption>
            </ListboxOptions>
          </transition>
        </div>
      </Listbox>
    </template>

    <template #top>
      <div
        class="flex flex-col items-center gap-4"
        v-if="grandchildImagePaths && grandchildImagePaths.length > 0"
      >
        <ImagePreviewGroup>
          <template v-for="(imagePath, i) in grandchildImagePaths" :key="i">
            <Image :src="imagePath" />
          </template>
        </ImagePreviewGroup>
      </div>
      <template v-else>
        <div class="flex flex-col rounded-lg bg-yellow-200">
          <div
            class="sticky top-0 z-[1] w-full place-self-center rounded-lg bg-yellow-200 pb-3 pt-3 text-center text-xs font-semibold"
          >
            No routes found
          </div>
          <div class="flex flex-row overflow-x-scroll pl-3 pt-10">
            <CuteAnimalPens />
          </div>
        </div>
      </template>
    </template>

    <template #topFooter>
      <a
        v-if="breadcrumbs?.child?.url"
        :href="breadcrumbs?.child?.url"
        class="text-xs text-neutral-400 hover:text-indigo-600"
        @click.prevent="
          () => openInNewWindow(breadcrumbs?.grandchild?.url ?? breadcrumbs?.child?.url)
        "
        >View at theCrag.com</a
      >
    </template>

    <template #bottom>
      <TabGroup v-slot="{ selectedIndex }">
        <TabList as="div" class="sticky top-0 isolate z-20 flex divide-x divide-gray-200 shadow-md">
          <Tab as="template" v-slot="{ selected }" v-for="tab in grandchildTabs" :key="tab.key">
            <div
              :class="[
                selected ? 'text-gray-900' : 'text-gray-500 hover:text-gray-700',
                'group relative min-w-0 flex-1 cursor-pointer overflow-hidden bg-white px-2 py-2 text-center text-xs font-medium hover:bg-gray-50 focus:z-10'
              ]"
              :aria-current="selected ? 'page' : undefined"
            >
              <span>{{ tab.text }}</span>
              <span
                aria-hidden="true"
                :class="[
                  selected ? 'bg-indigo-500' : 'bg-transparent',
                  'absolute inset-x-0 bottom-0 h-0.5'
                ]"
              />
            </div>
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel static>
            <TransitionRoot
              :show="selectedIndex === 0"
              enter="transition ease-in-out duration-300 transform"
              enter-from="-translate-x-full"
              enter-to="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leave-from="translate-x-0"
              leave-to="-translate-x-full"
            >
              <div class="px-4 pt-4">
                <template
                  v-if="
                    breadcrumbs?.grandchild?.routes?.length &&
                    breadcrumbs.grandchild.routes.length > 0
                  "
                >
                  <ItineraryRoutes :routes="breadcrumbs.grandchild.routes" />
                </template>
                <template v-else>
                  <div class="flex h-96 flex-col place-items-center rounded-md bg-black pt-32">
                    <AnimatedCat />
                    <span class="mt-5 font-semibold text-white">No routes found</span>
                  </div>
                </template>
              </div>
            </TransitionRoot>
          </TabPanel>
          <TabPanel static>
            <TransitionRoot
              :show="selectedIndex === 1"
              enter="transition ease-in-out duration-300 transform"
              enter-from="translate-x-full"
              enter-to="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leave-from="translate-x-0"
              leave-to="translate-x-full"
            >
              <div class="flex flex-col gap-3 divide-y text-xs">
                <template
                  v-for="tab in [
                    { key: 'area', text: 'Area Details' },
                    { key: 'location', text: 'Location Details' }
                  ]"
                >
                  <div class="flex flex-col">
                    <div class="bg-indigo-50 p-4">
                      <span class="text-sm font-semibold">{{ tab.text }}</span>
                    </div>
                    <div class="flex flex-col gap-4 p-4">
                      <div v-if="tab.key === 'location'">
                        <Image
                          :src="breadcrumbs?.child?.imageSrc ?? breadcrumbs?.child?.relativePath"
                        />
                      </div>
                      <div class="flex flex-col gap-0.5">
                        <span class="text-xs text-neutral-400">Name</span>
                        <span class="text-neutral-900">{{
                          tab.key === 'area'
                            ? breadcrumbs?.grandchild?.title
                            : breadcrumbs?.child?.name
                        }}</span>
                      </div>
                      <div class="flex flex-col gap-0.5">
                        <span class="text-xs text-neutral-400">Description</span>
                        <span class="text-neutral-900">{{
                          tab.key === 'area'
                            ? breadcrumbs?.grandchild?.description
                            : breadcrumbs?.child?.description
                        }}</span>
                      </div>
                      <div class="flex flex-col gap-0.5">
                        <span class="text-xs text-neutral-400">Approach</span>
                        <span class="text-neutral-900">{{
                          (tab.key === 'area'
                            ? breadcrumbs?.grandchild?.approach
                            : breadcrumbs?.child?.approach) !== ''
                            ? tab.key === 'area'
                              ? breadcrumbs?.grandchild?.approach
                              : breadcrumbs?.child?.approach
                            : 'Not available'
                        }}</span>
                      </div>
                    </div>
                  </div>
                </template>
              </div>
            </TransitionRoot>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </template>
  </ItinerarySlideover>
</template>

<style>
img {
  display: inline-block !important;
}
</style>
