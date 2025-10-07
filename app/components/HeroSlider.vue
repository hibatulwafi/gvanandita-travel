<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// import css wajib
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    title: "Umrah Ramadhan 2025",
    image: "/slider/umrah-ramadhan.jpeg",
  },
  {
    title: "Haji Plus 2025",
    image: "/slider/umrah-haji-plus.jpg",
  },
  {
    title: "Umrah + Turki",
    image: "/slider/umrah-turki.jpeg",
  },
];
</script>

<template>
  <Swiper
    :modules="[Navigation, Pagination, Autoplay]"
    :autoplay="{ delay: 4000 }"
    :loop="true"
    navigation
    pagination
    class="h-[500px] w-full"
  >
    <SwiperSlide v-for="(slide, index) in slides" :key="index">
      <img :src="slide.image" class="h-[500px] w-full object-cover" />
      <div class="absolute inset-0 bg-black/40 flex items-center justify-center text-white">
        <h2 class="text-2xl md:text-4xl font-bold">{{ slide.title }}</h2>
      </div>
    </SwiperSlide>
  </Swiper>
</template>
