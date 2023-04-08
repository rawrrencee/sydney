<script setup lang="ts">
import { itineraryList } from '@/constants/itinerary';
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/vue';
import { ChevronUpDownIcon, StarIcon } from '@heroicons/vue/20/solid';
import { Image, ImagePreviewGroup } from 'ant-design-vue';
import { computed, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import GridItem from './GridItem.vue';
import ItineraryBreadcrumbs from './ItineraryBreadcrumbs.vue';
import ItineraryCollapse from './ItineraryCollapse.vue';
import ItineraryContainer from './ItineraryContainer.vue';
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
const showDialog = ref(!!breadcrumbs.value?.grandchild);

const onSelectedChildChanged = (val: any) => {
  if (val?.id !== breadcrumbs.value.child?.id) {
    router.replace({
      query: { section: breadcrumbs.value.itinerary?.id, child: val?.id }
    });
  }
};

watch(breadcrumbs, () => {
  if (
    breadcrumbs.value.itinerary &&
    breadcrumbs.value.itinerary.data?.length > 0 &&
    breadcrumbs.value.child
  ) {
    selectedChild.value =
      breadcrumbs.value.itinerary.data.find((d) => d.id === breadcrumbs.value.child?.id) ?? null;
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
                  showDialog = true;
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
            />
          </template>
        </div>
      </ItineraryContainer>
    </div>
  </div>
  <ItinerarySlideover
    :show-slideover="showDialog"
    @update:show-slideover="
      (val) => {
        showDialog = val;
        if (!showDialog) {
          router.replace({
            query: { section: breadcrumbs?.itinerary?.id, child: selectedChild?.id }
          });
        }
      }
    "
  >
    <template #header>
      <Listbox as="div" class="flex-grow-[1]" v-model="selectedGrandchild">
        <div class="relative items-center">
          <ListboxButton
            class="flex w-full cursor-pointer rounded-md bg-neutral-100 py-3 pl-2 pr-10 text-left text-sm font-medium text-gray-700 hover:bg-neutral-200 sm:py-1.5 md:bg-neutral-50 md:pr-20"
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
              class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-sm shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
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
      <div class="flex flex-col items-center gap-4">
        <ImagePreviewGroup>
          <template v-for="(imagePath, i) of grandchildImagePaths" :key="i">
            <Image :src="imagePath" />
          </template>
        </ImagePreviewGroup>
      </div>
    </template>

    <template #bottom>
      <div class="flex flex-col gap-4 divide-y">
        <div
          class="flex flex-col gap-2 last:pb-10 [&:not(:first-child)]:pt-4"
          v-for="(route, i) of breadcrumbs?.grandchild?.routes"
          :key="i"
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
          </div>
          <div class="text-xs text-neutral-400">
            {{ route.ascents }}
          </div>
          <div class="text-xs">
            {{ route.description }}
          </div>
        </div>
      </div>
    </template>
  </ItinerarySlideover>
</template>

<style>
img {
  display: inline-block !important;
}
</style>
