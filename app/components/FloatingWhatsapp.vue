<template>
  <div class="fixed bottom-6 right-6 z-50 group">
    <a :href="waLink" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2">
      <span class="opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 
               transition duration-300 bg-green-600 text-white px-3 py-2 rounded-full text-sm shadow">
        Konsultasi via WA
      </span>

      <div class="bg-green-500 hover:bg-green-600 w-14 h-14 flex items-center justify-center rounded-full shadow-lg">

        <Icon name="mdi:whatsapp" size="32" class="text-white" />

      </div>
    </a>
  </div>
</template>

<script setup>
// Bagian script tidak berubah dan sudah benar
import { computed } from 'vue'

const props = defineProps({
  phone: {
    type: String,
    default: "6281234567890", // format internasional tanpa "+"
  },
  message: {
    type: String,
    default: "Halo! Saya ingin konsultasi paket travel.",
  },
})

const waLink = computed(() => {
  const encodedMessage = encodeURIComponent(props.message)
  return `https://wa.me/${props.phone}?text=${encodedMessage}`
})
</script>