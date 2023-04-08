<script setup lang="ts">
import AnimatedButton from '@/components/Buttons/AnimatedButton.vue';
import HomeContainer from '@/components/HomeContainer.vue';
import HomeHeader from '@/components/HomeHeader.vue';
import HomeLinks from '@/components/HomeLinks.vue';
import ItineraryMain from '@/components/ItineraryMain.vue';
import RandomiserMainVue from '@/components/RandomiserMain.vue';
import { links } from '@/constants/links';
import { ArrowRightCircleIcon } from '@heroicons/vue/24/outline';
import { computed } from 'vue';

const props = defineProps({
  currentPath: String
});
const showBackButton = computed(() => props.currentPath !== '/');
const openItinerary = () => {
  window.open(links.itinerary.url);
};
</script>

<template>
  <main class="relative isolate h-full">
    <img
      src="https://images.unsplash.com/photo-1524820197278-540916411e20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2390&q=80&exp=-4&con=18&sat=-35"
      alt=""
      class="absolute inset-0 -z-10 h-full w-full object-cover object-top"
    />
    <div
      class="mx-auto flex h-full max-w-7xl flex-col px-6 py-4 text-center lg:px-8"
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
            <HomeContainer>
              <ItineraryMain />
            </HomeContainer>
          </template>
          <template v-if="currentPath === links.randomiser.routeParam">
            <HomeContainer :class="['rounded-lg border-gray-200 bg-neutral-50']">
              <RandomiserMainVue />
            </HomeContainer>
          </template>
        </template>
      </HomeLinks>
    </div>
  </main>
</template>
