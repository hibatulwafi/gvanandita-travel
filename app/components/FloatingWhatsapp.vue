<template>
  <div
    class="fixed bottom-6 right-6 z-50 group"
    data-aos="fade-up"
    data-aos-delay="300"
  >
    <a
      :href="waLink"
      target="_blank"
      rel="noopener noreferrer"
      class="flex items-center gap-2"
    >
      <!-- Tooltip text -->
      <span
        class="opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300 bg-green-600 text-white px-3 py-2 rounded-full text-sm shadow-lg whitespace-nowrap"
      >
        Konsultasi via WA
      </span>

      <!-- Floating button -->
      <div
        class="bg-green-500 hover:bg-green-600 w-14 h-14 flex items-center justify-center rounded-full shadow-xl transition-all duration-300 hover:shadow-green-400/50 hover:scale-110 animate-pulse md:animate-none"
      >
        <Icon icon="mdi:whatsapp" class="w-6 h-6 text-white" />
      </div>
    </a>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";
import { computed } from "vue";

const props = defineProps({
  phone: {
    type: String,
    default: "6282311001068",
  },
  message: {
    type: String,
    default: "Halo! Saya ingin konsultasi paket travel.",
  },
});

const waLink = computed(() => {
  const encodedMessage = encodeURIComponent(props.message);
  return `https://wa.me/${props.phone}?text=${encodedMessage}`;
});
</script>

<style scoped>
@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
}

@media (max-width: 640px) {
  .group a div {
    width: 3.5rem; /* w-14 -> w-12 */
    height: 3.5rem;
  }
  .group a span {
    display: none; /* sembunyikan tooltip di layar kecil */
  }
}
</style>
