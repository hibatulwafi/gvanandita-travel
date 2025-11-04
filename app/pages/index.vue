<script setup>
import HeroSlider from "~/components/HeroSlider.vue";
import { Icon } from "@iconify/vue";
import { onMounted, computed } from "vue";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTourStore } from "~/stores/useTourStore";

// === INIT AOS ANIMATION ===
onMounted(() => {
  AOS.init({
    duration: 1000,
    once: true,
    offset: 100,
  });
});

// === PINIA STORE ===
const tourStore = useTourStore();

onMounted(async () => {
  await tourStore.fetchFeaturedTours();
});

const featured = computed(() => tourStore.featuredTours);
const isLoading = computed(() => tourStore.loading);
const hasError = computed(() => tourStore.hasError);

// === Static Testimonial Data ===
const testimonials = [
  {
    name: "Ahmad Yusuf",
    title: "Peserta Umrah 2024",
    message:
      "Pelayanan sangat baik, pembimbingnya sabar dan membantu setiap langkah ibadah. Sangat direkomendasikan!",
    image: "https://picsum.photos/seed/ahmad/100/100",
  },
  {
    name: "Siti Marlina",
    title: "Peserta Haji Plus 2023",
    message:
      "Fasilitasnya nyaman, hotelnya dekat dengan Masjidil Haram, dan makanannya enak. Terima kasih atas pelayanan terbaiknya!",
    image: "https://picsum.photos/seed/siti/100/100",
  },
  {
    name: "Hendra Wijaya",
    title: "Peserta Tour Turki 2024",
    message:
      "Perjalanannya menyenangkan, itinerary tertata rapi, dan tour guide sangat ramah. Pengalaman yang tak terlupakan!",
    image: "https://picsum.photos/seed/hendra/100/100",
  },
];
</script>

<template>
  <div class="bg-white text-gray-800">
    <!-- 🕋 Hero Section -->
    <HeroSlider />

    <!-- 💎 Hot Deals Section -->
    <section class="container mx-auto py-16 px-6 text-center">
      <!-- 🌟 Judul -->
      <h2 class="text-3xl font-bold text-gray-900 mb-2" data-aos="fade-up">
        <span class="text-yellow-500">Hot Deals</span> Tour Umrah & Haji
      </h2>
      <p
        class="text-gray-600 mb-10 max-w-2xl mx-auto"
        data-aos="fade-up"
        data-aos-delay="150"
      >
        Pilihan paket perjalanan
        <span class="text-yellow-600 font-semibold">unggulan</span>
        untuk pengalaman ibadah yang nyaman, aman, dan penuh makna.
      </p>

      <!-- 🌀 Loading -->
      <div v-if="isLoading" class="py-10 text-gray-500 italic">
        Sedang memuat paket...
      </div>

      <!-- ⚠️ Error -->
      <div
        v-else-if="hasError"
        class="py-10 text-red-500 font-medium text-center"
      >
        Gagal memuat data paket. Silakan coba lagi nanti.
      </div>

      <!-- ✅ Featured Tours -->
      <div
        v-else-if="featured.length"
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <div
          v-for="(tour, i) in featured"
          :key="tour.id"
          class="group bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transform hover:-translate-y-1 transition duration-300"
          data-aos="zoom-in"
          :data-aos-delay="i * 150"
        >
          <!-- 🖼️ Image -->
          <div class="relative">
            <img
              :src="tour.thumbnail_url || '/images/no-image.jpg'"
              :alt="tour.name"
              class="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-500"
            />

            <!-- 🌟 Badge Unggulan -->
            <div
              class="absolute top-3 right-3 bg-yellow-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg flex items-center gap-1"
            >
              <Icon icon="mdi:star" class="w-5 h-5" />
              Unggulan
            </div>

            <!-- Gradient Overlay -->
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
            ></div>

            <!-- 🏷️ Tour Name -->
            <h3
              class="absolute bottom-3 left-4 text-white font-bold text-lg drop-shadow-lg text-left"
            >
              {{ tour.name }}
            </h3>
          </div>

          <!-- 📄 Info -->
          <div class="p-6 text-left flex flex-col justify-between gap-3">
            <!-- Deskripsi -->
            <p class="text-gray-600 text-sm line-clamp-3 leading-relaxed">
              {{ tour.description }}
            </p>

            <!-- Harga & Tombol -->
            <div
              class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 pt-3 border-t border-gray-100"
            >
              <!-- 💰 Harga + Keterangan -->
              <div class="flex flex-col items-start">
                <span
                  class="text-yellow-600 font-semibold text-base sm:text-sm whitespace-nowrap"
                >
                  {{ tour.price_text }}
                </span>
                <p class="text-gray-400 text-xs mt-1 italic leading-snug">
                  *Harga dapat berubah sewaktu-waktu tanpa pemberitahuan.
                </p>
              </div>

              <!-- 🔘 Tombol -->
              <div
                class="flex flex-wrap justify-start sm:justify-end gap-2 w-full sm:w-auto"
              >
                <!-- 🔗 Lihat Detail -->
                <NuxtLink
                  :to="`/haji-umrah/${tour.slug}`"
                  class="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg text-sm font-medium shadow transition w-full sm:w-auto text-center flex items-center justify-center"
                >
                  <Icon icon="mdi:arrow-right" class="w-4 h-4 mr-1" />
                  Lihat Detail
                </NuxtLink>

                <!-- 💬 Konsultasi WhatsApp -->
                <a
                  :href="`https://wa.me/6282311001068?text=Halo! Saya tertarik dengan paket ${encodeURIComponent(
                    tour.name
                  )}`"
                  target="_blank"
                  class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center justify-center gap-1 shadow transition w-full sm:w-auto"
                >
                  <Icon icon="mdi:whatsapp" class="w-4 h-4 mr-1 text-white" />
                  Konsultasi
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 🕳️ Empty -->
      <div
        v-else
        class="py-10 text-gray-500 font-medium italic"
        data-aos="fade-up"
      >
        Paket unggulan belum tersedia saat ini.
      </div>
    </section>

    <!-- 💛 Mengapa Memilih Kami -->
    <section class="bg-black text-white py-20">
      <div class="container mx-auto px-6 text-center">
        <h2 class="text-3xl font-bold mb-10 text-yellow-500" data-aos="fade-up">
          Mengapa Memilih GVA Travel?
        </h2>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div
            v-for="(feature, i) in [
              {
                icon: 'mdi:mosque-outline',
                title: 'Pemandu Berpengalaman',
                desc: 'Tim pembimbing ibadah profesional dan ramah.',
              },
              {
                icon: 'mdi:hotel',
                title: 'Fasilitas Premium',
                desc: 'Hotel bintang 5 dan transportasi eksklusif.',
              },
              {
                icon: 'mdi:shield-check',
                title: 'Aman & Resmi',
                desc: 'Izin resmi dan keamanan menjadi prioritas kami.',
              },
              {
                icon: 'mdi:heart',
                title: 'Pelayanan Sepenuh Hati',
                desc: 'Kami layani jamaah dengan keikhlasan dan cinta.',
              },
            ]"
            :key="i"
            class="flex flex-col items-center"
            data-aos="zoom-in-up"
            :data-aos-delay="i * 200"
          >
            <div
              class="bg-yellow-500 text-black rounded-full w-16 h-16 flex items-center justify-center mb-4"
            >
              <Icon :icon="feature.icon" class="w-8 h-8" />
            </div>
            <h4 class="font-semibold mb-2">{{ feature.title }}</h4>
            <p class="text-gray-400 text-sm">{{ feature.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 📞 CTA Section -->
    <section
      class="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white py-16 text-center"
      data-aos="fade-up"
    >
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold mb-4">
          Siap Menunaikan Ibadah Umrah & Haji Bersama Kami?
        </h2>
        <p class="mb-6 text-yellow-100">
          Wujudkan perjalanan spiritual impian Anda dengan bimbingan terpercaya
          dan profesional.
        </p>
        <a
          href="https://wa.me/6282311001068?text=Halo%20Admin%2C%20saya%20tertarik%20dengan%20paket%20Haji%20%26%20Umrah%202025."
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center bg-white text-yellow-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition shadow-md hover:shadow-lg duration-300"
        >
          Hubungi Kami Sekarang
        </a>
      </div>
    </section>

    <!-- 💬 Testimonial Section -->
    <section class="container mx-auto py-20 px-6 text-center">
      <h2 class="text-3xl font-bold mb-10 text-gray-900" data-aos="fade-up">
        Apa Kata Jamaah Kami
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="(t, i) in testimonials"
          :key="i"
          class="bg-white border border-gray-100 shadow-md rounded-2xl p-6 hover:shadow-lg transition"
          data-aos="fade-up"
          :data-aos-delay="i * 150"
        >
          <p class="text-gray-600 italic mb-4">"{{ t.message }}"</p>
          <div class="flex flex-col items-center">
            <img
              :src="t.image"
              :alt="t.name"
              class="w-16 h-16 rounded-full object-cover mb-2"
            />
            <h4 class="font-semibold text-gray-900">{{ t.name }}</h4>
            <p class="text-gray-500 text-sm">{{ t.title }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 🌙 Inspiration Section -->
    <section class="bg-white text-gray-800 md:py-20">
      <div
        class="container mx-auto px-0 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
      >
        <div
          class="order-2 md:order-1 flex justify-center md:justify-start overflow-hidden"
          data-aos="fade-right"
        >
          <img
            src="/images/vektor-makkah.png"
            alt="Ilustrasi Makkah"
            class="w-full md:max-w-lg object-contain"
          />
        </div>

        <div
          class="order-1 md:order-2 text-center md:text-left px-6 md:px-0 md:pr-10"
          data-aos="fade-left"
        >
          <h2
            class="text-4xl md:text-5xl font-bold mb-6 text-primary-500 leading-tight"
          >
            Perjalanan Suci, <br class="hidden md:block" />
            Kenangan Abadi
          </h2>
          <p class="text-gray-600 mb-8 max-w-xl md:max-w-none leading-relaxed">
            Setiap langkah di Tanah Suci adalah doa dan harapan. Bersama
            <span class="text-primary-500 font-semibold">GVA Travel</span>,
            jadikan ibadah Haji dan Umrah Anda lebih bermakna dan penuh berkah.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.sm\:w-auto {
  width: calc(100% - 1rem);
}
</style>
