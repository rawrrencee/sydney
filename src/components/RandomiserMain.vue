<script setup lang="ts">
import { peopleList } from '@/constants/people';

const drivers = [peopleList.aaronsends, peopleList.locksclimbinglog];
</script>
<template>
  <div class="px-4 py-4">
    <h2 class="text-sm font-medium text-gray-500 text-center md:text-start">Drivers</h2>
    <div class="mt-4 flex flex-row gap-10">
      <div v-for="driver of drivers" :key="driver.handle" class="group block flex-shrink-0">
        <div class="flex items-center">
          <div>
            <img class="inline-block h-9 w-9 rounded-full" :src="driver.image" alt="" />
          </div>
          <div class="ml-3">
            <p class="text-sm font-medium text-gray-700 group-hover:text-gray-900">
              {{ driver.handle }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="mt-4 border border-dashed rounded-md border-stone-900 flex flex-col justify-center">
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
</template>
