<script setup lang="ts">
import AnimatedSpinner from '@/components/AnimatedSpinner.vue';
import AnimatedButton from '@/components/Buttons/AnimatedButton.vue';
import HomeContent from '@/components/HomeContent.vue';
import HomeHeader from '@/components/HomeHeader.vue';
import HomeLinks from '@/components/HomeLinks.vue';
import RandomiserMainVue from '@/components/RandomiserMain.vue';
import { links } from '@/constants/links';
import { ArrowRightCircleIcon } from '@heroicons/vue/24/outline';
import { computed, ref, watch } from 'vue';

const props = defineProps({
  currentPath: String
});

const showItinerary = ref(false);
const showBackButton = computed(() => props.currentPath !== '/');

const openItinerary = () => {
  window.open(links.itinerary.url);
};
watch(
  () => props.currentPath,
  (path) => {
    console.log(path);

    if (path === links.itinerary.routeParam) {
      setTimeout(() => {
        showItinerary.value = true;
      }, 1500);
    } else {
      showItinerary.value = false;
    }
  }
);
</script>

<template>
  <main class="relative isolate h-full">
    <img
      src="https://images.unsplash.com/photo-1545972154-9bb223aac798?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3050&q=80&exp=8&con=-15&sat=-75"
      alt=""
      class="absolute inset-0 -z-10 h-full w-full object-cover object-top"
    />
    <div
      class="flex flex-col h-full mx-auto max-w-7xl px-6 py-4 text-center lg:px-8"
      :class="currentPath === '/' ? 'pt-6' : ''"
    >
      <HomeHeader :current-path="currentPath" />
      <HomeLinks :show-back-button="showBackButton">
        <template #extra v-if="currentPath === links.itinerary.routeParam">
          <AnimatedButton :on-click="openItinerary">
            <ArrowRightCircleIcon class="-ml-0.5 h-5 w-5" aria-hidden="true" />
            Go to Itinerary
          </AnimatedButton>
        </template>
        <template #content>
          <template v-if="currentPath === links.itinerary.routeParam">
            <AnimatedSpinner v-show="!showItinerary" />
            <HomeContent v-show="showItinerary">
              <iframe
                class="w-full h-full"
                src="https://docs.google.com/spreadsheets/d/e/2PACX-1vReAdluuGtIEsjFgpLVdXgHZKdKfGFS2Kim4IxBWVFRj_Dvkn29DxGOwhP_aWDUcmicbkikeOBD_yfH/pubhtml?widget=true&amp;headers=false"
              ></iframe>
            </HomeContent>
          </template>
          <template v-if="currentPath === links.randomiser.routeParam">
            <HomeContent :class="['bg-neutral-50 rounded-lg border-gray-200']">
              <RandomiserMainVue />
            </HomeContent>
          </template>
        </template>
      </HomeLinks>
    </div>
  </main>
</template>
