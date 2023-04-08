<script setup lang="ts">
import {
  Dialog,
  DialogPanel,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
  TransitionChild,
  TransitionRoot
} from '@headlessui/vue';
import { ChevronDownIcon, MagnifyingGlassPlusIcon } from '@heroicons/vue/20/solid';
import { XMarkIcon } from '@heroicons/vue/24/outline';
import { ref } from 'vue';

defineProps({
  showSlideover: Boolean
});
defineEmits(['update:showSlideover']);

const expandScale = ref('30%');
</script>

<template>
  <TransitionRoot as="template" :show="showSlideover">
    <Dialog as="div" class="relative z-10" @close="$emit('update:showSlideover', false)">
      <div class="fixed inset-0" />

      <div class="fixed inset-0 overflow-hidden">
        <div class="absolute inset-0 overflow-hidden">
          <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full sm:pl-16">
            <TransitionChild
              as="template"
              enter="transform transition ease-in-out duration-200"
              enter-from="translate-x-full"
              enter-to="translate-x-0"
              leave="transform transition ease-in-out duration-200"
              leave-from="translate-x-0"
              leave-to="translate-x-full"
            >
              <DialogPanel class="pointer-events-auto w-screen max-w-md">
                <div class="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                  <div class="p-4">
                    <div class="flex items-center justify-between">
                      <slot name="header"></slot>
                      <div class="ml-3 flex h-7 items-center">
                        <button
                          type="button"
                          class="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500"
                          @click="$emit('update:showSlideover', false)"
                        >
                          <span class="sr-only">Close panel</span>
                          <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div
                    class="flex flex-col border-b border-gray-200 px-4 transition-[height] duration-300"
                    :class="[
                      expandScale === '10%' && 'h-[10%]',
                      expandScale === '30%' && 'h-[30%]',
                      expandScale === '45%' && 'h-[45%]',
                      expandScale === '65%' && 'h-[65%]'
                    ]"
                  >
                    <div class="flex min-h-0 flex-1 flex-col overflow-x-clip overflow-y-scroll">
                      <slot name="top"></slot>
                    </div>
                    <div class="flex flex-row items-center justify-between py-2">
                      <div>
                        <slot name="topFooter"></slot>
                      </div>
                      <Listbox as="div" v-slot="{ open }" v-model="expandScale">
                        <ListboxButton
                          as="div"
                          class="flex cursor-pointer flex-row place-items-center gap-1 text-xs text-neutral-400 hover:text-indigo-700"
                        >
                          <MagnifyingGlassPlusIcon class="h-3 w-3" />
                          <span>Adjust Size</span>
                          <ChevronDownIcon
                            class="h-3 w-3 transition-transform"
                            :class="{ 'rotate-180 transform': open }"
                          />
                        </ListboxButton>
                        <transition
                          enter-active-class="transition duration-200 ease-out"
                          enter-from-class="translate-y-1 opacity-0"
                          enter-to-class="translate-y-0 opacity-100"
                          leave-active-class="transition duration-150 ease-in"
                          leave-from-class="translate-y-0 opacity-100"
                          leave-to-class="translate-y-1 opacity-0"
                        >
                          <ListboxOptions
                            class="absolute z-10 ml-10 mt-1 flex w-14 flex-col gap-1 rounded-md bg-white shadow-lg"
                          >
                            <ListboxOption
                              as="template"
                              v-for="scale of ['10%', '30%', '45%', '65%']"
                              :key="scale"
                              :value="scale"
                              :disabled="scale === expandScale"
                              v-slot="{ active, disabled, selected }"
                              ><li
                                :class="[
                                  disabled
                                    ? 'text-neutral-300'
                                    : active
                                    ? 'bg-indigo-400 text-white'
                                    : 'text-gray-900',
                                  'relative cursor-default select-none px-3 py-1 text-left'
                                ]"
                              >
                                <span
                                  :class="[
                                    selected ? 'font-semibold' : 'font-normal',
                                    'block truncate'
                                  ]"
                                  >{{ scale }}</span
                                >
                              </li>
                            </ListboxOption>
                          </ListboxOptions>
                        </transition>
                      </Listbox>
                    </div>
                  </div>
                  <div class="flex-1 overflow-x-clip overflow-y-scroll border-t border-gray-200">
                    <div class="px-4 pt-4">
                      <slot name="bottom"></slot>
                    </div>
                  </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
