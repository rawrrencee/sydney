<script setup lang="ts">
import { links } from '@/constants/links';
import { ArrowUturnLeftIcon } from '@heroicons/vue/24/outline';
import { useRouter } from 'vue-router';
import AnimatedLink from './AnimatedLink.vue';
import AnimatedButton from './Buttons/AnimatedButton.vue';

defineProps({
  showBackButton: Boolean
});

const windowHistory = window.history;
const router = useRouter();
const menuItems: {
  key: string;
  routeParam: string | null;
  url: string | null;
  emoji: string;
  label: string;
  onClick: Function;
}[] = [
  {
    key: links.spotify.key,
    routeParam: links.spotify.routeParam,
    url: links.spotify.url,
    emoji: links.spotify.emoji,
    label: links.spotify.label,
    onClick: () => window.open(links.spotify.url)
  },
  {
    key: links.itinerary.key,
    routeParam: links.itinerary.routeParam,
    url: links.itinerary.url,
    emoji: links.itinerary.emoji,
    label: links.itinerary.label,
    onClick: () => router.push(links.itinerary.routeParam)
  },
  {
    key: links.maps.key,
    routeParam: links.maps.routeParam,
    url: links.maps.url,
    emoji: links.maps.emoji,
    label: links.maps.label,
    onClick: () => window.open(links.maps.url)
  },
  {
    key: links.randomiser.key,
    routeParam: links.randomiser.routeParam,
    url: links.randomiser.url,
    emoji: links.randomiser.emoji,
    label: links.randomiser.label,
    onClick: () => router.push(links.randomiser.routeParam)
  }
];
</script>

<template>
  <div
    class="mt-10 grid grid-cols-1 justify-center gap-2 md:grid-cols-2"
    v-if="!showBackButton"
    v-motion
    :initial="{ opacity: 0, y: 100 }"
    :enter="{ opacity: 1, y: 0, scale: 1 }"
  >
    <template v-for="item in menuItems" :key="item.key">
      <AnimatedLink :href="item.url!" :on-click="item.onClick">
        <span aria-hidden="true">{{ item.emoji }}</span
        ><span class="break-all">&nbsp;{{ item.label }}</span>
      </AnimatedLink>
    </template>
  </div>
  <div class="mb-4 flex flex-row justify-between gap-4">
    <AnimatedButton
      v-if="showBackButton"
      :on-click="
        () => {
          if (windowHistory?.length > 2) $router.back();
          else $router.push('/');
        }
      "
    >
      <ArrowUturnLeftIcon class="-ml-0.5 h-5 w-5" aria-hidden="true" />
      Back
    </AnimatedButton>
    <slot name="extra" />
  </div>
  <slot name="content"></slot>
</template>
