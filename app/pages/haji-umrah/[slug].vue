<script setup>
import { useRoute } from "vue-router"

const route = useRoute()

// Contoh data dummy (nanti bisa ambil dari Pinia atau API)
const packages = {
  "umrah-ramadhan-2025": {
    title: "Umrah Ramadhan 2025",
    description: "Ibadah Umrah khusus Ramadhan dengan pembimbing ustadz berpengalaman.",
    price: "IDR 35 JT",
    duration: "12 Hari",
    fasilitas: ["Hotel Bintang 5", "Transportasi AC", "Visa & Asuransi"],
    image: "/images/umrah-ramadhan.jpg",
  },
  "haji-plus-2025": {
    title: "Haji Plus 2025",
    description: "Program Haji Plus dengan fasilitas premium dan kuota resmi.",
    price: "IDR 120 JT",
    duration: "30 Hari",
    fasilitas: ["Hotel dekat Masjidil Haram", "Catering Indonesia", "Muthawwif Profesional"],
    image: "/images/haji-plus.jpg",
  },
  "umrah-turki-2025": {
    title: "Umrah + Turki",
    description: "Paket Umrah plus city tour Istanbul & Cappadocia.",
    price: "IDR 45 JT",
    duration: "14 Hari",
    fasilitas: ["City Tour Istanbul", "Cappadocia Balloon Tour", "Hotel Bintang 4"],
    image: "/images/umrah-turki.jpg",
  },
}

const pkg = packages[route.params.slug]
</script>

<template>
  <section class="container mx-auto py-12 px-6" v-if="pkg">
    <div class="grid md:grid-cols-2 gap-8">
      <img :src="pkg.image" alt="" class="rounded-lg shadow-lg" />
      <div>
        <h1 class="text-3xl font-bold mb-4">{{ pkg.title }}</h1>
        <p class="mb-4 text-gray-600">{{ pkg.description }}</p>
        <p class="text-orange-600 font-bold text-2xl mb-6">{{ pkg.price }}</p>

        <p><strong>Durasi:</strong> {{ pkg.duration }}</p>
        <ul class="list-disc pl-5 text-gray-700 my-3">
          <li v-for="(f, i) in pkg.fasilitas" :key="i">{{ f }}</li>
        </ul>

        <NuxtLink
          to="/contact"
          class="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg mt-6"
        >
          Daftar Sekarang
        </NuxtLink>
      </div>
    </div>
  </section>

  <section v-else class="container mx-auto py-12 px-6 text-center">
    <h1 class="text-2xl font-bold text-red-600">Paket tidak ditemukan</h1>
  </section>
</template>
