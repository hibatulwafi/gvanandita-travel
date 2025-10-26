<script setup>
import { useRoute } from "vue-router";
import { Icon } from "@iconify/vue";
import { onMounted } from "vue";
import { useTourStore } from "~/stores/useTourStore";

const route = useRoute();
const slug = route.params.slug;
const tourStore = useTourStore();

onMounted(async () => {
  await tourStore.fetchBySlug(slug);
});

const pkg = computed(() => tourStore.tourDetail);
const loading = computed(() => tourStore.loading);
const error = computed(() => tourStore.error);
</script>

<template>
  <div class="bg-white text-gray-800">
    <!-- LOADING STATE -->
    <div v-if="loading" class="flex items-center justify-center py-32">
      <Icon icon="mdi:loading" class="w-8 h-8 animate-spin text-yellow-600" />
      <span class="ml-3 text-gray-600">Memuat data paket...</span>
    </div>

    <!-- ERROR STATE -->
    <div v-else-if="error" class="text-center py-32">
      <h1 class="text-2xl font-semibold text-gray-700">{{ error }}</h1>
      <NuxtLink
        to="/haji-umrah"
        class="text-yellow-600 hover:underline mt-2 block"
      >
        ← Kembali ke daftar paket
      </NuxtLink>
    </div>

    <!-- DETAIL PAKET -->
    <div v-else-if="pkg" class="bg-white text-gray-800">
      <!-- Hero -->
      <section class="relative">
        <img
          :src="pkg.thumbnail_url"
          alt=""
          class="w-full h-[70vh] object-cover"
        />
        <div
          class="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-center text-white"
        >
          <h1 class="text-4xl font-bold text-yellow-500 mb-3">
            {{ pkg.name }}
          </h1>
          <p class="text-gray-200 max-w-2xl">
            {{ pkg.duration }} • {{ pkg.start_date }} - {{ pkg.end_date }}
          </p>
        </div>
      </section>

      <!-- Content -->
      <section class="container mx-auto py-16 px-6 grid md:grid-cols-3 gap-10">
        <!-- Detail Paket -->
        <div class="md:col-span-2 space-y-8">
          <div>
            <h2 class="text-2xl font-semibold text-gray-900 mb-3">
              Deskripsi Paket
            </h2>
            <p class="text-gray-600 leading-relaxed whitespace-pre-line">
              {{ pkg.description }}
            </p>
          </div>

          <div v-if="pkg.facilities">
            <h2 class="text-2xl font-semibold text-gray-900 mb-3">Fasilitas</h2>
            <ul class="space-y-2">
              <li
                v-for="(item, index) in pkg.facilities.split('\n')"
                :key="index"
                class="flex items-center gap-2 text-gray-700"
              >
                <Icon icon="mdi:check-circle" class="w-5 h-5 text-yellow-500" />
                {{ item }}
              </li>
            </ul>
          </div>

          <div v-if="pkg.itinerary">
            <h2 class="text-2xl font-semibold text-gray-900 mb-3">Itinerary</h2>
            <ul class="space-y-2">
              <li
                v-for="(item, index) in pkg.itinerary.split('\n')"
                :key="index"
                class="flex items-start gap-3 text-gray-700"
              >
                <Icon
                  icon="mdi:calendar-outline"
                  class="w-5 h-5 text-yellow-500 mt-1"
                />
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>

          <div v-if="pkg.gallery_urls?.length">
            <h2 class="text-2xl font-semibold text-gray-900 mb-3">Galeri</h2>
            <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
              <img
                v-for="(img, idx) in pkg.gallery_urls"
                :key="idx"
                :src="img"
                class="rounded-lg shadow object-cover w-full h-40"
              />
            </div>
          </div>
        </div>

        <!-- Sidebar -->
        <aside
          class="space-y-6 bg-gray-50 rounded-xl p-6 border border-gray-200 h-fit"
        >
          <div class="text-center">
            <p class="text-gray-500 mb-2">Mulai dari</p>
            <p class="text-3xl font-bold text-yellow-600">
              {{ pkg.price }} {{ pkg.currency }}
            </p>
          </div>

          <a
            :href="`https://wa.me/6282311001068?text=Halo%20Admin,%20saya%20tertarik%20dengan%20paket%20${pkg.name}`"
            target="_blank"
            rel="noopener noreferrer"
            class="w-full inline-flex items-center justify-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 rounded-lg shadow transition"
          >
            <Icon icon="mdi:whatsapp" class="w-5 h-5" />
            Konsultasi Sekarang
          </a>

          <div class="border-t border-gray-300 pt-4">
            <p class="text-sm text-gray-600">
              Keberangkatan: <strong>{{ pkg.start_date }}</strong>
            </p>
            <p class="text-sm text-gray-600">
              Durasi: <strong>{{ pkg.duration }}</strong>
            </p>
          </div>
        </aside>
      </section>
    </div>
  </div>
</template>
