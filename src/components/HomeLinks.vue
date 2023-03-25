<script setup lang="ts">
const openSpotify = () => {
  window.open(
    'https://open.spotify.com/playlist/2Pf2okUszPTNqrReCnTNvH?si=e3a2c8fb7eec41cb&pt=4d7dd2d64cd83379b1da8d4b36addcc6'
  )
}
const openItinerary = () => {
  window.open(
    'https://docs.google.com/spreadsheets/d/1KVS71TrUDjYuXcF2W4Sxc251-p_VnGUN1CTv-jugnZE/edit?usp=sharing'
  )
}
const openGoogleMaps = () => {
  window.open('https://goo.gl/maps/CruPaSrA1jDkwAuX6')
}
defineProps({
  showRandomiser: Boolean
})

defineEmits(['update:show-randomiser'])
</script>

<template>
  <div
    class="mt-10 flex flex-col md:flex-row gap-2 justify-center"
    v-motion
    :initial="{ opacity: 0, y: 100 }"
    :enter="{ opacity: 1, y: 0, scale: 1 }"
    :variants="{ custom: { scale: 2 } }"
    :delay="300"
  >
    <a
      v-if="!showRandomiser"
      href="https://open.spotify.com/playlist/2Pf2okUszPTNqrReCnTNvH?si=e3a2c8fb7eec41cb&pt=4d7dd2d64cd83379b1da8d4b36addcc6"
      class="transition-colors text-sm font-semibold leading-7 text-neutral-900 bg-neutral-50 rounded-md px-2 py-3 shadow-md hover:bg-gray-200"
      @click.prevent="openSpotify"
      ><span aria-hidden="true">🎵</span>&nbsp;Spotify Playlist</a
    >
    <a
      v-if="!showRandomiser"
      href="https://docs.google.com/spreadsheets/d/1KVS71TrUDjYuXcF2W4Sxc251-p_VnGUN1CTv-jugnZE/edit?usp=sharing"
      class="transition-colors text-sm font-semibold leading-7 text-neutral-900 bg-neutral-50 rounded-md px-2 py-3 shadow-md hover:bg-gray-200"
      @click.prevent="openItinerary"
      ><span aria-hidden="true">📄</span>&nbsp;Itinerary</a
    >
    <a
      v-if="!showRandomiser"
      href="https://goo.gl/maps/CruPaSrA1jDkwAuX6"
      class="transition-colors text-sm font-semibold leading-7 text-neutral-900 bg-neutral-50 rounded-md px-2 py-3 shadow-md hover:bg-gray-200"
      @click.prevent="openGoogleMaps"
      ><span aria-hidden="true">🗺️</span>&nbsp;Google Maps</a
    >
    <a
      href="#"
      v-if="!showRandomiser"
      class="transition-colors text-sm font-semibold leading-7 text-neutral-900 bg-neutral-50 rounded-md px-2 py-3 shadow-md hover:bg-gray-200"
      @click.prevent="$emit('update:randomiser', !showRandomiser)"
      ><span aria-hidden="true">🥴</span>&nbsp;Randomiser</a
    >
    <a href="#" v-if="showRandomiser"> Back </a>
  </div>
</template>
