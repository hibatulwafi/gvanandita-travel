<script setup>
import { Icon } from "@iconify/vue";
import AOS from "aos";
import "aos/dist/aos.css";

onMounted(() => {
  AOS.init({
    duration: 800, // durasi animasi (ms)
    once: true, // hanya animasi sekali
    offset: 100, // jarak dari viewport
    easing: "ease-in-out",
  });
});
</script>

<template>
  <div class="bg-white text-gray-800">
    <!-- Hero Section -->
    <section
      class="relative bg-cover bg-center h-[70vh] flex items-center justify-center"
      style="background-image: url('/images/bg-makkah.jpg')"
      data-aos="fade-in"
    >
      <div class="absolute inset-0 bg-black/70"></div>
      <div class="relative text-center text-white px-6">
        <h1
          class="text-4xl md:text-5xl font-bold text-yellow-500 mb-4"
          data-aos="zoom-in"
          data-aos-delay="300"
        >
          MICE Travel Services
        </h1>
        <p
          class="max-w-2xl mx-auto text-gray-200 text-lg leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          Meeting, Incentive, Convention, and Exhibition — solusi perjalanan
          bisnis dan acara perusahaan dengan layanan premium.
        </p>
      </div>
    </section>

    <!-- Intro -->
    <section
      class="container mx-auto py-16 px-6 text-center"
      data-aos="fade-up"
    >
      <h2
        class="text-3xl font-bold text-gray-900 mb-4"
        data-aos="zoom-in"
        data-aos-delay="200"
      >
        Kenapa Memilih GVA MICE?
      </h2>
      <p
        class="text-gray-600 max-w-2xl mx-auto"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        Kami membantu perusahaan Anda menyelenggarakan kegiatan bisnis,
        pelatihan, dan gathering dengan konsep profesional dan layanan bintang
        lima, baik di dalam maupun luar negeri.
      </p>
    </section>

    <!-- Features -->
    <section
      class="bg-black text-white py-16"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      <div class="container mx-auto px-6 grid md:grid-cols-3 gap-8 text-center">
        <div
          v-for="(feature, i) in [
            {
              icon: 'mdi:account-group',
              title: 'Corporate Meeting',
              desc: 'Rancang pertemuan bisnis dengan fasilitas eksklusif dan kenyamanan maksimal.',
            },
            {
              icon: 'mdi:airplane',
              title: 'Incentive Trip',
              desc: 'Reward terbaik untuk tim Anda! Perjalanan insentif yang berkesan dan inspiratif.',
            },
            {
              icon: 'mdi:domain',
              title: 'Convention & Exhibition',
              desc: 'Dari pameran hingga konferensi, kami tangani semua dengan profesionalisme tinggi.',
            },
          ]"
          :key="i"
          class="p-6 border border-yellow-500/20 rounded-lg hover:border-yellow-500 transition"
          data-aos="zoom-in"
          :data-aos-delay="200 * i"
        >
          <Icon
            :icon="feature.icon"
            class="w-12 h-12 text-yellow-500 mx-auto mb-4"
          />
          <h3 class="text-xl font-semibold text-yellow-500 mb-2">
            {{ feature.title }}
          </h3>
          <p class="text-gray-400 text-sm">{{ feature.desc }}</p>
        </div>
      </div>
    </section>

    <!-- Gallery -->
    <section
      class="container mx-auto py-16 px-6 text-center"
      data-aos="fade-up"
    >
      <h2
        class="text-3xl font-bold mb-8"
        data-aos="zoom-in"
        data-aos-delay="100"
      >
        Galeri Kegiatan MICE Kami
      </h2>
      <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        <img
          v-for="(src, i) in [
            'https://dummyimage.com/640x480/000/fff&text=Conference+Room',
            'https://dummyimage.com/640x480/111/fff&text=Incentive+Trip',
            'https://dummyimage.com/640x480/222/fff&text=Corporate+Event',
            'https://dummyimage.com/640x480/333/fff&text=Exhibition+Hall',
            'https://dummyimage.com/640x480/444/fff&text=Team+Building',
            'https://dummyimage.com/640x480/555/fff&text=Business+Seminar',
          ]"
          :key="i"
          :src="src"
          class="rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
          :data-aos="'fade-up'"
          :data-aos-delay="100 * i"
        />
      </div>
    </section>

    <!-- CTA -->
    <section
      class="bg-yellow-500 text-black py-16 text-center"
    >
      <h2 class="text-3xl md:text-4xl font-bold mb-4" data-aos="fade-up" data-aos-delay="100">
        Rencanakan Event Bisnis Anda Sekarang!
      </h2>
      <p
        class="mb-8 text-gray-800 max-w-2xl mx-auto"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        Percayakan kepada kami untuk menyusun acara perusahaan yang berkelas,
        berkesan, dan bebas repot.
      </p>
      <a
        href="https://wa.me/6282311001068?text=Halo%20Admin%2C%20saya%20ingin%20membahas%20layanan%20MICE%20Travel."
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center bg-black text-yellow-500 px-6 py-3 rounded-lg font-semibold hover:bg-gray-900 transition"
        data-aos="flip-up"
        data-aos-delay="600"
      >
        <Icon icon="mdi:whatsapp" class="w-5 h-5 mr-2" />
        Hubungi Kami Sekarang
      </a>
    </section>
  </div>
</template>
