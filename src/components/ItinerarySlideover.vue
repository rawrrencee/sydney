<script setup lang="ts">
import { Dialog, DialogPanel, TransitionChild, TransitionRoot } from '@headlessui/vue';
import { ArrowsPointingInIcon, ArrowsPointingOutIcon } from '@heroicons/vue/20/solid';
import { XMarkIcon } from '@heroicons/vue/24/outline';
import { ref } from 'vue';

defineProps({
  showSlideover: Boolean
});
defineEmits(['update:showSlideover']);

const expandTop = ref(false);
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
                  <div class="p-6">
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
                    class="flex flex-col border-b border-gray-200 px-6 transition-[height] duration-300"
                    :class="expandTop ? 'h-4/6' : 'h-60'"
                  >
                    <div class="flex min-h-0 flex-1 flex-col overflow-x-clip overflow-y-scroll">
                      <slot name="top"></slot>
                    </div>
                    <div class="flex flex-shrink-0 justify-end py-2">
                      <button
                        class="text-neutral-400 hover:text-neutral-700"
                        @click="expandTop = !expandTop"
                      >
                        <div class="flex flex-row items-center gap-2 text-xs">
                          <span>{{ expandTop ? 'Collapse' : 'Expand' }}</span>
                          <ArrowsPointingInIcon class="h-3 w-3" v-if="expandTop" />
                          <ArrowsPointingOutIcon class="h-3 w-3" v-else />
                        </div>
                      </button>
                    </div>
                  </div>
                  <div class="flex-1 overflow-x-clip overflow-y-scroll border-t border-gray-200">
                    <div class="px-6 pt-4">
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
