<script setup lang="ts">
import { itineraryList } from '@/constants/itinerary';
import { Dialog, DialogPanel, TransitionChild, TransitionRoot } from '@headlessui/vue';
import { XMarkIcon } from '@heroicons/vue/24/outline';
import Carousel from 'primevue/carousel';
import Image from 'primevue/image';
import { computed, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import GridItem from './GridItem.vue';
import ItineraryBreadcrumbs from './ItineraryBreadcrumbs.vue';
import ItineraryCollapse from './ItineraryCollapse.vue';
import ItineraryContainer from './ItineraryContainer.vue';

const route = useRoute();
const router = useRouter();
const breadcrumbs = computed(() => {
  const itinerary = itineraryList.find((i) => i.id === route.query?.section);
  const child = itinerary?.data?.find((d) => d.id === route.query?.child);
  const grandchild = child?.details?.find((d) => d.slug === route.query?.grandchild);

  return {
    itinerary,
    ...(child && { child }),
    ...(grandchild && { grandchild })
  };
});
const imagesOfGrandchild = computed(() => {
  if (breadcrumbs.value.grandchild?.routes && breadcrumbs.value.grandchild?.routes?.length > 0) {
    return breadcrumbs.value.grandchild?.routes
      .filter((r) => r.imageSrc || r.relativePath)
      .map((r) => {
        return { imageSrc: r.imageSrc, relativePath: r.relativePath };
      });
  }
  return [];
});

const selectedChild = ref(breadcrumbs.value?.child ?? null);
const showDialog = ref(!!breadcrumbs.value?.grandchild);

const onSelectedChildChanged = (val: any) => {
  if (val?.id !== breadcrumbs.value.child?.id) {
    router.replace({
      query: { section: breadcrumbs.value.itinerary?.id, child: val?.id }
    });
  }
};
const onDialogCloseClicked = () => {
  showDialog.value = false;
  router.replace({
    path: route.path,
    query: {
      section: breadcrumbs?.value.itinerary?.id,
      child: selectedChild?.value?.id,
      grandchild: null
    }
  });
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
        v-if="!!$route.query?.child && breadcrumbs?.child?.details"
        :should-show="!!$route.query?.child"
      >
        <div
          v-if="breadcrumbs.child.details.length > 0"
          class="grid grid-cols-1 gap-x-4 gap-y-4 pt-2 md:grid-cols-2 lg:grid-cols-3"
        >
          <template v-for="(detail, i) of breadcrumbs?.child?.details" :key="i">
            <GridItem
              :title="detail.title"
              :subtitle="detail.description"
              :image-src="detail.imageSrc ?? detail.relativePath"
              :on-click="
                () => {
                  showDialog = true;
                  $router.replace({
                    path: $route.path,
                    query: {
                      section: breadcrumbs?.itinerary?.id,
                      child: selectedChild?.id,
                      grandchild: detail.slug
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

  <TransitionRoot as="template" :show="showDialog">
    <Dialog as="div" class="relative z-10" @close="() => onDialogCloseClicked()">
      <TransitionChild
        as="template"
        enter="ease-out duration-300"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="ease-in duration-200"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 hidden bg-gray-500 bg-opacity-75 transition-opacity md:block" />
      </TransitionChild>

      <div class="fixed inset-0 z-10 overflow-y-scroll">
        <div
          class="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4"
        >
          <TransitionChild
            as="template"
            enter="ease-out duration-300"
            enter-from="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
            enter-to="opacity-100 translate-y-0 md:scale-100"
            leave="ease-in duration-200"
            leave-from="opacity-100 translate-y-0 md:scale-100"
            leave-to="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
          >
            <DialogPanel
              class="flex w-full transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl"
            >
              <div
                class="relative flex w-full items-center bg-neutral-50 pb-8 pt-14 shadow-2xl sm:pt-8"
                v-if="breadcrumbs?.grandchild?.routes"
              >
                <p class="absolute left-4 top-4 text-center md:left-5 md:top-5 lg:left-6 lg:top-6">
                  <a href="#" class="font-medium text-indigo-400 hover:text-indigo-600"
                    >View on theCrag.com</a
                  >
                </p>
                <button
                  type="button"
                  class="absolute right-4 top-4 text-gray-400 hover:text-gray-500 md:right-5 md:top-5 lg:right-6 lg:top-6"
                  @click="() => onDialogCloseClicked()"
                >
                  <span class="sr-only">Close</span>
                  <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                </button>
                <div class="flex w-full flex-col gap-2 sm:mt-9">
                  <div class="sticky top-0">
                    <Carousel
                      :value="imagesOfGrandchild"
                      :numVisible="1"
                      :numScroll="1"
                      :show-navigators="false"
                      circular
                      v-if="imagesOfGrandchild.length > 0"
                    >
                      <template #item="slotProps">
                        <div
                          class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 md:aspect-h-9 md:aspect-w-16"
                        >
                          <Image
                            :src="slotProps.data.imageSrc ?? slotProps.data.relativePath"
                            image-class="h-full w-full object-cover object-center"
                            preview
                          />
                        </div>
                      </template>
                    </Carousel>
                  </div>
                  <div
                    v-for="route of breadcrumbs?.grandchild?.routes"
                    :key="route.id"
                    class="px-4"
                  >
                    <div class="flex flex-col rounded-md border bg-white p-4 shadow-sm">
                      <span>{{ route.id }}</span>
                      <span>{{ route.grade }}</span>
                      <span>{{ route.quality }}</span>
                      <span>{{ route.name }}</span>
                      <span>{{ route.ascents }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<style>
.p-carousel-container {
  filter: drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06));
}
.p-image-toolbar {
  display: none;
}
.p-image-mask {
  --maskbg: rgba(250, 250, 250, 0.4) !important;
}
.p-image-action.p-link {
  color: #525252 !important;
  padding: 20px !important;
  background-color: #f5f5f5 !important;
}
.p-image-action.p-link:hover {
  background-color: #a3a3a3 !important;
}
</style>
