<script setup>
const packages = [
  {
    title: "Umrah Ramadhan 2025",
    slug: "umrah-ramadhan-2025",
    description: "Nikmati ibadah Umrah di bulan suci Ramadhan.",
    price: "Start from IDR 35 JT",
    image: "/images/umrah-ramadhan.jpg",
  },
  {
    title: "Haji Plus 2025",
    slug: "haji-plus-2025",
    description: "Paket Haji Plus dengan fasilitas VIP.",
    price: "Start from IDR 120 JT",
    image: "/images/haji-plus.jpg",
  },
  {
    title: "Umrah + Turki",
    slug: "umrah-turki-2025",
    description: "Umrah dilanjutkan dengan city tour Istanbul & Cappadocia.",
    price: "Start from IDR 45 JT",
    image: "/images/umrah-turki.jpg",
  },
];
</script>

<template>
  <section class="container mx-auto py-12 px-6">
    <h1 class="text-3xl font-bold mb-6">Paket Haji & Umrah</h1>
    <p class="text-gray-600 mb-8">
      Pilihan paket ibadah Haji & Umrah terbaik untuk Anda dan keluarga.
    </p>

    <div class="grid md:grid-cols-3 gap-6">
      <NuxtLink
        v-for="(pkg, index) in packages"
        :key="index"
        :to="`/haji-umrah/${pkg.slug}`"
        class="rounded-lg shadow-lg bg-white overflow-hidden hover:shadow-xl transition"
      >
        <img :src="pkg.image" alt="" class="h-48 w-full object-cover" />
        <div class="p-4">
          <h2 class="text-xl font-semibold mb-2">{{ pkg.title }}</h2>
          <p class="text-gray-600 text-sm mb-3">{{ pkg.description }}</p>
          <span class="text-orange-600 font-bold">{{ pkg.price }}</span>
        </div>
      </NuxtLink>
    </div>
  </section>
</template>
