<script setup>
import HeroSlider from '~/components/HeroSlider.vue'
</script>

<template>
  <div class="bg-white text-gray-800">

    <!-- Hero Section -->
    <HeroSlider />

    <!-- Hot Deals Section -->
    <section class="container mx-auto py-16 px-6 text-center">
      <h2 class="text-3xl font-bold text-gray-900 mb-2">
        <span class="text-yellow-500">Hot Deals</span> Tour Umrah & Haji
      </h2>
      <p class="text-gray-600 mb-10">
        Rekomendasi paket perjalanan terbaik untuk pengalaman ibadah yang nyaman dan berkesan.
      </p>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Card -->
        <div v-for="(item, i) in 3" :key="i"
          class="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition duration-300">
          <img :src="`https://dummyimage.com/640x4:3/eee/aaa&text=Tour+Package+${i + 1}`" alt="Tour Package"
            class="w-full h-56 object-cover" />
          <div class="p-6">
            <h3 class="font-semibold text-lg mb-2">Paket Umrah Premium {{ i + 1 }}</h3>
            <p class="text-gray-600 text-sm mb-4">
              Nikmati perjalanan spiritual dengan fasilitas hotel bintang 5, pembimbing berpengalaman,
              dan jadwal fleksibel sesuai kebutuhan Anda.
            </p>
            <div class="flex items-center justify-between">
              <span class="text-yellow-600 font-bold text-lg">Rp 35.000.000</span>
              <NuxtLink to="/tours/umrah"
                class="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg text-sm transition">
                Lihat Detail
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Mengapa Memilih Kami -->
    <section class="bg-black text-white py-20">
      <div class="container mx-auto px-6 text-center">
        <h2 class="text-3xl font-bold mb-10 text-yellow-500">
          Mengapa Memilih GVA Travel?
        </h2>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div v-for="(feature, i) in [
            { icon: 'mdi:mosque-outline', title: 'Pemandu Berpengalaman', desc: 'Tim pembimbing ibadah profesional dan ramah.' },
            { icon: 'mdi:hotel', title: 'Fasilitas Premium', desc: 'Hotel bintang 5 dan transportasi eksklusif.' },
            { icon: 'mdi:shield-check', title: 'Aman & Resmi', desc: 'Izin resmi dan keamanan menjadi prioritas kami.' },
            { icon: 'mdi:heart', title: 'Pelayanan Sepenuh Hati', desc: 'Kami layani jamaah dengan keikhlasan dan cinta.' },
          ]" :key="i" class="flex flex-col items-center">
            <div class="bg-yellow-500 text-black rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <Icon :icon="feature.icon" class="w-8 h-8" />
            </div>
            <h4 class="font-semibold mb-2">{{ feature.title }}</h4>
            <p class="text-gray-400 text-sm">{{ feature.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white py-16 text-center">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold mb-4">
          Siap Menunaikan Ibadah Umrah & Haji Bersama Kami?
        </h2>
        <p class="mb-6 text-yellow-100">
          Wujudkan perjalanan spiritual impian Anda dengan bimbingan terpercaya dan profesional.
        </p>
        <NuxtLink to="/contact"
          class="bg-white text-yellow-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition">
          Hubungi Kami Sekarang
        </NuxtLink>
      </div>
    </section>

    <!-- Testimonial Section -->
    <section class="container mx-auto py-20 px-6 text-center">
      <h2 class="text-3xl font-bold mb-10 text-gray-900">
        Apa Kata Jamaah Kami
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div v-for="(t, i) in 3" :key="i"
          class="bg-white border border-gray-100 shadow-md rounded-2xl p-6 hover:shadow-lg transition">
          <p class="text-gray-600 italic mb-4">
            "Pelayanan sangat baik, pembimbingnya sabar dan membantu setiap langkah ibadah.
            Sangat direkomendasikan!"
          </p>
          <div class="flex flex-col items-center">
            <img :src="`https://dummyimage.com/100x100/ddd/888&text=User+${i + 1}`" alt="Jamaah"
              class="w-16 h-16 rounded-full object-cover mb-2" />
            <h4 class="font-semibold text-gray-900">Ahmad Yusuf</h4>
            <p class="text-gray-500 text-sm">Peserta Umrah 2024</p>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>
