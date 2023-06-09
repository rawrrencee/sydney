<script setup lang="ts">
import AnimatedGradientButton from '@/components/Buttons/AnimatedGradientButton.vue';
import { peopleList } from '@/constants/people';
import {
Listbox,
ListboxButton,
ListboxLabel,
ListboxOption,
ListboxOptions
} from '@headlessui/vue';
import { CheckIcon, ChevronUpDownIcon, XCircleIcon } from '@heroicons/vue/20/solid';
import { ArrowUturnRightIcon } from '@heroicons/vue/24/solid';
import type { Ref } from 'vue';
import { computed, ref } from 'vue';

const passengerList = [...peopleList];
const passengersAllocated = computed(
  () => carOnePassengers.value.length > 0 && carTwoPassengers.value.length > 0
);
const cars = computed(() => [carOnePassengers.value, carTwoPassengers.value]);
const drivers: Ref<any[]> = ref([{ selectedDriver: null }, { selectedDriver: null }]);
const carOnePassengers: Ref<any[]> = ref([]);
const carTwoPassengers: Ref<any[]> = ref([]);

const allocateToCar = (arr: Ref<any[]>, remainingPassengers: any[]) => {
  while (arr.value.length <= 2 && remainingPassengers.length > 0) {
    const passenger = remainingPassengers.pop();
    if (passenger) arr.value.push(passenger);
  }
};
const randomisePassengers = () => {
  let remainingPassengers = passengerList.filter(
    (p) => !drivers.value.some((d) => d.selectedDriver?.handle === p.handle)
  );
  remainingPassengers.sort(() => Math.random() - 0.5);

  if (drivers.value.some((d) => !d.selectedDriver)) {
    drivers.value
      .filter((d) => !d.selectedDriver)
      .forEach((d) => {
        d.selectedDriver = remainingPassengers.pop();
      });
  }

  allocateToCar(carOnePassengers, remainingPassengers);
  allocateToCar(carTwoPassengers, remainingPassengers);
};
</script>
<template>
  <div class="flex grow flex-col gap-y-5 px-4 py-4">
    <div>
      <div class="flex flex-row items-center justify-between">
        <span class="text-md font-semibold text-neutral-500">Car Allocation</span>
        <button
          type="button"
          class="inline-flex items-center gap-x-1.5 rounded-md px-2 py-2 text-xs font-normal text-neutral-500 hover:bg-neutral-200"
          @click="
            () => {
              drivers.forEach((d) => (d.selectedDriver = null));
              carOnePassengers = [];
              carTwoPassengers = [];
            }
          "
        >
          <ArrowUturnRightIcon class="h-3 w-3" />
          Start Again
        </button>
      </div>
      <div
        class="mt-8 grid grid-cols-1 justify-center gap-x-10 gap-y-4 md:flex md:flex-row md:flex-wrap md:justify-start"
      >
        <template v-for="(driver, index) in drivers" :key="driver?.selectedDriver?.handle ?? index">
          <div
            class="grid grid-cols-10 items-center justify-center md:flex"
            v-if="driver.selectedDriver"
            v-motion
            :initial="{ opacity: 0, y: 100 }"
            :enter="{
              opacity: 1,
              y: 0,
              scale: 1
            }"
            :delay="index * 100"
          >
            <img
              class="col-span-4 h-12 w-12 justify-self-end rounded-full"
              :src="driver?.selectedDriver?.image ?? ''"
              alt=""
            />
            <div class="col-span-6 ml-3 flex flex-col gap-1 justify-self-start">
              <span class="break-all text-sm font-semibold text-neutral-700">
                {{ driver?.selectedDriver?.handle ?? '' }}
              </span>
              <button
                v-if="!passengersAllocated"
                type="button"
                class="inline-flex w-fit items-center gap-x-1.5 text-xs font-semibold text-neutral-500"
                @click="
                  () => {
                    driver.selectedDriver = null;
                  }
                "
              >
                <XCircleIcon class="h-3 w-3" />
                <span>Reset</span>
              </button>
            </div>
          </div>
          <div v-else class="basis-full md:basis-2/6">
            <Listbox as="div" v-model="driver.selectedDriver" nullable>
              <ListboxLabel class="block text-sm font-medium leading-6 text-neutral-500">
                <div class="flex flex-row justify-between">
                  <span>Driver {{ index + 1 }}</span>
                </div>
              </ListboxLabel>

              <div class="relative mt-2">
                <ListboxButton
                  class="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-neutral-700 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 sm:text-sm sm:leading-6"
                >
                  <span class="flex items-center">
                    <img
                      v-if="driver.selectedDriver?.image"
                      :src="driver.selectedDriver.image"
                      alt=""
                      class="h-5 w-5 flex-shrink-0 rounded-full"
                    />
                    <span
                      v-else
                      class="inline-flex h-6 w-6 items-center justify-center rounded-full bg-gray-500"
                    >
                      <span class="text-xs font-medium leading-none text-white">?</span>
                    </span>
                    <span class="ml-3 block truncate">{{
                      driver.selectedDriver?.handle ?? 'Select a driver'
                    }}</span>
                  </span>
                  <span
                    class="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2"
                  >
                    <ChevronUpDownIcon class="h-5 w-5 text-neutral-400" aria-hidden="true" />
                  </span>
                </ListboxButton>

                <transition
                  leave-active-class="transition ease-in duration-100"
                  leave-from-class="opacity-100"
                  leave-to-class="opacity-0"
                >
                  <ListboxOptions
                    class="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                  >
                    <ListboxOption
                      as="template"
                      v-for="passenger in passengerList"
                      :key="passenger.handle"
                      :value="passenger"
                      :disabled="
                        drivers.some(
                          (d) =>
                            driver.selectedDriver?.handle !== passenger.handle &&
                            d.selectedDriver?.handle === passenger.handle
                        )
                      "
                      v-slot="{ active, selected, disabled }"
                    >
                      <li
                        :class="[
                          disabled
                            ? 'text-neutral-200'
                            : active
                            ? 'bg-indigo-400 text-white'
                            : 'text-neutral-700',
                          'relative cursor-default select-none py-2 pl-3 pr-9'
                        ]"
                      >
                        <div class="flex items-center">
                          <img
                            :src="passenger.image"
                            alt=""
                            class="h-5 w-5 flex-shrink-0 rounded-full"
                          />
                          <span
                            :class="[
                              selected ? 'font-semibold' : 'font-normal',
                              'ml-3 block truncate'
                            ]"
                            >{{ passenger.handle }}</span
                          >
                        </div>

                        <span
                          v-if="selected"
                          :class="[
                            active ? 'text-white' : 'text-indigo-400',
                            'absolute inset-y-0 right-0 flex items-center pr-4'
                          ]"
                        >
                          <CheckIcon class="h-5 w-5" aria-hidden="true" />
                        </span>
                      </li>
                    </ListboxOption>
                  </ListboxOptions>
                </transition>
              </div>
            </Listbox>
          </div>
        </template>
      </div>
    </div>

    <div class="flex flex-1 flex-col">
      <div class="relative">
        <div class="absolute inset-0 flex items-center" aria-hidden="true">
          <div class="w-full border-t border-gray-300" />
        </div>
        <div class="relative flex justify-start">
          <span class="text-md bg-neutral-50 pr-3 font-semibold leading-6 text-neutral-500"
            >Passengers</span
          >
        </div>
      </div>
      <template v-if="passengersAllocated">
        <div v-for="(car, i) in cars" :key="i">
          <div class="mt-6 text-center text-sm font-semibold text-neutral-700 md:text-start">
            {{ i === 0 ? '🚗' : '🚙' }} Car {{ i + 1 }}
          </div>
          <div
            class="mt-2 flex flex-row flex-wrap justify-center gap-x-10 gap-y-4 rounded-md border border-dashed border-stone-900 px-2 md:w-full md:flex-none md:justify-start"
          >
            <div
              class="my-2 flex flex-row flex-wrap justify-center gap-4 md:grid md:w-full md:flex-none md:grid-cols-3"
            >
              <div
                class="mt-1 flex flex-col items-center gap-2"
                v-for="(passenger, j) in car"
                :key="j"
              >
                <img
                  v-motion
                  :initial="{ opacity: 0, y: 100 }"
                  :enter="{ opacity: 1, y: 0, scale: 1 }"
                  :delay="j * 200"
                  class="h-12 w-12 rounded-full"
                  :src="passenger?.image"
                  alt=""
                />
                <span
                  v-motion
                  :initial="{ opacity: 0, y: 100 }"
                  :enter="{ opacity: 1, y: 0, scale: 1 }"
                  :delay="j * 200"
                  class="break-all text-xs font-semibold"
                  >{{ passenger?.handle ?? '' }}</span
                >
              </div>
            </div>
          </div>
        </div>
      </template>
      <template v-else>
        <div class="mt-auto pb-10">
          <AnimatedGradientButton :on-click="randomisePassengers">
            <span class="relative">Randomise Now</span>
          </AnimatedGradientButton>
        </div>
      </template>
    </div>
  </div>
</template>
