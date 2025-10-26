<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Icon } from "@iconify/vue";

// Import CSS bawaan
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    title: "Umrah Ramadhan 2025",
    description:
      "Nikmati keistimewaan beribadah di bulan suci dengan fasilitas terbaik dan bimbingan profesional.",
    image: "/slider/umrah-ramadhan.jpeg",
  },
  {
    title: "Haji Plus 2025",
    description:
      "Perjalanan Haji penuh makna dengan layanan eksklusif, hotel bintang 5, dan pembimbing berpengalaman.",
    image: "/slider/makkah.jpg",
  },
  {
    title: "Umrah + Turki 2025",
    description:
      "Gabungkan ibadah Umrah dengan wisata religi ke Istanbul & Cappadocia — pengalaman spiritual dan budaya yang tak terlupakan.",
    image: "/slider/umrah-turki.jpeg",
  },
];
</script>

<template>
  <div class="relative">
    <Swiper
      :modules="[Navigation, Pagination, Autoplay]"
      :autoplay="{ delay: 5000, disableOnInteraction: false }"
      :loop="true"
      navigation
      pagination
      class="h-[500px] md:h-[550px] w-full custom-swiper"
    >
      <SwiperSlide
        v-for="(slide, index) in slides"
        :key="index"
        class="relative"
      >
        <!-- Background -->
        <img
          :src="slide.image"
          :alt="slide.title"
          class="h-[500px] md:h-[650px] w-full object-cover"
        />

        <!-- Overlay -->
        <div
          class="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-center px-6"
        >
          <div class="max-w-2xl">
            <h2
              class="text-3xl md:text-5xl font-bold text-yellow-400 mb-4 leading-tight drop-shadow-md"
            >
              {{ slide.title }}
            </h2>
            <p
              class="text-gray-200 text-base md:text-lg leading-relaxed max-w-2xl mx-auto"
            >
              {{ slide.description }}
            </p>

          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<style scoped>
/* === Panah Navigasi === */
.custom-swiper :deep(.swiper-button-next),
.custom-swiper :deep(.swiper-button-prev) {
  color: #fff !important;
  transition: opacity 0.3s ease;
}
.custom-swiper :deep(.swiper-button-next:hover),
.custom-swiper :deep(.swiper-button-prev:hover) {
  opacity: 0.8;
}

/* === Pagination Bullets === */
.custom-swiper :deep(.swiper-pagination-bullet) {
  background-color: rgba(255, 255, 255, 0.7) !important;
  opacity: 1 !important;
}
.custom-swiper :deep(.swiper-pagination-bullet-active) {
  background-color: #fff !important;
  width: 14px;
  height: 14px;
}
</style>
