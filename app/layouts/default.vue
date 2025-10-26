<script setup>
import { onMounted } from "vue";
import AOS from "aos";
import "aos/dist/aos.css";

onMounted(() => {
  AOS.init({
    duration: 1000, // durasi animasi (ms)
    once: true, // animasi hanya sekali saat muncul
    offset: 100, // jarak sebelum animasi dimulai
  });
});
</script>


<template>
  <div class="flex flex-col min-h-screen">
    <!-- Header -->
    <HeaderNav />

    <!-- Halaman konten -->
    <main class="flex-grow">
      <slot />
    </main>

    <FloatingWhatsapp phone="6281234567890" message="Halo admin, saya mau tanya tentang paket umrah." />

    <!-- Footer -->
    <Footer />
  </div>
</template>
