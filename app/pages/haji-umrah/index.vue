<script setup>
import { ref, onMounted, watch, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { Icon } from "@iconify/vue";
import { useTourStore } from "~/stores/useTourStore";
import AOS from "aos";
import "aos/dist/aos.css";

// === STORE ===
const tourStore = useTourStore();
const route = useRoute();
const router = useRouter();

// === STATE ===
const search = ref(route.query.search || "");
const type = ref(route.query.type || "all");
const page = ref(parseInt(route.query.page || "1"));

// === FETCH DATA ===
const fetchTours = async () => {
  const params = {
    search: search.value || null,
    type: type.value !== "all" ? type.value : null,
    page: page.value,
  };
  await tourStore.fetchTours(params);
};

// === INITIAL LOAD ===
onMounted(async () => {
  AOS.init({ duration: 800, once: true });
  await fetchTours();
});

// === REFETCH ON QUERY CHANGE ===
// 🧠 Watch untuk handle perubahan kategori / pencarian / halaman
watch(
  [search, type, page],
  async ([newSearch, newType, newPage], [oldSearch, oldType, oldPage]) => {
    // Jika kategori atau pencarian berubah, reset ke page 1
    if (newType !== oldType || newSearch !== oldSearch) {
      page.value = 1;
    }

    // Update URL query (tanpa reload)
    router.replace({
      query: {
        search: search.value || undefined,
        type: type.value !== "all" ? type.value : undefined,
        page: page.value !== 1 ? page.value : undefined,
      },
    });

    await fetchTours();

    // 🪄 Scroll ke atas dengan efek halus
    window.scrollTo({
      top: 500,
      behavior: "smooth",
    });
  }
);

const tours = computed(() => tourStore.tourList);
const isLoading = computed(() => tourStore.loading);
const hasError = computed(() => tourStore.hasError);
const error = computed(() => tourStore.error);
</script>
<template>
  <div class="bg-white min-h-screen text-gray-800">
    <!-- 🕋 HEADER -->

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
          data-aos-delay="200"
        >
          Daftar Paket Haji & Umrah
        </h1>
        <p
          class="max-w-2xl mx-auto text-gray-200 text-lg"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          Temukan paket perjalanan sesuai kebutuhan dan waktu Anda
        </p>
      </div>
    </section>

    <!-- 🔎 FILTER SECTION -->
    <section class="container mx-auto px-6 py-10">
      <div
        class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10"
      >
        <!-- 🔍 Search -->
        <div class="flex items-center gap-2 w-full sm:w-auto">
          <Icon icon="mdi:magnify" class="text-gray-500 w-5 h-5" />
          <input
            v-model="search"
            type="text"
            placeholder="Cari paket..."
            class="border border-gray-300 rounded-lg px-3 py-2 w-full sm:w-64 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
          />
        </div>

        <!-- 🎯 Filter Type -->
        <div class="flex gap-2 flex-wrap justify-start sm:justify-end">
          <button
            v-for="option in [
              { label: 'Semua', value: 'all' },
              { label: 'Umrah', value: 'umrah' },
              { label: 'Haji', value: 'hajj' },
              { label: 'Wisata Religi', value: 'tour' },
            ]"
            :key="option.value"
            @click="type = option.value"
            :class="[
              'px-4 py-2 rounded-lg border text-sm font-medium transition-all duration-200',
              type === option.value
                ? 'bg-yellow-500 text-white border-yellow-500 shadow-md'
                : 'bg-white text-gray-700 border-gray-300 hover:bg-yellow-50 hover:border-yellow-400',
            ]"
          >
            {{ option.label }}
          </button>
        </div>
      </div>

      <!-- 🌀 Loading -->
      <!-- 🌀 Loading (Shimmer Skeleton) -->
      <div
        v-if="isLoading"
        class="grid justify-center gap-8 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4"
      >
        <div
          v-for="n in 8"
          :key="n"
          class="max-w-[320px] w-full mx-auto bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden"
        >
          <!-- Gambar shimmer -->
          <div class="w-full h-48 bg-gray-200 animate-pulse"></div>

          <!-- Konten shimmer -->
          <div class="p-5 space-y-4">
            <div class="h-5 bg-gray-200 rounded w-3/4 animate-pulse"></div>
            <div class="h-4 bg-gray-200 rounded w-1/2 animate-pulse"></div>
            <div class="flex justify-between items-center mt-6">
              <div class="space-y-2">
                <div class="h-3 bg-gray-200 rounded w-20 animate-pulse"></div>
                <div class="h-5 bg-gray-300 rounded w-24 animate-pulse"></div>
              </div>
              <div class="h-8 w-20 bg-gray-200 rounded-lg animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- ⚠️ Error -->
      <div
        v-else-if="hasError"
        class="py-20 text-center text-red-500 font-semibold"
      >
        {{ error }}
      </div>

      <!-- ✅ List Data -->
      <div v-else>
        <div
          v-if="tours.length"
          class="grid justify-center gap-8 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4"
        >
          <div
            v-for="(tour, i) in tours"
            :key="tour.id"
            class="group relative max-w-[320px] w-full mx-auto bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
            data-aos="fade-up"
            :data-aos-delay="i * 100"
          >
            <!-- 🖼️ IMAGE -->
            <div class="relative overflow-hidden">
              <img
                :src="tour.thumbnail_url || '/images/no-image.jpg'"
                :alt="tour.name"
                class="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500"
              ></div>

              <!-- 🎯 Duration Tag -->
              <div class="absolute bottom-3 left-3">
                <span
                  class="bg-yellow-400 text-black text-xs font-semibold px-3 py-1 rounded-full shadow"
                >
                  {{ tour.duration }}
                </span>
              </div>

              <!-- ❤️ Type Label -->
              <div class="absolute top-3 right-3">
                <span
                  class="bg-white/80 text-gray-800 text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm"
                >
                  {{ tour.type }}
                </span>
              </div>
            </div>

            <!-- 📄 CONTENT -->
            <div class="p-5 flex flex-col justify-between min-h-[180px]">
              <!-- Title -->
              <div>
                <h3
                  class="font-bold text-base text-gray-900 group-hover:text-yellow-600 transition-colors duration-300 line-clamp-2"
                >
                  {{ tour.name }}
                </h3>

                <!-- Dates -->
                <p
                  class="text-gray-500 text-xs mt-1 flex items-center gap-1 truncate"
                >
                  <Icon
                    icon="mdi:calendar-outline"
                    class="w-4 h-4 text-yellow-500"
                  />
                  <span>{{ tour.start_date }}</span>
                </p>
              </div>

              <!-- Price & Button -->
              <div class="flex items-center justify-between mt-4">
                <div>
                  <p class="text-[11px] text-gray-400">Mulai dari</p>
                  <p class="text-yellow-600 font-bold text-base leading-tight">
                    {{ tour.currency }} {{ tour.price }}
                  </p>
                </div>

                <NuxtLink
                  :to="`/haji-umrah/${tour.slug}`"
                  class="inline-flex items-center gap-1 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold text-xs px-3 py-2 rounded-lg transition-all shadow-sm hover:shadow-md"
                >
                  Detail
                  <Icon icon="mdi:arrow-right" class="w-3.5 h-3.5" />
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>

        <!-- 🕳️ Empty -->
        <div
          v-else
          class="py-20 text-gray-500 text-center font-medium italic"
          data-aos="fade-up"
        >
          Tidak ada paket tersedia untuk kategori ini.
        </div>

        <!-- 📄 Pagination -->
        <div
          v-if="tourStore.pagination"
          class="mt-10 flex flex-wrap justify-center items-center gap-3"
        >
          <button
            class="px-4 py-2 rounded-lg border border-gray-300 text-sm hover:bg-yellow-50 disabled:opacity-50 disabled:cursor-not-allowed"
            :disabled="tourStore.pagination.current_page === 1"
            @click="page = tourStore.pagination.current_page - 1"
          >
            ← Sebelumnya
          </button>

          <span class="text-sm text-gray-600 font-medium">
            Halaman {{ tourStore.pagination.current_page }} dari
            {{ tourStore.pagination.last_page }}
          </span>

          <button
            class="px-4 py-2 rounded-lg border border-gray-300 text-sm hover:bg-yellow-50 disabled:opacity-50 disabled:cursor-not-allowed"
            :disabled="
              tourStore.pagination.current_page ===
              tourStore.pagination.last_page
            "
            @click="page = tourStore.pagination.current_page + 1"
          >
            Selanjutnya →
          </button>
        </div>
      </div>
    </section>
  </div>
</template>
