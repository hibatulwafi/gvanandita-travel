<script setup>
import { Icon } from '@iconify/vue'
</script>

<template>
  <div class="bg-white text-gray-800">
    <!-- Hero Section -->
    <section class="relative bg-cover bg-center h-[70vh] flex items-center justify-center"
      style="background-image: url('https://dummyimage.com/1600x900/000/fff&text=MICE+Event+by+GVA+Travel');">
      <div class="absolute inset-0 bg-black/70"></div>
      <div class="relative text-center text-white px-6">
        <h1 class="text-4xl md:text-5xl font-bold text-yellow-500 mb-4">
          MICE Travel Services
        </h1>
        <p class="max-w-2xl mx-auto text-gray-200 text-lg leading-relaxed">
          Meeting, Incentive, Convention, and Exhibition — solusi perjalanan bisnis dan acara perusahaan dengan layanan
          premium.
        </p>
      </div>
    </section>

    <!-- Intro -->
    <section class="container mx-auto py-16 px-6 text-center">
      <h2 class="text-3xl font-bold text-gray-900 mb-4">Kenapa Memilih GVA MICE?</h2>
      <p class="text-gray-600 max-w-2xl mx-auto">
        Kami membantu perusahaan Anda menyelenggarakan kegiatan bisnis, pelatihan, dan gathering
        dengan konsep profesional dan layanan bintang lima, baik di dalam maupun luar negeri.
      </p>
    </section>

    <!-- Features -->
    <section class="bg-black text-white py-16">
      <div class="container mx-auto px-6 grid md:grid-cols-3 gap-8 text-center">
        <div class="p-6 border border-yellow-500/20 rounded-lg hover:border-yellow-500 transition">
          <Icon icon="mdi:account-group" class="w-12 h-12 text-yellow-500 mx-auto mb-4" />
          <h3 class="text-xl font-semibold text-yellow-500 mb-2">Corporate Meeting</h3>
          <p class="text-gray-400 text-sm">
            Rancang pertemuan bisnis dengan dukungan fasilitas eksklusif, teknologi canggih, dan kenyamanan maksimal.
          </p>
        </div>

        <div class="p-6 border border-yellow-500/20 rounded-lg hover:border-yellow-500 transition">
          <Icon icon="mdi:airplane" class="w-12 h-12 text-yellow-500 mx-auto mb-4" />
          <h3 class="text-xl font-semibold text-yellow-500 mb-2">Incentive Trip</h3>
          <p class="text-gray-400 text-sm">
            Reward terbaik untuk tim Anda! Kami siapkan perjalanan insentif yang berkesan dan penuh inspirasi.
          </p>
        </div>

        <div class="p-6 border border-yellow-500/20 rounded-lg hover:border-yellow-500 transition">
          <Icon icon="mdi:domain" class="w-12 h-12 text-yellow-500 mx-auto mb-4" />
          <h3 class="text-xl font-semibold text-yellow-500 mb-2">Convention & Exhibition</h3>
          <p class="text-gray-400 text-sm">
            Dari pameran hingga konferensi berskala besar, kami tangani semua dengan detail dan profesionalisme tinggi.
          </p>
        </div>
      </div>
    </section>

    <!-- Gallery -->
    <section class="container mx-auto py-16 px-6 text-center">
      <h2 class="text-3xl font-bold mb-8">Galeri Kegiatan MICE Kami</h2>
      <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        <img src="https://dummyimage.com/640x480/000/fff&text=Conference+Room" alt="Conference"
          class="rounded-lg shadow-md hover:scale-105 transition-transform" />
        <img src="https://dummyimage.com/640x480/111/fff&text=Incentive+Trip" alt="Incentive"
          class="rounded-lg shadow-md hover:scale-105 transition-transform" />
        <img src="https://dummyimage.com/640x480/222/fff&text=Corporate+Event" alt="Corporate"
          class="rounded-lg shadow-md hover:scale-105 transition-transform" />
        <img src="https://dummyimage.com/640x480/333/fff&text=Exhibition+Hall" alt="Exhibition"
          class="rounded-lg shadow-md hover:scale-105 transition-transform" />
        <img src="https://dummyimage.com/640x480/444/fff&text=Team+Building" alt="Team Building"
          class="rounded-lg shadow-md hover:scale-105 transition-transform" />
        <img src="https://dummyimage.com/640x480/555/fff&text=Business+Seminar" alt="Seminar"
          class="rounded-lg shadow-md hover:scale-105 transition-transform" />
      </div>
    </section>

    <!-- CTA -->
    <section class="bg-yellow-500 text-black py-16 text-center">
      <h2 class="text-3xl md:text-4xl font-bold mb-4">Rencanakan Event Bisnis Anda Sekarang!</h2>
      <p class="mb-8 text-gray-800 max-w-2xl mx-auto">
        Percayakan kepada kami untuk menyusun acara perusahaan yang berkelas, berkesan, dan bebas repot.
      </p>
      <NuxtLink to="/contact"
        class="inline-flex items-center bg-black text-yellow-500 px-6 py-3 rounded-lg font-semibold hover:bg-gray-900 transition">
        <Icon icon="mdi:whatsapp" class="w-5 h-5 mr-2" />
        Hubungi Kami Sekarang
      </NuxtLink>
    </section>
  </div>
</template>
