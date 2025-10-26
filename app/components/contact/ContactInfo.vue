<template>
  <div class="flex items-start space-x-3" :data-aos-delay="delay">
    <Icon :icon="icon" class="text-yellow-500 w-6 h-6 mt-1" />
    <div>
      <p class="font-medium text-gray-800">{{ title }}</p>
      <a
        v-if="href"
        :href="href"
        class="text-gray-600 text-sm hover:text-yellow-600 transition"
        >{{ text }}</a
      >
      <p v-else class="text-gray-600 text-sm">{{ text }}</p>
    </div>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";
defineProps({
  icon: String,
  title: String,
  text: String,
  href: String,
  delay: String,
});
</script>
