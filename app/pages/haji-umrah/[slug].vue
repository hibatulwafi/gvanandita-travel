<script setup>
import { useRoute } from "vue-router";
import { Icon } from "@iconify/vue";

const route = useRoute();
const slug = route.params.slug;

// Dummy data (bisa nanti diganti dari API / backend)
const packages = [
  {
    slug: "umrah-ramadhan-2025",
    title: "Umrah Ramadhan 2025",
    image: "https://dummyimage.com/1600x900/000/fff&text=Umrah+Ramadhan+2025",
    duration: "12 Hari",
    departure: "Maret 2025",
    price: "IDR 35.000.000",
    description: `
      Nikmati keistimewaan ibadah Umrah di bulan suci Ramadhan bersama pembimbing berpengalaman.
      Paket ini mencakup akomodasi hotel bintang 5, transportasi nyaman, serta kunjungan ke tempat-tempat bersejarah di Mekkah dan Madinah.
    `,
    facilities: [
      "Hotel bintang 5 dekat Masjidil Haram & Nabawi",
      "Pesawat langsung (direct flight)",
      "Makan 3x sehari (buffet)",
      "Tour Madinah & Mekkah",
      "Visa & asuransi perjalanan",
    ],
    itinerary: [
      "Hari 1-2: Keberangkatan & tiba di Madinah",
      "Hari 3-5: Ziarah & ibadah di Masjid Nabawi",
      "Hari 6-10: Perjalanan ke Mekkah dan ibadah Umrah",
      "Hari 11: Tawaf Wada & persiapan pulang",
      "Hari 12: Tiba kembali di Indonesia",
    ],
  },
  {
    slug: "haji-plus-2025",
    title: "Haji Plus 2025",
    image: "https://dummyimage.com/1600x900/111/fff&text=Haji+Plus+2025",
    duration: "25 Hari",
    departure: "Juni 2025",
    price: "IDR 120.000.000",
    description: `
      Paket Haji Plus dengan pelayanan eksklusif dan bimbingan spiritual yang intensif.
      Dirancang untuk kenyamanan ibadah Anda, termasuk fasilitas premium, tenda ber-AC di Mina, dan layanan khusus jamaah lansia.
    `,
    facilities: [
      "Hotel bintang 5 selama di Arab Saudi",
      "Maktab strategis dekat Jamarat",
      "Tenda ber-AC di Mina & Arafah",
      "Makanan Indonesia halal",
      "Bimbingan ibadah oleh Ustadz berpengalaman",
    ],
    itinerary: [
      "Hari 1: Keberangkatan dari Jakarta",
      "Hari 2-4: Tiba di Madinah & ibadah di Masjid Nabawi",
      "Hari 5-15: Mekkah – Thawaf, Sa’i, dan kegiatan manasik",
      "Hari 16-22: Wukuf di Arafah, Mina, dan Jamarat",
      "Hari 23-25: Tawaf Wada dan kembali ke Indonesia",
    ],
  },
  {
    slug: "umrah-turki-2025",
    title: "Umrah + Turki 2025",
    image: "https://dummyimage.com/1600x900/222/fff&text=Umrah+%2B+Turki+2025",
    duration: "14 Hari",
    departure: "April 2025",
    price: "IDR 45.000.000",
    description: `
      Paket Umrah dengan tambahan wisata religi dan budaya ke Turki.
      Nikmati perjalanan spiritual sekaligus jelajahi keindahan Istanbul dan Cappadocia.
    `,
    facilities: [
      "Hotel bintang 4/5 di Mekkah, Madinah & Turki",
      "Tour ke Blue Mosque & Hagia Sophia",
      "Penerbangan Turkish Airlines",
      "Visa Umrah & Turki",
      "Pemandu wisata berpengalaman",
    ],
    itinerary: [
      "Hari 1-2: Keberangkatan & tiba di Madinah",
      "Hari 3-6: Ibadah di Masjid Nabawi",
      "Hari 7-9: Umrah & city tour Mekkah",
      "Hari 10-13: Istanbul & Cappadocia tour",
      "Hari 14: Kembali ke Indonesia",
    ],
  },
];

// Ambil paket sesuai slug
const pkg = packages.find((p) => p.slug === slug);
</script>

<template>
  <div v-if="pkg" class="bg-white text-gray-800">
    <!-- Hero -->
    <section class="relative">
      <img :src="pkg.image" alt="" class="w-full h-[70vh] object-cover" />
      <div class="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-center text-white">
        <h1 class="text-4xl font-bold text-yellow-500 mb-3">{{ pkg.title }}</h1>
        <p class="text-gray-200 max-w-2xl">{{ pkg.duration }} • {{ pkg.departure }}</p>
      </div>
    </section>

    <!-- Content -->
    <section class="container mx-auto py-16 px-6 grid md:grid-cols-3 gap-10">
      <!-- Detail Paket -->
      <div class="md:col-span-2 space-y-8">
        <div>
          <h2 class="text-2xl font-semibold text-gray-900 mb-3">Deskripsi Paket</h2>
          <p class="text-gray-600 leading-relaxed whitespace-pre-line">
            {{ pkg.description }}
          </p>
        </div>

        <div>
          <h2 class="text-2xl font-semibold text-gray-900 mb-3">Fasilitas</h2>
          <ul class="space-y-2">
            <li v-for="(item, index) in pkg.facilities" :key="index" class="flex items-center gap-2 text-gray-700">
              <Icon icon="mdi:check-circle" class="w-5 h-5 text-yellow-500" />
              {{ item }}
            </li>
          </ul>
        </div>

        <div>
          <h2 class="text-2xl font-semibold text-gray-900 mb-3">Itinerary</h2>
          <ul class="space-y-2">
            <li v-for="(item, index) in pkg.itinerary" :key="index" class="flex items-start gap-3 text-gray-700">
              <Icon icon="mdi:calendar-outline" class="w-5 h-5 text-yellow-500 mt-1" />
              <span>{{ item }}</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Sidebar -->
      <aside class="space-y-6 bg-gray-50 rounded-xl p-6 border border-gray-200 h-fit">
        <div class="text-center">
          <p class="text-gray-500 mb-2">Mulai dari</p>
          <p class="text-3xl font-bold text-yellow-600">{{ pkg.price }}</p>
        </div>

        <NuxtLink to="/contact"
          class="w-full inline-flex items-center justify-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 rounded-lg shadow transition">
          <Icon icon="mdi:whatsapp" class="w-5 h-5" />
          Konsultasi Sekarang
        </NuxtLink>

        <div class="border-t border-gray-300 pt-4">
          <p class="text-sm text-gray-600">
            Keberangkatan: <strong>{{ pkg.departure }}</strong>
          </p>
          <p class="text-sm text-gray-600">
            Durasi: <strong>{{ pkg.duration }}</strong>
          </p>
        </div>
      </aside>
    </section>
  </div>

  <div v-else class="text-center py-32">
    <h1 class="text-2xl font-semibold text-gray-700">Paket tidak ditemukan</h1>
    <NuxtLink to="/haji-umrah" class="text-yellow-600 hover:underline mt-2 block">
      ← Kembali ke daftar paket
    </NuxtLink>
  </div>
</template>
