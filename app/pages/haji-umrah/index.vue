<script setup>
import { Icon } from '@iconify/vue'

const packages = [
  {
    title: "Umrah Ramadhan 2025",
    slug: "umrah-ramadhan-2025",
    description: "Nikmati keistimewaan ibadah Umrah di bulan suci Ramadhan dengan fasilitas terbaik.",
    price: "Start from IDR 35 JT",
    image: "https://dummyimage.com/640x4:3/000/fff&text=Umrah+Ramadhan+2025",
    duration: "12 Hari",
    departure: "Maret 2025",
  },
  {
    title: "Haji Plus 2025",
    slug: "haji-plus-2025",
    description: "Paket Haji Plus dengan pelayanan eksklusif, pembimbing berpengalaman, dan hotel bintang 5.",
    price: "Start from IDR 120 JT",
    image: "https://dummyimage.com/640x4:3/111/fff&text=Haji+Plus+2025",
    duration: "25 Hari",
    departure: "Juni 2025",
  },
  {
    title: "Umrah + Turki 2025",
    slug: "umrah-turki-2025",
    description: "Ibadah Umrah disertai wisata religi ke Istanbul & Cappadocia — pengalaman spiritual & budaya.",
    price: "Start from IDR 45 JT",
    image: "https://dummyimage.com/640x4:3/222/fff&text=Umrah+%2B+Turki+2025",
    duration: "14 Hari",
    departure: "April 2025",
  },
]
</script>

<template>
  <div class="bg-white text-gray-800">
    <!-- Hero Section -->
    <section class="relative bg-cover bg-center h-[60vh] flex items-center justify-center"
      style="background-image: url('https://dummyimage.com/1600x900/000/fff&text=Haji+%26+Umrah+Packages');">
      <div class="absolute inset-0 bg-black/70"></div>
      <div class="relative text-center text-white px-6">
        <h1 class="text-4xl md:text-5xl font-bold text-yellow-500 mb-4">
          Paket Haji & Umrah 2025
        </h1>
        <p class="max-w-2xl mx-auto text-gray-300">
          Wujudkan perjalanan spiritual Anda menuju Tanah Suci dengan kenyamanan dan layanan terbaik dari kami.
        </p>
      </div>
    </section>

    <!-- Packages List -->
    <section class="container mx-auto py-16 px-6">
      <div class="text-center mb-10">
        <h2 class="text-3xl font-bold text-gray-900 mb-3">Pilihan Paket Terbaik</h2>
        <p class="text-gray-600 max-w-xl mx-auto">
          Setiap paket kami dirancang khusus untuk memberikan pengalaman ibadah yang nyaman, aman, dan penuh makna.
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        <NuxtLink v-for="(pkg, index) in packages" :key="index" :to="`/haji-umrah/${pkg.slug}`"
          class="group rounded-xl shadow-lg bg-white overflow-hidden hover:shadow-2xl border border-gray-100 transition transform hover:-translate-y-1">
          <div class="relative">
            <img :src="pkg.image" alt="" class="h-52 w-full object-cover" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
            <div class="absolute bottom-3 left-3 text-white">
              <p class="text-sm bg-yellow-500 px-3 py-1 rounded-full font-semibold">
                {{ pkg.duration }}
              </p>
            </div>
          </div>

          <div class="p-5">
            <h3 class="text-xl font-bold text-gray-900 mb-2 group-hover:text-yellow-600 transition">
              {{ pkg.title }}
            </h3>
            <p class="text-gray-600 text-sm mb-3 line-clamp-3">
              {{ pkg.description }}
            </p>

            <div class="flex items-center justify-between mt-4">
              <span class="text-yellow-600 font-semibold">{{ pkg.price }}</span>
              <span class="text-sm text-gray-500 flex items-center gap-1">
                <Icon icon="mdi:calendar" class="w-4 h-4 text-yellow-500" />
                {{ pkg.departure }}
              </span>
            </div>
          </div>
        </NuxtLink>
      </div>
    </section>

    <!-- CTA -->
    <section class="bg-black text-yellow-500 text-center py-16">
      <h2 class="text-3xl font-bold mb-4">Ingin Informasi Lebih Lanjut?</h2>
      <p class="text-gray-400 mb-8 max-w-2xl mx-auto">
        Hubungi kami untuk konsultasi seputar jadwal keberangkatan, fasilitas, dan promo terbaru paket Haji & Umrah.
      </p>
      <NuxtLink to="/contact"
        class="inline-flex items-center bg-yellow-500 text-black font-semibold px-6 py-3 rounded-lg hover:bg-yellow-600 transition">
        <Icon icon="mdi:whatsapp" class="w-5 h-5 mr-2" />
        Konsultasi Sekarang
      </NuxtLink>
    </section>
  </div>
</template>
