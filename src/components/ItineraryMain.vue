<script setup lang="ts">
import { itineraryList } from '@/constants/itinerary';
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
  const grandchild = child?.details?.find((d) => d.id === route.query?.grandchild);

  return {
    itinerary,
    ...(child && { child }),
    ...(grandchild && { grandchild })
  };
});
const selectedChild = ref(breadcrumbs.value?.child ?? null);
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
const onSelectedChildChanged = (val: any) => {
  if (val?.id !== breadcrumbs.value.child?.id) {
    router.replace({
      query: { section: breadcrumbs.value.itinerary?.id, child: val?.id }
    });
  }
};
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
      <ItineraryContainer v-if="!!$route.query?.child && breadcrumbs?.child?.details" :should-show="!!$route.query?.child">
          <div v-if="breadcrumbs.child.details.length > 0" class="grid grid-cols-1 gap-x-4 gap-y-4 pt-2 md:grid-cols-2 lg:grid-cols-3">
            <template v-for="(detail, i) of breadcrumbs?.child?.details" :key="i">
              <GridItem :title="detail.title" :subtitle="detail.description" :image-src="detail.imageSrc ?? detail.relativePath" />
            </template>
          </div>
      </ItineraryContainer>
    </div>
  </div>
</template>
