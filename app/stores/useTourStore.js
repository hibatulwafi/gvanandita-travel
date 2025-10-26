import { defineStore } from "pinia";
import { useRuntimeConfig } from "#app";

export const useTourStore = defineStore("tour", {
  state: () => ({
    featuredTours: [],
    tourList: [], // untuk list halaman index
    tourDetail: null,
    pagination: null,
    loading: false,
    error: null,
  }),

  getters: {
    hasError: (state) => !!state.error,
  },

  actions: {
    /**
     * 🔹 Ambil daftar paket unggulan (max 3)
     */
    async fetchFeaturedTours(forceRefresh = false) {
      // Hindari re-fetch kalau data sudah ada dan tidak dipaksa
      if (this.featuredTours.length && !forceRefresh) return;

      this.loading = true;
      this.error = null;

      try {
        const config = useRuntimeConfig();
        const apiUrl = `${config.public.apiBaseUrl}/api/travel/tours/featured`;

        const res = await $fetch(apiUrl);

        if (res?.success && Array.isArray(res.data)) {
          this.featuredTours = res.data;
        } else {
          throw new Error("Respon API tidak valid");
        }
      } catch (err) {
        console.error("⚠️ Gagal memuat featured tours:", err);
        this.error = "Gagal memuat paket unggulan.";
        this.featuredTours = [];
      } finally {
        this.loading = false;
      }
    },

    /**
     * 🔹 Ambil daftar semua paket (untuk halaman /haji-umrah)
     */
    async fetchTours(params = {}) {
      this.loading = true;
      this.error = null;

      try {
        const config = useRuntimeConfig();
        const apiUrl = `${config.public.apiBaseUrl}/api/travel/tours`;

        const res = await $fetch(apiUrl, { params });

        if (res?.success && Array.isArray(res.data)) {
          this.tourList = res.data;
          this.pagination = res.meta || null;
          return res;
        } else {
          throw new Error("Respon API tidak valid");
        }
      } catch (err) {
        console.error("⚠️ Gagal memuat daftar tour:", err);
        this.error = "Gagal memuat daftar paket.";
        this.tourList = [];
        this.pagination = null;
        return { success: false, error: this.error };
      } finally {
        this.loading = false;
      }
    },

    /**
     * 🔹 Ambil detail berdasarkan slug
     */
    async fetchBySlug(slug, forceRefresh = false) {
      // Hindari re-fetch kalau slug sama dan tidak dipaksa
      if (this.tourDetail?.slug === slug && !forceRefresh) return;

      this.loading = true;
      this.error = null;
      this.tourDetail = null;

      try {
        const config = useRuntimeConfig();
        const apiUrl = `${config.public.apiBaseUrl}/api/travel/tours/${slug}`;

        const res = await $fetch(apiUrl);

        if (res?.success && res.data) {
          this.tourDetail = res.data;
        } else {
          throw new Error("Respon API tidak valid");
        }
      } catch (err) {
        console.error("⚠️ Gagal memuat detail tour:", err);
        this.error = "Paket tidak ditemukan.";
        this.tourDetail = null;
      } finally {
        this.loading = false;
      }
    },

    /**
     * 🔹 Reset state store (opsional)
     */
    resetState() {
      this.featuredTours = [];
      this.tourList = [];
      this.tourDetail = null;
      this.loading = false;
      this.error = null;
    },
  },
});
