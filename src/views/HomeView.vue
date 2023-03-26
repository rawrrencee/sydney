<script setup lang="ts">
import AnimatedButton from '@/components/AnimatedButton.vue';
import AnimatedSpinner from '@/components/AnimatedSpinner.vue';
import HomeContent from '@/components/HomeContent.vue';
import HomeHeader from '@/components/HomeHeader.vue';
import HomeLinks from '@/components/HomeLinks.vue';
import { links } from '@/constants/links';
import { ArrowRightCircleIcon } from '@heroicons/vue/24/outline';
import { computed, ref, watch } from 'vue';

const currentView = ref('dashboard');
const showItinerary = ref(false);
const showBackButton = computed(() => currentView.value !== 'dashboard');

const openItinerary = () => {
  window.open(links.itinerary.url);
};
watch(currentView, (currentView) => {
  if (currentView === links.itinerary.key) {
    setTimeout(() => {
      showItinerary.value = true;
    }, 1500);
  } else {
    showItinerary.value = false;
  }
});
</script>

<template>
  <main class="relative isolate min-h-full">
    <img
      src="https://images.unsplash.com/photo-1545972154-9bb223aac798?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3050&q=80&exp=8&con=-15&sat=-75"
      alt=""
      class="absolute inset-0 -z-10 h-full w-full object-cover object-top"
    />
    <div class="h-screen flex flex-col mx-auto max-w-7xl px-6 pt-10 py-4 text-center lg:px-8">
      <HomeHeader />
      <HomeLinks v-model:current-view="currentView" :show-back-button="showBackButton">
        <template #extra v-if="currentView === links.itinerary.key">
          <AnimatedButton :on-click="openItinerary">
            <ArrowRightCircleIcon class="-ml-0.5 h-5 w-5" aria-hidden="true" />
            Go to Itinerary
          </AnimatedButton>
        </template>
        <template #content>
          <template v-if="currentView === links.itinerary.key">
            <AnimatedSpinner v-show="!showItinerary" />
            <HomeContent v-show="showItinerary">
              <iframe
                class="w-full h-full"
                src="https://docs.google.com/spreadsheets/d/e/2PACX-1vReAdluuGtIEsjFgpLVdXgHZKdKfGFS2Kim4IxBWVFRj_Dvkn29DxGOwhP_aWDUcmicbkikeOBD_yfH/pubhtml?widget=true&amp;headers=false"
              ></iframe>
            </HomeContent>
          </template>
          <template v-if="currentView === links.randomiser.key">
            <HomeContent :class="['bg-neutral-50 rounded-lg border-gray-200']">
              <div
                class="mt-4 border border-dashed rounded-md border-stone-900 flex flex-col justify-center"
              >
                <div class="grid grid-cols-2">
                  <div class="border border-dotted">Driver 1</div>
                  <div class="border border-dotted">Driver 2</div>
                </div>
                <div class="grid grid-cols-3">
                  <div class="border border-dotted">Passenger 1</div>
                  <div class="border border-dotted">Passenger 2</div>
                  <div class="border border-dotted">Passenger 3</div>
                </div>
              </div>
            </HomeContent>
          </template>
        </template>
      </HomeLinks>
    </div>
  </main>
</template>
