<template>
  <div>
    <label class="block text-sm font-medium text-gray-700 mb-1">{{ label }}</label>
    <textarea
      :name="name"
      rows="5"
      :placeholder="placeholder"
      class="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
    ></textarea>
    <p v-if="error" class="text-red-500 text-sm mt-1">{{ error[0] }}</p>
  </div>
</template>

<script setup>
defineProps({
  name: String,
  label: String,
  placeholder: String,
  error: Object,
})
</script>
